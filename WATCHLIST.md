# HNTH - PAGINAS A VIGILAR

Lista viva. **El analista la actualiza cada corrida**: suma las que descubre, marca las que dejaron de servir, corrige handles que cambiaron.

**Para que sirve:** ver que formatos y angulos estan funcionando afuera. No para copiar temas - para detectar mecanicas que podamos adaptar.

**Como se lee la columna "por que":** una pagina puede servir aunque su cultura no sea la nuestra. Si el FORMATO funciona, se adapta.

---

## METODO RESUELTO (05/10/2026) - COMO SE MIDE UNA CUENTA DE ALTA FRECUENCIA

El scrape de perfil **no sirve** para cuentas que postean muchas veces por dia: devuelve solo lo del dia, todo con menos de 24h, y la mediana sale inventada o no sale.

**Quedo medido con `theneighborhoodtalk`:** los 6 shortCodes guardados el 28/09, re-medidos a los 7-8 dias por `directUrls`, dieron **mediana 8.368** (4.482 / 5.593 / 6.818 / 9.918 / 42.030 / 65.697). El scrape de perfil venia informando 2.662 y despues "no medible" tres corridas seguidas. **Subestimaba por ~3x.**

**VALIDADO EL 12/10, segunda corrida:** los 6 shortCodes guardados el 05/10 dieron **7.993** - mismo orden de magnitud, sin volver a fallar. Y el mismo metodo le saco a `raphousetv` su **primera mediana madura en cinco corridas (6.757)**, despues de cuatro corridas declarandola "no medible". El metodo esta cerrado: funciona en las dos cuentas de alta frecuencia de la lista.

**El procedimiento, entonces:** en cada corrida se GUARDAN los shortCodes que devuelve el perfil, y la mediana de esa cuenta se calcula la semana siguiente midiendo ESOS shortCodes por `directUrls`. La mediana de una cuenta de alta frecuencia siempre va una semana atrasada, y asi es comparable.

---

## VIGILANDO

| Cuenta | Plataforma | Por que esta aca | Ultima revision |
|---|---|---|---|
| `theneighborhoodtalk` | IG | **La de numeros mas altos de la lista.** Mediana **7.993** (n=6 por `directUrls`, 7-8 dias de maduracion), despues de 8.368 - estable en dos corridas. Motor de DEBATE confirmado y esta semana mas fuerte todavia: ratios de **65,5% - 30,3% - 28,2% - 11,9% - 11,9% - 8,2%**. El 65,5% (2.292 com. sobre 3.500 likes) es el ratio mas alto que este archivo le midio a cualquier cuenta, propia o ajena. Nunca dio semilla: se la mira por el motor de comentarios, que es el carril de Repackage. **Sin semilla: strike 3 de 3** - pero ver la nota de abajo sobre el contador. **shortCodes guardados para la proxima:** `DeYGSXUsKQX` - `DeX-7wxsrN9` - `DeYK3v4tePX` - `DeX7GFyp7LI` - `DeYDjYxM8EE` - `DeX0DYDpp1h` - `DeX-KhrJORr` | 2026-10-12 |
| `raphousetv` | IG | Fuente de SEMILLA y termometro de discusion. **Primera mediana madura: 6.757** (n=6 por `directUrls`), despues de cuatro corridas "no medible" - el metodo la destrabo. Motor de discusion real pero un escalon abajo del de `theneighborhoodtalk`: **17,9% - 10,5% - 6,4% - 3,1% - 2,9% - 2,7%**. **Sin semilla: strike 3 de 3.** **shortCodes guardados para la proxima:** `DeZIu7RJaY0` - `DeXg4wCPd2s` - `DeYL0NXoDuG` - `DeYPKuVuxyA` - `DeXx87Jhjw5` - `DeXI3fNO85X` - `DeYVYu3uBL9` | 2026-10-12 |
| `blacknews` | IG | **DIO SEMILLA ESTA SEMANA Y FUE LA SEGUNDA PIEZA MAS ALTA DE LA TANDA**: Loganville Soul Food (6-oct, **17.942 likes, 3,98x la vara**). **Strike reseteado a 0.** Es la segunda vez en un mes que una semilla suya termina arriba (la otra fue Tuskegee, 46.277). Sus propios posts son chicos - esta corrida 19 a 386 likes a las ~10h, pins de 13.539 a 29.529 - asi que **no se la mira por sus numeros, se la mira por lo que levanta**, y es la unica cuenta de la lista que lo viene cumpliendo. Levanta historias viejas y las vuelve actuales. **shortCodes guardados:** `DeYG3uMuEZm` - `DeYGcdOuV1H` - `DeYPSn3O1r4` - `DeYHgBcOqXM` - `DeYHUj4uH6y` - `DeYO2pRuTP5` - `DeYH1xXOInK` | 2026-10-12 |
| `goodnews_movement` | IG | Fuera de nuestra cultura, **solo formato**. Mediana 16.552 -> 22.034 -> 43.332 -> 27.220 -> 19.983 -> **32.955 (n=7)**. **Corta tres bajas consecutivas.** Los reels siguen dominando (pico de 209.775 esta tanda); la hipotesis del no-reel quedo retirada el 28/09 y no se reabre. La duracion sigue sin predecir, septima medicion. **Sobre el strike:** no dio semilla, pero esta cuenta esta declarada "solo formato" desde que entro - nunca iba a dar una, y el contador de salida mide semillas. **El contador le mide algo que no puede dar.** Queda anotado para que el operador decida si la cuenta se queda por formato con otro criterio, o sale. El analista no lo resuelve solo | 2026-10-12 |

