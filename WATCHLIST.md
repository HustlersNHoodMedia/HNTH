# HNTH - PAGINAS A VIGILAR

Lista viva. **El analista la actualiza cada corrida**: suma las que descubre, marca las que dejaron de servir, corrige handles que cambiaron.

**Para que sirve:** ver que formatos y angulos estan funcionando afuera. No para copiar temas - para detectar mecanicas que podamos adaptar.

**Como se lee la columna "por que":** una pagina puede servir aunque su cultura no sea la nuestra. Si el FORMATO funciona, se adapta.

---

## 🚨 METODO — ESTADO AL 02/11/2026

**APIFY SE REPUSO.** El limite mensual que el 26/10 bloqueo todos los actores ya no esta. La medicion del
02/11 se hizo con el `instagram-scraper` de Apify, el instrumento original de la serie.

**Las tres rutas que este archivo uso, para que no se vuelvan a confundir:**

1. **Hasta el 19/10** — `instagram-scraper` de Apify con `directUrls`. La serie historica.
2. **El 26/10** — ruta de emergencia: `og:description` + JSON embebido de cada pagina de post
   (`like_count`, `comment_count`, `taken_at`), leidos con curl desde el sandbox de Higgsfield. Gratis y
   exacto, con dos limites: la grilla de perfil sin login **corta en 12 items**, y los likes ocultos no se
   recuperan (centinela `like_count == 3`).
3. **Desde el 02/11** — vuelta a Apify.

🚨 **COTEJO DE LOS DOS INSTRUMENTOS, medido el 02/11 y es el primero que tiene el archivo.** Se midieron con
Apify **los mismos shortCodes** que el 26/10 guardo. En `raphousetv`, la unica cuenta con subconjunto
suficientemente parecido (6 de los 12 guardados): **5.960 likes / 9,8% de ratio con JSON** contra
**5.326 / 9,3% con Apify**. **Las dos cifras caen dentro del ruido de un n de ese tamaño.**
No prueba que las series sean comparables —los subconjuntos difieren y una semana de maduracion empuja los
likes para arriba— **pero es el primer dato en contra de un desfasaje sistematico grande del instrumento.**
La advertencia del 26/10 ("no comparables") se suaviza a: **compararlas con el n a la vista.**

🚨 **HALLAZGO DE METODO DEL 02/11 — LOS shortCodes GUARDADOS NO SON TODOS DE LA CUENTA A LA QUE SE LES ANOTO.**
La grilla de perfil sin login devuelve tambien **cross-posts**, y la ruta del 26/10 los atribuyo a la cuenta
cuya grilla los trajo. Verificado por dueño real al medirlos:
- de los 4 guardados como `rhtvmusic`, **dos son de otros**: `De3b9WLuiA-` es de `cre8tedbywavy` y
  `DexrEHBNNom` es de `yktesolid`.
- de los guardados como `raphousetv`, `De8hKdQxSt7` es de **`rhtvgame.ing`**.

**Consecuencia:** la conclusion del 26/10 de que "las CUATRO piezas de `rhtvmusic` pasan el 6%" se apoya en un
pool con al menos dos piezas ajenas. **Queda sin sostener.** Y de aqui en adelante, **cada shortCode se guarda
con el `ownerUsername` que devolvio la medicion**, no con la cuenta de la grilla.

**El procedimiento de fondo no cambia:** en cada corrida se GUARDAN los shortCodes que devuelve la grilla, y
la mediana de una cuenta de alta frecuencia se calcula la semana siguiente midiendo ESOS shortCodes ya maduros.
La mediana de estas cuentas siempre va una semana atrasada, y asi es comparable.

**Nota del 19/10 que sigue valiendo:** da una mediana comparable, no una estable. Estas cuentas se mueven
decenas de puntos porcentuales entre semanas con n=7. **Se leen como orden de magnitud, no como numero.**

---

## VIGILANDO

