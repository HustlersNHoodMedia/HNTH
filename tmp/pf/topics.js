async function(context){
 const Q=["single father custody kids","single dad shelter kids","dad full custody homeless","HBCU perfect 4.0","HBCU students perfect GPA","HBCU graduates first","twins medical school","twin brothers doctors","twin sisters graduate","grew up poor now doctor","no running water became doctor","housekeeper became nurse","janitor graduated nursing","custodian earns degree","former housekeeper hospital nurse","Section 8 grew up now","foster mom adopted siblings","grandmother raising grandchildren graduated","mom took in kids not hers","parents started business for autistic son","autism son job business parents","father son graduate together","mother daughter graduate same day","first in family medical school","dad works two jobs son college","teen bought mom house","son bought mother a house","daughter paid off parents mortgage","kids raised by single mom doctors","brothers from projects","HBCU homecoming alumni surprise","high school senior full ride scholarships","student accepted 50 colleges","valedictorian homeless shelter","homeless student valedictorian","walked miles to work promoted","delivery driver strangers new car","community buys car for worker"];
 const out=[];
 const one=async(q)=>{ for(let a=0;a<2;a++){ try{
   const u='https://news.google.com/rss/search?q='+encodeURIComponent(q+' when:10d')+'&hl=en-US&gl=US&ceid=US:en';
   const r=await context.sendRequest({url:u,responseType:'text',timeout:{request:30000}});
   const b=String(r.body||''); const re=/<item>([\s\S]*?)<\/item>/g; let m; const it=[];
   while((m=re.exec(b))){const x=m[1]; const g=(t)=>{const k=x.match(new RegExp('<'+t+'[^>]*>([\\s\\S]*?)</'+t+'>'));return k?k[1].replace(/<!\[CDATA\[|\]\]>/g,'').trim():''}; it.push([g('title'),g('pubDate'),g('link'),g('source')]);}
   out.push({q,items:it}); return; }catch(e){} } out.push({q,err:1}); };
 for(let i=0;i<Q.length;i+=10){ await Promise.all(Q.slice(i,i+10).map(one)); }
 const tok=process.env.APIFY_TOKEN;
 await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/6MicS0YsUGu2QSSiU/records/topics-1011.json?token='+tok,method:'PUT',body:JSON.stringify(out),headers:{'content-type':'application/json'},responseType:'text'});
 return {n:out.length,items:out.reduce((s,x)=>s+(x.items?x.items.length:0),0)};
}
