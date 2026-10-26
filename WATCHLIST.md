# HNTH - PAGINAS A VIGILAR

Lista viva. **El analista la actualiza cada corrida**: suma las que descubre, marca las que dejaron de servir, corrige handles que cambiaron.

**Para que sirve:** ver que formatos y angulos estan funcionando afuera. No para copiar temas - para detectar mecanicas que podamos adaptar.

**Como se lee la columna "por que":** una pagina puede servir aunque su cultura no sea la nuestra. Si el FORMATO funciona, se adapta.

---

## 🚨 METODO — CAMBIO DEL 26/10/2026, LEER ANTES DE COMPARAR CUALQUIER NUMERO

**Hasta el 19/10 las medianas se midieron con `directUrls` del `instagram-scraper` de Apify.**
**El 26/10 Apify agoto el limite mensual de la cuenta** (`Monthly usage hard limit exceeded`, en todos los
actores) y la medicion se hizo por una ruta nueva: **`og:description` + el JSON embebido de cada pagina de
post** (`like_count`, `comment_count`, `taken_at`), leidos con curl desde el sandbox de Higgsfield. **Gratis.**

**El metodo nuevo es exacto, no estimado:** verificado contra el propio contador de Instagram (og dice
`4,926 likes`, el JSON dice `like_count: 4926` en la misma pieza).

🚨 **PERO LAS DOS SERIES NO SON COMPARABLES.** Las medianas del 26/10 se leen como **NUEVA LINEA DE BASE**.
Cuatro cuentas subieron 2x a 4x y dos bajaron: los movimientos no van todos en la misma direccion, lo que
argumenta contra un desfasaje sistematico, **pero una sola corrida no alcanza para declarar movimiento real.**
La proxima corrida, medida con el mismo instrumento, es la que dice si algo se movio.

**Lo que el cambio de metodo NO afecta, porque es interno a cada cuenta: el RATIO de comentarios.**
Esa columna si es comparable y es la que mas dice para el carril de Repackage.

**Dos limites de la ruta nueva:**
1. **Sin login, Instagram corta la grilla de perfil en 12 items.** Alcanza para guardar shortCodes de las
   cuentas de alta frecuencia, pero no se pueden pedir 20.
2. **Los likes ocultos no se recuperan.** Cuando el dueno los oculta, el JSON devuelve el centinela
   `like_count: 3`. **Regla de lectura: `like_count == 3` = ocultos; cualquier otro valor es real.**
   ⚠️ El reciproco no vale: que `og:description` no traiga el prefijo de likes NO implica oculto.

**El procedimiento de fondo no cambia:** en cada corrida se GUARDAN los shortCodes que devuelve la grilla, y
la mediana de una cuenta de alta frecuencia se calcula la semana siguiente midiendo ESOS shortCodes ya maduros.
La mediana de estas cuentas siempre va una semana atrasada, y asi es comparable.

**Nota del 19/10 que sigue valiendo:** da una mediana comparable, no una estable. Estas cuentas se mueven
decenas de puntos porcentuales entre semanas con n=7. **Se leen como orden de magnitud, no como numero.**

---

## VIGILANDO

