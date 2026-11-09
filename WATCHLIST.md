# HNTH - PAGINAS A VIGILAR

Lista viva. **El analista la actualiza cada corrida**: suma las que descubre, marca las que dejaron de servir, corrige handles que cambiaron.

**Para que sirve:** ver que formatos y angulos estan funcionando afuera. No para copiar temas - para detectar mecanicas que podamos adaptar.

**Como se lee la columna "por que":** una pagina puede servir aunque su cultura no sea la nuestra. Si el FORMATO funciona, se adapta.

---

## 🚨 METODO — ESTADO AL 09/11/2026

**Instrumento actual:** `apify/instagram-scraper` con `directUrls`, grilla propia por cuenta, proxy estandar.
La mediana se calcula **solo sobre las piezas de 24h o mas**.

**Las tres rutas que este archivo uso, para que no se vuelvan a confundir:**

1. **Hasta el 19/10** — `instagram-scraper` de Apify con `directUrls`. La serie historica.
2. **El 26/10** — ruta de emergencia: `og:description` + JSON embebido de cada pagina de post, leidos con
   curl desde el sandbox de Higgsfield. Gratis y exacto, con dos limites: la grilla de perfil sin login
   **corta en 12 items**, y los likes ocultos no se recuperan (centinela `like_count == 3`).
3. **Desde el 02/11** — vuelta a Apify.

**Cotejo de los dos instrumentos (02/11):** sobre los mismos shortCodes de `raphousetv`, 5.960 / 9,8% con
JSON contra 5.326 / 9,3% con Apify. Las dos cifras caen dentro del ruido de un n de ese tamaño. No prueba
que las series sean comparables, **pero es un dato en contra de un desfasaje sistematico grande.**
Se comparan con el n a la vista.

🚨 **HALLAZGO DE METODO DEL 09/11 — `resultsLimit: 10` NO ALCANZA PARA LAS CUENTAS DE ALTA FRECUENCIA.**
Las 10 ultimas piezas de `theneighborhoodtalk` cubren **2h36m**; las de `rap.housetv`, 11 horas; las de
`raphousetv`, 12. **Las tres quedaron SIN MEDIR esta corrida por el instrumento, no por la cuenta.**
Es justo el problema que el procedimiento de guardar shortCodes existe para resolver.
**Lo que corresponde la proxima corrida:** medir los shortCodes guardados abajo, y **subir el limite a 25-30
para esas tres cuentas.**

🚨 **HALLAZGO DE METODO DEL 02/11, SIGUE VIGENTE — LOS shortCodes DE UNA GRILLA PUEDEN NO SER DE ESA CUENTA.**
La grilla devuelve tambien **cross-posts**. Verificado tres veces (02/11: `De3b9WLuiA-` de `cre8tedbywavy`
y `DexrEHBNNom` de `yktesolid` anotados como `rhtvmusic`; `De8hKdQxSt7` de `rhtvgame.ing` anotado como
`raphousetv`). **Cada shortCode se guarda con el `ownerUsername` que devolvio la medicion.**
Esta corrida volvio a pasar: aparecieron `rhtvsports` y `united` dentro de grillas ajenas.

**El procedimiento de fondo:** en cada corrida se GUARDAN los shortCodes que devuelve la grilla, y la mediana
de una cuenta de alta frecuencia se calcula la semana siguiente midiendo ESOS shortCodes ya maduros. La
mediana de estas cuentas siempre va una semana atrasada, y asi es comparable.

**Nota del 19/10 que sigue valiendo:** da una mediana comparable, no una estable. Estas cuentas se mueven
decenas de puntos porcentuales entre semanas con n chico. **Se leen como orden de magnitud, no como numero.**

---

## VIGILANDO

