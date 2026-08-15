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
- 2026-08-13 · `PROCESO` · Buffer, TRAMPA DEL ESQUEMA: consultar canales via account { organizations { channels } } devuelve FORBIDDEN. Consultarlos directo con channels(input: {organizationId: "..."}) FUNCIONA. No es falta de permisos del token, es un permiso de campo anidado. No diagnosticar "el token no tiene acceso" por ese error.
- 2026-08-13 · `PROCESO` · El ID de cuenta (...de9c) y el de organización (...de9e) son objetos DISTINTOS de Buffer. Que no coincidan es normal, no es un problema de configuración.
- 2026-08-13 · `PROCESO` · Buffer con IMAGEN: assets: [{ image: { url: "..." } }] — solo url es obligatoria (opcionales: thumbnailUrl, metadata). El bloque metadata: { instagram: {...} } es SOLO para Instagram; TikTok no tiene metadata propia. Verificado por introspección del esquema.
- 2026-08-13 · `PROCESO` · X (Twitter) rechaza captions largos: tope 280 caracteres. Para ese canal se arma una versión corta aparte, no se recorta la del feed.
- 2026-08-13 · `PROCESO` · TikTok no acepta imágenes de más de 2 millones de píxeles. Subir siempre una versión JPG 1080x1350 para ese canal.
- 2026-08-13 · `PROCESO` · La entrega SIEMPRE lleva el bloque 📦 ENTREGA con el link directo al archivo (nunca a la carpeta), el título, el formato y el link a la fuente, más ✍️ CAPTION en bloque de código. Sin eso el operador no puede ver cómo quedó.
- 2026-08-13 · `PROCESO` · NO correr dos chats ejecutando runs de Apify al mismo tiempo. Con HNTH y Media trabajando en paralelo, a un chat le llegó el resultado del run del otro (pidió tiktok-scraper y volvió screenshot-url con un registro del otro post). Un solo chat haciendo trabajo de Apify por vez.
- 2026-08-13 · `PROCESO` · Verificar SIEMPRE actorName y runId en la respuesta del run antes de confiar en la salida. Si no coinciden con lo que se pidió, descartar el resultado y reintentar con una startUrl nueva. Cuesta un segundo y detecta el cruce al instante.
- 2026-08-13 · `PROCESO` · Si el enrutamiento de herramientas viene fallando, NO correr runs que lean credenciales ni que publiquen/programen. Frenar y abrir un chat nuevo es la decisión correcta: el daño de una publicación equivocada en las cuentas no se deshace fácil.
- 2026-08-13 · `PROCESO` · Después de programar en Buffer, verificar la cola en vez de confiar en la respuesta de la mutación. Un post programado se puede borrar antes de que salga; uno publicado no.
- 2026-08-13 · `PROCESO` · MATRIZ DE CANALES. TikTok (BUFFER_CHANNEL_TIKTOK_HNTH) y X (BUFFER_CHANNEL_X) son COMPARTIDOS: publican los dos sistemas, las cuentas son indistintas. IG @hustlersnthehoodmedia (BUFFER_CHANNEL_IG_MEDIA) es EXCLUSIVO del sistema de video, por riesgo de copyright. Que TikTok y X aparezcan en los dos sistemas es por diseño, no un error.
- 2026-08-13 · `PROCESO` · El IG de @HustlersNTheHood NO está conectado a Buffer, por decisión del operador (seguridad). Los posts de la cuenta principal se publican a mano. No proponer conectarlo.
- 2026-08-13 · `PROCESO` · Posts de HNTH → TikTok + X. Videos de Media → TikTok + X + IG de Media. Facebook se suma más adelante.
- 2026-08-13 · `PROCESO` · La consulta de la cola de Buffer devuelve resultados TRUNCADOS si no se pasa first: 50 y filter: {status: [scheduled]}. Sin eso parece que la cola está vacía cuando no lo está.
- 2026-08-14 · `PROCESO` · No saltear etapas. Ir del candidato elegido directo a la tapa terminada, sin frames ni 5 títulos, es el peor modo de falla del sistema: el ángulo queda como accidente y el título nunca se compara contra alternativas.
- 2026-08-14 · `RESEARCH` · El barrido de tracción en TikTok/IG es el motor y va PRIMERO. Las webs son el segundo carril, nunca el reemplazo. Reportar cuántos videos escaneó el barrido; si vino vacío, decirlo explícitamente antes de caer en los portales.
- 2026-08-14 · `TÍTULO` · Sigue apareciendo el título largo: uno salió con 158 caracteres cuando el objetivo es 60–90. Contar los caracteres y escribirlos al lado de cada opción, no estimarlos.
- 2026-08-14 · `PRODUCCIÓN` · 🚨 LAS MEDIDAS NO VAN EN ESTE ARCHIVO. Toda coordenada, tamaño o valor de layout vive SOLO en el manual de producción, sección 3. Este archivo nunca borra nada, así que una medida que cambia queda contaminando para siempre — ya pasó con las del canvas viejo. Acá van reglas de comportamiento y criterio; los números, en el manual.
- 2026-08-14 · `PRODUCCIÓN` · El canvas es 1080x1260 y hay UNA sola referencia: assets/REFERENCE-carousel.png. Referencia y salida miden lo mismo, así que las coordenadas del manual se usan tal cual, sin escalar. Cualquier tapa anterior en otro tamaño no sirve como referencia.
- 2026-08-14 · `PRODUCCIÓN` · El chip SWIPE LEFT es un asset del repo (assets/SWIPE-LEFT.png). Nunca recortarlo de un post publicado: arrastra fondo y queda con borde negro.
- 2026-08-14 · `PRODUCCIÓN` · Split screen y círculo no necesitan referencia propia: son una división geométrica de la misma zona de imagen. Handle, logo, degradado, titular y chip no se mueven entre variantes.
- 2026-08-14 · `TÍTULO` · Cuando el protagonista es famoso y la historia existe POR la fama, el nombre va PRIMERO y en ROJO. La regla de "no abrir con celebridad" se midió sobre tapas donde el nombre era adorno. Prueba: sacar el nombre y leer la frase — si no queda nada, el nombre es el gancho.
- 2026-08-14 · `PRODUCCIÓN` · Mirar el video CUADRO POR CUADRO antes de escribir el titular, no una impresión general. Caso Usher: el titular decía que un empleado le sostuvo la puerta; lo que pasa es que Usher la abre él mismo, se frena, y hace venir al empleado a sostenerla. Post completamente distinto.
- 2026-08-14 · `RESEARCH` · El barrido de TikTok es la primera parada, no las webs: el operador rechazó una tanda de candidatos que salían solo de portales
- 2026-08-14 · `RESEARCH` · El filtro de fecha de la búsqueda de TikTok está caído del lado de ellos: hay que filtrar recencia después, sobre volumen (de ~580 videos, 15 pasaron 100k views con menos de 21 días)
- 2026-08-14 · `FRAME` · No construir el frame desde la caja de comentarios: el frame sale de lo que pasó, los comentarios solo marcan el tono
- 2026-08-14 · `TÍTULO` · Imagen única = revelación total. Los títulos que retienen son para carrusel; en imagen única el título cuenta setup, giro y remate (130-190 chars, como los que rindieron)
- 2026-08-14 · `TÍTULO` · Nunca "kid" para un joven que trabaja: riesgo de que el bot lo lea como trabajo infantil, y además lo achica. Usar "young man"
- 2026-08-14 · `TÍTULO` · "One day" suena a cuento infantil y mata la tensión: anclar en tiempo real ("two weeks ago", "every morning at 8:30")
- 2026-08-14 · `TÍTULO` · El nombre de la empresa (FedEx) es dato de caption, no de tapa: ocupa lugar y resta impacto
- 2026-08-14 · `FORMATO` · El canvas es 1080x1260. Trabajar sobre 1350 desplaza el degradado y el bloque de marca, y se corrige a ojo sin converger
- 2026-08-14 · `FORMATO` · El SWIPE LEFT es el asset `assets/SWIPE-LEFT.png` (223x43, x=429, y=1169). Recortarlo de un post publicado dio 270x52 con fondo negro pegado
- 2026-08-14 · `FORMATO` · La itálica se inclina y se centra LÍNEA POR LÍNEA. Inclinar el bloque entero corre el texto (centro medido en 521 en vez de 540)
- 2026-08-14 · `FORMATO` · Cuando el operador pide más zoom, saltar de una: pasos del 15% no se notan y queman rondas
- 2026-08-14 · `PROCESO` · Los frames del video se sacan bajando el mp4 al contenedor vía api.apify.com y ffmpeg; sirve para reencuadrar y para armar slides
- 2026-08-14 · `PROCESO` · Banana Pro como "mejora de calidad" sobre foto real reinterpreta la cara y reencuadra, además del SynthID. El operador lo aprobó igual para esta tapa y pidió conservar las dos versiones
- 2026-08-14 · `PROCESO` · Entregar una sola carpeta con nombres numerados (01-COVER, 02, 03..., 06-CAPTION) para que se descargue en orden
- 2026-08-14 · `PRODUCCIÓN` · Cuando el operador pide más zoom en un panel, dar un salto GRANDE (cortar al menos 40% del ancho de una vez). Mover el recorte de a poco no se nota en pantalla y costó cuatro rondas para algo de una.
- 2026-08-14 · `PRODUCCIÓN` · El centrado del sujeto en su panel se MIDE en el render y se reporta, no se estima a ojo.
- 2026-08-14 · `PRODUCCIÓN` · Elegir el frame teniendo en cuenta dónde cae el bloque de handle+logo, para que no quede sobre una zona clara o un elemento importante de la foto.
- 2026-08-14 · `PRODUCCIÓN` · Para subir calidad de frames de video la herramienta es BANANA PRO. El upscale puro NO es alternativa: se probó, tardó una hora y salió mal. No proponerlo de nuevo.
- 2026-08-14 · `PRODUCCIÓN` · Si se usa Banana Pro: pasar cada imagen por separado, rearmar la tapa con las imágenes en la misma posición y encuadre, y entregar SIEMPRE las dos versiones (real y mejorada). Nunca borrar la de frames reales.
- 2026-08-14 · `PRODUCCIÓN` · La etiqueta de IA de Meta NO apareció en una tapa con paneles pasados por Banana Pro. Un solo caso no alcanza para concluir: la detección es inconsistente y puede aparecer después. Pendiente de confirmar en varios posts.
- 2026-08-14 · `PRODUCCIÓN` · Banana Pro regenera, no solo mejora: puede cambiar rasgos de la cara, colores y agregar detalles que no estaban. Antes de entregar, comparar las dos versiones con view y avisar si algo cambió de forma material. El operador decide con el dato a la vista.
- 2026-08-15 · `RESEARCH` · LA JUGADA DEL REEMPAQUETADO: un post ya viral es materia prima, no la historia. La tendencia suele estar EN LOS COMENTARIOS, no en el post. Señal: cantidad de comentarios muy alta respecto de los likes = la audiencia está aportando, no consumiendo.
- 2026-08-15 · `RESEARCH` · Los comentarios se cosechan con clockworks/tiktok-comments-scraper (7 segundos, centavos). Vienen con diggCount, así que llegan pre-rankeados: la audiencia misma dice qué entradas van en la recopilación. Probado: 26 de 41 comentarios seguían el mismo molde.
- 2026-08-15 · `RESEARCH` · Tres tipos de reempaquetado: A) recopilación de la tendencia de los comentarios, B) tapa de misdirección (la audiencia asume mal, los slides revierten), C) adaptación directa con nuestro título y tapa.
- 2026-08-15 · `RESEARCH` · Cuando un reempaquetado funciona, otros replican el FORMATO. Eso convierte un hit en una consulta de búsqueda: buscar el formato en otros usuarios. Pero sin repetir demasiado pronto — satura.
- 2026-08-15 · `RESEARCH` · Verificación en modo reempaquetado: un hecho sobre una persona real se verifica igual que siempre. Una recopilación de lo que dice la gente afirma "esto es lo que dicen", que es cierto y chequeable. Nunca titular como hecho verificado algo que solo es un comentario: se titula el fenómeno.
