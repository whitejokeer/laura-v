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
| `index.html` | El rediseño completo, en un solo archivo autocontenido. Ábrelo en cualquier navegador. |
| `INFORME-SEO.md` | Auditoría SEO del sitio actual con hallazgos priorizados y plan de acción. |
| `assets/` | Logo, iconos y fotografías reales descargadas del sitio (optimizadas para web). |
| `robots.txt`, `sitemap.xml`, `site.webmanifest` | Correcciones SEO de ejemplo, listas para producción. |
| `shots/` | Pantallazos del rediseño (móvil y escritorio). |
| `shoot.js`, `fonts/` | Script de captura con Playwright + fuentes locales para renderizar sin conexión. |

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

Tomamos la marca real de PADS y la llevamos a un territorio **editorial**, como una revista de
arquitectura: la fotografía manda y el magenta de PADS es el único acento fuerte.

- **Color** — Magenta PADS `#EC008C` como firma (usado con disciplina), tinta `#0E0E11`,
  papel cálido `#F7F5F1` y azul de marca `#006FE8` solo para foco/interacción.
- **Tipografía** — *Bricolage Grotesque* para titulares con carácter, *Inter Tight* para
  interfaz (la fuente real de PADS) y *JetBrains Mono* para precios y datos —los precios en
  monoespaciada se leen como una ficha técnica, apropiado para inmuebles—.
- **Elemento de firma** — *"Propiedades destacadas"* presentadas como un **índice curado y
  numerado (01–05)**, que comunica de un vistazo la promesa central de PADS: un portafolio
  curado, no otro portal saturado.
- **Mobile-first** — carrusel con *scroll-snap* en táctil, filtros deslizables, navegación con
  menú hamburguesa y CTAs a ancho completo en pantallas pequeñas.

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