| Cuenta | Plataforma | Por que esta aca | Ultima revision |
|---|---|---|---|
| `raphousetv` | IG | **LA MEDIANA DE RATIO DE COMENTARIOS MAS ALTA DE LA LISTA: 9,8% (n=7).** Ratios **23,5% - 21,0% - 13,0% - 9,8% - 5,4% - 2,8% - 2,7%**. Mediana de likes **5.960** (metodo nuevo) - y es **la unica cuenta cuya mediana practicamente no se movio con el cambio de instrumento (+16% sobre 5.156)**, lo que la vuelve la referencia mas confiable de la lista. Fuente de semilla y termometro de discusion. **Sin semilla: strike 5** - ver la nota sobre que mide el contador. **shortCodes guardados:** `De8nPbtEbjT` - `De8hKdQxSt7` - `De8XQI5uPJm` - `De8NRBNB2AN` - `De8EdPjNEd-` - `De79Nn8oE50` - `De7xvRih6mY` - `De7liqhOCg3` - `De7hnahILSv` - `De7bbSINvNP` - `De7TeeCxzwo` - `De7Nf81OyR8` | 2026-10-26 |
| `theneighborhoodtalk` | IG | Motor de comentarios real pero **ya no el mas fuerte de la lista**: mediana de ratio **5,6% (n=8)**, por debajo de `raphousetv` (9,8%) y `rhtvmusic` (9,2%) medidos con el mismo instrumento en la misma corrida. Ratios **18,1% - 8,3% - 7,0% - 6,0% - 5,6% - 4,8% - 4,0% - 2,0%**, con 3.404 y 2.934 comentarios en dos posts. Mediana de likes **17.809** (metodo nuevo; venia 8.368 -> 7.993 -> 4.113 por Apify). ⚠️ **El archivo la venia llamando "el motor mas fuerte por un margen amplio" desde el 28/09; esa lectura queda en duda, con n=8 y una sola corrida del instrumento nuevo. No se deroga todavia.** Nunca dio semilla. **Sin semilla: strike 5**. **shortCodes guardados:** `De8SV2YRubV` - `De7VYpVPG-h` - `De8dlwdOoit` - `De8baJYJC9n` - `De8Mu-DpQna` - `De8Lm_JNjNZ` - `De7yTaZuqtv` - `De7qiGwtafR` - `De7p0mSH4RQ` - `De8C5xxJVTh` - `De8CMe7Jkjd` - `De79-y5uxF8` | 2026-10-26 |
| `blacknews` | IG | Levanta historias viejas y las vuelve actuales: es su motivo y lo cumplio dos semanas seguidas. **Esta ventana NO dio semilla, asi que el contador se mueve: strike 1.** Lo que si hizo fue **madurar bien la ultima que dio: KA'SHEENA DANIELS llego a 6.769 likes (1,50x la vara) con 510 comentarios, 7,5% - el ratio mas alto de todas nuestras piezas medidas.** Mediana propia **839 (n=5)**, posts chicos, confirmado en segunda medicion: **no es por su mediana que se la mira.** **shortCodes guardados:** `De7bqM1h6ci` - `De66dPcx4xD` - `De64s3Lx4M6` - `De5E4DkBjRN` - `De4ceHpRfDP` - `De4azJExldB` - `De4XMwlRnX6` - `De2SqyKBqKd` - `De19UC4RGbx` | 2026-10-26 |
| `goodnews_movement` | IG | Fuera de nuestra cultura, **solo formato**. Mediana **48.613 (n=6)** con el metodo nuevo - numeros de otro orden (146.398 en un post de 22h, 109.417 maduro). 🚨 **Y el dato que la define, medido esta corrida: su mediana de ratio de comentarios es 1,2%, la mas baja de la lista** (rango 0,5% a 2,1%). **Mucho volumen, casi nada de conversacion** - el perfil exactamente inverso al de `raphousetv`, que tiene 8 veces menos likes y 8 veces mas discusion. **El archivo venia mezclando las dos cosas en una sola columna; quedan separadas.** Los reels siguen dominando; **novena medicion sin que la duracion prediga nada**, la hipotesis del no-reel sigue retirada desde el 28/09. **Sobre el strike:** declarada "solo formato" desde que entro - nunca iba a dar semilla, y el contador mide semillas. **El contador le mide algo que no puede dar.** Decision del operador, no del analista. **shortCodes guardados:** `De73yAxn5E3` - `De64bsPhnYY` - `De2F7tzle5U` - `De1r2b2FRTk` - `DezShZMO_kY` - `DexGslohSou` | 2026-10-26 |

