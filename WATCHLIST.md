# HNTH - PAGINAS A VIGILAR

Lista viva. **El analista la actualiza cada corrida**: suma las que descubre, marca las que dejaron de servir, corrige handles que cambiaron.

**Para que sirve:** ver que formatos y angulos estan funcionando afuera. No para copiar temas - para detectar mecanicas que podamos adaptar.

**Como se lee la columna "por que":** una pagina puede servir aunque su cultura no sea la nuestra. Si el FORMATO funciona, se adapta.

---

## 🚨 METODO — ESTADO AL 16/11/2026

**Instrumento actual:** `apify/instagram-scraper` con `directUrls`, proxy estandar. La mediana se calcula
**solo sobre las piezas de 24h o mas**. Dos rutas en paralelo:

- **Grilla fresca por cuenta** (`resultsLimit: 10`, o **30 para las tres de alta frecuencia**).
- **shortCodes guardados la semana anterior**, medidos ya maduros con `directUrls` de POST.

🚨 **EL HALLAZGO DE METODO DEL 09/11 QUEDO CERRADO EL 16/11.** Se midieron los **40 shortCodes guardados**
(40 de 40 devueltos, `ownerUsername` verificado en todos) y se subio el limite a 30 para
`theneighborhoodtalk`, `raphousetv` y `rap.housetv`. **Las tres cuentas que el 09/11 quedaron "no medibles"
estan medidas, con n=14, n=18 y n=28.** El procedimiento de guardar shortCodes funciono tal como estaba escrito.

⚠️ **PERO `resultsLimit: 30` SIGUE SIENDO CORTO PARA `theneighborhoodtalk`:** sus 30 piezas cubren
**29 horas**, y **26 de 30 son de <24h**. Su medicion de esta corrida sale casi entera de los shortCodes
guardados. **Para esa cuenta harian falta 50-60 por grilla, o seguir apoyandose solo en los guardados.**
Para `raphousetv` (30 piezas = 51h, 18 maduras) y `rap.housetv` (30 = 55h, 28 maduras) el limite de 30 alcanza.

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
La grilla devuelve tambien **cross-posts**. Verificado cuatro veces (02/11: `De3b9WLuiA-` de `cre8tedbywavy`
y `DexrEHBNNom` de `yktesolid` anotados como `rhtvmusic`; `De8hKdQxSt7` de `rhtvgame.ing` anotado como
`raphousetv`; 09/11: `rhtvsports` y `united`; **16/11: `rhtvstreams` dentro de la grilla de RapHouseTV y
`kind100list` dentro de la de `goodnews_movement`**). **Cada shortCode se guarda con el `ownerUsername`
que devolvio la medicion.**

🚨 **HALLAZGO DE METODO DEL 16/11 — UNA MEDIANA DE n CHICO EN ESTAS CUENTAS NO ES UNA MEDIANA.**
Dos casos de esta corrida, los dos en la misma direccion: `blacknews` midio **1.920 el 09/11 con n=6** y
**619 el 16/11 con n=12** — el 1.920 se apoyaba en **un solo** post de 23.664. `becauseofthem` midio
**6.660 con n=10** (con dos techos de ~51.000 adentro) y **4.222 con n=15**. Y `rhtvsports` paso de un
ratio de 10,3% con n=1 a 3,3% con n=9. **Tres lecturas corregidas por subir el n, las tres a la baja.**
**Regla de lectura, no de criterio: una cuenta de esta lista no se compara contra si misma si los dos n
son distintos en mas del doble.**

---

## VIGILANDO

