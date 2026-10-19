# HNTH - PAGINAS A VIGILAR

Lista viva. **El analista la actualiza cada corrida**: suma las que descubre, marca las que dejaron de servir, corrige handles que cambiaron.

**Para que sirve:** ver que formatos y angulos estan funcionando afuera. No para copiar temas - para detectar mecanicas que podamos adaptar.

**Como se lee la columna "por que":** una pagina puede servir aunque su cultura no sea la nuestra. Si el FORMATO funciona, se adapta.

---

## METODO RESUELTO (05/10/2026) - COMO SE MIDE UNA CUENTA DE ALTA FRECUENCIA

El scrape de perfil **no sirve** para cuentas que postean muchas veces por dia: devuelve solo lo del dia, todo con menos de 24h, y la mediana sale inventada o no sale.

**Quedo medido con `theneighborhoodtalk`:** los 6 shortCodes guardados el 28/09, re-medidos a los 7-8 dias por `directUrls`, dieron **mediana 8.368**. El scrape de perfil venia informando 2.662 y despues "no medible" tres corridas seguidas. **Subestimaba por ~3x.**

**VALIDADO EL 12/10 Y EL 19/10, tercera corrida.** El metodo esta cerrado y ya destrabo a las tres cuentas de alta frecuencia de la lista: `theneighborhoodtalk` (8.368 -> 7.993 -> 4.113), `raphousetv` (6.757 -> 5.156) y **`blacknews`, que el 19/10 dio su primera mediana madura (311) despues de tres corridas "no medible"**.

**El procedimiento, entonces:** en cada corrida se GUARDAN los shortCodes que devuelve el perfil, y la mediana de esa cuenta se calcula la semana siguiente midiendo ESOS shortCodes por `directUrls`. La mediana de una cuenta de alta frecuencia siempre va una semana atrasada, y asi es comparable.

**Nota del 19/10 sobre que NO hace el metodo:** da una mediana comparable, no una estable. `theneighborhoodtalk` cayo 49% y `raphousetv` 24% en una semana, con n=7 las dos veces. La mediana de estas cuentas se lee como orden de magnitud, no como numero.

---

## VIGILANDO

| Cuenta | Plataforma | Por que esta aca | Ultima revision |
|---|---|---|---|
| `theneighborhoodtalk` | IG | **El motor de comentarios mas fuerte de la lista, por un margen amplio.** Mediana **4.113** (n=7 por `directUrls`), despues de 8.368 y 7.993: **cae 49% en una semana**, tercera medicion por el mismo metodo. Los likes se mueven; el motor de debate no: ratios de **37,5% - 20,2% - 7,4% - 7,0% - 5,5% - 5,0% - 2,2%**, con 6.908 comentarios en un solo post y 3.170 en otro. Nunca dio semilla: se la mira por el carril de Repackage. **Sin semilla: strike 4** - ver la nota de abajo sobre que mide el contador. **shortCodes guardados para la proxima:** `DeqGTFHDblv` - `DeqBxezJ0xM` - `DeqG0Jyv7wl` - `DeqLbbQtVSN` - `DepR1FBPrT8` - `DeqNgVatvNZ` - `DeqAVzapTE6` - `DeqIpvYtqXI` | 2026-10-19 |
| `raphousetv` | IG | Fuente de SEMILLA y termometro de discusion. Segunda mediana madura: **5.156** (n=7 por `directUrls`), **baja 24%** desde 6.757. Motor de discusion real pero un escalon abajo del de `theneighborhoodtalk`: **23,7% - 11,5% - 7,4% - 6,1% - 2,6% - 1,3% - 0,5%**. Un post de 43.817 likes en la tanda. **Sin semilla: strike 4.** **shortCodes guardados:** `DeqM7v0hOtb` - `DepyXBqoKnY` - `DeqWSt_O1et` - `DepV8T1tBME` - `Dep9EKngSZi` - `Dept8p-NS1U` - `DepdqoHhZwk` | 2026-10-19 |
| `blacknews` | IG | **LA UNICA CUENTA DE LA LISTA QUE CUMPLE SU MOTIVO DECLARADO, SEGUNDA SEMANA SEGUIDA.** El 19/10 volvio a dar semilla: **KA'SHEENA DANIELS** (blacknews 9-oct -> WVUE), publicada con 1,13x la vara y **el ratio de comentarios mas alto de la semana (8,2%, 416 com.)**. La semana anterior habia dado Loganville Soul Food (3,98x). **Strike 0.** **Primera mediana madura: 311** (n=7 por `directUrls`) - confirma con numero lo que el archivo venia escribiendo: **sus posts propios son chicos y no es por eso que se la mira.** Levanta historias viejas y las vuelve actuales. **shortCodes guardados:** `DemxMGMBnmY` - `Demy20GhZa7` - `DemwOTUBHca` - `Dem0MnjBneI` - `Den14R4Oker` | 2026-10-19 |
| `goodnews_movement` | IG | Fuera de nuestra cultura, **solo formato**. Mediana 16.552 -> 22.034 -> 43.332 -> 27.220 -> 19.983 -> 32.955 -> **24.570 (n=8)**. Vuelve a bajar tras el rebote. Los reels siguen dominando (52.276 - 43.647 - 38.902 - 28.926 arriba; la unica foto del scrape, 8.754, es de las mas bajas). **Octava medicion sin que la duracion prediga nada**; la hipotesis del no-reel sigue retirada desde el 28/09 y no se reabre. **Sobre el strike:** esta cuenta esta declarada "solo formato" desde que entro - nunca iba a dar semilla, y el contador de salida mide semillas. **El contador le mide algo que no puede dar.** Sigue anotado para que el operador decida si se queda por formato con otro criterio, o sale. El analista no lo resuelve solo | 2026-10-19 |

