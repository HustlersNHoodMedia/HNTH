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


## COMO ANOTAR UN FALLO (leer antes de escribir una entrada negativa)

Este archivo nunca borra nada. Una entrada negativa mal escrita **cierra una puerta para siempre**.

**PRIMERO: ¿es una DECISION del operador o un HALLAZGO tecnico?**

| Tipo | Regla |
|---|---|
| **DECISION del operador** — el dijo que no se usa | **Vale y punto.** No necesita causa raiz. Se anota como decision suya y **no se reabre por iniciativa propia**. Solo el la cambia |
| **HALLAZGO tecnico** — algo fallo al probarlo | Necesita causa raiz para cerrar la puerta |

⚠️ **Nunca escribir una decision del operador disfrazada de hallazgo tecnico.** Si el decidio algo, se anota "DECISION DEL OPERADOR: X". Redactarlo como "se probo y fallo" lo convierte en una conclusion debil que despues alguien cuestiona, y encima le atribuye a un test lo que era criterio de marca.

**Para los HALLAZGOS tecnicos:**

| | Como se anota |
|---|---|
| Causa entendida y reproducible | Se puede cerrar la puerta. Anotar la causa, no solo el sintoma |
| Fallo una vez y no se por que | `⚠️ SIN RESOLVER` + que se intento exactamente. Nunca "no proponerlo de nuevo" |
| Fallo con UNA herramienta | Descarta esa herramienta, no la categoria entera |

**Caso testigo:** se anoto que el CDN de Instagram no dejaba bajar videos y que habia que buscar la pieza en TikTok. Cerraba el tema. La solucion real era **una linea de codigo** (cambiar el host de la URL). Si nadie la cuestionaba, ningun chat lo habria intentado de nuevo.

