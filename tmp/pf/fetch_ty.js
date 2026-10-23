async function(context){
const t=process.env.APIFY_TOKEN;
const gh=String((await context.sendRequest({url:'https://api.apify.com/v2/key-value-stores/IMS281Dl1YSeVNwmi/records/GITHUB_TOKEN?token='+t,responseType:'text'})).body).trim();
const U={"ty_v.mp4": "https://instagram.fbne9-1.fna.fbcdn.net/o1/v/t2/f2/m86/AQOv11u84LycI5KOvkwVmVJFNysh0nRlKvffSF-v9cyEG7NVV2o4UoVFNvfHSV-tSjNfC99rEXBT_upln2Z3lvzvw30JmHL9xZxE6pQ.mp4?_nc_cat=107&_nc_oc=AdpJWqfVUblYpAsDYKHVS3aZjWHfPUIYA4YeC0wVDsc7ZbQ5dvo8towsYhhsp9xfOKw&_nc_sid=5e9851&_nc_ht=instagram.fbne9-1.fna.fbcdn.net&_nc_ohc=ak5YcXd8jzYQ7kNvwEHWLE2&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTEwOTIwNTU0MTcwMzM2NCwiYXNzZXRfYWdlX2RheXMiOjAsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjoxNDEsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=24ca34ba6cbb56df&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC80NzM3REJCQzE2Rjk0QTM3ODJFQ0ZGRDE4NDA2RDI2MF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzlDMzI0OEUwRkEwQzQwNUQ4MEZFODM3MjRBNEIyNjk5X2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACaIu96kobT4AxUCKAJDMywXQGGzMzMzMzMYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&_nc_gid=U3gCErCDaZwPsTt6QlJ8Fg&_nc_ss=70980&_nc_map=urlgen_bucketless&_nc_zt=28&oh=00_AQM-K_RRD5rF7iY1GZcgo92IH3TJjccaAsBmLMLWWSswMg&oe=6ADD2C78"}; const out={};
for(const [name,u] of Object.entries(U)){
 try{
  const r=await context.sendRequest({url:u,responseType:'buffer',throwHttpErrors:false,headers:{'User-Agent':(u.includes('fbsbx')?'Googlebot-Image/1.0':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36'),'Accept':'image/avif,image/webp,image/*,*/*'}});
  const b=r.rawBody||r.body; const len=b?b.length:0;
  out[name]=r.statusCode+' '+len+' '+(r.headers['content-type']||'');
  if(r.statusCode==200 && len>5000){
   const p='qc/src/'+name;
   let sha; try{const g=await context.sendRequest({url:'https://api.github.com/repos/HustlersNHoodMedia/HNTH/contents/'+p,headers:{Authorization:'token '+gh,'User-Agent':'hnth'},responseType:'json',throwHttpErrors:false}); if(g.statusCode==200) sha=g.body.sha;}catch(e){}
   const w=await context.sendRequest({url:'https://api.github.com/repos/HustlersNHoodMedia/HNTH/contents/'+p,method:'PUT',headers:{Authorization:'token '+gh,'User-Agent':'hnth','Content-Type':'application/json'},body:JSON.stringify({message:'src '+name,content:Buffer.from(b).toString('base64'),sha}),responseType:'text',throwHttpErrors:false});
   out[name]+=' gh'+w.statusCode;
  }
 }catch(e){out[name]='ERR '+e.message}
}
return out;}