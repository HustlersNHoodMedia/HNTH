async (context) => {
  const t = process.env.APIFY_TOKEN; const c = context.customData; const out = [];
  if (c.src) {
    const l = await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/'+c.src+'/keys?limit=200&token='+t, responseType:'json'});
    const ks = l.body.data.items.map(x=>x.key).filter(k=>new RegExp(c.re||'^(video|cover|subtitle)-').test(k));
    await Promise.all(ks.map(async k => { try {
      const r = await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/'+c.src+'/records/'+k+'?token='+t, responseType:'buffer', timeout:{request:300000}});
      const m = k.match(/^(\w+)-.*?-(\d{15,})(?:-([a-zA-Z-]+))?\.(\w+)$/);
      const nk = (c.prefix||'x_') + (m ? m[1]+'_'+m[2]+'.'+m[4] : k);
      await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/'+nk+'?token='+t, method:'PUT', headers:{'content-type':'application/octet-stream'}, body:r.body, timeout:{request:300000}});
      out.push([nk, r.body.length]); } catch(e) { out.push([k, String(e).slice(0,80)]); } }));
  }
  if (c.ds) {
    const r = await context.sendRequest({url:'https://api.apify.com/v2/datasets/'+c.ds+'/items?clean=1&limit=5000&token='+t, responseType:'json'});
    const cm = r.body.map(x=>({v:(x.videoWebUrl||x.submittedVideoUrl||'').slice(-19), t:x.text, l:x.diggCount, r:x.replyCommentTotal}));
    await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/'+c.ckey+'?token='+t, method:'PUT', headers:{'content-type':'application/json'}, body:JSON.stringify(cm)});
    out.push([c.ckey, cm.length]);
  }
  return {out};
}