**Nota sobre el contador de strikes (12/10, sin resolver al 19/10):** lo que el contador mide es "llego a PRODUCED como fuente". Para `blacknews` eso es exactamente su motivo declarado, y lo cumplio dos semanas seguidas. Para `theneighborhoodtalk` y `raphousetv` el motivo declarado es **el motor de comentarios** (carril de Repackage); ese carril **corrio una vez esta ventana** - Code Names, sobre un post de TSR, no de estas dos - asi que siguen sin oportunidad real de aparecer. Para `goodnews_movement` el motivo es formato. **Tres de las cuatro siguen en strike por un criterio que no mide su motivo**, ahora en 4. Es una observacion de metodo, no una decision: queda escrita para el operador.

---

## CANDIDATAS (medidas, esperando la segunda semilla)

| Cuenta | Que se le midio | Que falta |
|---|---|---|
| `becauseofthem` | IG. **Mediana madura 5.254 (n=6)**, arriba de nuestra propia vara de 4.510, y subiendo desde 3.229. Rango 1.747 a 21.285, ratios 0,6% a 4,6%. Produce consistentemente y con numeros reales | Una sola semilla historica (Teddy Gant, 20-sep). El criterio pide dos: **no entra**. Sin aparecer en PRODUCED ni la ventana del 12/10 ni la del 19/10. Si aparece como fuente una vez mas, entra |
| `rhtvmusic` | IG, satelite de RapHouseTV. **Varianza brutal entre corridas:** 33.950 likes el 11-oct contra **759 y 1.354** en los maduros del 19/10 (mediana n=2: 1.057). Pero un post del 18-oct va **14.702 likes / 3.054 com. = 20,8%** a las 14h. Motor de comentarios real, numeros impredecibles | n=2 maduros, insuficiente. **shortCodes guardados:** `DepuYRLJC-a` - `DepSrxJpDA7` - `DeiUHAdMHNA` - `DefN1o8Bt13` |
| `rhtvgame.ing` | IG. Mismo satelite. Un post del 18-oct: **3.920 likes / 73 com. (1,9%)** a las 15h, contra 1.237 / 124 (10,0%) el 12/10. Numeros chicos | Sin maduros en dos corridas. n insuficiente |
| `rap.housetv` | IG. **Detectada el 19/10 sin buscarla**, tercer satelite del grupo que cae mezclado en el feed de la principal. Un post del 13-oct: **439 likes / 103 com. = 23,5%** - ratio altisimo sobre numeros chicos | n=1. Se le guardan shortCodes la proxima y se le mide mediana madura antes de decidir |

---

## COMO SUMAR PAGINAS NUEVAS

No hace falta que el operador las nombre. El analista las encuentra:

1. **Desde los posts que ya detecto el radar.** Cuando una historia explota, mirar que paginas grandes la levantaron. Las que aparecen seguido, entran a la lista.
2. **Por busqueda de formato.** Buscar en TikTok e IG el tipo de pieza que nos interesa y ver que cuentas la producen bien de forma consistente.
3. **Las que nos copian.** Si una pagina grande replico un post nuestro, es porque mira lo mismo que nosotros. Vale vigilarla.
4. **Las que ya nos dieron semilla.** Si una cuenta aparece como fuente en PRODUCED dos veces en una semana, entra (asi entro `blacknews` el 21/09, y ya puso tres piezas en el feed en un mes).
5. **Las que caen de un scrape ajeno.** Las cuentas satelite aparecen mezcladas en el feed de la principal - asi entraron `rhtvmusic` y `rhtvgame.ing` el 12/10 y `rap.housetv` el 19/10, sin buscarlas.