| Cuenta | Plataforma | Por que esta aca | Ultima revision |
|---|---|---|---|
| `rhtvmusic` | IG | **Mediana 17.611 (3,90x nuestra vara) con n=10 el 16/11**, desde 13.689. **Y su ratio repite exacto: 6,5%** las dos ventanas (hoy 30,4% - 8,1% - 7,3% - 6,5% - 6,5% - 6,5% - 6,4% - 4,6% - 3,4% - 3,3%). **La cuenta mas consistente de la lista en ratio.** 🚨 **Su techo vuelve a ser un VIDEO LARGO: 179s con 28.235 likes / 950 com.** 9 de 10 video. Satelite de RapHouseTV con numeros reales y conversacion alta. **Sin semilla: strike 2.** **shortCodes guardados:** (grilla de esta corrida ya madura, ver MEDICIONES) | 2026-11-16 |
| `theneighborhoodtalk` | IG | **MEDIDA POR FIN: 4.003 (0,89x), ratio 6,6%, n=14** (10 guardados + 4 maduras de la grilla de 30). Serie: 8.368 -> 7.993 -> 4.113 (Apify) -> 17.809 (JSON) -> 14.630 -> s/d -> **4.003**. Techo 59.734. 🚨 **Casi todo VIDEO (11 de 14)**, y su pieza de ratio maximo madura es `DfgQxWHtWq1`: **3.766 likes / 2.318 com. = 61,6%.** Un ratio asi no es una seccion con historias propias: es **mecanica de cebo** (etiquetar, responder para participar). **Para el carril de Repackage eso importa: el conteo alto ahi no implica texto cosechable.** Nunca dio semilla. **Sin semilla: strike 8**, ver la nota sobre que mide el contador. ⚠️ **El instrumento sigue corto para esta cuenta incluso con limite 30** — ver METODO | 2026-11-16 |
| `raphousetv` | IG | **MEDIDA: 4.333 (0,96x), ratio 6,1%, n=18.** Serie: 5.156 (Apify) -> 5.960 (JSON) -> 5.326 (Apify) -> s/d -> **4.333**. **Es la cuenta mas estable de la lista a traves de cuatro mediciones y tres instrumentos**, y por eso la referencia mas confiable que tiene el archivo — el cotejo de instrumentos se hizo sobre ella. Techo 25.428 / 532 (imagen fija). Ratio maximo maduro 14,3% (624/89). 7 de 18 video. Fuente de semilla y termometro de discusion. **Sin semilla: strike 8** | 2026-11-16 |
| `goodnews_movement` | IG | Fuera de nuestra cultura, **solo formato**. Mediana **17.099 (3,79x), n=8** el 16/11, desde 14.892. 🚨 **Lo que se sostiene es el perfil, y es el dato mas reproducible de esta lista: ratio 1,2%, el mas bajo de la lista por CUARTA corrida seguida** (1,2% -> 0,7% -> 0,9% -> 1,2%; rango 0,2% a 1,9%). **Mucho volumen, casi nada de conversacion** — el inverso exacto de `rap.housetv` (0,25x de alcance con 7,8% de ratio). 6 de 8 video; **duodecima medicion sin que la duracion prediga nada**, la hipotesis del no-reel sigue retirada desde el 28/09. **Sobre el strike:** declarada "solo formato" desde que entro — nunca iba a dar semilla, y el contador mide semillas. Decision del operador, no del analista. **shortCodes guardados:** DfxA7evMcFv · DfxLIkhtEpE | 2026-11-16 |
| `blacknews` | IG | Levanta historias viejas y las vuelve actuales: es su motivo. 🚨 **Se desploma a 619 (0,14x) con n=12, la grilla entera madura, desde 1.920.** La lectura del 09/11 se apoyaba en **un solo** post de 23.664; la grilla completa vuelve a su serie larga (660 - 265 - 671 - 839 - 341 - 1.920 - **619**). **Ratio 4,7%, el mas alto que se le midio**, con dos piezas desproporcionadas: **1.384/457 = 33,0%** y **1.813/405 = 22,3%.** **0 de 12 video, unica de la lista sin nada de video.** 🚨 **Cuarta ventana seguida sin dar semilla: STRIKE 4**, uno mas que el criterio escrito de salida. Queda anotado; la decision es del operador. Lo que hizo historicamente fue madurar bien la ultima que dio: **KA'SHEENA DANIELS llego a 7.607 likes (1,69x) con 547 comentarios, 7,2%.** **shortCodes guardados:** DfyaNsPtwCv · DfyUh4jNKR2 | 2026-11-16 |