**Nota sobre el contador de strikes (12/10, SIN RESOLVER EN CUATRO CORRIDAS):** lo que el contador mide es
"llego a PRODUCED como fuente". Para `blacknews` eso es exactamente su motivo declarado. Para
`theneighborhoodtalk` y `raphousetv` el motivo declarado es **el motor de comentarios** (carril de Repackage);
ese carril **volvio a cero esta ventana** despues de correr una sola vez el 19/10, asi que las dos siguen sin
oportunidad real de aparecer. Para `goodnews_movement` el motivo es formato. **Tres de las cuatro siguen en
strike por un criterio que no mide su motivo**, ahora en 5. Es una observacion de metodo, no una decision:
queda escrita para el operador.

---

## CANDIDATAS (medidas, esperando la segunda semilla)

| Cuenta | Que se le midio | Que falta |
|---|---|---|
| `rhtvmusic` | IG, satelite de RapHouseTV. **Primera mediana con n=4: 5.540.** Y el motor de comentarios mas consistente medido esta corrida: **las CUATRO piezas pasan el 6%** (20,5% - 10,9% - 7,4% - 6,2%), mediana de ratio **9,2%**, por encima de `theneighborhoodtalk`. Un post con **90.948 likes y 18.613 comentarios**. Likes muy dispersos, conversacion consistente | n=4. **Si vuelve a medir arriba del 6% en las cuatro, el caso para que entre por el carril de Repackage es mas fuerte que el de dos de las cuatro que ya estan vigiladas.** **shortCodes guardados:** `De7tlTNBM84` - `De3b9WLuiA-` - `De0X80CjISy` - `DexrEHBNNom` - `DexRlIIh0PE` - `Dew5AmXp7cE` - `DeujhIipFwY` - `DesqwRVjOJW` |
| `becauseofthem` | IG. **Mediana madura 4.282 (n=8), y eso la pone POR DEBAJO de nuestra propia vara de 4.510** - venia 3.229 -> 5.254. Ratios 0,7% a 3,2%, mediana 1,7%. Produce consistentemente | **Sigue sin aparecer como fuente en PRODUCED en las tres ultimas ventanas.** Una sola semilla historica (Teddy Gant, 20-sep); el criterio pide dos: **no entra.** Con la mediana ahora debajo de nuestra vara, **el caso para que entre se debilito** |
| `rhtvgame.ing` | IG, mismo satelite. Lo ultimo medido sigue siendo del 19/10: un post del 18-oct con 3.920 likes / 73 com. (1,9%), contra 1.237 / 124 (10,0%) el 12/10. Numeros chicos | **Sin grilla esta corrida:** el cupo de 12 items de la ruta nueva se gasto en las seis cuentas principales. **Tercera corrida sin maduros.** Si la cuarta tampoco le toma medida, conviene decidir si sale de candidatas o se le da prioridad de cupo |
| `rap.housetv` | IG. Tercer satelite del grupo. Lo unico medido sigue siendo del 19/10: un post del 13-oct con **439 likes / 103 com. = 23,5%** - ratio altisimo sobre numeros chicos | **Sin grilla esta corrida**, mismo motivo que la anterior. Sigue en n=1 |

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

