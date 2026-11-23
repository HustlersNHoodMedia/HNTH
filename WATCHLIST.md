# HNTH - PAGINAS A VIGILAR

Lista viva. **El analista la actualiza cada corrida**: suma las que descubre, marca las que dejaron de servir, corrige handles que cambiaron.

**Para que sirve:** ver que formatos y angulos estan funcionando afuera. No para copiar temas - para detectar mecanicas que podamos adaptar.

**Como se lee la columna "por que":** una pagina puede servir aunque su cultura no sea la nuestra. Si el FORMATO funciona, se adapta.

---

## 🚨 METODO — ESTADO AL 23/11/2026

**Instrumento actual:** `apify/instagram-scraper` con `directUrls`, proxy estandar. La mediana se calcula
**solo sobre las piezas de 24h o mas**. Dos rutas en paralelo:

- **Grilla fresca por cuenta** (`resultsLimit: 10`, o **30 para las tres de alta frecuencia**).
- **shortCodes guardados la semana anterior**, medidos ya maduros con `directUrls` de POST.

**El procedimiento de los shortCodes guardados esta validado por segunda vez:** el 23/11 se midieron
**55 de los 57 guardados** el 16/11 y, sumados a la grilla fresca, dieron **n=30, n=34 y n=31** en las tres
cuentas de alta frecuencia. **Es el n mas alto que tuvo esta lista, y las once cuentas tienen numero por
segunda corrida seguida.**

🚨 **MEDIDO AL 23/11 — LA MADURACION SE DETIENE A LAS 24h, Y AHORA HAY NUMERO.** Dos piezas medidas el
16/11 y vueltas a medir siete dias despues: `rhtvmusic` DfiWbAHyr8E **28.235 → 28.608 (+1,3%)** y
`rhtvsports` DfdxrMTxnQi **38.690 → 39.029 (+0,9%)**. Contra eso, una pieza PROPIA que el 16/11 tenia
menos de 24h: Blacc Sam `Dfx4CFrFsDK` **4.578 → 8.138 (+77,8%)**. **Una pieza de mas de 24h gana ~1% en una
semana; una de menos de 24h casi duplica.** Consecuencias practicas: el corte de 24h que esta tarea usa
queda validado, **las medianas de semanas distintas son comparables entre si**, y re-medir un shortCode ya
maduro no aporta — lo que aporta es medir los que eran frescos.

⚠️ **PERO `resultsLimit: 30` SIGUE SIENDO CORTO PARA `theneighborhoodtalk`:** el 23/11 sus 30 piezas de
grilla devolvieron **26 de <24h**. Su medicion sale casi entera de los shortCodes guardados, igual que el
16/11. **Para esa cuenta harian falta 50-60 por grilla, o seguir apoyandose solo en los guardados.**
Para `raphousetv` y `rap.housetv` el limite de 30 alcanza (6 y 7 piezas de <24h).

⚠️ **Y una trampa nueva, detectada el 23/11: una grilla puede SUPERPONERSE con la de la semana anterior.**
`rhtvmusic` marco 3.646 contra 17.611, pero **su pieza techo es el mismo post que el 16/11** — la cuenta
publico muy poco en siete dias. **Cuando el techo de una grilla es un post ya medido, la mediana no es
comparable con la de la ventana anterior: el movimiento es de composicion de grilla, no de rendimiento.**
Regla de lectura, no de criterio.

**Las rutas que este archivo uso, para que no se vuelvan a confundir:**

1. **Hasta el 19/10** — `instagram-scraper` de Apify con `directUrls`. La serie historica.
2. **El 26/10** — ruta de emergencia: `og:description` + JSON embebido, leidos con curl desde el sandbox de
   Higgsfield. Gratis y exacto, con dos limites: la grilla sin login **corta en 12 items**, y los likes
   ocultos no se recuperan (centinela `like_count == 3`).
3. **Desde el 02/11** — vuelta a Apify.

**Cotejo de los dos instrumentos (02/11):** sobre los mismos shortCodes de `raphousetv`, 5.960 / 9,8% con
JSON contra 5.326 / 9,3% con Apify. Las dos cifras caen dentro del ruido de un n de ese tamaño. No prueba
que las series sean comparables, **pero es un dato en contra de un desfasaje sistematico grande.**

