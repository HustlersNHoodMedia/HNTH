import sys,subprocess
from PIL import Image
f,tag=sys.argv[1],sys.argv[2]
d=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f]).decode())
ims=[]
for t in [0, d*0.4, d-1.5]:
    subprocess.run(['ffmpeg','-v','error','-y','-ss',str(max(0,t)),'-i',f,'-frames:v','1','/tmp/qcf_'+tag+'.png']); ims.append(Image.open('/tmp/qcf_'+tag+'.png').convert('RGB').copy())
im=ims[0]
# last title row: lowest row in header with red/white text
px=im.load(); last=None
for y in range(560,647):
    for x in range(56,1020,3):
        r,g,b=px[x,y]
        if (r>200 and g>200 and b>200) or (r>200 and g<60 and b<60): last=y; break
print('title_last_row',last)
o=Image.new('RGB',(540*3,960))
for i,m in enumerate(ims): o.paste(m.resize((540,960)),(i*540,0))
o.save(f'/home/claude/m/sheets/qc_{tag}.jpg'); print('dur',round(d,2))
