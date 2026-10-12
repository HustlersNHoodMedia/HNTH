async (context) => {
  const t = process.env.APIFY_TOKEN; const out = [];
  await Promise.all(context.customData.urls.map(async ([u,k]) => { try {
    const b = await context.sendRequest({url:u, responseType:'buffer', timeout:{request:300000}, headers:{'user-agent':'Mozilla/5.0'}});
    await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/'+k+'?token='+t, method:'PUT', headers:{'content-type':'application/octet-stream'}, body:b.body, timeout:{request:300000}});
    out.push([k,b.body.length]); } catch(e) { out.push([k,String(e).slice(0,120)]); } }));
  return {out};
}
