async function(context){
const T=process.env.APIFY_TOKEN;const S='https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/';
const g=async k=>{try{const r=await context.sendRequest({url:S+k+'?token='+T,responseType:'text',throwHttpErrors:false});return r.statusCode==200?String(r.body).trim().replace(/"/g,''):''}catch(e){return ''}};
const key=await g('BUFFER_KEY');const ch=await g('BUFFER_CHANNEL_TIKTOK_HNTH');
const P=[{"name": "will", "due": "2026-10-26T19:00:00.000Z", "text": "Will Smith's father ran a refrigeration shop in Philly. One day he decided the shop needed a new wall, and he put Will and his brother Harry on the job.\n\nEvery day after school they dug the foundation and mixed the concrete by hand, one brick at a time.\n\nWill looked at that hole and thought it would never be anything but a hole. It took them a year and a half.\n\nWhen it was done, their father stood there with them and said: \"Don't y'all never tell me you can't do something.\"\n\n#HustlersNTheHood", "urls": ["https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/74d942f1dd411fe93edb991dd26c3877a1b77ccd/qc/20261023_will_tt_1.jpg"]}]; const out={};
for(const p of P){
 const assets=p.urls.map(u=>'{ image: { url: '+JSON.stringify(u)+' } }').join(', ');
 const m='mutation CreatePost($text: String!, $channelId: ChannelId!) { createPost(input: { text: $text channelId: $channelId schedulingType: automatic mode: customScheduled dueAt: "'+p.due+'" assets: ['+assets+'] }) { ... on PostActionSuccess { post { id dueAt status } } ... on MutationError { message } } }';
 try{const r=await context.sendRequest({url:'https://api.buffer.com/graphql',method:'POST',headers:{'Authorization':'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({query:m,variables:{text:p.text,channelId:ch}}),responseType:'text',throwHttpErrors:false,timeout:{request:60000}});out[p.name]=String(r.body).slice(0,800)}catch(e){out[p.name]='ERR '+e.message}
}
return out;}