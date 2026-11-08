async function pageFunction(context){
const out={gh:[],drive:[]};
const T=process.env.APIFY_TOKEN;const S='https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/';
const g=async k=>{const r=await fetch(S+k+'?token='+T);return r.ok?(await r.text()).trim().replace(/"/g,''):''};
const gh=await g('GITHUB_TOKEN');
const buf=Buffer.from(await (await fetch('https://d2ol7oe51mr4n9.cloudfront.net/user_36EWPJnCcPgODjtpGMYEIv0KATL/0dde70ae-8534-41f8-a6ef-9f48980eaa0d.zip')).arrayBuffer());
let o=0;const files=[];
while(o<buf.length-30&&buf.readUInt32LE(o)===0x04034b50){const cs=buf.readUInt32LE(o+18),nl=buf.readUInt16LE(o+26),el=buf.readUInt16LE(o+28);const name=buf.slice(o+30,o+30+nl).toString();const st=o+30+nl+el;let data=buf.slice(st,st+cs);if(name.endsWith('.txt'))data=Buffer.from(data.toString().replace(' this week',''));files.push({name,data});o=st+cs;}
let commit='';
for(const f of files){const api='https://api.github.com/repos/HustlersNHoodMedia/hnth/contents/qc/'+f.name;const H={Authorization:'token '+gh,'User-Agent':'hnth','Content-Type':'application/json'};
 let sha;const ge=await fetch(api,{headers:H});if(ge.ok)sha=(await ge.json()).sha;
 const body={message:'magic '+f.name,content:f.data.toString('base64')};if(sha)body.sha=sha;
 const p=await fetch(api,{method:'PUT',headers:H,body:JSON.stringify(body)});const j=await p.json().catch(()=>({}));if(j.commit)commit=j.commit.sha;out.gh.push(f.name+' '+p.status);}
out.commit=commit;
const raw=n=>'https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/'+commit+'/qc/'+n;
const B='https://script.google.com/macros/s/AKfycbz6CPej2P-At1aW5oj_irLeaRXNMvwUgmhH1u-2d490S90nyJci64vpw0Lb_bq2gGnp/exec?key=hnth2026&root=hnth';
for(const n of ['20261107_magic_1_COVER.png','20261107_magic_caption.txt']){
try{const r=await fetch(B+'&url='+encodeURIComponent(raw(n))+'&name='+encodeURIComponent(n)+'&folder='+encodeURIComponent('2026-11-07 Magic Johnson'));out.drive.push(n+' '+r.status+' '+(await r.text()).slice(0,300))}catch(e){out.drive.push('ERR '+e.message)}}
const key=await g('BUFFER_KEY');const ch=await g('BUFFER_CHANNEL_TIKTOK_HNTH');
const text=(await (await fetch(raw('20261107_magic_caption.txt'))).text()).trim();
out.cap=text.slice(0,60)+' ... '+(text.includes('this week')?'BAD':'OK');
const assets=['20261107_magic_tt_1.jpg'].map(n=>'{ image: { url: '+JSON.stringify(raw(n))+' } }').join(',');
const m='mutation CreatePost($text: String!, $channelId: ChannelId!) { createPost(input: { text: $text channelId: $channelId schedulingType: automatic mode: customScheduled dueAt: "2026-11-08T22:30:00.000Z" assets: ['+assets+'] }) { ... on PostActionSuccess { post { id dueAt status } } ... on MutationError { message } } }';
const r=await fetch('https://api.buffer.com/graphql',{method:'POST',headers:{Authorization:'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({query:m,variables:{text,channelId:ch}})});
out.buf=(await r.text()).slice(0,500);
return out;}