| Cuenta | Plataforma | Por que esta aca | Ultima revision |
|---|---|---|---|
| `theneighborhoodtalk` | IG | **Mediana de ratio 9,7% (n=7), la mas alta de la lista el 02/11** — y eso **cancela la reordenacion del 26/10**, que la habia puesto debajo de `raphousetv` (5,6% contra 9,8%). Medidas las dos con el mismo instrumento en la misma corrida quedan **9,7% contra 9,3%: empatadas, sin orden medido entre ellas.** Ratios 121,1% - 13,8% - 13,8% - 9,7% - 7,3% - 6,2% - 4,6%. Mediana de likes **14.630** (venia 17.809 JSON; 8.368 -> 7.993 -> 4.113 Apify). 🚨 **Es 7 de 7 VIDEO**, y su pieza mas comentada es `De8dlwdOoit`: **34.462 likes / 41.733 comentarios = 121% de ratio.** Un ratio arriba de 100% no es una seccion de comentarios con historias propias: es **mecanica de cebo** (etiquetar, responder para participar). **Para el carril de Repackage eso importa: el conteo alto ahi no implica texto cosechable.** Nunca dio semilla. **Sin semilla: strike 6**, ver la nota sobre que mide el contador. **shortCodes guardados (dueño verificado `theneighborhoodtalk`):** `De7yTaZuqtv` - `De8dlwdOoit` - `De8Mu-DpQna` - `De8baJYJC9n` - `De7VYpVPG-h` - `De8SV2YRubV` - `De8Lm_JNjNZ` | 2026-11-02 |
| `raphousetv` | IG | **Mediana de ratio 9,3% (n=6), practicamente empatada con `theneighborhoodtalk`.** Ratios 23,4% - 11,7% - 11,5% - 7,1% - 4,3% - 2,6%. Mediana de likes **5.326** (venia 5.960 JSON / 5.156 Apify): **es la cuenta mas estable de la lista a traves de los tres instrumentos**, y por eso la referencia mas confiable que tiene el archivo — ver el cotejo de instrumentos arriba, que se hizo sobre ella. 3 de 6 video. Fuente de semilla y termometro de discusion. **Sin semilla: strike 6.** **shortCodes guardados (dueño verificado `raphousetv`):** `De8nPbtEbjT` - `De8NRBNB2AN` - `De79Nn8oE50` - `De8XQI5uPJm` - `De8EdPjNEd-` - `De7xvRih6mY` | 2026-11-02 |
| `blacknews` | IG | Levanta historias viejas y las vuelve actuales: es su motivo. **Mediana propia 341 (n=5), tercera medicion que confirma que sus posts propios son chicos** (839 -> 341; 311 y "no medible" antes): **no es por su mediana que se la mira.** Mediana de ratio **2,5%** (venia 4,1%), 0 de 5 video. **Segunda ventana seguida sin dar semilla: strike 2.** Lo que si hizo fue **madurar bien la ultima que dio: KA'SHEENA DANIELS llego a 7.607 likes (1,69x la vara) con 547 comentarios, 7,2%** — sigue siendo el ratio mas alto de una pieza nuestra que no fue cosechada. **shortCodes guardados (dueño verificado `blacknews`):** `De7bqM1h6ci` - `De66dPcx4xD` - `De64s3Lx4M6` - `De5E4DkBjRN` - `De4ceHpRfDP` | 2026-11-02 |
| `goodnews_movement` | IG | Fuera de nuestra cultura, **solo formato**. Mediana **73.168 (n=5)** — numeros de otro orden y subiendo (un post de 173.454). 🚨 **Y el perfil que la define se confirma y se acentua: mediana de ratio 0,7%** (venia 1,2%), rango 0,5% a 2,2%, **la mas baja de la lista por lejos**. **Mucho volumen, casi nada de conversacion** — el inverso exacto de `raphousetv`, que tiene 14 veces menos likes y 13 veces mas discusion. **El contraste entre volumen de likes y motor de conversacion, que este archivo mezclaba en una columna hasta el 26/10, es el dato mas reproducible de la lista: dos corridas, misma direccion.** 2 de 5 video; **decima medicion sin que la duracion prediga nada**, la hipotesis del no-reel sigue retirada desde el 28/09. **Sobre el strike:** declarada "solo formato" desde que entro — nunca iba a dar semilla, y el contador mide semillas. Decision del operador, no del analista. **shortCodes guardados (dueño verificado `goodnews_movement`):** `De64bsPhnYY` - `De1r2b2FRTk` - `De2F7tzle5U` - `De73yAxn5E3` - `DezShZMO_kY` | 2026-11-02 |

