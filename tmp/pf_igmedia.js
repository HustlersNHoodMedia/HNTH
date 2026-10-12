async (context) => {
  const t = process.env.APIFY_TOKEN; const c = context.customData; const out = [];
  const r = await context.sendRequest({url:'https://api.apify.com/v2/datasets/'+c.ds+'/items?clean=1&limit=1000&token='+t, responseType:'json'});
  const items = r.body.filter(x => c.codes.includes(x.shortCode));
  const jobs = [];
  for (const x of items) {
    const meta = {code:x.shortCode, caption:x.caption, owner:x.ownerUsername, ts:x.timestamp, kids:[]};
    const add = (u,k,ext) => { if (u) jobs.push([u, c.prefix+x.shortCode+'_'+k+'.'+ext]); };
    add(x.displayUrl,'d','jpg'); add(x.videoUrl,'v','mp4');
    (x.childPosts||[]).forEach((cp,i)=>{ add(cp.displayUrl,'c'+i,'jpg'); add(cp.videoUrl,'c'+i,'mp4'); meta.kids.push({i,type:cp.type,alt:cp.alt}); });
    out.push(meta);
  }
  await Promise.all(jobs.map(async ([u,k]) => { try {
    const b = await context.sendRequest({url:u, responseType:'buffer', timeout:{request:120000}});
    await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/'+k+'?token='+t, method:'PUT', headers:{'content-type':'application/octet-stream'}, body:b.body});
    out.push([k,b.body.length]); } catch(e) { out.push([k,String(e).slice(0,80)]); } }));
  await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/'+c.prefix+'meta.json?token='+t, method:'PUT', headers:{'content-type':'application/json'}, body:JSON.stringify(out)});
  return {n:out.length};
}