🚨 **HALLAZGO DE METODO DEL 02/11, SIGUE VIGENTE — LOS shortCodes DE UNA GRILLA PUEDEN NO SER DE ESA CUENTA.**
La grilla devuelve tambien **cross-posts**. Verificado cinco veces (02/11: `De3b9WLuiA-` de `cre8tedbywavy`
y `DexrEHBNNom` de `yktesolid` anotados como `rhtvmusic`; `De8hKdQxSt7` de `rhtvgame.ing` anotado como
`raphousetv`; 09/11: `rhtvsports` y `united`; 16/11: `rhtvstreams` dentro de la grilla de RapHouseTV y
`kind100list` dentro de la de `goodnews_movement`; **23/11: `joshandbrent`**). **Cada shortCode se guarda
con el `ownerUsername` que devolvio la medicion.**

🚨 **HALLAZGO DE METODO DEL 16/11 — UNA MEDIANA DE n CHICO NO ES UNA MEDIANA. REPRODUCIDO POR CUARTA VEZ
EL 23/11, Y LAS CUATRO CORRECCIONES FUERON A LA BAJA.** `blacknews` 1.920 (n=6) → **619** (n=12) →
**275** (n=12); `becauseofthem` 6.660 (n=10) → **4.222** (n=15); `rhtvsports` ratio 10,3% (n=1) → **3,3%**
(n=9); y la de esta corrida, la mas grande de todas: **`kind100list` 1.239 (n=1) → 124 (n=9), diez veces
abajo.** **Regla de lectura, no de criterio: una cuenta de esta lista no se compara contra si misma si los
dos n son distintos en mas del doble, y una entrada hecha con n=1 no es una entrada hasta que tenga grilla
propia.**

---

## VIGILANDO

