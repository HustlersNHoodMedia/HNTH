# HNTH — APRENDIZAJES EDITORIALES

Memoria del sistema editorial de Hustlers N The Hood. Se lee al empezar cada chat y se actualiza cada vez que Demian corrige algo, marca una preferencia, o un post rinde bien o mal.

**Formato:** `- YYYY-MM-DD · CATEGORÍA · qué aprendimos` (una línea)
**Categorías:** `RESEARCH` · `FRAME` · `TÍTULO` · `CAPTION` · `FORMATO` · `PROCESO`

**Reglas:** se agrega al final, nunca se borra ni se reescribe lo anterior. Si algo nuevo contradice a algo viejo, quedan los dos y manda el más reciente. Solo entra lo que Demian dijo o corrigió, o un resultado medido — nunca interpretaciones. No se anuncia que se está escribiendo.

---

## ENTRADAS

- 2026-08-09 · `TÍTULO` · El largo objetivo es 60–90 caracteres. Arriba de 130 la mediana cae a la mitad. Los títulos largos que recordamos como éxitos son sobrevivientes, no la regla.
- 2026-08-09 · `TÍTULO` · Abrir con el nombre de un famoso rinde la mitad que abrir con la situación (6.482 vs 13.324 de mediana). El nombre no es el gancho.
- 2026-08-09 · `TÍTULO` · Los mejores aperturas medidos: THIS/THAT, setups temporales (WHEN/AFTER/BACK IN), y pronombres con antecedente.
- 2026-08-09 · `TÍTULO` · El título final casi siempre lo ensambla Demian mezclando opciones. El trabajo es dar 5 materias primas distintas, no 5 variantes de la misma frase.
- 2026-08-09 · `FRAME` · Nunca construir el frame colgando al protagonista de celebridades con las que trabajó. El frame sale de lo que la persona ELIGIÓ. (Caso 9th Wonder: se propusieron frames con Jay-Z y los Grammys en una historia sobre una promesa de adolescente.)
- 2026-08-09 · `FRAME` · Si la historia tiene una segunda persona (hija, madre, amigo), buscar el paralelo. Ahí suele estar el oro. (Caso 9th Wonder: la hija graduándose la misma temporada nunca se buscó.)
- 2026-08-09 · `RESEARCH` · El sistema tiene que encontrar las historias solo. Nunca proponer un reparto donde Demian hace la caza manual — eso es exactamente lo que rechazó.
- 2026-08-09 · `FORMATO` · Los tipos de post no son lo mismo: portada+video en slide 2 (mediana 6.707) rinde muy por encima de portada+imagen (4.386) y de imagen única (3.674). Varios slides de fotos NO significa que sea historia.
- 2026-08-09 · `RESEARCH` · Money as a lesson está sobreproducido: 125 posts con mediana 2.925, de las peores. Educación/graduación igual (69 posts, 2.695). La toga no es historia; el obstáculo sí.
- 2026-08-09 · `PROCESO` · Cuando se le sumó la producción de posts al mismo chat, la calidad editorial se derrumbó. Frames y títulos se degradaron. No tocar ninguna herramienta de producción hasta que frame y título estén cerrados.
- 2026-08-09 · `CAPTION` · Nunca abrir con un nombre de marca o programa sin explicar ("Melanin Money just announced..."). El lector no se pone curioso, se va.
- 2026-08-09 · `CAPTION` · Si suena a página financiera para blancos, falla. Tono a tierra, ritmo, frases cortas, gramática natural de la cultura.
- 2026-08-10 · `PROCESO` · El token de GitHub se pide UNA VEZ al arrancar el chat, junto al checklist de inicio. Renderizando local, el contenedor no puede leer el almacén de Apify y sin ese token la tapa no llega al Drive. Nunca descubrirlo recién cuando falla la entrega.
- 2026-08-10 · `PRODUCCIÓN` · Un slide 2 con fotos de baja resolución (250px estiradas) baja el nivel del post en vez de subirlo. Si la calidad no da, recomendar imagen única en vez de entregarlo igual.
- 2026-08-10 · `TÍTULO` · Nunca abrir con la ley, el estado o la institución. "El estado dijo que sus 44 años valían $750.000" pega; "la ley de Carolina del Norte topeaba la compensación" no. Una ley no ofende a nadie; un estado poniéndole precio a una vida sí.
- 2026-08-10 · `RESEARCH` · Cuidado con dramatizar un hecho al framearlo: decir que "se negó a aceptar" un tope legal sugiere un gesto desafiante cuando la demanda civil es la vía normal. No es falso, pero es dramatizado — y eso es exactamente lo que después no se puede defender.
- 2026-08-10 · `PRODUCCIÓN` · Hay DOS motores de render y cada uno tiene su momento. LOCAL para diseñar e iterar: instantáneo, acepta cualquier foto sin hospedar, permite ver cada versión al toque (encuadre, brillo, tipografía). APIFY para entregar: el PNG queda con URL pública y el puente lo lleva solo al Drive.
- 2026-08-10 · `PRODUCCIÓN` · Cuando la tapa está resuelta localmente, se reconstruye en Apify expresando los mismos recortes como parámetros de weserv, se verifica que el render salga idéntico al local, y recién ahí se entrega. Validado con tres posts.
- 2026-08-10 · `PRODUCCIÓN` · La condición del motor Apify es que las fotos estén en URLs públicas. Si alguna foto no está online (una propia, por ejemplo), ese camino no sirve y hace falta el token de GitHub para cerrar el circuito.
- 2026-08-10 · `PRODUCCIÓN` · Nunca pasar el PNG por base64 en el chat: 1,5 MB se corrompen. Tampoco comprimir a JPEG para que entre — rompe la regla de no comprimir.
- 2026-08-10 · `PROCESO` · Para programar en TikTok se usa BUFFER, nunca Higgsfield. Higgsfield publica o deja en borradores pero no programa a hora futura. La mutación GraphQL y los IDs de canal están en el manual de producción.
- 2026-08-10 · `PROCESO` · Si Buffer responde "Public API tokens are not accepted for REST API access", es que se apuntó al endpoint REST viejo (deprecado). El correcto es el GraphQL en api.buffer.com. No es falta de permisos.
- 2026-08-10 · `RESEARCH` · Los números de los agregadores están inflados más veces de las que están bien: en una corrida, 4 revisados y solo 1 tenía los datos correctos. Toda cifra que venga de un reposteador se verifica contra un medio primario antes de entrar al título.
- 2026-08-10 · `PRODUCCIÓN` · Las fotos de un reposteador suelen traer su marca de agua. Las mismas están casi siempre en la nota del medio original, limpias y en mejor resolución. Buscarlas siempre.
- 2026-08-10 · `PRODUCCIÓN` · VERIFICAR EL RECORTE DESPUÉS DE CORTAR, no antes. Los archivos grandes de agregadores suelen ser composiciones de varios paneles: un "foto" de 2000px resultó ser un collage y el recorte cayó en la parte equivocada. Abrir el recorte y mirarlo antes de armar la tapa.
- 2026-08-10 · `PROCESO` · Antes de buscar una herramienta nueva, revisar el manual de producción: la ruta probablemente ya está documentada. Improvisar un rodeo que funciona igual cuesta tiempo, tokens y previsibilidad.
- 2026-08-13 · `PROCESO` · El endpoint de Buffer cambió a https://api.buffer.com/graphql (verificado). Ni api.buffer.com a secas ni graph.buffer.com ni el REST viejo funcionan. Está guardado en el record BUFFER_ENDPOINT del store: leerlo de ahí, no hardcodearlo.
- 2026-08-13 · `PROCESO` · Cada canal de Buffer tiene su propio record: BUFFER_CHANNEL_TIKTOK_HNTH (TikTok @hustlersnthehood) y BUFFER_CHANNEL_IG_MEDIA (IG @hustlersnthehoodmedia). El record viejo BUFFER_CHANNEL_ID apunta al IG de Media, no a TikTok.
- 2026-08-13 · `PROCESO` · Los runs de Apify cachean por URL: usar una startUrl distinta en cada corrida o se recibe el resultado anterior y parece que nada cambió.
