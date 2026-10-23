async function(context){
 const T=process.env.APIFY_TOKEN;
 const q=new URL(context.request.url).searchParams; const ds=q.get('ds'); const pre=q.get('pre'); const minw=+(q.get('minw')||600); const maxper=+(q.get('maxper')||8);
 const gh=String((await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/GITHUB_TOKEN?token='+T,responseType:'text'})).body).trim();
 const items=(await context.sendRequest({url:'https://api.apify.com/v2/datasets/'+ds+'/items?clean=1&limit=500&token='+T,responseType:'json'})).body;
 const qs=[...new Set(items.map(x=>x.query))]; const cnt={}; const out=[];
 const jobs=[];
 for(const it of items){ const qi=qs.indexOf(it.query); cnt[qi]=(cnt[qi]||0); if(cnt[qi]>=maxper) continue; if((it.imageWidth||0)<minw && (it.imageHeight||0)<minw) continue; if(/tiktok\.com/.test(it.imageUrl)) continue; cnt[qi]++; jobs.push({name:pre+'_q'+qi+'_'+cnt[qi]+'.jpg',u:it.imageUrl,t:(it.title||'').slice(0,80)}); }
 const W='https://wsrv.nl/?output=jpg&q=92&url=';
 await Promise.all(jobs.map(async j=>{ try{
   const isL=/lookaside|fbsbx/.test(j.u);
   const url=isL?j.u:(W+encodeURIComponent(j.u));
   const r=await context.sendRequest({url,responseType:'buffer',throwHttpErrors:false,timeout:{request:60000},headers:{'User-Agent':isL?'Googlebot-Image/1.0':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36'}});
   const b=r.rawBody||r.body; const ct=r.headers['content-type']||'';
   if(r.statusCode!=200||!ct.startsWith('image')||b.length<8000){out.push([j.name,'skip '+r.statusCode+' '+ct]);return}
   const p='qc/src/c5/'+j.name;
   let w; for(let k=0;k<3;k++){ w=await context.sendRequest({url:'https://api.github.com/repos/HustlersNHoodMedia/HNTH/contents/'+p,method:'PUT',headers:{Authorization:'token '+gh,'User-Agent':'hnth','Content-Type':'application/json'},body:JSON.stringify({message:'src '+j.name,content:Buffer.from(b).toString('base64')}),responseType:'text',throwHttpErrors:false}); if(w.statusCode<300||w.statusCode==422) break; await new Promise(z=>setTimeout(z,1500)); }
   out.push([j.name,w.statusCode,j.t]);
 }catch(e){out.push([j.name,'ERR '+e.message])} }));
 return {qs, out};
}
