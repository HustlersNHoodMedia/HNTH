async function(context){
const T=process.env.APIFY_TOKEN;const S='https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/';
const g=async k=>{try{const r=await context.sendRequest({url:S+k+'?token='+T,responseType:'text',throwHttpErrors:false});return r.statusCode==200?String(r.body).trim().replace(/"/g,''):''}catch(e){return ''}};
const key=await g('BUFFER_KEY');const ch=await g('BUFFER_CHANNEL_TIKTOK_HNTH');
const q=async(m,v)=>{const r=await context.sendRequest({url:'https://api.buffer.com/graphql',method:'POST',headers:{'Authorization':'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({query:m,variables:v||{}}),responseType:'text',throwHttpErrors:false,timeout:{request:60000}});return String(r.body)};
const out={};
const L=await q('query { posts(first: 60, input:{organizationId:"6a75d51386d18905e5fbde9e", filter:{channelIds:["'+ch+'"], status:[scheduled]}}) { edges { node { id dueAt text } } } }');
let sch=[]; try{sch=JSON.parse(L).data.posts.edges.map(e=>({d:e.node.dueAt,t:String(e.node.text||'').slice(0,40)}));}catch(e){out.listerr=L.slice(0,300)}
out.scheduled=sch;
if(sch.some(s=>/Jay\-Z\ is\ headlining\ the\ Super\ Bowl/.test(s.t))){out.skip='dup';return out;}
if(sch.length>=10){out.skip='limit';return out;}
const C=["2026-10-29T19:00:00.000Z", "2026-10-30T14:00:00.000Z"]; let due=null;
for(const c of C){const t=Date.parse(c); const day=c.slice(0,10); const n=sch.filter(s=>String(s.d).slice(0,10)==day).length; const clash=sch.some(s=>Math.abs(Date.parse(s.d)-t)<90*60000); if(!clash&&n<3){due=c;break;}}
if(!due){out.skip='noslot';return out;}
const assets=["https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/0332d328c951eeb2ffdc600cddb63deedb153b7e/qc/20261028_jayz_tt_1.jpg"].map(u=>'{ image: { url: '+JSON.stringify(u)+' } }').join(', ');
out.due=due;
out.create=(await q('mutation CreatePost($text: String!, $channelId: ChannelId!) { createPost(input: { text: $text channelId: $channelId schedulingType: automatic mode: customScheduled dueAt: "'+due+'" assets: ['+assets+'] }) { ... on PostActionSuccess { post { id dueAt status } } ... on MutationError { message } } }',{text:"Jay-Z is headlining the Super Bowl. The NFL, Apple Music and Roc Nation made it official this week: the Super Bowl LXI halftime show, February 14, 2027, at SoFi Stadium.\n\nIt started at a kitchen table in Marcy.\n\nJay-Z was the youngest of four, raised by his mama, Gloria Carter, after his father left. At night he would bang out drum patterns on that table until his brother and sisters woke up. Most parents would have shut it down. Gloria went and bought him a boombox for his birthday, and he started writing rhymes to the beats.\n\nSince 2019 his company has been the one choosing who gets the halftime stage. Rihanna, Usher, Kendrick. This time he put himself on it.\n\nGloria still runs the Shawn Carter Foundation, the scholarship fund the two of them started in 2003.\n\n#HustlersNTheHood",channelId:ch})).slice(0,500);
return out;}