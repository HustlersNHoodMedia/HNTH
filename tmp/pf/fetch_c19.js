async function(context){
const t=process.env.APIFY_TOKEN;
const gh=String((await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/GITHUB_TOKEN?token='+t,responseType:'text'})).body).trim();
const U={"ty_c19.mp4": "https://d1l66zlxaqpl1u.cloudfront.net/wp-gray/20261020/6ad7e90b0cba4d202a9bc889/file_1920x1080-5400-v4/file_1280x720-2000-v3_1.mp4"}; const out={};
for(const [name,u] of Object.entries(U)){
 try{
  const r=await context.sendRequest({url:u,responseType:'buffer',throwHttpErrors:false,timeout:{request:300000},timeout:{request:240000},headers:{'User-Agent':(u.includes('fbsbx')?'Googlebot-Image/1.0':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36'),'Accept':'image/avif,image/webp,image/*,*/*'}});
  const b=r.rawBody||r.body; const len=b?b.length:0;
  out[name]=r.statusCode+' '+len+' '+(r.headers['content-type']||'');
  if(r.statusCode==200 && len>5000){
   const p='qc/src/'+name;
   let sha; try{const g=await context.sendRequest({url:'https://api.github.com/repos/HustlersNHoodMedia/HNTH/contents/'+p,headers:{Authorization:'token '+gh,'User-Agent':'hnth'},responseType:'json',throwHttpErrors:false}); if(g.statusCode==200) sha=g.body.sha;}catch(e){}
   const w=await context.sendRequest({url:'https://api.github.com/repos/HustlersNHoodMedia/HNTH/contents/'+p,method:'PUT',headers:{Authorization:'token '+gh,'User-Agent':'hnth','Content-Type':'application/json'},body:JSON.stringify({message:'src '+name,content:Buffer.from(b).toString('base64'),sha}),responseType:'text',throwHttpErrors:false});
   out[name]+=' gh'+w.statusCode;
  }
 }catch(e){out[name]='ERR '+e.message}
}
return out;}