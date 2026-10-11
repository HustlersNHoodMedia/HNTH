async function(context){
 const Q=["HBCU","single dad","single father","full custody","twin brothers","twin sisters","grandmother graduates","custodian","janitor","first in his family","first in her family","valedictorian","GED","adopted siblings","foster mom","foster dad","returns to hometown","autistic son","son with autism","bought his mom","bought her mom","paid off mortgage","walks miles to work","Morehouse","Howard University student","FAMU student","Tuskegee","Spelman","Jackson State student","Southern University student","Prairie View student","North Carolina A&T student","Grambling","Xavier University of Louisiana","Hampton University","Clark Atlanta","Morgan State","Bowie State","Delaware State","Alabama State"];
 const out=[];
 const one=async(q)=>{ for(let a=0;a<2;a++){ try{
   const u='https://news.google.com/rss/search?q='+encodeURIComponent(q+' when:7d')+'&hl=en-US&gl=US&ceid=US:en';
   const r=await context.sendRequest({url:u,responseType:'text',timeout:{request:30000}});
   const b=String(r.body||''); const re=/<item>([\s\S]*?)<\/item>/g; let m; const it=[];
   while((m=re.exec(b))){const x=m[1]; const g=(t)=>{const k=x.match(new RegExp('<'+t+'[^>]*>([\\s\\S]*?)</'+t+'>'));return k?k[1].replace(/<!\[CDATA\[|\]\]>/g,'').trim():''}; it.push([g('title'),g('pubDate'),g('link'),g('source')]);}
   out.push({q,items:it}); return; }catch(e){} } out.push({q,err:1}); };
 for(let i=0;i<Q.length;i+=10){ await Promise.all(Q.slice(i,i+10).map(one)); }
 const tok=process.env.APIFY_TOKEN;
 await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/topics2-1011.json?token='+tok,method:'PUT',body:JSON.stringify(out),headers:{'content-type':'application/json'},responseType:'text'});
 return {n:out.length,items:out.reduce((s,x)=>s+(x.items?x.items.length:0),0)};
}
