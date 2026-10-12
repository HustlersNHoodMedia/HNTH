async (context) => {
  const tok = process.env.APIFY_TOKEN; const out = {};
  for (const j of context.customData.jobs) {
    const r = await context.sendRequest({url:'https://api.apify.com/v2/datasets/'+j.ds+'/items?clean=1&format=json&limit=2000&token='+tok, responseType:'text', timeout:{request:120000}});
    const a = JSON.parse(String(r.body)); let rows;
    if (j.kind==='tt') rows = a.map(x=>({t:(x.text||'').slice(0,400),d:x.createTimeISO,p:x.playCount,l:x.diggCount,c:x.commentCount,u:x.webVideoUrl,q:x.searchQuery,a:(x.authorMeta||{}).name,f:(x.authorMeta||{}).fans,cov:(x.videoMeta||{}).coverUrl}));
    else rows = a.map(x=>({o:x.ownerUsername,t:(x.caption||'').slice(0,400),d:x.timestamp,l:x.likesCount,c:x.commentsCount,v:x.videoViewCount,u:x.url,ty:x.type,img:x.displayUrl,e:x.error}));
    await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/'+j.key+'?token='+tok, method:'PUT', body:JSON.stringify(rows), headers:{'content-type':'application/json'}, responseType:'text'});
    out[j.key]=rows.length;
  }
  return out;
}