**Criterio para que entre:** que produzca **consistentemente**, no un hit suelto. Y que tenga algo que nosotros no estemos haciendo - si hace exactamente lo mismo, no aporta.

**Criterio para que salga:** tres revisiones seguidas sin nada aprovechable. (Ver la nota de arriba sobre que mide el contador.)

**El barrido POR HISTORIA sigue sin cerrar, septima corrida.** Ruta anotada, sin buscador web: cosechar los comentarios de nuestro propio post mas fuerte con el scraper de IG y leer los @ que aparecen ahi. **Candidato nuevo de esta corrida:** `DenPSATFoa_` (Ka'Sheena Daniels, **416 comentarios en 37h, 8,2%**). Candidatos anteriores que siguen sin usarse: Darryl Bell / SpaceX (`DeWwTANhnLc`, 497 com., 20,1%), Tuskegee (`Ddm4EdwM8tV`, 1.147 com.) y Tisha (`Dd-Bj0Flntl`, 150 com.). Fuente directa del lado de la semilla, identificada y sin usar: `@jaynoz_` en TikTok (89.300 fans).

**Dato de esta corrida:** la lista volvio a entregar con una sola cuenta, igual que el 12/10, y es la misma: `blacknews`. **Dos semanas seguidas en que el 100% de las semillas de watchlist salen de una sola de las cuatro cuentas vigiladas.**

**Fuente nueva que NO esta en esta lista y produjo el arranque mas alto de la semana:** el carril **evergreen (metodo Pubity)**, abierto el 18-oct. No es una cuenta a vigilar sino un metodo - famoso + gesto familiar con objeto concreto + giro, con la fecha del hecho en la caption. Primera pieza (Kevin Hart) 24.101 likes a las 14,7h. Si el carril se sostiene, `pubity` entra a esta lista como pagina de formato; con n=1 todavia no.

---

## QUE MIRAR EN CADA UNA

- **Formato**: estructura de post que no usamos? largo distinto? otra forma de tapa?
- **Angulo**: que frame le dieron a una historia que nosotros tambien teniamos?
- **Ritmo**: cuantas veces por dia postean? a que hora?
- **Lo que evitan**: a veces lo mas util es notar que NO hacen.

**Paginas fuera de nuestra cultura:** sirven igual, pero solo por el formato. Anotar la mecanica, nunca el tema.

**Lo que se cerro al 19/10:** el metodo de `directUrls` quedo validado en tercera corrida y le saco a `blacknews` su primera mediana madura - las tres cuentas de alta frecuencia de la lista ya tienen numero. **Lo que se sostiene:** ninguna gana por resolucion; la duracion de reel no predice nada (octava medicion); la ventaja del no-reel sigue retirada; `theneighborhoodtalk` sigue siendo el motor de comentarios mas fuerte de la lista por un margen amplio, incluso con la mediana cayendo a la mitad. **Lo que se movio:** `theneighborhoodtalk` -49% y `raphousetv` -24% en una semana; `goodnews_movement` vuelve a bajar a 24.570; `blacknews` repite semilla y queda en strike 0; `becauseofthem` sube a 5.254 y sigue sin entrar; entra `rap.housetv` como candidata.

---

## DESCARTADAS

| Cuenta | Motivo | Fecha |
|---|---|---|
| `blackinformationnetwork` | **Strike 3 de 3.** Tres revisiones seguidas sin llegar a PRODUCED bajo su motivo declarado ("fuente de semilla"). Lo medido queda anotado y no hace falta volver: mediana 660 -> 265 -> 671 -> **1.062 (n=6)**, posts propios chicos, y un motor de comentarios real pero no excepcional (5,2% con 225 com. sobre 4.344; 13,9% medido el 28/09). Dio una sola semilla en todo el periodo (Nolan Wells, 23-sep). Si vuelve a aparecer como fuente en PRODUCED, se re-evalua | 2026-10-05 |
| `humansofny` | **Strike 3 de 3.** Tercera revision seguida sin material nuevo: al 07/09 lo mas reciente que devuelve el scrape sigue siendo de octubre de 2025. Lo que ya se le midio queda anotado y no hace falta volver: carrusel APAISADO 1440x960 (257.035 likes) y motor real en el reel vertical LARGO de una persona a camara (99s = 544.599; 155s = 106.098; 45s = 107.579). Si vuelve a publicar, se re-evalua | 2026-09-07 |
