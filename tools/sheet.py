import sys, subprocess
from PIL import Image, ImageDraw
sc=sys.argv[1]; n=int(sys.argv[2]) if len(sys.argv)>2 else 12
src=f'/home/claude/m/src/v_{sc}.mp4'
d=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',src]).decode())
ts=[round(d*(i+0.5)/n,1) for i in range(n)]
ims=[]
for t in ts:
    subprocess.run(['ffmpeg','-v','error','-y','-ss',str(t),'-i',src,'-frames:v','1','-vf','scale=220:-2','/tmp/sh_'+sc+'.png'])
    im=Image.open('/tmp/sh_'+sc+'.png').convert('RGB'); dr=ImageDraw.Draw(im); dr.rectangle((0,0,44,14),fill='black'); dr.text((2,1),str(t),fill='yellow'); ims.append(im)
w,h=ims[0].size; cols=6; rows=(len(ims)+cols-1)//cols
o=Image.new('RGB',(w*cols,h*rows))
for i,im in enumerate(ims): o.paste(im,((i%cols)*w,(i//cols)*h))
o.save(f'/home/claude/m/sheets/s_{sc}.jpg'); print(sc, round(d,1))
