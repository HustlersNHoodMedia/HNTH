async function(context){
 const Q=["site:people.com","site:today.com","site:goodmorningamerica.com","site:abcnews.go.com","site:cbsnews.com","site:nbcnews.com","site:apnews.com","site:thegrio.com","site:newsone.com","site:blavity.com","site:theroot.com","site:essence.com","site:blackenterprise.com","site:atlantablackstar.com","site:hbcubuzz.com","site:hbcugameday.com","site:capitalbnews.org","site:wordinblack.com","site:blackpressusa.com","site:afro.com","site:upworthy.com","site:goodnewsnetwork.org","site:sunnyskyz.com","site:inspiremore.com","site:hoodline.com","site:yahoo.com dad","site:yahoo.com mom","site:yahoo.com student","site:people.com dad","site:people.com mom","site:people.com student","site:people.com graduate"];
 const out=[];
 const one=async(q)=>{ for(let a=0;a<2;a++){ try{
   const u='https://news.google.com/rss/search?q='+encodeURIComponent(q+' when:5d')+'&hl=en-US&gl=US&ceid=US:en';
   const r=await context.sendRequest({url:u,responseType:'text',timeout:{request:30000}});
   const b=String(r.body||''); const re=/<item>([\s\S]*?)<\/item>/g; let m; const it=[];
   while((m=re.exec(b))){const x=m[1]; const g=(t)=>{const k=x.match(new RegExp('<'+t+'[^>]*>([\\s\\S]*?)</'+t+'>'));return k?k[1].replace(/<!\[CDATA\[|\]\]>/g,'').trim():''}; it.push([g('title'),g('pubDate'),g('link'),g('source')]);}
   out.push({q,items:it}); return; }catch(e){} } out.push({q,err:1}); };
 for(let i=0;i<Q.length;i+=10){ await Promise.all(Q.slice(i,i+10).map(one)); }
 const tok=process.env.APIFY_TOKEN;
 await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/topics3-1011.json?token='+tok,method:'PUT',body:JSON.stringify(out),headers:{'content-type':'application/json'},responseType:'text'});
 return {n:out.length,items:out.reduce((s,x)=>s+(x.items?x.items.length:0),0)};
}
