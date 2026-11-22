async function pageFunction(context) {
  const urls = [
    'https://thegrio.com/feed/',
    'https://www.essence.com/feed/',
    'https://allhiphop.com/feed/',
    'https://www.hotnewhiphop.com/rss/news.xml',
    'https://atlantablackstar.com/feed/',
    'https://newsone.com/feed/',
    'https://rollingout.com/feed/',
    'https://www.blackenterprise.com/feed/',
    'https://thejasminebrand.com/feed/',
    'https://thesource.com/feed/'
  ];
  const items = [];
  const cutoff = new Date(Date.now() - 72*3600*1000);
  for (const u of urls) {
    try {
      const r = await context.sendRequest({url: u, responseType: 'text'});
      const xml = r.body;
      const re = /<item[\s\S]*?<\/item>/gi;
      let m;
      while ((m = re.exec(xml)) !== null) {
        const it = m[0];
        const t = (it.match(/<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>/i)||[])[1]||'';
        const l = (it.match(/<link>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/link>/i)||[])[1]||'';
        const d = (it.match(/<pubDate>(.*?)<\/pubDate>/i)||[])[1]||'';
        const pd = new Date(d);
        if (pd > cutoff) {
          const src = new URL(u).hostname.replace('www.','');
          items.push({t: t.substring(0,140), l, d: d.substring(0,25), s: src});
        }
      }
    } catch(e) {}
  }
  // Store in KV
  const apToken = process.env.APIFY_TOKEN;
  await context.sendRequest({
    url: 'https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/scratch_rss_nov22?token=' + apToken,
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(items)
  });
  return {count: items.length};
}