| Cuenta | Plataforma | Por que esta aca | Ultima revision |
|---|---|---|---|
| `raphousetv` | IG | 🚨 **DIO SEMILLA EL 23/11 — la primera de esta lista en cinco ventanas, y entro exactamente por la señal que esta lista mide.** Su post `Dfxv_4fhXED` (**1.700 likes / 3.105 comentarios = 182,6%, el ratio mas alto que midio este archivo en cualquier cuenta**) fue la semilla de nuestra pieza "$3,500 TO STEP OUT THE HOUSE", que hizo 1.608 likes / **1.786 comentarios**. **Su motivo declarado es el motor de comentarios: contador de strikes a CERO.** **MEDIDA: 3.861 (0,86x), ratio 6%, n=34** — el n mas alto que se le midio. Serie: 5.156 (Apify) → 5.960 (JSON) → 5.326 (Apify) → s/d → 4.333 → **3.861**. **Es la cuenta mas estable de la lista a traves de cinco mediciones y tres instrumentos**, y por eso la referencia mas confiable que tiene el archivo. Techo `Df_D8_TRWaa` 34.879 / 4.172 (imagen fija). 17 de 34 video. **shortCodes guardados:** DgDpicluj5N · DgDVS2sNEMH · DgDyksmvbvF · DgEIh_9vdXa · DgEAZi1MA2g · DgD3xHrhgli | 2026-11-23 |
| `goodnews_movement` | IG | Fuera de nuestra cultura, **solo formato**. **Mediana 26.278 (5,83x), n=10** el 23/11, desde 17.099. 🚨 **Lo que se sostiene es el perfil, y es el dato mas reproducible de esta lista: ratio 1%, el mas bajo de la lista por QUINTA corrida seguida** (1,2% → 0,7% → 0,9% → 1,2% → **1%**). **Mucho volumen, casi nada de conversacion** — el inverso exacto de `rap.housetv` (0,30x de alcance con 7% de ratio). Techo `Df2IFy4lbzR` carrusel 46.699 / 352. 8 de 10 video; **decimotercera medicion sin que la duracion prediga nada**, la hipotesis del no-reel sigue retirada desde el 28/09. **Sobre el strike:** declarada "solo formato" desde que entro — nunca iba a dar semilla, y el contador mide semillas. Decision del operador, no del analista | 2026-11-23 |
| `theneighborhoodtalk` | IG | **MEDIDA: 6.360 (1,41x), ratio 5%, n=30** (26 guardados + 4 maduras de la grilla de 30) — su n mas alto. Serie: 8.368 → 7.993 → 4.113 (Apify) → 17.809 (JSON) → 14.630 → s/d → 4.003 → **6.360**. 🚨 **Techo nuevo y rompe una serie: `DfyuD0CG-Ms`, CARRUSEL DE IMAGEN FIJA, 124.924 likes / 4.029 com. — el techo mas grande de toda la lista, y NO es video.** Ratio maximo maduro `DfyFwyhJYVH`: **7.172 likes / 2.665 com. = 37,2%** — sigue la **mecanica de cebo** ya anotada (etiquetar, responder para participar). **Para el carril de Repackage eso importa: el conteo alto ahi no implica texto cosechable.** 20 de 30 video. Nunca dio semilla: **strike 9**, ver la nota sobre que mide el contador. ⚠️ **El instrumento sigue corto para esta cuenta incluso con limite 30** (26 de 30 de <24h) — ver METODO. **shortCodes guardados:** DgD-NZNn-zB · DgEQ5E3hgfv · DgEmOCetKe7 · DgEGSaVNGx8 · DgEHlIAvg0t · DgEQ-wsNni0 · DgDgo6MtHNP · DgEOBM5pyK_ · DgDz6EtvWIe · DgDjgNxTQd- · DgELS-RB3xv · DgDqRvoPhEh · DgDtW8KAu38 · DgDv6Inn-B4 · DgEbU1pxXXY · DgEJS2th5sC · DgDkaJoB9v3 · DgD3rNDtw-P · DgDfqihH06k · DgEVLm8hfTe · DgDbxudPOgM · DgD6gwzPtKk · DgDbDwHn3bF · DgEoNAMhx8u · DgD8cz5sfWu · DgD3Us5xh8- | 2026-11-23 |
| `rhtvmusic` | IG | ⚠️ **Marca 3.646 (0,81x) con n=8 contra 17.611 el 16/11, pero la lectura NO es comparable: su pieza techo es el MISMO post** (`DfiWbAHyr8E`, video 179,7s, 28.235 → 28.608). **La cuenta publico muy poco en siete dias y la grilla se superpone con la anterior** — el movimiento es de composicion de grilla. Es el caso que origino la regla nueva de METODO. **Su ratio se mantiene: 6%** tres ventanas seguidas (6,5% → 6,5% → 6%). **La cuenta mas consistente de la lista en ratio.** 7 de 8 video. Satelite de RapHouseTV. **Sin semilla: strike 3.** **shortCode guardado:** DgDdUBzRMbo | 2026-11-23 |
| `rap.housetv` | IG | 🚨 **PASA DE CANDIDATA A VIGILANDO: sostiene con n=31 lo que el 16/11 midio con n=28.** Mediana **1.358 (0,30x)** y **ratio 7% — el mas alto de la lista con la mediana mas baja de la lista.** Es el caso extremo del perfil del grupo RapHouseTV: numeros chicos, conversacion altisima. 🚨 **Pieza mas desproporcionada madura: `DfxySH8qQ5x`, 408 likes / 700 comentarios = 171,6%** — segundo caso de mas comentarios que likes de la jornada, los dos en este grupo. Techo `Dfx0HcaqlrC` 18.596 / 316 (imagen fija). 17 de 31 video. **Entra a VIGILANDO no por alcance sino porque su seccion de comentarios rinde 7% de forma estable con dos mediciones de n alto, y porque su cuenta hermana `raphousetv` acaba de probar que ese perfil da semilla.** Sin semilla propia todavia. **shortCodes guardados:** DgD30-bqlmY · DgEgMLjtie6 · DgDVwODq0sI · DgDp5OOqUm4 · DgEIwyqKAzk · DgDgcM6mLWD · DgDxkvfKCWv | 2026-11-23 |
| `blacknews` | IG | Levanta historias viejas y las vuelve actuales: es su motivo. 🚨 **Baja otra vez: 275 (0,06x) con n=12, la grilla entera madura.** Serie larga: 660 - 265 - 671 - 839 - 341 - 1.920 - 619 - **275**. **Ratio 4%**, techo `DgB9c-rO0a4` 1.521 / 140. **0 de 12 video, unica de la lista sin nada de video**, tercera corrida seguida con ese dato. 🚨 **Quinta ventana seguida sin dar semilla: STRIKE 5**, dos mas que el criterio escrito de salida. Queda anotado; la decision es del operador. Lo que hizo historicamente fue madurar bien la ultima que dio: **KA'SHEENA DANIELS llego a 7.607 likes (1,69x) con 547 comentarios, 7,2%** | 2026-11-23 |

