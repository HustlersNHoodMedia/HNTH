#!/usr/bin/env python3
"""HNTH Media vertical mosaic (1080x1920) renderer.
usage: render.py cfg.json [--base-only]
"""
import json, sys, subprocess, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

A = '/home/claude/m'
W, H = 1080, 1920
PAPER_TOP = (0, 0, 1080, 647)        # y 0-646
PAPER_BOT = (0, 1640, 1080, 1920)
PAN_Y0, PAN_Y1 = 653, 1634            # panels y 653-1633 (981)
SMALL_W = 375                         # x 0-374
BIG_X, BIG_W = 381, 699               # x 381-1080
PANEL_H = 981
RED = (0xED, 0x1C, 0x24)
FONT_SIZE, CAP, PITCH = 60, 43, 66
TX0, TX1 = 56, 1020
BASE_LAST = 627
EMOJI_H = 54
LOGO_W, LOGO_XY = 175, (875, 1513)


def run(cmd):
    r = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if r.returncode:
        print(r.stderr[-3000:]); raise SystemExit('cmd failed: ' + cmd[:200])
    return r.stdout


def paper(box):
    tex = Image.open(f'{A}/black-paper-texture.jpg').convert('RGB')
    w, h = box[2] - box[0], box[3] - box[1]
    s = max(w / tex.width, h / tex.height)
    t = tex.resize((int(tex.width * s) + 1, int(tex.height * s) + 1), Image.LANCZOS)
    return t.crop((0, 0, w, h))


