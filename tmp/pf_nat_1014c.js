async (context) => {
 const D=["people.com","today.com","goodmorningamerica.com","cbsnews.com","nbcnews.com","abcnews.go.com","apnews.com","upworthy.com","goodnewsnetwork.org","thegrio.com","blackenterprise.com","essence.com","newsone.com","atlantablackstar.com","blavity.com","afrotech.com","theroot.com","rollingout.com","ebony.com","blackamericaweb.com","insider.com","cnn.com","washingtonpost.com","usatoday.com","insideedition.com","npr.org","yahoo.com","newsweek.com","fox5atlanta.com","hellobeautiful.com","madamenoire.com","blacknews.com","hbcugameday.com","hbcubuzz.com","becauseofthemwecan.com","thesource.com","vibe.com","complex.com","bet.com","revolt.tv","hiphopdx.com","xxlmag.com","thejasminebrand.com","bossip.com","sfgate.com","nypost.com","dailymail.co.uk","fox news foxnews.com","the-sun.com","mirror.co.uk"];
 const tok=process.env.APIFY_TOKEN; const out=[];
 const one=async(d)=>{ d=d.split(' ').pop(); for(let a=0;a<2;a++){ try{
   const u='https://news.google.com/rss/search?q='+encodeURIComponent('site:'+d+' when:1d')+'&hl=en-US&gl=US&ceid=US:en';
   const r=await context.sendRequest({url:u,responseType:'text',timeout:{request:30000}});
   const b=String(r.body||''); const re=/<item>([\s\S]*?)<\/item>/g; let m; const it=[];
   while((m=re.exec(b))){const x=m[1]; const g=(t)=>{const k=x.match(new RegExp('<'+t+'[^>]*>([\\s\\S]*?)</'+t+'>'));return k?k[1].replace(/<!\[CDATA\[|\]\]>/g,'').trim():''}; it.push([g('title'),g('pubDate'),g('link')]);}
   out.push({dom:d,items:it}); return; }catch(e){} } out.push({dom:d,err:1}); };
 for(let i=0;i<D.length;i+=10){ await Promise.all(D.slice(i,i+10).map(one)); }
 await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/radar-nat-1014c.json?token='+tok,method:'PUT',body:JSON.stringify(out),headers:{'content-type':'application/json'},responseType:'text'});
 return {n:out.length,items:out.reduce((s,x)=>s+(x.items?x.items.length:0),0)};
}
