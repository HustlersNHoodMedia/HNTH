async function(context){
 const t=process.env.APIFY_TOKEN;
 const gh=String((await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/GITHUB_TOKEN?token='+t,responseType:'text'})).body).trim();
 const u='https://d1l66zlxaqpl1u.cloudfront.net/wp-gray/20261020/6ad7e90b0cba4d202a9bc889/file_1920x1080-5400-v4/file_1280x720-2000-v3_1.mp4';
 const CH=2*1024*1024, PART=6*1024*1024; let start=0,total=null,part=[],plen=0,idx=0; const log=[];
 async function flush(){ if(!plen) return; const buf=Buffer.concat(part); const p='qc/src/c19/part'+String(idx).padStart(2,'0');
   const w=await context.sendRequest({url:'https://api.github.com/repos/HustlersNHoodMedia/HNTH/contents/'+p,method:'PUT',timeout:{request:120000},headers:{Authorization:'token '+gh,'User-Agent':'hnth','Content-Type':'application/json'},body:JSON.stringify({message:'src c19 '+idx,content:buf.toString('base64')}),responseType:'text',throwHttpErrors:false});
   log.push('P'+idx+':'+w.statusCode); idx++; part=[]; plen=0; }
 for(let i=0;i<60;i++){
  let r; try{ r=await context.sendRequest({url:u,responseType:'buffer',throwHttpErrors:false,timeout:{request:55000},headers:{Range:'bytes='+start+'-'+(start+CH-1),'User-Agent':'Mozilla/5.0'}}); }catch(e){ log.push('E'+i+':'+String(e.message).slice(0,60)); continue; }
  const b=Buffer.from(r.rawBody||r.body); part.push(b); plen+=b.length;
  const cr=r.headers['content-range']||''; const m=cr.match(/\/(\d+)/); if(m) total=+m[1];
  start+=b.length; if(plen>=PART) await flush();
  if(r.statusCode==200||!total||start>=total) break;
 }
 await flush();
 return {total,got:start,log:log.join(',')};
}
