async function(context){
 const t=process.env.APIFY_TOKEN;
 const gh=String((await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/GITHUB_TOKEN?token='+t,responseType:'text'})).body).trim();
 const q=new URL(context.request.url).searchParams; const list=q.get('list');
 const U=(await context.sendRequest({url:'https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/main/tmp/pf/'+list+'?t='+Date.now(),responseType:'json'})).body;
 const out={};
 for(const [name,u] of Object.entries(U)){
  try{
   const isL=/lookaside|fbsbx/.test(u);
   const r=await context.sendRequest({url:u,responseType:'buffer',throwHttpErrors:false,timeout:{request:240000},headers:{'User-Agent':isL?'Googlebot-Image/1.0':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36','Accept':'image/avif,image/webp,image/*,*/*'}});
   const b=r.rawBody||r.body; const len=b?b.length:0; const ct=r.headers['content-type']||'';
   out[name]=r.statusCode+' '+len+' '+ct;
   if(r.statusCode==200&&len>5000&&(ct.startsWith('image')||ct.startsWith('video')||ct.includes('octet'))){
     const p='qc/src/'+name;
     let sha; try{const g=await context.sendRequest({url:'https://api.github.com/repos/HustlersNHoodMedia/HNTH/contents/'+p,headers:{Authorization:'token '+gh,'User-Agent':'hnth'},responseType:'json',throwHttpErrors:false}); if(g.statusCode==200) sha=g.body.sha;}catch(e){}
     let w; for(let k=0;k<3;k++){ w=await context.sendRequest({url:'https://api.github.com/repos/HustlersNHoodMedia/HNTH/contents/'+p,method:'PUT',headers:{Authorization:'token '+gh,'User-Agent':'hnth','Content-Type':'application/json'},body:JSON.stringify({message:'src '+name,content:Buffer.from(b).toString('base64'),sha}),responseType:'text',throwHttpErrors:false,timeout:{request:240000}}); if(w.statusCode<300) break; await new Promise(z=>setTimeout(z,2000)); }
     out[name]+=' gh'+w.statusCode;
   }
  }catch(e){out[name]='ERR '+e.message}
 }
 return out;
}