def emoji_img(ch):
    f = ImageFont.truetype('/usr/share/fonts/truetype/noto/NotoColorEmoji.ttf', 109)
    im = Image.new('RGBA', (160, 160), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((10, 10), ch, font=f, embedded_color=True)
    im = im.crop(im.getbbox())
    r = EMOJI_H / im.height
    return im.resize((max(1, int(im.width * r)), EMOJI_H), Image.LANCZOS)


def layout(tokens, emoji, font):
    words = []
    for text, red in tokens:
        for wd in text.split():
            words.append((wd, red))
    sp = font.getlength(' ')
    ems = [emoji_img(e) for e in emoji] if emoji else []
    em_w = sum(e.width for e in ems) + 6 * max(0, len(ems) - 1)
    lines, cur, cw = [], [], 0
    for wd, red in words:
        if wd == '//':
            if cur: lines.append(cur)
            cur, cw = [], 0
            continue
        ww = font.getlength(wd)
        add = ww if not cur else sp + ww
        if cur and cw + add > (TX1 - TX0):
            lines.append(cur); cur, cw = [(wd, red)], ww
        else:
            cur.append((wd, red)); cw += add
    if cur:
        lines.append(cur)
    # emoji on last line
    lw = font.getlength(' '.join(w for w, _ in lines[-1]))
    em_line_new = lw + sp + em_w > (TX1 - TX0)
    return lines, ems, em_w, em_line_new


def draw_title(img, tokens, emoji):
    font = ImageFont.truetype(f'{A}/Marsden-Ex-Bold.ttf', FONT_SIZE)
    lines, ems, em_w, em_new = layout(tokens, emoji, font)
    nl = len(lines) + (1 if em_new else 0)
    d = ImageDraw.Draw(img)
    sp = font.getlength(' ')
    for i, ln in enumerate(lines):
        base = BASE_LAST - PITCH * (nl - 1 - i)
        text_w = font.getlength(' '.join(w for w, _ in ln))
        is_last = (i == len(lines) - 1) and not em_new
        tot = text_w + ((sp + em_w) if is_last and ems else 0)
        x = TX0 + ((TX1 - TX0) - tot) / 2
        for j, (wd, red) in enumerate(ln):
            if j:
                x += sp
            d.text((x + 2, base + 2), wd, font=font, fill=(0, 0, 0), anchor='ls')
            d.text((x, base), wd, font=font, fill=RED if red else (255, 255, 255), anchor='ls')
            x += font.getlength(wd)
        if is_last and ems:
            x += sp
            for e in ems:
                img.paste(e, (int(x), base - CAP - (EMOJI_H - CAP) // 2 + 4), e)
                x += e.width + 6
    if em_new and ems:
        x = TX0 + ((TX1 - TX0) - em_w) / 2
        for e in ems:
            img.paste(e, (int(x), BASE_LAST - CAP - (EMOJI_H - CAP) // 2 + 4), e)
            x += e.width + 6
    return nl, [' '.join(w for w, _ in l) for l in lines], em_new


def cover(im, w, h, fx=0.5, fy=0.5, zoom=1.0):
    s = max(w / im.width, h / im.height) * zoom
    r = im.resize((int(im.width * s + 0.5), int(im.height * s + 0.5)), Image.LANCZOS)
    x = int((r.width - w) * fx); y = int((r.height - h) * fy)
    return r.crop((x, y, x + w, y + h))


def grab(src, t, crop=None):
    out = f'/tmp/grab_{os.getpid()}.png'
    vf = f"-vf crop={crop}" if crop else ''
    run(f'ffmpeg -v error -y -ss {t} -i "{src}" -frames:v 1 {vf} {out}')
    return Image.open(out).convert('RGB')


def build_base(c):
    img = Image.new('RGB', (W, H), (255, 255, 255))
    img.paste(paper(PAPER_TOP), (0, 0))
    img.paste(paper(PAPER_BOT), (0, PAPER_BOT[1]))
    nl, lines, em_new = draw_title(img, c['title'], c.get('emoji', ''))
    panels = c['panels']
    if len(panels) == 1:
        boxes = [(0, PAN_Y0, SMALL_W, PANEL_H)]
    else:
        boxes = [(0, PAN_Y0, SMALL_W, 487), (0, PAN_Y0 + 487 + 6, SMALL_W, PANEL_H - 487 - 6)]
    for p, (x, y, w, h) in zip(panels, boxes):
        src = p.get('img')
        im = Image.open(src).convert('RGB') if src else grab(c['src'], p['t'], c.get('crop'))
        img.paste(cover(im, w, h, p.get('fx', .5), p.get('fy', .5), p.get('zoom', 1.0)), (x, y))
    return img, nl, lines, em_new


def logo_plate():
    lg = Image.open(f'{A}/HNTH-logo-trim.png').convert('RGBA')
    lg = lg.resize((LOGO_W, int(lg.height * LOGO_W / lg.width)), Image.LANCZOS)
    pad = 46
    pl = Image.new('RGBA', (lg.width + 2 * pad, lg.height + 2 * pad), (0, 0, 0, 0))
    pl.alpha_composite(lg, (pad, pad))
    pl.save('/home/claude/m/logo_plate.png')
    return LOGO_XY[0] - pad, LOGO_XY[1] - pad


def is_vertical(cfg):
    """True when the (cropped) source is portrait enough to fill the big panel."""
    if cfg.get('fill') is not None:
        return bool(cfg['fill'])
    if cfg.get('crop'):
        w, h = [int(x) for x in cfg['crop'].split(':')[:2]]
    else:
        o = run(f'ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0 "{cfg["src"]}"').strip().split(chr(10))[0].split(',')
        w, h = int(o[0]), int(o[1])
    return w / h <= 0.8


def main():
    cfg = json.load(open(sys.argv[1]))
    slug = cfg['slug']; wd = f'/home/claude/m/out/{slug}'; os.makedirs(wd, exist_ok=True)
    base, nl, lines, em_new = build_base(cfg)
    base.save(f'{wd}/base.png')
    print('lines', nl, lines, 'emoji_own_line' if em_new else '')
    if '--base-only' in sys.argv:
        return
    lx, ly = logo_plate()
    src = cfg['src']
    ss = f"-ss {cfg['trim'][0]} -to {cfg['trim'][1]}" if cfg.get('trim') else ''
    pre = f"crop={cfg['crop']}," if cfg.get('crop') else ''
    if is_vertical(cfg):
        # vertical source: zoom to cover the whole big panel, no blur on the sides
        vfy = cfg.get('vfy', 0.5)
        fc = (f"[1:v]{pre}fps=25,scale={BIG_W}:{PANEL_H}:force_original_aspect_ratio=increase,"
              f"crop={BIG_W}:{PANEL_H}:(iw-{BIG_W})/2:(ih-{PANEL_H})*{vfy},setsar=1,setpts=PTS-STARTPTS[vid];"
              f"[0:v][vid]overlay={BIG_X}:{PAN_Y0}:shortest=1[m];"
              f"[m][2:v]overlay={lx}:{ly}[out]")
    else:
      fc = (f"[1:v]{pre}fps=25,split[a][b];"
          f"[a]scale={BIG_W}:{PANEL_H}:force_original_aspect_ratio=increase,crop={BIG_W}:{PANEL_H},gblur=sigma=28,eq=brightness=-0.12[bg];"
          f"[b]scale={BIG_W}:{PANEL_H}:force_original_aspect_ratio=decrease[fg];"
          f"[bg][fg]overlay=(W-w)/2:(H-h)/2,setpts=PTS-STARTPTS[vid];"
          f"[0:v][vid]overlay={BIG_X}:{PAN_Y0}:shortest=1[m];"
          f"[m][2:v]overlay={lx}:{ly}[out]")
    run(f'ffmpeg -v error -y -loop 1 -framerate 25 -i {wd}/base.png {ss} -i "{src}" -i /home/claude/m/logo_plate.png '
        f'-filter_complex "{fc}" -map "[out]" -map 1:a -af "aresample=48000,asetpts=PTS-STARTPTS" '
        f'-c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -r 25 -c:a aac -b:a 192k -ar 48000 -shortest {wd}/mos.mp4')
    # outro
    run(f'ffmpeg -v error -y -sseof -0.1 -i {wd}/mos.mp4 -vframes 1 -update 1 {wd}/last.png')
    im = Image.open(f'{wd}/last.png').convert('RGB')
    ImageDraw.Draw(im).rectangle([BIG_X, PAN_Y0, 1079, PAN_Y1 - 1], fill=(0, 0, 0))
    im.save(f'{wd}/plate.png')
    run(f'ffmpeg -v error -y -loop 1 -i {wd}/plate.png -i {A}/OUTRO-MEDIA-anim.mov -i {A}/OUTRO-MEDIA-audio.mp3 '
        f'-filter_complex "[0:v]scale=1080:1920,fps=25,trim=duration=3.5,setpts=PTS-STARTPTS[bg];'
        f'[1:v]fps=25,scale=372:-1[an];[bg][an]overlay=(707-overlay_w/2):(1191-overlay_h/2):format=auto[v]" '
        f'-map "[v]" -map 2:a -t 3.5 -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -r 25 -c:a aac -b:a 192k -ar 48000 {wd}/outro.mp4')
    open(f'{wd}/cc.txt', 'w').write(f"file '{wd}/mos.mp4'\nfile '{wd}/outro.mp4'\n")
    final = f"{wd}/{cfg['out']}"
    run(f'ffmpeg -v error -y -f concat -safe 0 -i {wd}/cc.txt -c copy -movflags +faststart "{final}"')
    print(run(f'ffprobe -v error -show_entries format=duration,size -of csv=p=0 "{final}"'))


if __name__ == '__main__':
    main()