**Nota sobre el contador de strikes (12/10, SIN RESOLVER EN SIETE CORRIDAS):** lo que el contador mide es
"llego a PRODUCED como fuente". Para `blacknews` eso es exactamente su motivo declarado. Para
`theneighborhoodtalk` y `raphousetv` el motivo declarado es **el motor de comentarios** (carril de Repackage);
ese carril **volvio a cero por quinta ventana seguida**, asi que las dos siguen sin oportunidad real de
aparecer. Para `goodnews_movement` y `rhtvmusic` el motivo es formato. **Cuatro de las cinco siguen en strike
por un criterio que no mide su motivo**, ahora en 8. Es una observacion de metodo, no una decision: queda
escrita para el operador.

---

## CANDIDATAS (medidas, esperando la segunda semilla)

| Cuenta | Que se le midio | Que falta |
|---|---|---|
| `rap.housetv` | IG, tercer satelite del grupo. 🚨 **MEDIDA POR FIN, n=28: mediana 1.144 (0,25x) y ratio 7,8% — el ratio mas alto de toda la lista con la mediana mas baja de toda la lista.** Es el caso extremo del perfil del grupo: numeros chicos, conversacion altisima. Pieza mas desproporcionada madura: **186 likes / 56 com. = 30,1%.** 13 de 28 video | **Lo que la hace util no es el alcance: es que su seccion de comentarios rinde 7,8% con 1.100 likes de mediana.** Si el carril de Repackage vuelve a correr, es la primera a mirar. Sin semilla. **shortCodes guardados:** Dfx0HcaqlrC · Dfyj-TsxEqU · Dfx618aKs1n · DfxUGXhKBmB · DfxQDjnqeLN · DfxmfbpqHcy · DfxfLFtq6n2 · DfyFiTiNvdQ · DfxySH8qQ5x · DfyTwbptnVg · DfxYlQ6KmV7 |
| `becauseofthem` | IG. **4.222 (0,94x) con n=15 el 16/11**, desde 6.660 con n=10 — y ese 6.660 venia de una grilla con dos techos de ~51.000. Serie 3.229 -> 5.254 -> 4.282 -> 3.720 -> 6.660 -> **4.222**. **Ratio 1,6%, identico al 09/11.** 3 de 15 video. Produce consistentemente | 🚨 **SEXTA ventana sin aparecer como fuente en PRODUCED.** Una sola semilla historica (Teddy Gant, 20-sep); el criterio pide dos: **no entra todavia.** ⚠️ **Y con n=15 su mediana queda clavada en la nuestra (0,94x), no arriba** — el caso es mas debil que el que el archivo escribio la semana pasada. **shortCode guardado:** DfxTUlZiKO_ |
| `rhtvgame.ing` | IG, satelite del grupo. **2.884 (0,64x), ratio 4,2%, n=10** el 16/11. Tercera medicion: 821 (n=1) -> 4.342 (n=9) -> **2.884 (n=10)**. Techo: **video de 40s con 35.359 / 1.725** = 12 veces su propia mediana. 3 de 10 video | **Numeros del orden de los nuestros y publica mucha imagen fija**, que es lo que la hacia interesante. Sin semilla, tercera revision. **shortCodes guardados:** (grilla de esta corrida ya madura, ver MEDICIONES) |
| `rhtvsports` | IG, cuarto satelite. 🚨 **Primera grilla propia, n=9: mediana 2.121 (0,47x), ratio 3,3%.** El **10,3% del 09/11 venia de UNA pieza y no se sostiene.** Techo: **video de 62s con 38.690 / 1.237** = 18 veces su propia mediana. 3 de 9 video | Perfil del grupo confirmado otra vez: alcance chico, techos de video que multiplican por 18 la mediana. Sin semilla, segunda revision |
| `rhtvstreams` | IG. 🚨 **ENTRO EL 16/11, y entro sola:** aparecio como cross-post dentro de la grilla de RapHouseTV. **Quinto satelite del grupo que aparece por esta via.** Medido: `DfyD8b1OwA2` (7.603 / 238 = 3,1%, video 112s) y `Dfu0j8DKgzS` (5.548 / 171 = 3,1%, video 33s) | **n=2, una madura.** Numeros mas altos que los otros satelites y ratio mas bajo: **no encaja con el perfil del grupo, y eso la hace interesante.** Falta grilla propia. **shortCodes guardados:** DfyD8b1OwA2 · Dfu0j8DKgzS |
| `kind100list` | IG. 🚨 **ENTRO EL 16/11** como cross-post dentro de la grilla de `goodnews_movement`. Lo unico medido: `DfnmSEGOS5O`, 11-nov, imagen fija, **1.239 likes / 104 com. = 8,4%** | **n=1.** Un ratio de 8,4% en imagen fija con mil likes es el perfil opuesto al de su anfitriona (`goodnews_movement`, 1,2%). **Falta grilla propia y falta saber si es de nuestra cultura.** **shortCode guardado:** DfnmSEGOS5O |

