async function(context){
const T=process.env.APIFY_TOKEN;const S='https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/';
const g=async k=>{try{const r=await context.sendRequest({url:S+k+'?token='+T,responseType:'text',throwHttpErrors:false});return r.statusCode==200?String(r.body).trim().replace(/"/g,''):''}catch(e){return ''}};
const key=await g('BUFFER_KEY');const ch=await g('BUFFER_CHANNEL_TIKTOK_HNTH');
const q=async(m,v)=>{const r=await context.sendRequest({url:'https://api.buffer.com/graphql',method:'POST',headers:{'Authorization':'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({query:m,variables:v||{}}),responseType:'text',throwHttpErrors:false,timeout:{request:60000}});return String(r.body)};
const out={};
const L=await q('query { posts(first: 60, input:{organizationId:"6a75d51386d18905e5fbde9e", filter:{channelIds:["'+ch+'"], status:[scheduled]}}) { edges { node { id dueAt text } } } }');
let sch=[]; try{sch=JSON.parse(L).data.posts.edges.map(e=>({d:e.node.dueAt,t:String(e.node.text||'').slice(0,40)}));}catch(e){out.listerr=L.slice(0,300)}
out.scheduled=sch;
if(sch.some(s=>/Stevie Wonder is suing/.test(s.t))){out.skip='dup';return out;}
if(sch.length>=10){out.skip='limit';return out;}
const C=["2026-10-29T19:00:00.000Z", "2026-10-29T23:00:00.000Z"]; let due=null;
for(const c of C){const t=Date.parse(c); const day=c.slice(0,10); const n=sch.filter(s=>String(s.d).slice(0,10)==day).length; const clash=sch.some(s=>Math.abs(Date.parse(s.d)-t)<90*60000); if(!clash&&n<3){due=c;break;}}
if(!due){out.skip='noslot';return out;}
const assets=["https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/b577a5d5484200385e2d8daac014a41ed04d582f/qc/20261028_stevie_tt_1.jpg"].map(u=>'{ image: { url: '+JSON.stringify(u)+' } }').join(', ');
out.due=due;
out.create=(await q('mutation CreatePost($text: String!, $channelId: ChannelId!) { createPost(input: { text: $text channelId: $channelId schedulingType: automatic mode: customScheduled dueAt: "'+due+'" assets: ['+assets+'] }) { ... on PostActionSuccess { post { id dueAt status } } ... on MutationError { message } } }',{text:"Stevie Wonder is suing to evict his ex-fianc\u00e9e, Carmen Efferson, from a house he owns in Los Angeles.\n\nShe moved in back in July 1988, when the two of them were engaged. They never married, but the deal stayed the same for 38 years: she lived there and never paid him rent.\n\nThis summer his lawyers asked to bring an insurance inspector into the house. She wrote back that she did not consent, and ended the email by telling them to F off. They gave her 30 days to leave, then a final notice in October. She stayed, so he filed the case last week. Along with getting her out, he is asking her to cover the $600 penalty he got hit with when the insurance lapsed.\n\nHer side says Stevie promised her that house was hers, but the deed was never put in her name. Her mother lived there with her until she passed. Now she says she is going to fight it.\n\nStevie is 76 and out on his Songs in the Key of Life anniversary tour.\n\n#HustlersNTheHood",channelId:ch})).slice(0,500);
return out;}