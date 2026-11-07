async function pageFunction(context){
 const D=["theshaderoom.com", "bossip.com", "tmz.com", "people.com", "essence.com", "thegrio.com", "theroot.com", "blavity.com", "revolt.tv", "complex.com", "xxlmag.com", "hiphopdx.com", "allhiphop.com", "vibe.com", "eurweb.com", "rollingout.com", "hollywoodunlocked.com", "bet.com", "hot97.com", "madamenoire.com", "newsone.com", "blackenterprise.com", "face2faceafrica.com", "atlantablackstar.com", "andscape.com", "hiphopwired.com", "goodmorningamerica.com", "nbcnews.com", "abcnews.go.com", "atlantadailyworld.com", "wordinblack.com", "capitalbnews.org", "afrotech.com", "houstonstyle.com", "atlantavoice.com", "chicagodefender.com", "michiganchronicle.com", "amsterdamnews.com", "lasentinel.net", "blackpressusa.com", "cbsnews.com", "today.com", "upworthy.com", "goodnewsnetwork.org", "sunnyskyz.com", "insideedition.com", "yahoo.com", "fox5atlanta.com", "11alive.com", "wsbtv.com"];
 const T=process.env.APIFY_TOKEN; const rows=[]; let errs=0;
 const one=async(d)=>{ for(let a=0;a<2;a++){ try{
   const u='https://news.google.com/rss/search?q='+encodeURIComponent('site:'+d+' when:6d')+'&hl=en-US&gl=US&ceid=US:en';
   const r=await context.sendRequest({url:u,responseType:'text',timeout:{request:30000}});
   const b=String(r.body||''); const re=/<item>([\s\S]*?)<\/item>/g; let m;
   while((m=re.exec(b))){const x=m[1]; const g=(t)=>{const k=x.match(new RegExp('<'+t+'[^>]*>([\\s\\S]*?)</'+t+'>'));return k?k[1].replace(/<!\[CDATA\[|\]\]>/g,'').replace(/[\t\n]/g,' ').trim():''}; rows.push([d,g('pubDate'),g('title'),g('link')].join('\t'));}
   return; }catch(e){} } errs++; };
 for(let i=0;i<D.length;i+=15){ await Promise.all(D.slice(i,i+15).map(one)); }
 const gh=(await (await fetch('https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/GITHUB_TOKEN?token='+T)).text()).trim().replace(/"/g,'');
 const api='https://api.github.com/repos/HustlersNHoodMedia/hnth/contents/qc/tmp_radar1107/rss6d.tsv';
 const H={Authorization:'token '+gh,'User-Agent':'hnth','Content-Type':'application/json'};
 let sha;const ge=await fetch(api,{headers:H});if(ge.ok)sha=(await ge.json()).sha;
 const body={message:'tmp radar',content:Buffer.from(rows.join('\n')).toString('base64')};if(sha)body.sha=sha;
 const p=await fetch(api,{method:'PUT',headers:H,body:JSON.stringify(body)});
 return {doms:D.length,rows:rows.length,errs,put:p.status};
}