**Nota sobre el contador de strikes (12/10, SIN RESOLVER EN CINCO CORRIDAS):** lo que el contador mide es
"llego a PRODUCED como fuente". Para `blacknews` eso es exactamente su motivo declarado. Para
`theneighborhoodtalk` y `raphousetv` el motivo declarado es **el motor de comentarios** (carril de Repackage);
ese carril **volvio a cero por tercera ventana seguida**, asi que las dos siguen sin oportunidad real de
aparecer. Para `goodnews_movement` el motivo es formato. **Tres de las cuatro siguen en strike por un criterio
que no mide su motivo**, ahora en 6. Es una observacion de metodo, no una decision: queda escrita para el
operador.

---

## CANDIDATAS (medidas, esperando la segunda semilla)

| Cuenta | Que se le midio | Que falta |
|---|---|---|
| `rhtvmusic` | IG, satelite de RapHouseTV. 🚨 **La medicion del 26/10 queda corregida: de los 4 shortCodes que se le habian anotado, dos eran de otras cuentas.** Con las 3 que si son suyas, medidas el 02/11: **mediana 9.107, mediana de ratio 8,6%** (14,7% - 8,6% - 5,2%), un post con 9.107 likes / 1.335 com. 2 de 3 video | **n=3, y la afirmacion del 26/10 de que "las cuatro pasan el 6%" ya no se sostiene.** El caso sigue abierto: ratio alto y consistente, likes dispersos. **shortCodes guardados (dueño verificado `rhtvmusic`):** `De0X80CjISy` - `DexRlIIh0PE` - `De7tlTNBM84` |
| `rhtvgame.ing` | IG, mismo satelite. 🚨 **Primera medicion despues de tres corridas sin maduros**, y entro sola, por un cross-post mal atribuido a `raphousetv`: `De8hKdQxSt7`, **821 likes / 80 com. = 9,7%**. Consistente con el perfil del grupo: numeros chicos, ratio alto. Historico: 3.920 / 73 (1,9%) el 18-oct; 1.237 / 124 (10,0%) el 12/10 | **n=1 con dueño verificado.** Se le toma grilla propia la proxima corrida; ya no depende del cupo de la ruta de emergencia. **shortCode guardado:** `De8hKdQxSt7` |
| `yktesolid` | IG. 🚨 **ENTRO EL 02/11**, y entro sola: aparecio como cross-post atribuido por error a `rhtvmusic`. Lo unico medido: `DexrEHBNNom`, 22-oct, **video, 7.635 likes / 423 com. = 5,5%** | **n=1.** Numeros reales y ratio por encima de nuestra mediana. **Falta grilla propia y saber que hace la cuenta** antes de decidir si aporta algo que no estemos haciendo. **shortCode guardado:** `DexrEHBNNom` |
| `becauseofthem` | IG. **Mediana 3.720 (n=4) el 02/11**, segunda medicion seguida **por debajo de nuestra vara de 4.510** (venia 4.282; antes 3.229 -> 5.254). Ratios 0,7% a 3,4%, mediana **1,9%**. 0 de 4 video. Produce consistentemente | **Sigue sin aparecer como fuente en PRODUCED, cuarta ventana.** Una sola semilla historica (Teddy Gant, 20-sep); el criterio pide dos: **no entra.** Con la mediana debajo de la vara por segunda vez, **el caso se debilita otra vez.** **shortCodes guardados (dueño verificado `becauseofthem`):** `De2dQBXk4Gw` - `Deu29F_ElxA` - `DesT6p3EkIs` - `Dewq-cVkgLh` |
| `rap.housetv` | IG. Tercer satelite del grupo. Lo unico medido sigue siendo del 19/10: un post del 13-oct con **439 likes / 103 com. = 23,5%** | **Tercera corrida sin medicion nueva.** Con Apify repuesto ya no hay excusa de cupo: **si la cuarta tampoco le toma grilla, conviene decidir si sale de candidatas.** Sigue en n=1 |