**Nota sobre el contador de strikes (12/10):** tres de las cuatro cuentas quedaron en strike 3 esta corrida, y la cuarta se salvo por una sola semilla. Lo que el contador mide es "llego a PRODUCED como fuente". Para `blacknews` eso es exactamente su motivo declarado y funciona. Para `theneighborhoodtalk` y `raphousetv` el motivo declarado es **el motor de comentarios** (carril de Repackage), y ese carril **no corrio ni una vez en esta ventana** - asi que no tuvieron oportunidad de aparecer. Para `goodnews_movement` el motivo es formato. **Las tres estan en strike por un criterio que no mide su motivo.** Es una observacion de metodo, no una decision: queda escrita para el operador.

---

## CANDIDATAS (medidas, esperando la segunda semilla)

| Cuenta | Que se le midio | Que falta |
|---|---|---|
| `rhtvmusic` | IG. **Detectada el 12/10 sin buscarla**, mezclada en el scrape de `raphousetv` (es un satelite de RapHouseTV). Un post del 11-oct midio **33.950 likes / 2.035 com. (6,0%)** - mas alto que cualquier post de `raphousetv` en las dos corridas que se le midieron | Una sola medicion, n=1. Se le guardan shortCodes la proxima y se le mide mediana madura antes de decidir |
| `rhtvgame.ing` | IG. Mismo satelite. Un post del 11-oct: **1.237 likes / 124 com. (10,0%)**. Ratio alto, numeros chicos | n=1. Se mide la proxima |
| `becauseofthem` | IG. **Mediana 3.229 (n=11 maduros)**, rango 906 a **44.238**, con 18.772 y 11.630 arriba. Ratios hasta 6,6%. Produce consistentemente y con numeros reales | Una sola semilla hasta ahora (Teddy Gant, 20-sep). El criterio pide dos: **no entra todavia**. Sin aparecer en PRODUCED la ventana del 12/10. Si aparece como fuente una vez mas, entra |

---

## COMO SUMAR PAGINAS NUEVAS

No hace falta que el operador las nombre. El analista las encuentra:

1. **Desde los posts que ya detecto el radar.** Cuando una historia explota, mirar que paginas grandes la levantaron. Las que aparecen seguido, entran a la lista.
2. **Por busqueda de formato.** Buscar en TikTok e IG el tipo de pieza que nos interesa y ver que cuentas la producen bien de forma consistente.
3. **Las que nos copian.** Si una pagina grande replico un post nuestro, es porque mira lo mismo que nosotros. Vale vigilarla.
4. **Las que ya nos dieron semilla.** Si una cuenta aparece como fuente en PRODUCED dos veces en una semana, entra (asi entro `blacknews` el 21/09, y ya puso dos piezas arriba de la vara en un mes).
5. **Las que caen de un scrape ajeno.** Las cuentas satelite aparecen mezcladas en el feed de la principal - asi entraron `rhtvmusic` y `rhtvgame.ing` el 12/10, sin buscarlas.

