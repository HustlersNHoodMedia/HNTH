# HNTH — PAGINAS A VIGILAR

Lista viva. **El analista la actualiza cada corrida**: suma las que descubre, marca las que dejaron de servir, corrige handles que cambiaron.

**Para que sirve:** ver que formatos y angulos estan funcionando afuera. No para copiar temas — para detectar mecanicas que podamos adaptar.

**Como se lee la columna "por que":** una pagina puede servir aunque su cultura no sea la nuestra. Si el FORMATO funciona, se adapta.

---

## METODO RESUELTO (05/10/2026) — COMO SE MIDE UNA CUENTA DE ALTA FRECUENCIA

El scrape de perfil **no sirve** para cuentas que postean muchas veces por dia: devuelve solo lo del dia, todo con menos de 24h, y la mediana sale inventada o no sale.

**Quedo medido con `theneighborhoodtalk`:** los 6 shortCodes guardados el 28/09, re-medidos a los 7-8 dias por `directUrls`, dieron **mediana 8.368** (4.482 / 5.593 / 6.818 / 9.918 / 42.030 / 65.697). El scrape de perfil venia informando 2.662 y despues "no medible" tres corridas seguidas. **Subestimaba por ~3x.**

**El procedimiento, entonces:** en cada corrida se GUARDAN los shortCodes que devuelve el perfil, y la mediana de esa cuenta se calcula la semana siguiente midiendo ESOS shortCodes por `directUrls`. La mediana de una cuenta de alta frecuencia siempre va una semana atrasada, y asi es comparable.

---

## VIGILANDO

| Cuenta | Plataforma | Por que esta aca | Ultima revision |
|---|---|---|---|
| `theneighborhoodtalk` | IG | **La de numeros mas altos de la lista, y recien ahora se sabe.** Mediana real **8.368** (n=6 por `directUrls`, 7-8 dias de maduracion), con dos piezas de **42.030** y **65.697**. Motor de DEBATE confirmado con volumen: ratios de **19,9% - 18,4% - 13,3%**, los mas altos que este archivo midio a cualquier cuenta. Nunca dio semilla todavia: se la mira por el motor de comentarios, que es el carril de Repackage. **shortCodes guardados para la proxima:** `DeFqy1ohYf7` - `DeFl4OXgwYt` - `DeF00XapzCq` - `DeGALJ7MECB` - `DeGFOAkMG41` - `DeFxoOgMxsg` | 2026-10-05 |
| `goodnews_movement` | IG | Fuera de nuestra cultura, **solo formato**. Mediana 16.552 -> 22.034 -> 43.332 -> 27.220 -> **19.983 (n=9)**. Tercera baja consecutiva. Los reels siguen dominando (la hipotesis del no-reel quedo retirada el 28/09 y no se reabre). La duracion sigue sin predecir, sexta medicion. **Sin semilla: strike 2 de 3** | 2026-10-05 |
| `raphousetv` | IG | Fuente de SEMILLA y termometro de discusion. **Cuarta corrida inmadura** (los 11 posts entre 7h y 18h) — ahora se aplica el metodo de arriba. Motor visible aun sin madurar: **17,2% - 10,8% - 10,6%**. **shortCodes guardados para la proxima:** `DeFSOpPhXGO` - `DeFeP1_u4ap` - `DeGTE_cOJHy` - `DeFM_LqBUhP` - `DeGGiqSBMLs` - `DeGZ_q5jgF-`. **Sin semilla: strike 2 de 3** | 2026-10-05 |
| `blacknews` | IG | Entro el 21/09 y en su primera semana completa puso las dos piezas mas extremas de esa tanda: **Tuskegee (46.277, la mas alta del archivo en un mes)** y Teddy Gant (likes ocultos). **Esta semana cero semillas: strike 1 de 3.** Sus propios posts son chicos (mediana **403**, n=9; pins de 13.075 a 27.787): no se la mira por sus numeros, se la mira por lo que levanta. Levanta historias viejas y las vuelve actuales | 2026-10-05 |

---

## CANDIDATAS (medidas, esperando la segunda semilla)

| Cuenta | Que se le midio | Que falta |
|---|---|---|
| `becauseofthem` | IG. **Mediana 3.229 (n=11 maduros)**, rango 906 a **44.238**, con 18.772 y 11.630 arriba. Ratios hasta 6,6%. Produce consistentemente y con numeros reales | Una sola semilla hasta ahora (Teddy Gant, 20-sep, junto con `blacknews`). El criterio pide dos: **no entra todavia**. Si aparece como fuente en PRODUCED una vez mas, entra |

