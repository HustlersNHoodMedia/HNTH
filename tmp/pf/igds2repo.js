async function(context){
 const T=process.env.APIFY_TOKEN;
 const q=new URL(context.request.url).searchParams; const ds=q.get('ds'); const dir=q.get('dir'); const codes=(q.get('codes')||'').split(',');
 const gh=String((await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/GITHUB_TOKEN?token='+T,responseType:'text'})).body).trim();
 const items=(await context.sendRequest({url:'https://api.apify.com/v2/datasets/'+ds+'/items?clean=1&limit=200&token='+T,responseType:'json'})).body;
 const jobs=[];
 for(const it of items){ if(!codes.includes(it.shortCode)) continue;
   if(it.childPosts&&it.childPosts.length){ it.childPosts.forEach((c,i)=>{ jobs.push({name:it.shortCode+'_'+(i+1)+'.jpg',u:c.displayUrl}); if(c.videoUrl) jobs.push({name:it.shortCode+'_'+(i+1)+'.mp4',u:c.videoUrl}); }); }
   else { jobs.push({name:it.shortCode+'.jpg',u:it.displayUrl}); if(it.videoUrl) jobs.push({name:it.shortCode+'.mp4',u:it.videoUrl}); }
 }
 const out=[];
 for(const j of jobs){ try{
   const r=await context.sendRequest({url:j.u,responseType:'buffer',throwHttpErrors:false,timeout:{request:120000},headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36'}});
   const b=r.rawBody||r.body;
   if(r.statusCode!=200||b.length<5000){out.push([j.name,'skip '+r.statusCode]);continue}
   const p='qc/src/'+dir+'/'+j.name;
   let w; for(let k=0;k<3;k++){ w=await context.sendRequest({url:'https://api.github.com/repos/HustlersNHoodMedia/HNTH/contents/'+p,method:'PUT',headers:{Authorization:'token '+gh,'User-Agent':'hnth','Content-Type':'application/json'},body:JSON.stringify({message:'src '+j.name,content:Buffer.from(b).toString('base64')}),responseType:'text',throwHttpErrors:false}); if(w.statusCode<300||w.statusCode==422) break; await new Promise(z=>setTimeout(z,1500)); }
   out.push([j.name,w.statusCode,b.length]);
 }catch(e){out.push([j.name,'ERR '+e.message])} }
 return {n:jobs.length,out};
}