---

## COMO SUMAR PAGINAS NUEVAS

No hace falta que el operador las nombre. El analista las encuentra:

1. **Desde los posts que ya detecto el radar.** Cuando una historia explota, mirar que paginas grandes la levantaron. Las que aparecen seguido, entran a la lista.
2. **Por busqueda de formato.** Buscar en TikTok e IG el tipo de pieza que nos interesa y ver que cuentas la producen bien de forma consistente.
3. **Las que nos copian.** Si una pagina grande replico un post nuestro, es porque mira lo mismo que nosotros. Vale vigilarla.
4. **Las que ya nos dieron semilla.** Si una cuenta aparece como fuente en PRODUCED dos veces en una semana, entra (asi entro `blacknews` el 21/09, y ya puso tres piezas en el feed en un mes).
5. **Las que caen de un scrape ajeno.** Las cuentas satelite aparecen mezcladas en el feed de la principal - asi entraron `rhtvmusic` y `rhtvgame.ing` el 12/10, `rap.housetv` el 19/10 y **`yktesolid` el 02/11**. ⚠️ **Y la correccion del 02/11 vale justo para esta via: un post que aparece en la grilla de una cuenta puede no ser de ella.** Verificar el `ownerUsername` antes de atribuirle la medicion.

**Criterio para que entre:** que produzca **consistentemente**, no un hit suelto. Y que tenga algo que nosotros no estemos haciendo - si hace exactamente lo mismo, no aporta.

**Criterio para que salga:** tres revisiones seguidas sin nada aprovechable. (Ver la nota de arriba sobre que mide el contador.)