**El barrido POR HISTORIA sigue sin cerrar, octava corrida.** Ruta anotada: cosechar los comentarios de nuestro
propio post mas fuerte y leer los @ que aparecen ahi. ⚠️ **Con Apify agotado, el scraper de comentarios no esta
disponible; la ruta `og:description` da el CONTEO de comentarios pero no su TEXTO.** Candidatos acumulados y sin
usar: `DenPSATFoa_` (Ka'Sheena, **510 comentarios, 7,5%**), Darryl Bell / SpaceX (`DeWwTANhnLc`, 497 com., 20,1%),
Tuskegee (`Ddm4EdwM8tV`, 1.147 com.) y Tisha (`Dd-Bj0Flntl`, 150 com.). Fuente directa del lado de la semilla,
identificada y sin usar: `@jaynoz_` en TikTok (89.300 fans).

**Dato de esta corrida:** **la lista no entrego ninguna semilla.** Las tres ventanas anteriores habian
entregado una sola cuenta cada vez (`blacknews`, dos veces seguidas). Esta vez, cero. Los carriles de la ventana
fueron evergreen (4 piezas), semilla del operador (1) y TV local (1).

🚨 **Lo que la medicion del 26/10 dice sobre el carril evergreen, y que toca directo a esta lista:**
el carril **no tiene mediana mas alta** que los carriles de noticia (1,26x contra 1,44x, n=5 contra n=10),
tiene **3,7 veces mas dispersion**, y sobre todo **genera un tercio de la conversacion**
(mediana de ratio 0,56% contra 1,65%). Como las paginas de esta lista se miran casi todas por el carril de
Repackage, **una semana de 4 piezas evergreen sobre 6 es una semana que no produce material cosechable propio**:
esta ventana no dejo ninguna pieza nuestra arriba del 8%, la primera del archivo. `pubity` como pagina de
formato sigue **sin entrar**: el metodo esta medido, la pagina no.

---

## QUE MIRAR EN CADA UNA

- **Formato**: estructura de post que no usamos? largo distinto? otra forma de tapa?
- **Angulo**: que frame le dieron a una historia que nosotros tambien teniamos?
- **Ritmo**: cuantas veces por dia postean? a que hora?
- **Lo que evitan**: a veces lo mas util es notar que NO hacen.

**Paginas fuera de nuestra cultura:** sirven igual, pero solo por el formato. Anotar la mecanica, nunca el tema.

**Lo que se cerro al 26/10:** quedo separada la columna que el archivo venia mezclando - **volumen de likes y
motor de conversacion son dos cosas distintas**, y `goodnews_movement` (48.613 likes / 1,2%) contra
`raphousetv` (5.960 / 9,8%) lo muestra con numero. **Lo que se sostiene:** la duracion de reel no predice nada
(novena medicion); la ventaja del no-reel sigue retirada; `blacknews` sigue siendo la unica que cumplio su
motivo declarado, aunque esta ventana no entregue. **Lo que se movio:** cambio el instrumento de medicion y las
medianas arrancan linea de base nueva; `raphousetv` y `rhtvmusic` pasan a `theneighborhoodtalk` en ratio de
comentarios; `becauseofthem` cae debajo de nuestra vara y su caso se debilita; `blacknews` pasa a strike 1;
`rhtvgame.ing` y `rap.housetv` quedan sin medir por falta de cupo.

---

## DESCARTADAS

| Cuenta | Motivo | Fecha |
|---|---|---|
| `blackinformationnetwork` | **Strike 3 de 3.** Tres revisiones seguidas sin llegar a PRODUCED bajo su motivo declarado ("fuente de semilla"). Lo medido queda anotado y no hace falta volver: mediana 660 -> 265 -> 671 -> **1.062 (n=6)**, posts propios chicos, y un motor de comentarios real pero no excepcional (5,2% con 225 com. sobre 4.344; 13,9% medido el 28/09). Dio una sola semilla en todo el periodo (Nolan Wells, 23-sep). Si vuelve a aparecer como fuente en PRODUCED, se re-evalua | 2026-10-05 |
| `humansofny` | **Strike 3 de 3.** Tercera revision seguida sin material nuevo: al 07/09 lo mas reciente que devuelve el scrape sigue siendo de octubre de 2025. Lo que ya se le midio queda anotado y no hace falta volver: carrusel APAISADO 1440x960 (257.035 likes) y motor real en el reel vertical LARGO de una persona a camara (99s = 544.599; 155s = 106.098; 45s = 107.579). Si vuelve a publicar, se re-evalua | 2026-09-07 |