---

## COMO SUMAR PAGINAS NUEVAS

No hace falta que el operador las nombre. El analista las encuentra:

1. **Desde los posts que ya detecto el radar.** Cuando una historia explota, mirar que paginas grandes la levantaron. Las que aparecen seguido, entran a la lista.
2. **Por busqueda de formato.** Buscar en TikTok e IG el tipo de pieza que nos interesa y ver que cuentas la producen bien de forma consistente.
3. **Las que nos copian.** Si una pagina grande replico un post nuestro, es porque mira lo mismo que nosotros. Vale vigilarla.
4. **Las que ya nos dieron semilla.** Si una cuenta aparece como fuente en PRODUCED dos veces en una semana, entra (asi entro `blacknews` el 21/09).
5. **Las que caen de un scrape ajeno.** Las cuentas satelite aparecen mezcladas en el feed de la principal - asi entraron `rhtvmusic` y `rhtvgame.ing` el 12/10, `rap.housetv` el 19/10, `yktesolid` el 02/11, `rhtvsports` el 09/11 y **`rhtvstreams` y `kind100list` el 16/11.** ⚠️ **Un post que aparece en la grilla de una cuenta puede no ser de ella.** Verificar el `ownerUsername` antes de atribuirle la medicion.

**Criterio para que entre:** que produzca **consistentemente**, no un hit suelto. Y que tenga algo que nosotros no estemos haciendo - si hace exactamente lo mismo, no aporta.

**Criterio para que salga:** tres revisiones seguidas sin nada aprovechable. (Ver la nota de arriba sobre que mide el contador.)