**El barrido POR HISTORIA sigue sin cerrar, novena corrida.** Ruta anotada: cosechar los comentarios de nuestro
propio post mas fuerte y leer los @ que aparecen ahi. ✅ **Con Apify repuesto, el scraper de comentarios vuelve a
estar disponible** — la razon tecnica que el 26/10 bloqueaba esta ruta ya no aplica. Candidatos acumulados y sin
usar: **`DfDh8DqhyLf` (PAUL PIERCE, 02/11, 173 com. sobre 775 likes = 22,3%, el mas limpio de todos: semilla
quemada, likes de piso, discusion alta)**, `DenPSATFoa_` (Ka'Sheena, **547 comentarios, 7,2%**),
Darryl Bell / SpaceX (`DeWwTANhnLc`, 497 com., 20,1%), Tuskegee (`Ddm4EdwM8tV`, 1.147 com.) y Tisha
(`Dd-Bj0Flntl`, 150 com.). Fuente directa del lado de la semilla, identificada y sin usar: `@jaynoz_` en
TikTok (89.300 fans).

**Dato de esta corrida (02/11):** **la lista volvio a no entregar ninguna semilla, segunda ventana seguida en
cero.** Los carriles de la ventana fueron TV local (8 de 14), prensa y feeds de cultura (3), prensa negra (1),
semilla del operador (1) y evergreen (1).

🚨 **Lo que la medicion del 02/11 dice sobre el carril evergreen, segunda ventana en la misma direccion:**
el carril, ya madurado, **no tiene mediana mas alta** que los carriles de noticia (1,06x contra 0,95x),
tiene **15,7x de dispersion interna** (techo 5,60x y piso 0,36x en la misma cohorte), y sobre todo
**genera un cuarto de la conversacion: mediana de ratio 0,60% contra 2,75%.** El 26/10 esa cifra fue 0,56%
contra 1,65%: **dos ventanas, mismo resultado, es el hallazgo mas reproducible que toca a esta lista.**
Como las paginas de aca se miran casi todas por el carril de Repackage, **una semana cargada de evergreen es
una semana que no produce material cosechable propio** — y al reves tambien se midio: esta ventana tuvo
1 evergreen sobre 14 y **dejo dos piezas arriba del 8%.** `pubity` como pagina de formato sigue **sin entrar**:
el metodo esta medido, la pagina no.

🚨 **Y un dato del feed propio que esta lista deberia registrar, segunda ventana seguida:** el objeto con mas
alcance y mas conversacion del Instagram principal **no fue una pieza editorial**. El 26/10 fue un reel
publicitario de `@paulalex` (5,3%); el 02/11 fue el cross-post de animacion de **`@HustlersNTheHoodTv`**
(`DfF-K5nvNh7`, **48.136 likes = 10,67x, 5.875 comentarios = 12,21%**). Y en la misma ventana aparecio un
**carrusel publicitario de lead magnet** sin el hashtag de la marca (`DfAPwGxFs1a`, **25 likes / 0 comentarios**).
**Los tres numeros quedan medidos; que hacer con el feed es del operador.**

---

## QUE MIRAR EN CADA UNA

- **Formato**: estructura de post que no usamos? largo distinto? otra forma de tapa?
- **Angulo**: que frame le dieron a una historia que nosotros tambien teniamos?
- **Ritmo**: cuantas veces por dia postean? a que hora?
- **Lo que evitan**: a veces lo mas util es notar que NO hacen.

**Paginas fuera de nuestra cultura:** sirven igual, pero solo por el formato. Anotar la mecanica, nunca el tema.

**Lo que se cerro al 02/11:** **Apify repuesto**, asi que vuelven el scrape de 20 posts, el OCR y el scraper de
comentarios; el techo de 12 items de la ruta de emergencia dejo de aplicar. **Los dos instrumentos se cotejaron
por primera vez sobre las mismas piezas** (`raphousetv`: 9,8% -> 9,3%) y no aparecio un desfasaje grande.
**Lo que se corrigio:** los shortCodes guardados pueden ser de otro dueño — tres casos verificados — y de aqui
en adelante se guardan con `ownerUsername`; con eso, **la lectura del 26/10 sobre `rhtvmusic` queda sin
sostener.** **Lo que se cancelo:** la reordenacion `raphousetv` > `theneighborhoodtalk` no se reprodujo; las dos
quedan empatadas y sin orden medido. **Lo que se sostiene:** el contraste volumen-vs-conversacion
(`goodnews_movement` 73.168 / 0,7% contra `raphousetv` 5.326 / 9,3%), segunda corrida; la duracion de reel no
predice nada (decima medicion); `blacknews` sigue siendo la unica que cumplio su motivo declarado, aunque lleve
dos ventanas sin entregar. **Lo que entro:** `yktesolid` a candidatas; `rhtvgame.ing` con su primera medicion
de dueño verificado. **Lo que salio:** `cre8tedbywavy`, a descartadas sin periodo de prueba (numeros nulos).

---

## DESCARTADAS

| Cuenta | Motivo | Fecha |
|---|---|---|
| `cre8tedbywavy` | Aparecio sola, como cross-post mal atribuido a `rhtvmusic`. Lo unico medido: `De3b9WLuiA-`, 24-oct, video, **96 likes / 8 comentarios**. **Numeros nulos: no hay nada que medirle ni que adaptarle.** Se anota para no volver a evaluarla si reaparece en otra grilla | 2026-11-02 |
| `blackinformationnetwork` | **Strike 3 de 3.** Tres revisiones seguidas sin llegar a PRODUCED bajo su motivo declarado ("fuente de semilla"). Lo medido queda anotado y no hace falta volver: mediana 660 -> 265 -> 671 -> **1.062 (n=6)**, posts propios chicos, y un motor de comentarios real pero no excepcional (5,2% con 225 com. sobre 4.344; 13,9% medido el 28/09). Dio una sola semilla en todo el periodo (Nolan Wells, 23-sep). Si vuelve a aparecer como fuente en PRODUCED, se re-evalua | 2026-10-05 |
| `humansofny` | **Strike 3 de 3.** Tercera revision seguida sin material nuevo: al 07/09 lo mas reciente que devuelve el scrape sigue siendo de octubre de 2025. Lo que ya se le midio queda anotado y no hace falta volver: carrusel APAISADO 1440x960 (257.035 likes) y motor real en el reel vertical LARGO de una persona a camara (99s = 544.599; 155s = 106.098; 45s = 107.579). Si vuelve a publicar, se re-evalua | 2026-09-07 |