| Cuenta | Plataforma | Por que esta aca | Ultima revision |
|---|---|---|---|
| `theneighborhoodtalk` | IG | **NO MEDIBLE el 09/11: sus 10 ultimas piezas cubren 2h36m, todas de <24h.** Falla del instrumento, no de la cuenta — ver el hallazgo de metodo. Serie de medianas: 8.368 -> 7.993 -> 4.113 (Apify) -> 17.809 (JSON) -> 14.630 (Apify) -> **s/d**. Ratios del 02/11: 121,1% - 13,8% - 13,8% - 9,7% - 7,3% - 6,2% - 4,6%, mediana 9,7%. 🚨 **Es casi todo VIDEO (8 de 10 esta corrida, 7 de 7 el 02/11)**, y su pieza mas comentada medida fue `De8dlwdOoit`: **34.462 likes / 41.733 comentarios = 121% de ratio.** Un ratio arriba de 100% no es una seccion con historias propias: es **mecanica de cebo** (etiquetar, responder para participar). **Para el carril de Repackage eso importa: el conteo alto ahi no implica texto cosechable.** Nunca dio semilla. **Sin semilla: strike 7**, ver la nota sobre que mide el contador. **shortCodes guardados (dueño verificado):** DfgZC6Km9aR · DfgMjI8tH3b · DfgeI48ucbO · DfgHV6vJ2rx · DfgVqsjthYk · DfgQxWHtWq1 · DfgccJqOhgd · DfgUkpHtclO · DfgOt8WteLY · DfgNm3YtVSv | 2026-11-09 |
| `raphousetv` | IG | **NO MEDIBLE el 09/11: las 3 piezas que devolvio la grilla son de <24h.** Serie: 5.156 (Apify) -> 5.960 (JSON) -> 5.326 (Apify) -> **s/d**. Ratio medido el 02/11: **9,3%** (23,4% - 11,7% - 11,5% - 7,1% - 4,3% - 2,6%). **Es la cuenta mas estable de la lista a traves de los tres instrumentos**, y por eso la referencia mas confiable que tiene el archivo — el cotejo de instrumentos se hizo sobre ella. Fuente de semilla y termometro de discusion. **Sin semilla: strike 7.** **shortCodes guardados (dueño verificado):** Dff16xghPGM · DfgHMgmBZhd · DfgeMOXu4BC | 2026-11-09 |
| `blacknews` | IG | Levanta historias viejas y las vuelve actuales: es su motivo. 🚨 **Mediana propia sube a 1.920 el 09/11 (n=6)** — serie 660 -> 265 -> 671 -> 839 -> 341 -> **1.920** — y **por primera vez tiene un post propio grande: 23.664 likes / 960 comentarios.** Ratio **3,9%** (4,4% - 4,1% - 4,1% - 3,7% - 3,5% - 1,6%), 0 de 6 video (unica de la lista sin nada de video). Sigue debajo de nuestra vara (0,43x). 🚨 **Tercera ventana seguida sin dar semilla: STRIKE 3**, que es el criterio escrito de salida. Queda anotado; la decision es del operador. Lo que si hizo historicamente fue madurar bien la ultima que dio: **KA'SHEENA DANIELS llego a 7.607 likes (1,69x) con 547 comentarios, 7,2%** — sigue siendo el ratio mas alto de una pieza nuestra sin cosechar. **shortCodes guardados (dueño verificado):** DfgR193OzAz · DffY8WrhzHv · DffUxHnhF-6 · DffRmVFB9AV | 2026-11-09 |
| `goodnews_movement` | IG | Fuera de nuestra cultura, **solo formato**. Mediana **14.892 (n=8) el 09/11**, desde 73.168 — pero los subconjuntos no se parecen (la medicion del 02/11 incluia un post de 173.454), asi que el movimiento de la mediana no se lee. 🚨 **Lo que SI se sostiene es el perfil, y es el dato mas reproducible de esta lista: ratio 0,9%, el mas bajo de la lista por TERCERA corrida seguida** (1,2% -> 0,7% -> 0,9%; rango 0,4% a 2,8%). **Mucho volumen, casi nada de conversacion** — el inverso exacto del grupo RapHouseTV. 5 de 8 video; **undecima medicion sin que la duracion prediga nada**, la hipotesis del no-reel sigue retirada desde el 28/09. **Sobre el strike:** declarada "solo formato" desde que entro — nunca iba a dar semilla, y el contador mide semillas. Decision del operador, no del analista. **shortCode guardado:** DffI1-CBu55 | 2026-11-09 |
| `rhtvmusic` | IG | 🚨 **PASA DE CANDIDATA A VIGILANDO el 09/11: primera grilla propia completa con dueño verificado, n=9.** **Mediana 13.689 (3,04x nuestra vara), ratio 6,5%** (36,6% - 8,0% - 6,7% - 6,5% - 6,5% - 4,6% - 4,4% - 4,0% - 3,7%). Reemplaza el n=3 del 02/11 y la lectura sin sostener del 26/10. **Su techo es un VIDEO DE 258 SEGUNDOS (4m18s) con 427.413 likes y 17.061 comentarios** — formato largo, no reel corto. **8 de 9 video.** Satelite de RapHouseTV: numeros reales y conversacion alta y consistente. **Sin semilla: strike 1 bajo el motivo nuevo.** **shortCode guardado:** DffgHoyyYOX | 2026-11-09 |