**Criterio para que entre:** que produzca **consistentemente**, no un hit suelto. Y que tenga algo que nosotros no estemos haciendo - si hace exactamente lo mismo, no aporta.

**Criterio para que salga:** tres revisiones seguidas sin nada aprovechable. (Ver la nota de arriba sobre que mide el contador.)

**El barrido POR HISTORIA sigue sin cerrar, sexta corrida.** Ruta anotada, sin buscador web: cosechar los comentarios de nuestro propio post mas fuerte con el scraper de IG y leer los @ que aparecen ahi. **Candidato nuevo y mejor que los anteriores:** `DeWwTANhnLc` (Darryl Bell / SpaceX, **497 comentarios en 21h, ratio 20,1% - el mas alto que midio este archivo en una pieza propia**). Candidatos anteriores que siguen sin usarse: Tuskegee (`Ddm4EdwM8tV`, 1.147 com.) y Tisha (`Dd-Bj0Flntl`, 150 com.). Fuente directa del lado de la semilla, identificada y sin usar: `@jaynoz_` en TikTok (89.300 fans).

**Dato de esta corrida, y corrige el de la pasada:** `blacknews` **si** dio semilla, y esa semilla fue la segunda pieza mas alta de la semana. La corrida del 05/10 habia anotado "ninguna de las cuatro cuentas dio semilla" como primera vez que la lista entera venia en cero; **esta semana la lista volvio a entregar, con una sola cuenta.**

---

## QUE MIRAR EN CADA UNA

- **Formato**: estructura de post que no usamos? largo distinto? otra forma de tapa?
- **Angulo**: que frame le dieron a una historia que nosotros tambien teniamos?
- **Ritmo**: cuantas veces por dia postean? a que hora?
- **Lo que evitan**: a veces lo mas util es notar que NO hacen.

**Paginas fuera de nuestra cultura:** sirven igual, pero solo por el formato. Anotar la mecanica, nunca el tema.

**Lo que se cerro al 12/10:** el metodo de `directUrls` quedo validado en segunda corrida y destrabo a `raphousetv` - las dos cuentas de alta frecuencia de la lista ya tienen mediana madura. **Lo que se sostiene:** ninguna gana por resolucion; la duracion de reel no predice nada (septima medicion); la ventaja del no-reel sigue retirada; `theneighborhoodtalk` sigue siendo el motor de comentarios mas fuerte de la lista por un margen amplio. **Lo que se movio:** `goodnews_movement` corta tres bajas y vuelve a 32.955; `blacknews` resetea strike con una semilla de 3,98x; entran `rhtvmusic` y `rhtvgame.ing` como candidatas.

---

## DESCARTADAS

| Cuenta | Motivo | Fecha |
|---|---|---|
| `blackinformationnetwork` | **Strike 3 de 3.** Tres revisiones seguidas sin llegar a PRODUCED bajo su motivo declarado ("fuente de semilla"). Lo medido queda anotado y no hace falta volver: mediana 660 -> 265 -> 671 -> **1.062 (n=6)**, posts propios chicos, y un motor de comentarios real pero no excepcional (5,2% con 225 com. sobre 4.344; 13,9% medido el 28/09). Dio una sola semilla en todo el periodo (Nolan Wells, 23-sep). Si vuelve a aparecer como fuente en PRODUCED, se re-evalua | 2026-10-05 |
| `humansofny` | **Strike 3 de 3.** Tercera revision seguida sin material nuevo: al 07/09 lo mas reciente que devuelve el scrape sigue siendo de octubre de 2025. Lo que ya se le midio queda anotado y no hace falta volver: carrusel APAISADO 1440x960 (257.035 likes) y motor real en el reel vertical LARGO de una persona a camara (99s = 544.599; 155s = 106.098; 45s = 107.579). Si vuelve a publicar, se re-evalua | 2026-09-07 |
