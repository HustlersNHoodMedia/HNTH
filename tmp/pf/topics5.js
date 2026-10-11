async function(context){
 const Q=["homeless to valedictorian","homeless student graduates","slept in car college","from shelter to","dad raising daughters alone","widowed father raising","father raising kids alone","mom worked two jobs","son buys mom house","daughter buys mom house","pays off mom's","first in family medical school","white coat ceremony first generation","nursing school single mom","graduates nursing school mother","grandfather graduated same","great-grandmother graduates","GED at age","graduates at 70","janitor graduates","custodian graduates","bus driver surprise","students surprise custodian","teen works to support family","teen pays family rent","brothers graduate together","twins graduate medical","siblings raised by grandmother","kids raised by grandmother graduate","foster youth graduates","adopted siblings together","teacher adopts student","coach adopts player","coach gives player home","walks miles to work","walked to work every day","car donated worker walked","Black father daughter","Black single dad","HBCU student homeless","HBCU first generation graduate","Black nurse first","Black doctor first in family","Black family reunited"];
 const out=[];
 const one=async(q)=>{ for(let a=0;a<2;a++){ try{
   const u='https://news.google.com/rss/search?q='+encodeURIComponent(q+' when:5d')+'&hl=en-US&gl=US&ceid=US:en';
   const r=await context.sendRequest({url:u,responseType:'text',timeout:{request:30000}});
   const b=String(r.body||''); const re=/<item>([\s\S]*?)<\/item>/g; let m; const it=[];
   while((m=re.exec(b))){const x=m[1]; const g=(t)=>{const k=x.match(new RegExp('<'+t+'[^>]*>([\\s\\S]*?)</'+t+'>'));return k?k[1].replace(/<!\[CDATA\[|\]\]>/g,'').trim():''}; it.push([g('title'),g('pubDate'),g('link'),g('source')]);}
   out.push({q,items:it}); return; }catch(e){} } out.push({q,err:1}); };
 for(let i=0;i<Q.length;i+=10){ await Promise.all(Q.slice(i,i+10).map(one)); }
 const tok=process.env.APIFY_TOKEN;
 await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/topics5-1011.json?token='+tok,method:'PUT',body:JSON.stringify(out),headers:{'content-type':'application/json'},responseType:'text'});
 return {n:out.length,items:out.reduce((s,x)=>s+(x.items?x.items.length:0),0)};
}