**Nota sobre el contador de strikes (12/10, SIN RESOLVER EN SEIS CORRIDAS):** lo que el contador mide es
"llego a PRODUCED como fuente". Para `blacknews` eso es exactamente su motivo declarado. Para
`theneighborhoodtalk` y `raphousetv` el motivo declarado es **el motor de comentarios** (carril de Repackage);
ese carril **volvio a cero por cuarta ventana seguida**, asi que las dos siguen sin oportunidad real de
aparecer. Para `goodnews_movement` el motivo es formato. **Tres de las cinco siguen en strike por un criterio
que no mide su motivo**, ahora en 7. Es una observacion de metodo, no una decision: queda escrita para el
operador.

---

## CANDIDATAS (medidas, esperando la segunda semilla)

| Cuenta | Que se le midio | Que falta |
|---|---|---|
| `becauseofthem` | IG. 🚨 **PASA NUESTRA VARA POR PRIMERA VEZ EN TRES MEDICIONES: 6.660 (1,48x) el 09/11, n=10, grilla entera madura.** Serie 3.229 -> 5.254 -> 4.282 -> 3.720 -> **6.660**, con dos techos en la ventana (51.789 y 50.276). Ratio **1,6%** (0,6% a 3,4%), 3 de 10 video. Produce consistentemente | **Sigue sin aparecer como fuente en PRODUCED: QUINTA ventana.** Una sola semilla historica (Teddy Gant, 20-sep); el criterio pide dos: **no entra todavia.** Pero con la mediana arriba de la vara y n=10, **el caso es el mas fuerte de las candidatas.** **shortCodes guardados (dueño verificado):** DfTW_-xJQoD · DfSKJ1XJvg6 · DfXZeMYmZLr · DfTeKjFpj89 · DfDPG9-E6JM · DfQI1VSk1il · DfKknSHEuT0 · DfIQsqlErA1 · DfV5chdMb7H · DfVSkOtpkhD |
| `rhtvgame.ing` | IG, satelite del grupo. **Primera grilla propia: mediana 4.342 (0,96x), ratio 3,3%, n=9** (6,9% - 5,7% - 5,3% - 3,6% - 3,3% - 2,9% - 2,7% - 1,7% - 0,0%). Techo: video de 156s con 18.409 / 530. 2 de 9 video. 🚨 **La lectura del 02/11 (9,7%) se apoyaba en UNA sola pieza y no se sostiene con la grilla entera** | **Numeros parecidos a los nuestros y ratio por debajo de lo que el grupo prometia.** Lo que la hace interesante ya no es el ratio sino que **publica casi todo imagen fija con numeros de nuestro orden.** Sin semilla. **shortCode guardado:** DfgjsFbxatM |
| `rhtvsports` | IG. 🚨 **ENTRO EL 09/11**, y entro sola: aparecio como cross-post dentro de otra grilla del grupo. Lo unico medido: `DffzGGEGpn1`, 8-nov, carrusel, **866 likes / 89 com. = 10,3%** | **n=1.** Cuarto satelite del grupo RapHouseTV que aparece por esta via. Consistente con el perfil del grupo: numeros chicos, ratio alto. **Falta grilla propia.** **shortCode guardado:** DffzGGEGpn1 |
| `rap.housetv` | IG. Tercer satelite del grupo. **NO MEDIBLE el 09/11: sus 9 piezas son de <24h** (11 horas de grilla). Lo unico medido sigue siendo del 19/10: un post del 13-oct con **439 likes / 103 com. = 23,5%** | **Cuarta corrida sin medicion madura — pero esta vez la razon esta identificada y es del instrumento.** Con los shortCodes guardados abajo, la proxima corrida la mide si o si. **shortCodes guardados (dueño verificado):** Dfg6iZnqFW8 · DfgQ2pqND0b · Dff1_zeK9ln · DfgHPaEtiD8 · DffvBU0qQji · Dff6lpqKWRS · DfgVwaStAms · Dfgj1HsRlYS · DfgeV7PRxPX |
| `yktesolid` | IG. Entro el 02/11 por un cross-post mal atribuido. 🚨 **El 09/11 su grilla propia la pone en duda: de 10 posts, devuelve piezas de 2023 y 2024** mezcladas con solo dos de octubre-2026 (`DexrEHBNNom` 7.710 / 424 y `DfC_8NaKUJ9` 4.292 / 146). Mediana de las 4 medibles: 2.432, ratio 11,9% — **pero ese ratio sale de posteos de hace dos y tres años** | 🚨 **No cumple el criterio de entrada: no produce consistentemente.** Dos piezas en tres semanas. **Si la proxima corrida tampoco encuentra actividad, pasa a descartadas** |

