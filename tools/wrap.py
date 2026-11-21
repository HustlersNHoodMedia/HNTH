import sys
sys.argv=['x']
from PIL import ImageFont
import importlib.util
spec=importlib.util.spec_from_file_location('r','/home/claude/m/render.py'); r=importlib.util.module_from_spec(spec); spec.loader.exec_module(r)
font=ImageFont.truetype('/home/claude/m/Marsden-Ex-Bold.ttf', r.FONT_SIZE)
for line in open('/home/claude/m/try.txt'):
    line=line.strip()
    if not line: continue
    t,e=line.split('|')
    lines,ems,ew,new=r.layout([(t,0)],[e] if e else [],font)
    L=[' '.join(w for w,_ in l) for l in lines]
    print(len(L)+(1 if new else 0), len(t), L, 'EMOJI-ALONE' if new else '')
