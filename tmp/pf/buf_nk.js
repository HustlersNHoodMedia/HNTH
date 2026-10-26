async function(context){
const T=process.env.APIFY_TOKEN;const S='https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/';
const g=async k=>{try{const r=await context.sendRequest({url:S+k+'?token='+T,responseType:'text',throwHttpErrors:false});return r.statusCode==200?String(r.body).trim().replace(/"/g,''):''}catch(e){return ''}};
const key=await g('BUFFER_KEY');const ch=await g('BUFFER_CHANNEL_TIKTOK_HNTH');
const q=async(m,v)=>{const r=await context.sendRequest({url:'https://api.buffer.com/graphql',method:'POST',headers:{'Authorization':'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({query:m,variables:v||{}}),responseType:'text',throwHttpErrors:false,timeout:{request:60000}});return String(r.body)};
const out={};
const L=await q('query { posts(first: 60, input:{organizationId:"6a75d51386d18905e5fbde9e", filter:{channelIds:["'+ch+'"], status:[scheduled]}}) { edges { node { id dueAt text } } } }');
let sch=[]; try{sch=JSON.parse(L).data.posts.edges.map(e=>({d:e.node.dueAt,t:String(e.node.text||'').slice(0,40)}));}catch(e){out.listerr=L.slice(0,300)}
out.scheduled=sch;
if(sch.some(s=>/Nicole King/.test(s.t))){out.skip='dup';return out;}
if(sch.length>=10){out.skip='limit';return out;}
const C=["2026-10-27T01:30:00.000Z", "2026-10-28T14:00:00.000Z", "2026-10-28T19:00:00.000Z", "2026-10-28T23:00:00.000Z"]; let due=null;
for(const c of C){const t=Date.parse(c); const day=c.slice(0,10); const n=sch.filter(s=>String(s.d).slice(0,10)==day).length; const clash=sch.some(s=>Math.abs(Date.parse(s.d)-t)<90*60000); if(!clash&&n<3){due=c;break;}}
if(!due){out.skip='noslot';return out;}
const assets=["https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/ae907ddc0ed1e76476e702a204b1581557571938/qc/20261026_nicole_tt_1.jpg", "https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/ae907ddc0ed1e76476e702a204b1581557571938/qc/20261026_nicole_tt_2.jpg", "https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/ae907ddc0ed1e76476e702a204b1581557571938/qc/20261026_nicole_tt_3.jpg"].map(u=>'{ image: { url: '+JSON.stringify(u)+' } }').join(', ');
out.due=due;
out.create=(await q('mutation CreatePost($text: String!, $channelId: ChannelId!) { createPost(input: { text: $text channelId: $channelId schedulingType: automatic mode: customScheduled dueAt: "'+due+'" assets: ['+assets+'] }) { ... on PostActionSuccess { post { id dueAt status } } ... on MutationError { message } } }',{text:"Nicole King was getting ready to go back to work at her own salon in Norfolk, Virginia when a driver trying to park hit the gas by mistake and drove an SUV straight through the front window.\n\nShe had been out about seven weeks. This year she went through three surgeries for breast cancer, including a double mastectomy, and that was supposed to be the week she came back.\n\nWhen she got to the shop, the SUV was sitting right in front of her station. Nobody was inside.\n\nShe's been doing hair for 24 years and opened Head Turnerz in 2013. She put about $20,000 of her own money into fixing it, and this month she opened back up with her family, her clients and the neighborhood in there with her. One of her longtime clients told her it was her turn.\n\n\"I can't cry. I don't let things get me down. Life is life and it's gon' happen.\"\n\n#HustlersNTheHood",channelId:ch})).slice(0,500);
return out;}