---

## COMO SUMAR PAGINAS NUEVAS

No hace falta que el operador las nombre. El analista las encuentra:

1. **Desde los posts que ya detecto el radar.** Cuando una historia explota, mirar que paginas grandes la levantaron. Las que aparecen seguido, entran a la lista.
2. **Por busqueda de formato.** Buscar en TikTok e IG el tipo de pieza que nos interesa y ver que cuentas la producen bien de forma consistente.
3. **Las que nos copian.** Si una pagina grande replico un post nuestro, es porque mira lo mismo que nosotros. Vale vigilarla.
4. **Las que ya nos dieron semilla.** Si una cuenta aparece como fuente en PRODUCED dos veces en una semana, entra (asi entro `blacknews` el 21/09, y ya puso tres piezas en el feed en un mes).
5. **Las que caen de un scrape ajeno.** Las cuentas satelite aparecen mezcladas en el feed de la principal - asi entraron `rhtvmusic` y `rhtvgame.ing` el 12/10, `rap.housetv` el 19/10, `yktesolid` el 02/11 y **`rhtvsports` el 09/11.** ⚠️ **Un post que aparece en la grilla de una cuenta puede no ser de ella.** Verificar el `ownerUsername` antes de atribuirle la medicion.

**Criterio para que entre:** que produzca **consistentemente**, no un hit suelto. Y que tenga algo que nosotros no estemos haciendo - si hace exactamente lo mismo, no aporta.

**Criterio para que salga:** tres revisiones seguidas sin nada aprovechable. (Ver la nota de arriba sobre que mide el contador.)

**El barrido POR HISTORIA sigue sin cerrar, decima corrida.** Ruta anotada: cosechar los comentarios de nuestro
propio post mas fuerte y leer los @ que aparecen ahi. El scraper de comentarios esta disponible desde el 02/11.
Candidatos acumulados y sin usar: **`DfDh8DqhyLf` (PAUL PIERCE, 02/11, 173 com. sobre 775 likes = 22,3%, el mas
limpio de todos: semilla quemada, likes de piso, discusion alta)**, `DenPSATFoa_` (Ka'Sheena, **547 comentarios,
7,2%**), Darryl Bell / SpaceX (`DeWwTANhnLc`, 497 com., 20,1%), Tuskegee (`Ddm4EdwM8tV`, 1.147 com.) y Tisha
(`Dd-Bj0Flntl`, 150 com.). Fuente directa del lado de la semilla, identificada y sin usar: `@jaynoz_` en
TikTok (89.300 fans).

**Dato de esta corrida (09/11):** **la lista volvio a no entregar ninguna semilla, tercera ventana seguida en
cero.** Los carriles de la ventana fueron prensa y feeds de cultura (7 de 16), TV local (4), barrido TikTok (2),
semilla del operador (2) e IG por cuenta (1). **Y el carril de cosecha de comentarios —el motivo declarado de
dos de las cinco cuentas de VIGILANDO— no corrio por cuarta ventana seguida.**

🚨 **Lo que la medicion del 09/11 dice sobre el VIDEO, y es lo unico de formato que esta lista puede ofrecer
esta semana:** las dos cuentas con mas conversacion de la lista son las que publican casi todo video
(`theneighborhoodtalk` 8 de 10, `rhtvmusic` 8 de 9, ratio 6,5%), y la de menos conversacion es la de mas likes
(`goodnews_movement`, 0,9%). **Y el techo de `rhtvmusic` es un video de 4m18s, no un reel corto** — el mismo
patron que `humansofny` dejo anotado antes de salir (su motor era el reel vertical LARGO de una persona a
camara: 99s = 544.599 likes). **Dos cuentas, dos años, misma direccion: en estas paginas el formato largo pone
el techo.** ⚠️ Esta cuenta no publica video por los strikes de copyright, asi que **el dato es de formato y de
mecanica, no una propuesta de cobertura.** Lo adaptable es la estructura, no el soporte.