**Nota sobre el contador de strikes (12/10, PARCIALMENTE RESUELTO EL 23/11):** lo que el contador mide es
"llego a PRODUCED como fuente". Durante ocho corridas se escribio aca que **cuatro de las cinco cuentas
estaban en strike por un criterio que no media su motivo**, porque el carril de cosecha de comentarios no
corria. 🚨 **El 23/11 eso se resolvio para una: `raphousetv` dio semilla y su contador volvio a cero — y lo
hizo por la via de los comentarios, que es su motivo declarado.** Queda pendiente para
`theneighborhoodtalk` (strike 9, y su ratio alto es mecanica de cebo, no texto cosechable) y sigue sin
aplicar a `goodnews_movement` y `rhtvmusic`, que estan por formato. **El caso de `raphousetv` es la primera
evidencia de que el criterio SI puede medirse cuando el carril corre.**

---

## CANDIDATAS (medidas, esperando la segunda semilla)

| Cuenta | Que se le midio | Que falta |
|---|---|---|
| `rhtvgame.ing` | IG, satelite del grupo. **5.669 (1,26x), ratio 8%, n=8** el 23/11 — **su mejor medicion y el ratio mas alto de la lista junto con `rap.housetv`.** Cuarta medicion: 821 (n=1) → 4.342 (n=9) → 2.884 (n=10) → **5.669 (n=8)**. Techo: **video de 45,9s con 23.238 / 3.198.** 8 de 8 video | **Es la unica cuenta de la lista que esta arriba de nuestra mediana Y arriba del 7% de ratio al mismo tiempo.** Ese par la pone primera en la fila para la proxima cosecha. ⚠️ Pero su serie de medianas salta de 821 a 5.669 sin direccion: **n=8 y cuatro lecturas que no coinciden.** Sin semilla, cuarta revision |
| `rhtvstreams` | IG. **PRIMERA GRILLA PROPIA, n=9: 4.068 (0,90x), ratio 4%, 8 de 9 video.** Techo: video de 129,5s con 13.646 / 190. Entro el 16/11 como cross-post de la grilla de RapHouseTV, quinto satelite del grupo que aparece por esa via | **Confirma lo que se escribio el 16/11 con n=2: numeros mas altos que los otros satelites y ratio mas bajo — no encaja con el perfil del grupo.** Es el unico satelite de RapHouseTV cuyo ratio esta por debajo del 5%. Sin semilla, segunda revision |
| `rhtvsports` | IG, cuarto satelite. **1.962 (0,44x), ratio 4%, n=8** el 23/11, desde 2.121. Techo: **el MISMO video de 62,6s de la semana pasada, 38.690 → 39.029** — es una de las dos piezas que fijaron la regla de maduracion del METODO. 2 de 8 video (el 16/11 eran 3 de 9) | Perfil del grupo confirmado por tercera vez: alcance chico, techos de video que multiplican por 20 la mediana. **Dos mediciones de n~9 casi identicas (2.121 y 1.962): la cuenta es estable y poco interesante.** Sin semilla, tercera revision. **shortCode guardado:** DgDgTIVGjDf |
| `becauseofthem` | IG. **3.041 (0,67x) con n=9** el 23/11, desde 4.222 con n=15. Serie 3.229 → 5.254 → 4.282 → 3.720 → 6.660 → 4.222 → **3.041**. **Ratio 1%**, en linea con sus dos ventanas anteriores (1,6%). 0 de 9 video. Produce consistentemente | 🚨 **SEPTIMA ventana sin aparecer como fuente en PRODUCED.** Una sola semilla historica (Teddy Gant, 20-sep); el criterio pide dos: **no entra.** ⚠️ **Y con tres mediciones seguidas su mediana queda por debajo de la nuestra (0,94x → 0,67x), no arriba** — el caso es mas debil cada semana. **shortCode guardado:** DgDX4xHkmu8 |

