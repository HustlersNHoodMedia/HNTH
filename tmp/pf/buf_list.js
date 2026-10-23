async function(context){
const T=process.env.APIFY_TOKEN;const S='https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/';
const g=async k=>{try{const r=await context.sendRequest({url:S+k+'?token='+T,responseType:'text',throwHttpErrors:false});return r.statusCode==200?String(r.body).trim().replace(/"/g,''):''}catch(e){return ''}};
const key=await g('BUFFER_KEY');
const q='query { posts(first: 50, input:{organizationId:"6a75d51386d18905e5fbde9e", filter:{status:[scheduled]}}) { edges { node { id dueAt status channelId channelService text } } } }';
const r=await context.sendRequest({url:'https://api.buffer.com/graphql',method:'POST',headers:{'Authorization':'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({query:q}),responseType:'text',throwHttpErrors:false,timeout:{request:55000}});
let out=String(r.body); try{const j=JSON.parse(out); out=(j.data.posts.edges||[]).map(e=>({id:e.node.id,due:e.node.dueAt,ch:e.node.channelId,svc:e.node.channelService,t:String(e.node.text||'').slice(0,70)}));}catch(e){}
return {out};}