🚨 **Y el dato del feed propio que esta lista registra por TERCERA ventana seguida:** el objeto con mas
conversacion del Instagram principal **no fue una pieza editorial.** 26/10 un reel publicitario de `@paulalex`
(5,3%); 02/11 el cross-post de animacion de `@HustlersNTheHoodTv` (12,21%); **09/11 otra vez el cross-post de
animacion (`Dfa5DDCh5cz`, 15.924 likes = 3,53x, 1.229 comentarios = 7,72%).** **Tres ventanas, mismo resultado.
El numero queda medido; que hacer con el feed es del operador.**

---

## QUE MIRAR EN CADA UNA

- **Formato**: estructura de post que no usamos? largo distinto? otra forma de tapa?
- **Angulo**: que frame le dieron a una historia que nosotros tambien teniamos?
- **Ritmo**: cuantas veces por dia postean? a que hora?
- **Lo que evitan**: a veces lo mas util es notar que NO hacen.

**Dato de ritmo medido el 09/11:** `theneighborhoodtalk` publica **10 piezas en 2h36m**; `rap.housetv`, 9 en
11 horas; `raphousetv`, 3 en 12 horas. Nuestra cuenta publico **20 objetos en 7 dias.** Son dos ordenes de
magnitud de distancia en frecuencia, y eso explica por que sus medianas se mueven tanto entre semanas.

**Paginas fuera de nuestra cultura:** sirven igual, pero solo por el formato. Anotar la mecanica, nunca el tema.

**Lo que se cerro al 09/11:** **`rhtvmusic` pasa a VIGILANDO** con su primera grilla propia completa
(13.689 / 6,5%, n=9). **Lo que se corrigio:** la lectura del 02/11 sobre `rhtvgame.ing` (9,7% con n=1) no se
sostiene con la grilla entera (3,3% con n=9). **Lo que entro:** `rhtvsports` a candidatas, cuarto satelite del
grupo que aparece por cross-post. **Lo que se debilito:** `yktesolid` — su grilla devuelve posteos de 2023 y
2024, no produce consistentemente. **Lo que se fortalecio:** `becauseofthem` pasa nuestra vara por primera vez
(6.660 = 1,48x, n=10) y sigue sin dar semilla por quinta ventana. **Lo que se sostiene:** el contraste
volumen-contra-conversacion (`goodnews_movement` 14.892 / 0,9% contra el grupo RapHouseTV, ratios de 3,3% a
6,5%), tercera corrida; la duracion de reel no predice nada (undecima medicion). **Lo que quedo sin medir, y
por que:** `theneighborhoodtalk`, `raphousetv` y `rap.housetv` — `resultsLimit: 10` no alcanza para su volumen
diario; se guardaron 22 shortCodes para medirlas la semana que viene.

---

## DESCARTADAS

| Cuenta | Motivo | Fecha |
|---|---|---|
| `united` | Cuenta oficial de la aerolinea. Aparecio sola, como cross-post dentro de la grilla de otra cuenta. Lo unico medido: `DfPvFnSNmaD`, 2-nov, video, **23.097 likes / 404 comentarios = 1,7%**. **Cuenta de marca, fuera de la cultura y fuera del criterio de la lista.** Se anota para no volver a evaluarla si reaparece en otra grilla | 2026-11-09 |
| `cre8tedbywavy` | Aparecio sola, como cross-post mal atribuido a `rhtvmusic`. Lo unico medido: `De3b9WLuiA-`, 24-oct, video, **96 likes / 8 comentarios**. **Numeros nulos: no hay nada que medirle ni que adaptarle.** Se anota para no volver a evaluarla si reaparece en otra grilla | 2026-11-02 |
| `blackinformationnetwork` | **Strike 3 de 3.** Tres revisiones seguidas sin llegar a PRODUCED bajo su motivo declarado ("fuente de semilla"). Lo medido queda anotado y no hace falta volver: mediana 660 -> 265 -> 671 -> **1.062 (n=6)**, posts propios chicos, y un motor de comentarios real pero no excepcional (5,2% con 225 com. sobre 4.344; 13,9% medido el 28/09). Dio una sola semilla en todo el periodo (Nolan Wells, 23-sep). Si vuelve a aparecer como fuente en PRODUCED, se re-evalua | 2026-10-05 |
| `humansofny` | **Strike 3 de 3.** Tercera revision seguida sin material nuevo: al 07/09 lo mas reciente que devuelve el scrape sigue siendo de octubre de 2025. Lo que ya se le midio queda anotado y no hace falta volver: carrusel APAISADO 1440x960 (257.035 likes) y motor real en el reel vertical LARGO de una persona a camara (99s = 544.599; 155s = 106.098; 45s = 107.579). Si vuelve a publicar, se re-evalua | 2026-09-07 |