---

## COMO SUMAR PAGINAS NUEVAS

No hace falta que el operador las nombre. El analista las encuentra:

1. **Desde los posts que ya detecto el radar.** Cuando una historia explota, mirar que paginas grandes la levantaron. Las que aparecen seguido, entran a la lista.
2. **Por busqueda de formato.** Buscar en TikTok e IG el tipo de pieza que nos interesa y ver que cuentas la producen bien de forma consistente.
3. **Las que nos copian.** Si una pagina grande replico un post nuestro, es porque mira lo mismo que nosotros. Vale vigilarla.
4. **Las que ya nos dieron semilla.** Si una cuenta aparece como fuente en PRODUCED dos veces en una semana, entra (asi entro `blacknews` el 21/09).
5. **Las que caen de un scrape ajeno.** Las cuentas satelite aparecen mezcladas en el feed de la principal - asi entraron `rhtvmusic` y `rhtvgame.ing` el 12/10, `rap.housetv` el 19/10, `yktesolid` el 02/11, `rhtvsports` el 09/11, `rhtvstreams` y `kind100list` el 16/11 y **`joshandbrent` el 23/11.** ⚠️ **Un post que aparece en la grilla de una cuenta puede no ser de ella.** Verificar el `ownerUsername` antes de atribuirle la medicion.

⚠️ **Y la leccion del 23/11 sobre la ruta 5: una cuenta que entra por cross-post entra con n=1, y n=1 no es
una medicion.** De las cuatro que entraron asi en dos semanas, **tres se cayeron en su primera grilla
propia** (`yktesolid` sin actividad, `kind100list` de 1.239 a 124, `joshandbrent` con 76 likes) y una se
sostuvo (`rhtvstreams`). **Lo que corresponde al entrar por cross-post es anotarla como pendiente de grilla,
no medirla.**

**Criterio para que entre:** que produzca **consistentemente**, no un hit suelto. Y que tenga algo que nosotros no estemos haciendo - si hace exactamente lo mismo, no aporta.

**Criterio para que salga:** tres revisiones seguidas sin nada aprovechable. (Ver la nota de arriba sobre que mide el contador.)

