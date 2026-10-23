async function(context){
 const u='https://www.cleveland19.com/2026/10/20/stranger-brings-6-year-old-home-after-bus-driver-drops-her-off-early-child-found-walking-near-busy-road/';
 const r=await context.sendRequest({url:u,responseType:'text',headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36'}});
 const h=String(r.body);
 const m3=[...new Set(h.match(/https?:[^"'\s]+?\.(m3u8|mp4)[^"'\s]*/g)||[])].slice(0,20);
 const og=(h.match(/property="og:image" content="([^"]+)"/)||[])[1];
 const imgs=[...new Set(h.match(/https:\/\/gray-woio-prod\.gtv-cdn\.com\/resizer\/v2\/[A-Z0-9]+\.(?:jpg|png|JPG|PNG)\?auth=[a-f0-9]+/g)||[])].slice(0,20);
 const vid=[...new Set(h.match(/"(?:videoUrl|contentUrl|embedUrl|url)":"[^"]+"/g)||[])].filter(s=>/video|m3u8|mp4/.test(s)).slice(0,20);
 return {og,m3,imgs,vid,len:h.length};
}
