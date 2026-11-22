const pages = context.customData.pages;
const out = [];
for (const p of pages) {
  try {
    const r = await fetch(p, {headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36'}});
    const h = await r.text();
    const re = /https?:\/\/[^"'\s)]+?\.(?:jpg|jpeg|png|webp)(?:\?[^"'\s)]*)?/gi;
    const set = new Set((h.match(re) || []).filter(u => !/logo|icon|avatar|sprite|badge|favicon/i.test(u)));
    const alts = [];
    const reAlt = /<img[^>]*?(?:src|data-src)="([^"]+)"[^>]*?alt="([^"]*)"/gi;
    let m; while ((m = reAlt.exec(h)) !== null) alts.push([m[1], m[2]]);
    out.push({page: p, status: r.status, imgs: [...set].slice(0, 60), alts: alts.slice(0, 40)});
  } catch (e) { out.push({page: p, err: String(e)}); }
}
return out;
