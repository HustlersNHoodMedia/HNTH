async function(context){
 const jobs=[{"folder": "DEION SANDERS MOM 1989 CARRUSEL 2026-10-23", "name": "20261023_deion_COVER_v4_single.png", "url": "https://raw.githubusercontent.com/HustlersNHoodMedia/HNTH/ad07ddb6217effc85ca960e12212adc595c84c72/qc/20261023_deion_COVER_v4_single.png"}]; const out=[];
 const B='https://script.google.com/macros/s/AKfycbz6CPej2P-At1aW5oj_irLeaRXNMvwUgmhH1u-2d490S90nyJci64vpw0Lb_bq2gGnp/exec?key=hnth2026&root=hnth';
 for(const j of jobs){ try{ const r=await context.sendRequest({url:B+'&url='+encodeURIComponent(j.url)+'&name='+encodeURIComponent(j.name)+'&folder='+encodeURIComponent(j.folder),responseType:'text',throwHttpErrors:false,timeout:{request:90000}}); out.push(j.name+' '+r.statusCode+' '+String(r.body).slice(0,160)); }catch(e){ out.push(j.name+' ERR '+String(e.message).slice(0,80)); } }
 return {out};
}