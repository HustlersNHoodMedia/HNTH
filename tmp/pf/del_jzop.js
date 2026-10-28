async function(context){
const T=process.env.APIFY_TOKEN;const S='https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/';
const g=async k=>{const r=await context.sendRequest({url:S+k+'?token='+T,responseType:'text',throwHttpErrors:false});return String(r.body).trim().replace(/"/g,'')};
const key=await g('BUFFER_KEY');
const q=async(m,v)=>{const r=await context.sendRequest({url:'https://api.buffer.com/graphql',method:'POST',headers:{'Authorization':'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({query:m,variables:v||{}}),responseType:'text',throwHttpErrors:false});return String(r.body)};
const out={};
for(const id of ['6ae1f1cc41c946fe22cd03ba','6ae1f1cd8f09daaaac168d6a']){
 out[id]=(await q('mutation D($id: PostId!){ deletePost(input:{id:$id}){ ... on DeletePostSuccess { id } ... on VoidMutationError { message } } }',{id})).slice(0,300);
}
return out;}