---

## COMO SUMAR PAGINAS NUEVAS

No hace falta que el operador las nombre. El analista las encuentra:

1. **Desde los posts que ya detecto el radar.** Cuando una historia explota, mirar que paginas grandes la levantaron. Las que aparecen seguido, entran a la lista.
2. **Por busqueda de formato.** Buscar en TikTok e IG el tipo de pieza que nos interesa y ver que cuentas la producen bien de forma consistente.
3. **Las que nos copian.** Si una pagina grande replico un post nuestro, es porque mira lo mismo que nosotros. Vale vigilarla.
4. **Las que ya nos dieron semilla.** Si una cuenta aparece como fuente en PRODUCED dos veces en una semana, entra (asi entro `blacknews` el 21/09, y en su primera semana completa puso la pieza mas alta del mes).

**Criterio para que entre:** que produzca **consistentemente**, no un hit suelto. Y que tenga algo que nosotros no estemos haciendo — si hace exactamente lo mismo, no aporta.

**Criterio para que salga:** tres revisiones seguidas sin nada aprovechable.

**El barrido POR HISTORIA sigue sin cerrar, quinta corrida.** Ruta anotada, sin buscador web: cosechar los comentarios de nuestro propio post mas fuerte con el scraper de IG y leer los @ que aparecen ahi. Candidatos para esa ruta, por orden de volumen de comentarios: **Tuskegee (Ddm4EdwM8tV, 1.147 com.)** y **Tisha (Dd-Bj0Flntl, 150 com., la pieza mas alta de esta semana)**. Fuente directa del lado de la semilla, ya identificada y sin usar: `@jaynoz_` en TikTok (89.300 fans).

**Dato de esta corrida: ninguna de las cuatro cuentas de VIGILANDO dio semilla.** Es la primera corrida en que la lista entera viene en cero como carril de origen. Las cuatro quedan con strike. Si la proxima repite, la lista entera queda sin justificacion como carril y hay que discutir para que se la mide.

---

## QUE MIRAR EN CADA UNA

- **Formato**: estructura de post que no usamos? largo distinto? otra forma de tapa?
- **Angulo**: que frame le dieron a una historia que nosotros tambien teniamos?
- **Ritmo**: cuantas veces por dia postean? a que hora?
- **Lo que evitan**: a veces lo mas util es notar que NO hacen.

**Paginas fuera de nuestra cultura:** sirven igual, pero solo por el formato. Anotar la mecanica, nunca el tema.

**Lo que se cerro al 05/10:** el metodo de medicion de cuentas de alta frecuencia (ver arriba) — cuatro corridas pidiendolo, resuelto y cuantificado. **Lo que se sostiene:** ninguna gana por resolucion; la duracion de reel no predice nada (sexta medicion); la ventaja del no-reel sigue retirada. **Lo que se movio:** `theneighborhoodtalk` pasa de "la menos medible" a la de numeros mas altos de la lista y la de mayor motor de comentarios. `blackinformationnetwork` sale por strike 3.

---

## DESCARTADAS

| Cuenta | Motivo | Fecha |
|---|---|---|
| `blackinformationnetwork` | **Strike 3 de 3.** Tres revisiones seguidas sin llegar a PRODUCED bajo su motivo declarado ("fuente de semilla"). Lo medido queda anotado y no hace falta volver: mediana 660 -> 265 -> 671 -> **1.062 (n=6)**, posts propios chicos, y un motor de comentarios real pero no excepcional (5,2% con 225 com. sobre 4.344; 13,9% medido el 28/09). Dio una sola semilla en todo el periodo (Nolan Wells, 23-sep). Si vuelve a aparecer como fuente en PRODUCED, se re-evalua | 2026-10-05 |
| `humansofny` | **Strike 3 de 3.** Tercera revision seguida sin material nuevo: al 07/09 lo mas reciente que devuelve el scrape sigue siendo de octubre de 2025. Lo que ya se le midio queda anotado y no hace falta volver: carrusel APAISADO 1440x960 (257.035 likes) y motor real en el reel vertical LARGO de una persona a camara (99s = 544.599; 155s = 106.098; 45s = 107.579). Si vuelve a publicar, se re-evalua | 2026-09-07 |
