async function(context){
const T=process.env.APIFY_TOKEN;const S='https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/';
const g=async k=>{try{const r=await context.sendRequest({url:S+k+'?token='+T,responseType:'text',throwHttpErrors:false});return r.statusCode==200?String(r.body).trim().replace(/"/g,''):''}catch(e){return ''}};
const key=await g('BUFFER_KEY');const ch=await g('BUFFER_CHANNEL_TIKTOK_HNTH');
const q=async(m,v)=>{const r=await context.sendRequest({url:'https://api.buffer.com/graphql',method:'POST',headers:{'Authorization':'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({query:m,variables:v||{}}),responseType:'text',throwHttpErrors:false,timeout:{request:60000}});return String(r.body)};
const out={};
const L=await q('query { posts(first: 60, input:{organizationId:"6a75d51386d18905e5fbde9e", filter:{channelIds:["'+ch+'"], status:[scheduled]}}) { edges { node { id dueAt text } } } }');
let sch=[]; try{sch=JSON.parse(L).data.posts.edges.map(e=>({d:e.node.dueAt,t:String(e.node.text||'').slice(0,40)}));}catch(e){out.listerr=L.slice(0,300)}
out.scheduled=sch;
if(sch.some(s=>/Blacc Sam just opened/.test(s.t))){out.skip='dup';return out;}
if(sch.length>=10){out.skip='limit';return out;}
const C=["2026-10-29T14:00:00.000Z","2026-10-29T19:00:00.000Z","2026-10-29T23:00:00.000Z"]; let due=null;
for(const c of C){const t=Date.parse(c); const day=c.slice(0,10); const n=sch.filter(s=>String(s.d).slice(0,10)==day).length; const clash=sch.some(s=>Math.abs(Date.parse(s.d)-t)<90*60000); if(!clash&&n<3){due=c;break;}}
if(!due){out.skip='noslot';return out;}
const assets=["https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/45e65d561bbf2f90d1923f3cbc842743b4d17ba7/qc/20261028_blaccsam_tt_1.jpg", "https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/45e65d561bbf2f90d1923f3cbc842743b4d17ba7/qc/20261028_blaccsam_tt_2.jpg", "https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/45e65d561bbf2f90d1923f3cbc842743b4d17ba7/qc/20261028_blaccsam_tt_3.jpg"].map(u=>'{ image: { url: '+JSON.stringify(u)+' } }').join(', ');
out.due=due;
out.create=(await q('mutation CreatePost($text: String!, $channelId: ChannelId!) { createPost(input: { text: $text channelId: $channelId schedulingType: automatic mode: customScheduled dueAt: "'+due+'" assets: ['+assets+'] }) { ... on PostActionSuccess { post { id dueAt status } } ... on MutationError { message } } }',{text:"Blacc Sam just opened the newest Marathon Burger inside LAX, in Terminal 1.\n\nHe said that's the same terminal he and Nipsey used to fly out of every time they left LA.\n\nHe didn't just cut a ribbon. He was back in the kitchen in a white tee and gloves, cooking right next to his staff.\n\nNip started the Marathon brand in 2010. His big brother has kept it moving with Marathon Burger in Venice, Canoga Park, Long Beach and West Hollywood, and now the airport has its own breakfast menu you can't get at the other spots.\n\nHe also said Jay-Z has done more for the family and the business than people know.\n\nThe marathon continues.\n\n#HustlersNTheHood",channelId:ch})).slice(0,500);
return out;}