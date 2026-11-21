// Body of async function(context): for each YouTube handle, resolve channelId, read its RSS feed, keep videos from the last N days, store in KV
const t = process.env.APIFY_TOKEN;
const { key, handles, days } = context.customData;
const cutoff = Date.now() - (days || 4) * 864e5;
const out = []; let i = 0;
const g = (it, tag) => { const m = it.match(new RegExp('<' + tag + '[^>]*>([\\s\\S]*?)</' + tag + '>')); return m ? m[1] : ''; };
async function worker() {
  while (i < handles.length) {
    const h = handles[i++];
    try {
      const p = await (await fetch('https://www.youtube.com/@' + h, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept-Language': 'en-US' } })).text();
      const m = p.match(/"externalId":"(UC[\w-]{22})"/) || p.match(/channel_id=(UC[\w-]{22})/) || p.match(/"channelId":"(UC[\w-]{22})"/);
      if (!m) { out.push({ h, err: 'noid' }); continue; }
      const x = await (await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=' + m[1])).text();
      for (const it of x.split('<entry>').slice(1)) {
        const pub = g(it, 'published');
        if (Date.parse(pub) < cutoff) continue;
        const v = (it.match(/<yt:videoId>([^<]+)</) || [])[1];
        const views = (it.match(/views="(\d+)"/) || [])[1];
        out.push({ h, t: g(it, 'title'), pub, v, views: +views || 0, desc: g(it, 'media:description').slice(0, 400) });
      }
    } catch (e) { out.push({ h, err: String(e).slice(0, 80) }); }
  }
}
await Promise.all(Array.from({ length: 8 }, worker));
await fetch('https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/' + key + '?token=' + t, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(out) });
return { n: out.length, errs: out.filter(o => o.err).map(o => o.h) };
