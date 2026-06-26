# PADS — Propuesta de rediseño

Rediseño conceptual de la página de inicio de **[pads.com.co](https://pads.com.co/)**,
construido **mobile-first** y pensado para **convertir visitantes en búsquedas y contactos**.
Esta carpeta es una propuesta comercial: una demo navegable + una auditoría SEO accionable.

> **Objetivo:** mostrarle a PADS una versión más distintiva, rápida y optimizada para buscadores
> de su home, sin perder la fidelidad de su marca.

---

## Qué incluye esta carpeta

| Archivo | Qué es |
|---|---|
| `index.html` | El rediseño completo de la home, en un solo archivo autocontenido. Ábrelo en cualquier navegador. |
| `detalle.html` | Ficha de propiedad enfocada en conversión (vender el ~70% antes de la visita): tour, simulador de cuota, verificación legal y escalera de reserva. |
| `prototipo-inmersivo.html` | Prototipo React de **una landing inmersiva de un solo inmueble** con recorrido *image-sequence-on-scroll* (técnica Apple), calificación con Kory y hook de comportamiento. Ver sección "Prototipo inmersivo". |
| `INFORME-SEO.md` | Auditoría SEO del sitio actual con hallazgos priorizados y plan de acción. |
| `assets/` | Logo, iconos y fotografías reales descargadas del sitio (optimizadas para web). |
| `robots.txt`, `sitemap.xml`, `site.webmanifest` | Correcciones SEO de ejemplo, listas para producción. |
| `shots/` | Pantallazos del rediseño (móvil y escritorio). |
| `shoot.js`, `fonts/` | Script de captura con Playwright + fuentes locales para renderizar sin conexión. |

---

## Prototipo inmersivo (`prototipo-inmersivo.html`)

Archivo React único y autocontenido (JSX inline vía Babel). Sin backend, sin Three.js/WebGL,
sin `<video>`. Mobile-first. Prueba la tesis de que la web puede cerrar ~70% de la venta antes
de la visita.

- **Recorrido image-sequence-on-scroll** — secuencia de 48 frames precargados cuyo índice se
  ata a la posición del scroll (técnica de las product pages de Apple). Precarga progresiva con
  barra de progreso y **fallback a imagen estática** en conexión lenta / `save-data`.
- **Frames = placeholder** dibujados en canvas (llegada → sala → cocina → alcoba → balcón). En
  producción se reemplazan por una secuencia fotográfica/render real; el patrón de carga es el mismo.
- **Datos clave integrados en el flujo** (área por ambiente, precio, zona) — no una ficha aparte.
- **Kory** — punto de calificación conversacional (mock): presupuesto, zona y motivación. El
  punto de inserción del asistente real (LLM) está marcado en el código.
- **CTA de visita** aparece sólo al final, cuando el recorrido ya construyó deseo.

### Hook de comportamiento (diferenciador, listo para extraer)
En el componente `BehaviorHook` (comentado en el código):
- **Disparadores:** `dwell` (el usuario se detiene > 4,5 s en un capítulo) o `repeat` (vuelve a
  un capítulo ya visto). Cada capítulo dispara su nudge una sola vez.
- **Acción:** nudge suave del asistente, p. ej. *"Esta cocina es la más vista por compradores
  como tú, ¿te muestro algo similar?"*.
- **Punto de inserción backend:** envía `{chapterKey, reason, dwellMs}` a analítica / al
  asistente real para decidir el mensaje y la siguiente mejor acción.

> Cómo verlo: ábrelo en un navegador (requiere conexión para cargar React/Babel por CDN; para
> uso 100% offline, vendoriza esos 3 scripts). Es independiente del resto del sitio.

---

## Cómo verlo

Abre `index.html` directamente en el navegador, o sírvelo localmente:

```bash
cd pads-redesign
python3 -m http.server 8080
# luego abre http://localhost:8080
```

Pruébalo en el móvil (o con DevTools en modo responsive): **está diseñado de móvil hacia arriba**.

---

## Dirección de diseño

Reinvención total de la home, no un reskin del sitio actual. Concepto: **PADS como casa
curatorial / concierge** — fotografía cinematográfica a sangre, búsqueda como protagonista y
una voz editorial premium (al nivel de Sotheby's o Compass), conservando el magenta de marca.

- **Color** — Magenta PADS `#EC008C` como firma (usado con disciplina), tinta `#16121A`,
  papel cálido `#FAF7F3` y **vino profundo `#1C0E1A`** para las secciones cinematográficas.
- **Tipografía** — *Fraunces* (serif editorial de alto contraste) para titulares con carácter,
  *Inter Tight* para interfaz (la fuente real de PADS) y *JetBrains Mono* para precios y datos.
- **Elemento de firma** — la **placa técnica** (tipo cajetín de un plano arquitectónico): un
  bloque monoespaciado con ubicación, precio y m² presente en el hero y en cada inmueble. Más
  la **consola de búsqueda** superpuesta al hero: buscar es el CTA, no un carrusel.
- **Arquitectura nueva** — hero cinematográfico con consola + búsquedas populares · selección
  editorial asimétrica · **explorar por ciudad** · inventario en vivo · franja de diferencia y
  cifras · captación de agentes · boletín. Estructura distinta a la del sitio actual.
- **Mobile-first** — consola apilada a ancho completo, filtros deslizables, menú hamburguesa,
  cabecera que se solidifica al hacer scroll.

### Accesibilidad y rendimiento
- Foco de teclado visible, `prefers-reduced-motion` respetado, jerarquía semántica correcta.
- Imágenes optimizadas y `loading="lazy"` bajo el pliegue; el hero usa `fetchpriority="high"`.

---

## SEO incorporado de fábrica

El rediseño ya resuelve los hallazgos críticos del informe:

- `<title>` único y descriptivo + `meta description`.
- Open Graph y Twitter Cards completos (con imagen) → los enlaces compartidos en WhatsApp/redes
  muestran tarjeta con foto y título.
- Datos estructurados **JSON-LD** (`RealEstateAgent` + `WebSite` con `SearchAction`).
- `H1` con la palabra clave principal y jerarquía de encabezados correcta.
- `alt` descriptivo en todas las imágenes, `hreflang` CO/MX y `lang="es-CO"`.
- `robots.txt` con `Sitemap:`, `sitemap.xml` de ejemplo y `webmanifest` completo.

Ver detalle y plan por fases en **`INFORME-SEO.md`**.

---

## Notas

- Las propiedades, precios y ubicaciones se tomaron del sitio actual de PADS a modo ilustrativo.
- Las métricas del hero ("450+ agentes", "Miles de propiedades") son **placeholders**; se
  reemplazan por las cifras reales de PADS.
- Las fotografías pertenecen a PADS / sus agentes y se usan solo para esta demostración.
