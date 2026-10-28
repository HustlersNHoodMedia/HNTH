async function(context){
const T=process.env.APIFY_TOKEN;const S='https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/';
const g=async k=>{try{const r=await context.sendRequest({url:S+k+'?token='+T,responseType:'text',throwHttpErrors:false});return r.statusCode==200?String(r.body).trim().replace(/"/g,''):''}catch(e){return ''}};
const key=await g('BUFFER_KEY');const ch=await g('BUFFER_CHANNEL_TIKTOK_HNTH');
const q=async(m,v)=>{const r=await context.sendRequest({url:'https://api.buffer.com/graphql',method:'POST',headers:{'Authorization':'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({query:m,variables:v||{}}),responseType:'text',throwHttpErrors:false,timeout:{request:60000}});return String(r.body)};
const out={};
const L=await q('query { posts(first: 60, input:{organizationId:"6a75d51386d18905e5fbde9e", filter:{channelIds:["'+ch+'"], status:[scheduled]}}) { edges { node { id dueAt text } } } }');
let sch=[]; try{sch=JSON.parse(L).data.posts.edges.map(e=>({d:e.node.dueAt,t:String(e.node.text||'').slice(0,40)}));}catch(e){out.listerr=L.slice(0,300)}
out.scheduled=sch;
if(sch.some(s=>/Oprah's\ Book\ Club\ turned\ 30/.test(s.t))){out.skip='dup';return out;}
if(sch.length>=10){out.skip='limit';return out;}
const C=["2026-10-29T23:00:00.000Z", "2026-10-30T19:00:00.000Z"]; let due=null;
for(const c of C){const t=Date.parse(c); const day=c.slice(0,10); const n=sch.filter(s=>String(s.d).slice(0,10)==day).length; const clash=sch.some(s=>Math.abs(Date.parse(s.d)-t)<90*60000); if(!clash&&n<3){due=c;break;}}
if(!due){out.skip='noslot';return out;}
const assets=["https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/0332d328c951eeb2ffdc600cddb63deedb153b7e/qc/20261028_oprah_tt_1.jpg"].map(u=>'{ image: { url: '+JSON.stringify(u)+' } }').join(', ');
out.due=due;
out.create=(await q('mutation CreatePost($text: String!, $channelId: ChannelId!) { createPost(input: { text: $text channelId: $channelId schedulingType: automatic mode: customScheduled dueAt: "'+due+'" assets: ['+assets+'] }) { ... on PostActionSuccess { post { id dueAt status } } ... on MutationError { message } } }',{text:"Oprah's Book Club turned 30 this fall, and the habit behind it goes back to a barbershop in Tennessee.\n\nVernon Winfrey cut hair for a living. When his daughter came to live with him as a teenager, the house had rules, and one of them was a book every week with a written report to go with it. Grades had a floor too. \"You can't bring C's in this house because you are not a C student,\" he told her.\n\nShe kept reading. By 19 she was co-anchoring the evening news. In 1996 she started a book club on her show, and one pick could put a novel on the bestseller list overnight. Publishers called it the Oprah effect.\n\nOprah has said it plainly: her father saved her. He kept cutting hair for decades and served on the city council. He passed in 2022 at 89, with his daughter by his side.\n\n#HustlersNTheHood",channelId:ch})).slice(0,500);
return out;}