Las entradas `SIN RESOLVER` son reintentables: registran lo ya probado para no repetir el mismo intento, no para bloquear otros.

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
- 2026-08-13 · `PROCESO` · La entrega SIEMPRE lleva el bloque 📦 ENTREGA con el link directo al archivo (nunca a la carpeta), el título, el formato y el link a la fuente, más ✍️ CAPTION en bloque de código. Sin eso el operador no puede ver cómo quedó.
- 2026-08-13 · `PROCESO` · NO correr dos chats ejecutando runs de Apify al mismo tiempo. Con HNTH y Media trabajando en paralelo, a un chat le llegó el resultado del run del otro (pidió tiktok-scraper y volvió screenshot-url con un registro del otro post). Un solo chat haciendo trabajo de Apify por vez.
- 2026-08-13 · `PROCESO` · Verificar SIEMPRE actorName y runId en la respuesta del run antes de confiar en la salida. Si no coinciden con lo que se pidió, descartar el resultado y reintentar con una startUrl nueva. Cuesta un segundo y detecta el cruce al instante.
- 2026-08-13 · `PROCESO` · Si el enrutamiento de herramientas viene fallando, NO correr runs que lean credenciales ni que publiquen/programen. Frenar y abrir un chat nuevo es la decisión correcta: el daño de una publicación equivocada en las cuentas no se deshace fácil.
- 2026-08-13 · `PROCESO` · Después de programar en Buffer, verificar la cola en vez de confiar en la respuesta de la mutación. Un post programado se puede borrar antes de que salga; uno publicado no.
- 2026-08-13 · `PROCESO` · MATRIZ DE CANALES. TikTok (BUFFER_CHANNEL_TIKTOK_HNTH) y X (BUFFER_CHANNEL_X) son COMPARTIDOS: publican los dos sistemas, las cuentas son indistintas. IG @hustlersnthehoodmedia (BUFFER_CHANNEL_IG_MEDIA) es EXCLUSIVO del sistema de video, por riesgo de copyright. Que TikTok y X aparezcan en los dos sistemas es por diseño, no un error.
- 2026-08-13 · `PROCESO` · El IG de @HustlersNTheHood NO está conectado a Buffer, por decisión del operador (seguridad). Los posts de la cuenta principal se publican a mano. No proponer conectarlo.
- 2026-08-13 · `PROCESO` · Posts de HNTH → TikTok + X. Videos de Media → TikTok + X + IG de Media. Facebook se suma más adelante.
- 2026-08-13 · `PROCESO` · La consulta de la cola de Buffer devuelve resultados TRUNCADOS si no se pasa first: 50 y filter: {status: [scheduled]}. Sin eso parece que la cola está vacía cuando no lo está.
- 2026-08-13 · `RESEARCH` · El crudo tiene que ser ANTERIOR a la versión viral. Si una cuenta chica publicó DESPUÉS de que el video ya explotó, es otro reposteador, no la fuente. Comparar fechas de publicación siempre, antes de darlo por original.
- 2026-08-13 · `RESEARCH` · Caption en tercera persona ("Man from X helps elderly woman...") = el que subió NO es el protagonista. Primera persona o parentesco explícito = probable fuente real.
- 2026-08-13 · `PRODUCCIÓN` · Nunca usar el avatar de un perfil como cara del protagonista sin confirmar que el titular de la cuenta ES la persona en pantalla. Publicar la cara equivocada es un dato falso y lo detectan en los comentarios.
- 2026-08-13 · `PRODUCCIÓN` · Si la cara del protagonista no está confirmada, no va NINGUNA cara real. Va imagen IA coherente con lo que el video sí muestra (tono de piel, ropa, escenario, hora del día), en estilo foto tomada de casualidad por un testigo — nunca posada ni de modelo.
- 2026-08-13 · `PROCESO` · Buffer descarga la media al PUBLICAR, no al programar. Nunca borrar del repo un archivo que tenga un post encolado — el link tiene que seguir vivo hasta que salga. Limpiar qc/ solo después de verificar que todos los posts de ese archivo estén en status sent.
- 2026-08-13 · `RESEARCH` · "El que explota casi nunca es el que filmó" es cierto COMO PRINCIPIO, pero no alcanza para concluir que una cuenta chica ES el que filmó. Pocas views + pocos seguidores NO son prueba de origen. La prueba es la FECHA: el crudo es anterior a la versión viral. Aplicar el principio al revés fue exactamente el error del post del rescate.
- 2026-08-13 · `CAPTION` · El crédito sigue a la misma verificación que la cara. Si la fuente no está confirmada, acreditar al reposteador equivocado suma un segundo dato falso al post. Sin fuente confirmada: sin crédito.
- 2026-08-13 · `PROCESO` · Para que las plataformas salgan sincronizadas hay que usar mode: customScheduled con dueAt explícito. Con addToQueue cada canal cae en su próximo slot libre y los posts quedan desfasados entre plataformas.
- 2026-08-14 · `PRODUCCIÓN` · Las medidas de layout NO van en este archivo: viven solo en el manual de producción. Acá van reglas de comportamiento. El canvas de las tapas es 1080x1260 y la única referencia es assets/REFERENCE-carousel.png.
- 2026-08-14 · `TÍTULO` · Cuando el protagonista es famoso y la historia existe POR la fama, el nombre va PRIMERO y en ROJO. La regla de "no abrir con celebridad" se midió sobre tapas donde el nombre era adorno. Prueba: sacar el nombre y leer la frase — si no queda nada, el nombre es el gancho.
- 2026-08-14 · `PRODUCCIÓN` · Mirar el video CUADRO POR CUADRO antes de escribir el titular, no una impresión general. Caso Usher: el titular decía que un empleado le sostuvo la puerta; lo que pasa es que Usher la abre él mismo, se frena, y hace venir al empleado a sostenerla. Post completamente distinto.
- 2026-08-14 · `PROCESO` · Nunca pedirle al operador que baje un archivo él mismo y lo suba. El sistema existe para automatizar; si un camino está bloqueado se busca otro camino técnico.
- 2026-08-14 · `TÍTULO` · La simetría es lo que hace el karma: "se burló de unas zapatillas gastadas y terminó entregando las suyas nuevas" pega mucho más que "lo hizo entregar sus zapatillas". Buscar siempre el intercambio, no solo el hecho.
- 2026-08-14 · `TÍTULO` · No abrir con HE/SHE/THEY. Abrir con el sujeto nombrado (MOM, A MOTHER, etc.).
- 2026-08-14 · `PRODUCCIÓN` · ✅ RESUELTO: bajar video de Instagram SÍ se puede. instagram-scraper devuelve el videoUrl apuntando a hosts instagram.fXXX-1.fna.fbcdn.net que rechazan datacenter y se cuelgan. Reemplazar el host por scontent.cdninstagram.com dejando el resto igual (la firma cubre la ruta, no el dominio) + proxy RESIDENTIAL. Verificado: 41,6 MB en 24 segundos, tras cinco fallos previos.
- 2026-08-14 · `PRODUCCIÓN` · Buscar la pieza en TikTok es el plan B, no el plan A. Primero el cambio de host, que es una línea de código.
- 2026-08-14 · `PRODUCCIÓN` · Concatenar tramos con `-c copy` deja desfase de PTS: al componer el mosaico, los primeros fotogramas muestran la base sola con el panel grande EN BLANCO. Fix: `setpts=PTS-STARTPTS` sobre el video en el filter_complex, o reencodear el concat en vez de copiar.
- 2026-08-14 · `PRODUCCIÓN` · El QC visual SIEMPRE incluye el frame 0, no solo uno del medio. El primer frame es la miniatura y lo primero que ve el que scrollea.
- 2026-08-14 · `PRODUCCIÓN` · Después de cambiar el recorte de un panel hay que volver a abrir mosaic_base.png y mirarlo. Un frame donde el sujeto está a un costado del cuadro deja el panel cortado contra el borde.
- 2026-08-15 · `RESEARCH` · Que una cuenta acredite a otra NO la convierte en la fuente. Antes de barrer un perfil buscando el crudo, mirar la BIO y la GRILLA: si dice cosas tipo 'random videos' y el feed es todo material ajeno con emojis pegados, es otro reposteador. Se pierde el barrido entero.
- 2026-08-15 · `RESEARCH` · Cadena de reposteo: reposteador A acredita a reposteador B. El dueño real es quien filmó (el que sostiene el teléfono en la escena). Si esa persona no aparece en ninguna versión, no hay crédito posible y hay que decidir si se publica igual.
- 2026-08-15 · `PROCESO` · Para EDITAR este archivo hay que leerlo por la API (api.github.com/.../contents/...), NO por raw.githubusercontent.com: el CDN sirve versiones cacheadas y escribir esa copia vieja revierte cambios anteriores en silencio. Ya pasó: una edición borró la anterior sin avisar.
- 2026-08-16 · `PROCESO` · 🚨 "Necesito el token de GitHub para escribir el MP4 en el repo" NUNCA es motivo para frenar la entrega. El contenedor no llega a api.apify.com, pero un run de Apify sí — y el run DEVUELVE el valor al chat. Se corre el run, se usa el valor en bash, y sigue la cadena. Ya pasó: una pieza quedó armada y sin subir por pedirlo.
- 2026-08-16 · `TÍTULO` · Poner la desproporción arriba de todo: "an elderly woman POLITELY asked" + "the 15-year-old almost crashed out on her" pega más que describir el intercambio. El contraste entre cómo pidió ella y cómo reaccionó él ES el post.
- 2026-08-16 · `TÍTULO` · El operador prefiere el ángulo del casi-crash-out sobre la desproporción: "an elderly woman POLITELY asked" + "almost crashed out on her" pega más que citar la amenaza textual del chico.
- 2026-08-16 · `PROCESO` · El contenedor SÍ llega a api.apify.com y a los stores públicos. Para escribir en el repo sin exponer el token en el chat: un run copia GITHUB_TOKEN a un record temporal del store público PKbq34FAGU3Cmlk4z, el contenedor lo lee por curl, y otro run borra el record al instante.
- 2026-08-16 · `PRODUCCIÓN` · Funcionó: los dos paneles chicos con los DOS protagonistas del video (uno en cada panel, cara clara y encuadre cerrado). El operador lo marcó como congruente y llamativo. Usarlo como criterio por defecto cuando el titular enfrenta a dos personas.
- 2026-08-16 · `PROCESO` · DECISIÓN DEL OPERADOR: los add-ons de AI Summary y AI Description del scraper de TikTok se dejan ENCENDIDOS. Cuestan centavos y dan contexto que reduce el riesgo de malinterpretar una historia al armar el título. No proponer apagarlos como ahorro.
- 2026-08-16 · `PROCESO` · Costos reales de Apify medidos (agosto): el OCR de tapas fue un gasto único del reporte histórico y no se repite. El grueso recurrente es el scraper de TikTok, y la palanca está en cuántos resultados trae cada barrido. Los intentos fallidos se facturan igual — un run que se cae por memoria se cobra.
- 2026-08-16 · `PRODUCCIÓN` · ✅ VERIFICADO: el contenedor TIENE Chromium vía Playwright. El mismo HTML del template renderiza local, al instante, gratis y con la fuente Marsden real (los assets se bajan de raw.githubusercontent.com). No son dos implementaciones: es el mismo template en el mismo motor, así que no hay riesgo de deriva. Apify solo hace falta para conseguir URL pública del archivo final.
- 2026-08-16 · `PRODUCCIÓN` · El puente a Drive NO se llama desde el contenedor (script.google.com bloqueado). Se llama desde adentro de un run de cheerio-scraper con context.sendRequest.
- 2026-08-16 · `PROCESO` · 🆘 TERCERA VÍA cuando el contenedor no llega Y el conector de Apify está muerto en la sesión: Higgsfield:sandbox_exec, un Linux remoto con internet propio. Sirve para la cadena entera — renderizar con Playwright, subir, y llamar al puente de Drive desde ahí. Validado: PNG idéntico byte por byte al render local.
- 2026-08-16 · `PROCESO` · "El conector está caído" NO es lo mismo que "el servicio está caído". Apify puede estar funcionando perfecto mientras el conector MCP de esa sesión no responde. Antes de dar algo por imposible, probar las otras rutas.
- 2026-08-17 · `CAPTION` · 🚨 ANTES de escribir cualquier caption, leer los últimos 24 publicados de la cuenta con apify/instagram-scraper. El manual describe el tono; los posts SON el tono. Tres borradores seguidos fueron rechazados por bitácora hasta que se leyeron los reales.
- 2026-08-17 · `CAPTION` · Nunca abrir con fecha ni estructura de bitácora. Se abre en la escena o en el número más duro. Las fechas van adentro de la frase, jamás encabezando un bloque.
- 2026-08-17 · `CAPTION` · Los datos duros entran como fragmentos con ritmo, no como renglones de registro. Y el cierre es una línea humana, nunca un dato administrativo.
- 2026-08-17 · `CAPTION` · Colocar el detalle para que la conexión la haga el lector, no afirmarla. Ej: que miró a su gerente guardar las flores cae justo antes de que aparezca el ramo — el caption nunca dice "por eso".
- 2026-08-17 · `CAPTION` · El nombre del protagonista aparece al menos UNA vez, aunque el título use un descriptor.
- 2026-08-17 · `CAPTION` · La última línea antes del hashtag es SIEMPRE el crédito: "Via: <cuenta>" sin arroba, con (TikTok) entre paréntesis si corresponde, o el medio. Reemplaza la regla anterior de no acreditar noticias.
- 2026-08-17 · `RESEARCH` · ✅ El sistema detectó saturación de lane solo: avisó que ya se habían publicado dos ahogamientos por correntada en cuatro días, ambos por debajo o apenas encima de la mediana, antes de sacar un tercero. Ese chequeo hay que hacerlo siempre antes de producir.
- 2026-08-17 · `PROCESO` · Antes de arrancar cualquier producción, chequear si esa historia ya se produjo: buscar en Drive por handle de la fuente y en la cola de Buffer. Llegó el link de un repost de una historia ya publicada el día anterior y la cadena entera se rehizo hasta el paso de armado antes de detectarlo.
- 2026-08-17 · `RESEARCH` · triflinnewsnetwork es una pagina de repackaging, nunca fuente: mete el clip ajeno dentro de su marco de marca (TRIFLIN NEWS NETWORK, chyron BREAKING NEWS, subtitulos quemados) y acredita al creador original en pantalla. Bajar su reel y leer el credito en pantalla es la via rapida para encontrar el crudo.
- 2026-08-17 · `PRODUCCION` · El CDN de TikTok (v16-webapp-prime) devuelve 403 a las IPs de proxy de Apify. El HTML de la pagina SI se scrapea con cheerio y trae el playAddr, pero la descarga del MP4 falla siempre. Para bajar video de TikTok hace falta clockworks/tiktok-scraper; no hay atajo por cheerio-scraper.
- 2026-08-17 · `PROCESO` · Se agoto el credito de Apify (quedaban $0.47 y clockworks/tiktok-scraper ya no arranca). Los runs de cheerio siguen corriendo por ser baratos, pero cualquier scraper con descarga de video queda bloqueado hasta recargar.
- 2026-08-17 · `PROCESO` · ECONOMÍA MEDIDA: producir un video de punta a punta cuesta ~$0,03. Los barridos cuestan ~$0,40 por sesión. clockworks/tiktok-scraper cobra ~$0,0037 por resultado, se use o se descarte. Lo caro es buscar, no producir.
- 2026-08-17 · `PROCESO` · resultsPerPage entre 8 y 12, nunca 20-60. Un radar completo baja de ~$0,40 a ~$0,05. Un solo barrido de perfil con resultsPerPage 60 costó $0,22 para encontrar un video.
- 2026-08-17 · `PROCESO` · Para alcanzar un video viejo de un perfil NO subir el número de resultados: usar los filtros de fecha del actor (oldestPostDateUnified / newestPostDate) o profileSorting popular.
- 2026-08-17 · `PRODUCCIÓN` · El CDN de TikTok devuelve 403 a las IPs de Apify: sacar el playAddr con cheerio y bajar directo NO funciona (9 intentos). Hay que usar clockworks/tiktok-scraper.
- 2026-08-17 · `TITULO` · Para video de humor el operador prefiere el encuadre que ya trae la fuente, pasado a tercera persona, y cerrando con una QUOTE textual del protagonista entre comillas + emoji de llanto. Ej: THE MOST CONFUSED STUDENT THIS DRIVING INSTRUCTOR HAS EVER TRAINED. "WAIT, I'M TRYING TO SEE WHICH ONE I WRITE WITH" 😭. La quote va en rojo.
- 2026-08-17 · `PRODUCCION` · Para sacar la quote textual hay que leer los subtitulos quemados del video: recortar la franja de captions (y 1058-1128 en 720x1280) frame a frame cada 0.6s y apilarlos en una tira con PIL. Asi se reconstruye el dialogo exacto sin depender del transcript del scraper.
- 2026-08-17 · `PRODUCCION` · GitHub Contents API desde el contenedor devuelve 503 de forma intermitente sin importar el tamano del archivo (fallo hasta con 8 bytes). No es limite de peso: reintentar con backoff, entra en el 3er o 4to intento. Igual conviene mantener el MP4 por debajo de ~15MB.
- 2026-08-17 · `FORMATO` · Cuando el crudo dura 2 minutos pero el chiste entero esta en los primeros 22 segundos, se corta ahi. El video abria con el intercambio completo y despues repetia; recortar al hook deja el titular cumplido y el archivo en 4.5MB.
- 2026-08-17 - `PROCESO` - NUNCA cortar un turno con un parte de avance ("esta renderizando", "falta el encode", "despues Drive"). Eso no es entrega, es una pausa: el reloj se detiene hasta que el operador lo nota y contesta, y esa ida y vuelta cuesta mas tiempo real que todos los renders juntos. Una vez que arranca la produccion se corre hasta el final en un solo turno: render, QC, repo, Drive, y el bloque de entrega con el link directo. El turno no termina hasta que existe el bloque de entrega.
