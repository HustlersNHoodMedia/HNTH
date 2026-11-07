async function pageFunction(context){
const out={gh:[],drive:[]};
const T=process.env.APIFY_TOKEN;const S='https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/';
const g=async k=>{const r=await fetch(S+k+'?token='+T);return r.ok?(await r.text()).trim().replace(/"/g,''):''};
const gh=await g('GITHUB_TOKEN');
const buf=Buffer.from(await (await fetch('https://d2ol7oe51mr4n9.cloudfront.net/user_36EWPJnCcPgODjtpGMYEIv0KATL/4b1de74a-c0af-4605-ac94-82bdd0e9878c.zip')).arrayBuffer());
let o=0;const files=[];
while(o<buf.length-30&&buf.readUInt32LE(o)===0x04034b50){const cs=buf.readUInt32LE(o+18),nl=buf.readUInt16LE(o+26),el=buf.readUInt16LE(o+28);const name=buf.slice(o+30,o+30+nl).toString();const st=o+30+nl+el;files.push({name,data:buf.slice(st,st+cs)});o=st+cs;}
let commit='';
for(const f of files){const api='https://api.github.com/repos/HustlersNHoodMedia/hnth/contents/qc/'+f.name;const H={Authorization:'token '+gh,'User-Agent':'hnth','Content-Type':'application/json'};
 let sha;const ge=await fetch(api,{headers:H});if(ge.ok)sha=(await ge.json()).sha;
 const body={message:'montell single '+f.name,content:f.data.toString('base64')};if(sha)body.sha=sha;
 const p=await fetch(api,{method:'PUT',headers:H,body:JSON.stringify(body)});const j=await p.json().catch(()=>({}));if(j.commit)commit=j.commit.sha;out.gh.push(f.name+' '+p.status);}
out.commit=commit;
const raw=(n,ref)=>'https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/'+(ref||commit)+'/qc/'+n;
const B='https://script.google.com/macros/s/AKfycbz6CPej2P-At1aW5oj_irLeaRXNMvwUgmhH1u-2d490S90nyJci64vpw0Lb_bq2gGnp/exec?key=hnth2026&root=hnth';
const n='20261107_montell_1_COVER_v2.png';
try{const r=await fetch(B+'&url='+encodeURIComponent(raw(n))+'&name='+encodeURIComponent(n)+'&folder='+encodeURIComponent('2026-11-07 Montell Jordan'));out.drive.push(n+' '+r.status+' '+(await r.text()).slice(0,300))}catch(e){out.drive.push('ERR '+e.message)}
const key=await g('BUFFER_KEY');
const text=(await (await fetch(raw('20261107_montell_caption.txt','d74e9659da8049933a3d42b11e10fc61e0040cac'))).text()).trim();
out.cap=text.slice(0,50)+' | '+(text.includes('this week')?'BAD':'OK')+' | '+text.length;
const assets='{ image: { url: '+JSON.stringify(raw('20261107_montell_tt_1_v2.jpg'))+' } }';
const m='mutation E($text: String!) { editPost(input: { id: "6aeedcd09214322f68dacc9b" text: $text dueAt: "2026-11-08T18:00:00.000Z" mode: customScheduled schedulingType: automatic assets: ['+assets+'] }) { ... on PostActionSuccess { post { id dueAt status } } ... on MutationError { message } } }';
const r=await fetch('https://api.buffer.com/graphql',{method:'POST',headers:{Authorization:'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({query:m,variables:{text}})});
out.buf=(await r.text()).slice(0,500);
return out;}
