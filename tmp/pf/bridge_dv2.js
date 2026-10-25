async function(context){
 const jobs=[{"folder": "DOLVETT LIBRO TRABAJADORA SOCIAL CARRUSEL 2026-10-25", "name": "20261025_dolvett_1_COVER_v2.png", "url": "https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/23ba1c709a79e70020dbd2a95e0f522a24b230a5/qc/20261025_dolvett_1_COVER_v2.png"}]; const out=[];
 const B='https://script.google.com/macros/s/AKfycbz6CPej2P-At1aW5oj_irLeaRXNMvwUgmhH1u-2d490S90nyJci64vpw0Lb_bq2gGnp/exec?key=hnth2026&root=hnth';
 for(const j of jobs){ try{ const r=await context.sendRequest({url:B+'&url='+encodeURIComponent(j.url)+'&name='+encodeURIComponent(j.name)+'&folder='+encodeURIComponent(j.folder),responseType:'text',throwHttpErrors:false,timeout:{request:90000}}); out.push(j.name+' '+r.statusCode+' '+String(r.body).slice(0,160)); }catch(e){ out.push(j.name+' ERR '+String(e.message).slice(0,80)); } }
 return {out};
}