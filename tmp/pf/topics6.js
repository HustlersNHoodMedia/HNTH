async function(context){
 const Q=["single father", "single mother of", "raising his grandchildren", "raised by his grandmother", "homeless student", "shelter to", "first in his family", "first in her family", "janitor", "custodian", "bus driver", "cafeteria worker", "crossing guard", "mail carrier", "barber", "HBCU", "homecoming", "kidney donor", "donated kidney", "surprised his mother", "surprised her father", "bought his mother", "paid off", "adopted", "foster care", "walked miles", "second job", "retired after", "40 years", "never missed a day", "community rallies", "GoFundMe", "laid off", "evicted", "house fire family", "veteran homeless", "Black-owned business closing", "Black-owned business", "teen entrepreneur", "valedictorian", "full scholarship", "white coat", "nursing school", "graduated at age", "GED"];
 const out=[];
 const one=async(q)=>{ for(let a=0;a<2;a++){ try{
   const u='https://news.google.com/rss/search?q='+encodeURIComponent(q+' when:2d')+'&hl=en-US&gl=US&ceid=US:en';
   const r=await context.sendRequest({url:u,responseType:'text',timeout:{request:30000}});
   const b=String(r.body||''); const re=/<item>([\s\S]*?)<\/item>/g; let m; const it=[];
   while((m=re.exec(b))){const x=m[1]; const g=(t)=>{const k=x.match(new RegExp('<'+t+'[^>]*>([\\s\\S]*?)</'+t+'>'));return k?k[1].replace(/<!\[CDATA\[|\]\]>/g,'').trim():''}; it.push([g('title'),g('pubDate'),g('link'),g('source')]);}
   out.push({q,items:it}); return; }catch(e){} } out.push({q,err:1}); };
 for(let i=0;i<Q.length;i+=10){ await Promise.all(Q.slice(i,i+10).map(one)); }
 const tok=process.env.APIFY_TOKEN;
 await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/topics6-1012.json?token='+tok,method:'PUT',body:JSON.stringify(out),headers:{'content-type':'application/json'},responseType:'text'});
 return {n:out.length,items:out.reduce((s,x)=>s+(x.items?x.items.length:0),0)};
}
