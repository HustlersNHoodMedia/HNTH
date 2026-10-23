async function(context){
 const t=process.env.APIFY_TOKEN;
 const gh=String((await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/GITHUB_TOKEN?token='+t,responseType:'text'})).body).trim();
 const u='https://d1l66zlxaqpl1u.cloudfront.net/wp-gray/20261020/6ad7e90b0cba4d202a9bc889/file_1920x1080-5400-v4/file_1280x720-2000-v3_1.mp4';
 const CH=4*1024*1024; const parts=[]; let start=0; let total=null; const log=[];
 for(let i=0;i<40;i++){
  const r=await context.sendRequest({url:u,responseType:'buffer',throwHttpErrors:false,headers:{Range:'bytes='+start+'-'+(start+CH-1),'User-Agent':'Mozilla/5.0'}});
  const b=r.rawBody||r.body; parts.push(Buffer.from(b)); log.push(r.statusCode+':'+b.length);
  const cr=r.headers['content-range']||''; const m=cr.match(/\/(\d+)/); if(m) total=+m[1];
  start+=b.length; if(r.statusCode==200||!total||start>=total) break;
 }
 const buf=Buffer.concat(parts);
 const p='qc/src/ty_c19.mp4';
 const w=await context.sendRequest({url:'https://api.github.com/repos/HustlersNHoodMedia/HNTH/contents/'+p,method:'PUT',headers:{Authorization:'token '+gh,'User-Agent':'hnth','Content-Type':'application/json'},body:JSON.stringify({message:'src ty_c19',content:buf.toString('base64')}),responseType:'text',throwHttpErrors:false});
 return {total,got:buf.length,log:log.join(','),gh:w.statusCode,ghb:String(w.body).slice(0,200)};
}
