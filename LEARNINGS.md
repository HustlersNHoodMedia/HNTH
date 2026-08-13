# HNTH MEDIA — APRENDIZAJES ACUMULADOS

Este archivo es la memoria del sistema. Se lee al empezar cada chat y se actualiza cada vez que Demian corrige algo, marca una preferencia, o algo funciona / no funciona.

**Formato de cada entrada:** una línea. Fecha · categoría · qué aprendimos.
Categorías: `TÍTULO` · `FRAME` · `RESEARCH` · `PRODUCCIÓN` · `CAPTION` · `FORMATO` · `PROCESO`

**Reglas de escritura:**
- Se agrega al final de la lista, nunca se borra ni se reescribe lo anterior.
- Una corrección = una línea. Sin párrafos, sin justificaciones.
- Si una entrada nueva contradice a una vieja, se agrega igual con la fecha nueva: la más reciente manda.
- Solo entra lo que Demian dijo o corrigió explícitamente, o un resultado medido. No suposiciones.

---

## ENTRADAS

- 2026-08-07 · `TÍTULO` · La tapa solo puede prometer lo que el video publicado entrega. Un "then explained why" cuyo payoff está en otro video del perfil es clickbait y se paga en comentarios.
- 2026-08-07 · `PROCESO` · Nunca entregar dos etapas en un mismo mensaje. Research y frames van juntos; títulos aparte; producción aparte.
- 2026-08-07 · `PROCESO` · Cero moralina. Nada de advertencias sobre menores, exposición pública o si la audiencia es justa. El riesgo editorial va solo en la línea Riesgo de cada frame, y en una línea.
- 2026-08-07 · `FRAME` · El ángulo original del video es SIEMPRE una de las opciones, etiquetado como tal y con su porcentaje. No se descarta con "el ángulo no cambia".
- 2026-08-07 · `PRODUCCIÓN` · Si el título nombra a alguien que no aparece en el video (la madre, un famoso, la otra parte), su foto va en el panel superior. Se saca del avatar o de las portadas de sus otros videos.
- 2026-08-07 · `PRODUCCIÓN` · El bloque de título se ancla ABAJO en el papel negro, no centrado. Centrado queda flotando y se ve mal.
- 2026-08-07 · `FORMATO` · Todo video que se sube a Instagram sale como Reel, sin importar el aspect ratio. Pero el 4:5 se ve con bandas y rinde peor en distribución que el 9:16.
- 2026-08-07 · `RESEARCH` · Encaje de audiencia es filtro de entrada: si los protagonistas no conectan con la audiencia negra estadounidense de HNTH, el candidato se descarta aunque las métricas sean buenas.
- 2026-08-07 · `RESEARCH` · Descartar videos que son texto sobre música con fotos fijas: sin metraje real no hay nada que poner en el panel grande.
- 2026-08-07 · `RESEARCH` · Mirar el video ENTERO antes de proponerlo. Si a mitad se va a otra cosa (explicación larga, giro religioso), buscar en el perfil del autor la versión corta de ese mismo momento — suele existir y es material más limpio.
- 2026-08-07 · `RESEARCH` · Cuando el video no se explica solo, leer los comentarios más votados: ahí suele estar el contexto que falta para armar frame y título.
- 2026-08-07 · `PRODUCCIÓN` · Si el material original es horizontal, dar vuelta el molde: video en franja a lo ancho bajo el título y paneles de imagen abajo en fila. El layout vertical achica el video y lo arruina.
- 2026-08-07 · `PRODUCCIÓN` · Las imágenes con IA tienen que parecer gente común y real (turno de noche, ropa de trabajo, luz normal). Nunca modelos ni estética de publicidad: se nota y arruina el post.
- 2026-08-07 · `PRODUCCIÓN` · Al poner una cara en un panel, cuidar el encuadre: cara completa, ni cortada ni mal ubicada.
- 2026-08-07 · `PROCESO` · Si el puente de Apps Script falla en modo caption (no republicado), crear el Google Doc con el conector de Drive en la misma carpeta. El caption nunca queda solo en el chat.
- 2026-08-08 · `PROCESO` · Toda programación va SIEMPRE a las dos plataformas al mismo horario: Instagram (hustlersnthehoodmedia, canal 6a75d60c99afb443491bec76) y TikTok (hustlersnthehood, canal 6a77ae8599afb4434929eddf). No preguntar cuál.
- 2026-08-08 · `PROCESO` · En TikTok el criterio de riesgo es más laxo que en IG: ahí puede ir video reposteado sin problema, aunque sea la cuenta principal.
- 2026-08-08 · `PROCESO` · Buffer: schedulingType solo acepta "automatic" o "notification". El día y hora exactos van en mode: customScheduled + dueAt (ISO UTC). Modos válidos: addToQueue, customScheduled, shareNext, shareNow.
- 2026-08-08 · `PROCESO` · Buffer: para consultar la cola, los filtros van dentro de filter: { channelIds: [...] }, no sueltos en el input.
- 2026-08-08 · `PROCESO` · El bloque metadata: { instagram: {...} } es solo para IG. En TikTok se omite.
- 2026-08-13 · `PROCESO` · X (Twitter) rechaza captions largos: tope 280 caracteres. Para ese canal se arma una versión corta aparte, no se recorta la del feed.
- 2026-08-13 · `PROCESO` · TikTok no acepta imágenes de más de 2 millones de píxeles. Subir siempre una versión JPG 1080x1350 para ese canal.
- 2026-08-13 · `PROCESO` · La entrega SIEMPRE lleva el bloque 📦 ENTREGA con el link directo al archivo (nunca a la carpeta), el título, el formato y el link a la fuente, más ✍️ CAPTION en bloque de código. Sin eso el operador no puede ver cómo quedó.
- 2026-08-13 · `PROCESO` · NO correr dos chats ejecutando runs de Apify al mismo tiempo. Con HNTH y Media trabajando en paralelo, a un chat le llegó el resultado del run del otro (pidió tiktok-scraper y volvió screenshot-url con un registro del otro post). Un solo chat haciendo trabajo de Apify por vez.
- 2026-08-13 · `PROCESO` · Verificar SIEMPRE actorName y runId en la respuesta del run antes de confiar en la salida. Si no coinciden con lo que se pidió, descartar el resultado y reintentar con una startUrl nueva. Cuesta un segundo y detecta el cruce al instante.
- 2026-08-13 · `PROCESO` · Si el enrutamiento de herramientas viene fallando, NO correr runs que lean credenciales ni que publiquen/programen. Frenar y abrir un chat nuevo es la decisión correcta: el daño de una publicación equivocada en las cuentas no se deshace fácil.
- 2026-08-13 · `PROCESO` · Después de programar en Buffer, verificar la cola en vez de confiar en la respuesta de la mutación. Un post programado se puede borrar antes de que salga; uno publicado no.
