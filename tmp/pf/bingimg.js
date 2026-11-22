const qs = context.customData.queries;
const out = [];
for (const q of qs) {
  try {
    const r = await fetch('https://www.bing.com/images/search?q=' + encodeURIComponent(q) + '&form=HDRSC2&first=1', {headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36', 'Accept-Language': 'en-US,en;q=0.9'}});
    const h = await r.text();
    const res = [];
    const re = /m="(\{[^"]*?\})"/g;
    let m;
    while ((m = re.exec(h)) !== null && res.length < 25) {
      try {
        const j = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
        if (j.murl) res.push({u: j.murl, t: (j.t || '').slice(0, 90), p: (j.purl || '').slice(0, 120)});
      } catch (e) {}
    }
    out.push({q, n: res.length, res});
  } catch (e) { out.push({q, err: String(e)}); }
}
return out;
