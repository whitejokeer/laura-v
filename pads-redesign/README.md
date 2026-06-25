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
