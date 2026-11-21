// Body of an async function(context): fetches every RSS url in radar/rss_urls.txt and stores items in KV
const t = process.env.APIFY_TOKEN;
const key = (context.customData && context.customData.key) || 'scratch_rss';
const urls = context.body.toString().split('\n').map(s => s.trim()).filter(Boolean);
const out = []; let i = 0;
const g = (it, tag) => { const m = it.match(new RegExp('<' + tag + '[^>]*>([\\s\\S]*?)</' + tag + '>')); return m ? m[1].replace('<![CDATA[', '').replace(']]>', '') : ''; };
async function worker() {
  while (i < urls.length) {
    const u = urls[i++].replace(/x=[0-9a-z]+/, 'x=' + Date.now().toString(36));
    try {
      const r = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const x = await r.text();
      for (const it of x.split('<item>').slice(1)) out.push({ t: g(it, 'title'), s: g(it, 'source'), d: g(it, 'pubDate'), l: g(it, 'link') });
    } catch (e) { out.push({ err: u }); }
  }
}
await Promise.all(Array.from({ length: 12 }, worker));
await fetch('https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/' + key + '?token=' + t, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(out) });
return { n: out.length, errs: out.filter(o => o.err).length };