**El barrido POR HISTORIA sigue sin cerrar, undecima corrida.** Ruta anotada: cosechar los comentarios de
nuestro propio post mas fuerte y leer los @ que aparecen ahi. El scraper de comentarios esta disponible desde
el 02/11. 🚨 **Y esta corrida aparecio el mejor candidato que tuvo nunca este backlog: `DfvPYZilnIM`
(DEBBIE ALLEN / KIRK FRANKLIN / THUMP, 16/11) con 610 comentarios sobre 2.484 likes = 24,56%, el ratio
editorial mas alto que midio el archivo.** Perfil identico al del caso del Jeep: semilla ya discutida,
likes de piso (0,55x), conversacion con material propio. Resto acumulado y sin usar: `DfDh8DqhyLf`
(PAUL PIERCE, 173 com. sobre 775 likes = 22,3%), `DenPSATFoa_` (Ka'Sheena, **547 comentarios, 7,2%**),
`DeWwTANhnLc` (Darryl Bell / SpaceX, 497 com., 20,1%), `Ddm4EdwM8tV` (Tuskegee, 1.147 com.) y `Dd-Bj0Flntl`
(Tisha, 150 com.). Fuente directa del lado de la semilla, identificada y sin usar: `@jaynoz_` en TikTok
(89.300 fans).

**Dato de esta corrida (16/11):** **la lista volvio a no entregar ninguna semilla, cuarta ventana seguida en
cero.** Los carriles de la ventana fueron **IG por cuenta 12 de 19 piezas** (el 63%), prensa y feeds de
cultura 3, TV local 2, barrido TikTok 1 y semilla del operador 1. **Y el carril de cosecha de comentarios
—el motivo declarado de dos de las cinco cuentas de VIGILANDO— no corrio por quinta ventana seguida.**

🚨 **MEDIDO - EL CONTRASTE VOLUMEN-CONTRA-CONVERSACION: CUARTA VENTANA SEGUIDA, y es el dato mas
reproducible que tiene esta lista.** Los dos extremos del 16/11: `goodnews_movement` **17.099 de mediana
(3,79x) con 1,2% de ratio** contra `rap.housetv` **1.144 (0,25x) con 7,8%.** **15 veces de diferencia en
alcance y 6,5 veces en ratio, en direcciones opuestas.** Serie del ratio de `goodnews_movement`:
1,2% -> 0,7% -> 0,9% -> **1,2%**, el mas bajo de la lista cuatro veces seguidas.

🚨 **Lo que la medicion del 16/11 agrega sobre el VIDEO LARGO, y es lo unico de formato que esta lista
ofrece esta semana:** el techo de **tres** cuentas distintas es un video largo — `rhtvmusic` 179s = 28.235,
`rhtvsports` 223s = 11.934 y 62s = 38.690, `theneighborhoodtalk` 167s = 48.968 — mas el antecedente de
`humansofny` (99s = 544.599). **Cuatro cuentas, dos años, misma direccion: en estas paginas el desarrollo
largo de una persona a camara pone el techo, no el reel corto.** ⚠️ Esta cuenta no publica video por los
strikes de copyright, asi que **el dato es de formato y de mecanica, no una propuesta de cobertura.** Lo
adaptable es la estructura (un solo protagonista, desarrollo largo, sin cortes), no el soporte.

⚠️ **Y la serie de tres ventanas sobre el feed propio se corto, con causa de composicion:** el 26/10, el
02/11 y el 09/11 el objeto con mas conversacion del Instagram principal **no fue una pieza editorial**
(un reel publicitario de `@paulalex` 5,3%; el cross-post de animacion 12,21%; el cross-post de animacion
7,72%). **El 16/11 el ratio mas alto SI es editorial (24,56%), pero porque no hubo ningun cross-post de
animacion ni ningun QUOTES en el feed — primera ventana sin ninguno de los dos.** La serie no se rompio
por mejora propia: el competidor no se presento. **Asi queda escrito.**

---

## QUE MIRAR EN CADA UNA

- **Formato**: estructura de post que no usamos? largo distinto? otra forma de tapa?
- **Angulo**: que frame le dieron a una historia que nosotros tambien teniamos?
- **Ritmo**: cuantas veces por dia postean? a que hora?
- **Lo que evitan**: a veces lo mas util es notar que NO hacen.

**Dato de ritmo medido el 16/11, con grilla de 30:** `theneighborhoodtalk` publica **30 piezas en 29 horas**
(~25 por dia); `rap.housetv`, 30 en 55 horas (~13 por dia); `raphousetv`, 30 en 51 horas (~14 por dia).
Nuestra cuenta publico **20 objetos en 7 dias (~3 por dia).** **Son un orden de magnitud de distancia en
frecuencia**, y eso explica por que sus medianas se mueven tanto entre semanas y por que el instrumento
se queda corto con ellas.

**Paginas fuera de nuestra cultura:** sirven igual, pero solo por el formato. Anotar la mecanica, nunca el tema.

**Lo que se cerro al 16/11:** **el hallazgo de metodo del 09/11** — las tres cuentas de alta frecuencia
estan medidas (n=14, n=18, n=28) gracias a los 40 shortCodes guardados mas el limite de 30.
**Lo que se corrigio:** tres lecturas de n chico, todas a la baja — `blacknews` (1.920 con n=6 -> **619**
con n=12), `becauseofthem` (6.660 con n=10 -> **4.222** con n=15) y `rhtvsports` (ratio 10,3% con n=1 ->
**3,3%** con n=9). **Lo que entro:** `rhtvstreams` y `kind100list` a candidatas, las dos por cross-post.
**Lo que salio:** `yktesolid` a descartadas, por la condicion que el archivo le escribio la semana pasada.
**Lo que se sostiene:** el contraste volumen-contra-conversacion (cuarta ventana); el ratio exacto de
`rhtvmusic` (6,5% dos ventanas seguidas); la estabilidad de `raphousetv` (cuatro mediciones, tres
instrumentos); el video largo como techo (cuarta cuenta); la duracion de reel sin predecir nada
(duodecima medicion). **Lo que quedo sin medir, y por que:** nada — es la primera corrida en la que las
once cuentas de la lista tienen numero.

---

## DESCARTADAS

| Cuenta | Motivo | Fecha |
|---|---|---|
| `yktesolid` | **No cumple el criterio de entrada: no produce consistentemente.** Entro el 02/11 por un cross-post mal atribuido. El 09/11 su grilla propia devolvio posteos de **2023 y 2024** mezclados con dos de octubre-2026, y el archivo le escribio la condicion de salida: "si la proxima corrida tampoco encuentra actividad, pasa a descartadas". **El 16/11 la grilla devuelve exactamente los mismos posteos de 2023 y 2024 (con los likes ocultos) y las mismas dos piezas de octubre: cero actividad nueva en dos semanas.** Lo medido queda anotado: `DexrEHBNNom` 7.752 / 424 (5,5%) y `DfC_8NaKUJ9` 4.986 / 171 (3,4%), las dos de octubre-2026. **Su ratio alto historico (11,9%) salia de piezas de hace dos y tres años.** Si vuelve a publicar con regularidad, se re-evalua | 2026-11-16 |
| `united` | Cuenta oficial de la aerolinea. Aparecio sola, como cross-post dentro de la grilla de otra cuenta. Lo unico medido: `DfPvFnSNmaD`, 2-nov, video, **23.097 likes / 404 comentarios = 1,7%**. **Cuenta de marca, fuera de la cultura y fuera del criterio de la lista.** Se anota para no volver a evaluarla si reaparece en otra grilla | 2026-11-09 |
| `cre8tedbywavy` | Aparecio sola, como cross-post mal atribuido a `rhtvmusic`. Lo unico medido: `De3b9WLuiA-`, 24-oct, video, **96 likes / 8 comentarios**. **Numeros nulos: no hay nada que medirle ni que adaptarle.** Se anota para no volver a evaluarla si reaparece en otra grilla | 2026-11-02 |
| `blackinformationnetwork` | **Strike 3 de 3.** Tres revisiones seguidas sin llegar a PRODUCED bajo su motivo declarado ("fuente de semilla"). Lo medido queda anotado: mediana 660 -> 265 -> 671 -> **1.062 (n=6)**, posts propios chicos, y un motor de comentarios real pero no excepcional (5,2% con 225 com. sobre 4.344; 13,9% medido el 28/09). Dio una sola semilla en todo el periodo (Nolan Wells, 23-sep). Si vuelve a aparecer como fuente en PRODUCED, se re-evalua | 2026-10-05 |
| `humansofny` | **Strike 3 de 3.** Tercera revision seguida sin material nuevo: al 07/09 lo mas reciente que devuelve el scrape sigue siendo de octubre de 2025. Lo que ya se le midio queda anotado: carrusel APAISADO 1440x960 (257.035 likes) y motor real en el reel vertical LARGO de una persona a camara (99s = 544.599; 155s = 106.098; 45s = 107.579). Si vuelve a publicar, se re-evalua | 2026-09-07 |