🚨 **EL BARRIDO POR HISTORIA SE CERRO EL 23/11, DUODECIMA CORRIDA — Y NO POR EL BACKLOG.** La ruta anotada
durante once corridas era cosechar los comentarios de nuestro propio post mas fuerte y leer los @ que
aparecen ahi. **Lo que paso esta semana es lo contrario y es mejor: la semilla vino de la cuenta vigilada,
detectada por su ratio de comentarios** (`raphousetv` `Dfxv_4fhXED`, 182,6%). **La señal que esta lista mide
desde el 24-ago produjo una pieza, sin que el barrido por historia tuviera que correr.**
Backlog acumulado y sin usar, que sigue abierto: `DfvPYZilnIM` (DEBBIE ALLEN / KIRK FRANKLIN / THUMP,
610 comentarios sobre 2.484 likes = 24,56%) · `DfDh8DqhyLf` (PAUL PIERCE, 173 com. = 22,3%) ·
`DenPSATFoa_` (Ka'Sheena, 547 com., 7,2%) · `DeWwTANhnLc` (Darryl Bell / SpaceX, 497 com., 20,1%) ·
`Ddm4EdwM8tV` (Tuskegee, 1.147 com.) y `Dd-Bj0Flntl` (Tisha, 150 com.). Fuente directa del lado de la
semilla, identificada y sin usar: `@jaynoz_` en TikTok (89.300 fans).

**Dato de esta corrida (23/11):** **la lista entrego UNA semilla, despues de cuatro ventanas en cero**, y la
entrego la cuenta cuyo motivo declarado era justamente ese. Los carriles de la ventana fueron prensa y
feeds de cultura 3 piezas, radar RSS / TV local 3, IG por cuenta 4, semilla del operador 3, archivo de
tweets 2 (carril nuevo), sin fila en PRODUCED 2, **barrido TikTok 0 (primera ventana en cero)** y
**cosecha de comentarios 0 (sexta ventana en cero)**.

🚨 **MEDIDO - EL CONTRASTE VOLUMEN-CONTRA-CONVERSACION: QUINTA VENTANA SEGUIDA, y sigue siendo el dato mas
reproducible de esta lista.** Los dos extremos del 23/11: `goodnews_movement` **26.278 de mediana (5,83x)
con 1% de ratio** contra `rap.housetv` **1.358 (0,30x) con 7%.** **19 veces de diferencia en alcance y 7
veces en ratio, en direcciones opuestas.** Serie del ratio de `goodnews_movement`:
1,2% → 0,7% → 0,9% → 1,2% → **1%**, el mas bajo de la lista cinco veces seguidas.

⚠️ **EL VIDEO LARGO COMO TECHO: LA SERIE SE CORTA EL 23/11, Y QUEDA EN PAUSA.** Durante cuatro ventanas el
techo de `rhtvmusic` (179s = 28.235), `rhtvsports` (223s = 11.934 y 62s = 38.690) y `theneighborhoodtalk`
(167s = 48.968), mas el antecedente de `humansofny` (99s = 544.599), apuntaban todos en la misma direccion.
Esta corrida: **los techos de `rhtvmusic` y `rhtvsports` son los MISMOS posts de la semana pasada** (no son
evidencia nueva), y **el techo mas grande de toda la lista es un CARRUSEL DE IMAGEN FIJA**
(`theneighborhoodtalk` `DfyuD0CG-Ms`, 124.924 likes). **La hipotesis no se confirma ni se retira: hace falta
una ventana con posts nuevos en las cuentas de video.** ⚠️ Y en cualquier caso esta cuenta no publica video
por los strikes de copyright: **el dato es de formato y de mecanica, no una propuesta de cobertura.**

---

## QUE MIRAR EN CADA UNA

- **Formato**: estructura de post que no usamos? largo distinto? otra forma de tapa?
- **Angulo**: que frame le dieron a una historia que nosotros tambien teniamos?
- **Ritmo**: cuantas veces por dia postean? a que hora?
- **Lo que evitan**: a veces lo mas util es notar que NO hacen.

**Dato de ritmo medido el 23/11, con grilla de 30:** `theneighborhoodtalk` devolvio **26 piezas de <24h sobre
30** (~25 por dia, igual que el 16/11); `rap.housetv` 7 de 30 y `raphousetv` 6 de 30 (~13-14 por dia).
Nuestra cuenta publico **20 objetos en 7 dias (~3 por dia)**, igual que la semana pasada.
**Son un orden de magnitud de distancia en frecuencia**, y eso explica por que sus medianas se mueven tanto
entre semanas y por que el instrumento se queda corto con ellas.

**Paginas fuera de nuestra cultura:** sirven igual, pero solo por el formato. Anotar la mecanica, nunca el tema.

**Lo que se cerro al 23/11:** **el barrido por historia** — no por el backlog, sino porque la semilla vino
de una cuenta vigilada detectada por ratio de comentarios. **Lo que se corrigio:** la cuarta lectura de n
chico, otra vez a la baja (`kind100list` 1.239 → 124). **Lo que entro:** `rap.housetv` de candidata a
VIGILANDO. **Lo que salio:** `kind100list` y `joshandbrent` a descartadas. **Lo que se sostiene:** el
contraste volumen-contra-conversacion (quinta ventana); el ratio de `rhtvmusic` (6% tres ventanas); la
estabilidad de `raphousetv` (cinco mediciones, tres instrumentos); el ratio de `goodnews_movement` como el
mas bajo (quinta ventana); la duracion de reel sin predecir nada (decimotercera medicion). **Lo que quedo
en pausa:** el video largo como techo. **Lo que quedo sin medir, y por que:** nada — las once cuentas de la
lista tienen numero por segunda corrida seguida.

---

## DESCARTADAS

| Cuenta | Motivo | Fecha |
|---|---|---|
| `kind100list` | **No cumple el criterio de entrada, y la correccion es de diez veces.** Entro el 16/11 como cross-post dentro de la grilla de `goodnews_movement`, con una sola pieza medida (`DfnmSEGOS5O`, 1.239 likes / 104 com. = 8,4%). **El 23/11 su primera grilla propia, n=9, devuelve mediana 124 likes (0,03x)**: esa pieza era un techo aislado y el resto de la cuenta no tiene alcance. El ratio SI se sostiene (6%), **pero con 124 likes de mediana no hay conversacion que cosechar.** Es la **cuarta correccion de una lectura de n chico y la mas grande de todas.** Si alguna vez produce con alcance, se re-evalua | 2026-11-23 |
| `joshandbrent` | Aparecio sola, como cross-post dentro de la grilla de otra cuenta. Lo unico medido: `Dfo90OShJBG`, imagen fija, **76 likes / 6 comentarios**. **Numeros nulos: no hay nada que medirle ni que adaptarle.** Se anota para no volver a evaluarla si reaparece en otra grilla (mismo criterio que `cre8tedbywavy`) | 2026-11-23 |
| `yktesolid` | **No cumple el criterio de entrada: no produce consistentemente.** Entro el 02/11 por un cross-post mal atribuido. El 09/11 su grilla propia devolvio posteos de **2023 y 2024** mezclados con dos de octubre-2026, y el archivo le escribio la condicion de salida. **El 16/11 la grilla devuelve exactamente los mismos posteos y las mismas dos piezas de octubre: cero actividad nueva en dos semanas.** Lo medido queda anotado: `DexrEHBNNom` 7.752 / 424 (5,5%) y `DfC_8NaKUJ9` 4.986 / 171 (3,4%), las dos de octubre-2026. **Su ratio alto historico (11,9%) salia de piezas de hace dos y tres años.** Si vuelve a publicar con regularidad, se re-evalua | 2026-11-16 |
| `united` | Cuenta oficial de la aerolinea. Aparecio sola, como cross-post dentro de la grilla de otra cuenta. Lo unico medido: `DfPvFnSNmaD`, 2-nov, video, **23.097 likes / 404 comentarios = 1,7%**. **Cuenta de marca, fuera de la cultura y fuera del criterio de la lista.** Se anota para no volver a evaluarla si reaparece en otra grilla | 2026-11-09 |
| `cre8tedbywavy` | Aparecio sola, como cross-post mal atribuido a `rhtvmusic`. Lo unico medido: `De3b9WLuiA-`, 24-oct, video, **96 likes / 8 comentarios**. **Numeros nulos: no hay nada que medirle ni que adaptarle.** Se anota para no volver a evaluarla si reaparece en otra grilla | 2026-11-02 |
| `blackinformationnetwork` | **Strike 3 de 3.** Tres revisiones seguidas sin llegar a PRODUCED bajo su motivo declarado ("fuente de semilla"). Lo medido queda anotado: mediana 660 → 265 → 671 → **1.062 (n=6)**, posts propios chicos, y un motor de comentarios real pero no excepcional (5,2% con 225 com. sobre 4.344; 13,9% medido el 28/09). Dio una sola semilla en todo el periodo (Nolan Wells, 23-sep). Si vuelve a aparecer como fuente en PRODUCED, se re-evalua | 2026-10-05 |
| `humansofny` | **Strike 3 de 3.** Tercera revision seguida sin material nuevo: al 07/09 lo mas reciente que devuelve el scrape sigue siendo de octubre de 2025. Lo que ya se le midio queda anotado: carrusel APAISADO 1440x960 (257.035 likes) y motor real en el reel vertical LARGO de una persona a camara (99s = 544.599; 155s = 106.098; 45s = 107.579). Si vuelve a publicar, se re-evalua | 2026-09-07 |
