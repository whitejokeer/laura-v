# Informe SEO — pads.com.co

**Sitio auditado:** https://pads.com.co/
**Fecha de auditoría:** 24 de junio de 2026
**Alcance:** página de inicio (home) y configuración técnica del dominio
**Plataforma detectada:** Astro (sitio estático) · Google Tag Manager (GTM-5XFFSRG) · Meta Pixel · imágenes en CloudFront

---

## 1. Resumen ejecutivo

PADS tiene una base técnica moderna (Astro, CDN de imágenes, HTTPS, `canonical` correcto y
`lang="es-CO"`), pero **deja sin aprovechar los elementos SEO de mayor impacto**: la página de
inicio **no tiene etiqueta `<title>`**, no expone **datos estructurados** y **no publica un
`sitemap.xml`**. Para un portal inmobiliario —cuyo negocio depende de aparecer cuando alguien
busca "apartamentos en venta en El Chicó" o "arriendo Medellín"— estas tres carencias limitan
directamente el tráfico orgánico y la forma en que Google y las redes sociales muestran el sitio.

**Puntuación de salud SEO (home): 48/100.** La mayoría de los problemas son de configuración
—corregibles sin rehacer el contenido— y por eso el retorno de optimizarlos es alto.

| Severidad | Hallazgos |
|---|---|
| 🔴 Crítico | Falta `<title>` · `og:title`/`og:image` vacíos · Sin datos estructurados · Sin `sitemap.xml` |
| 🟠 Importante | H1 débil · `og:type=article` en home · `og:locale=en` (debería `es_CO`) · Sin Twitter Cards · Sin `hreflang` CO/MX |
| 🟡 Menor | Imágenes sin `alt` · `webmanifest` con nombre vacío · `cache-control: no-store` en el HTML · Peso de imágenes (LCP) |

---

## 2. Hallazgos críticos 🔴

### 2.1 La página de inicio no tiene `<title>`
La home **no incluye etiqueta `<title>`**. El título es el factor on-page individual más importante:
es el enlace azul que se ve en Google y la primera señal de relevancia para el buscador.

- **Impacto:** Google genera un título automático (normalmente el dominio), se pierde el control
  del mensaje y del CTR en resultados.
- **Recomendado:**
  `Inmuebles en venta y arriendo en Colombia | PADS` (≤ 60 caracteres).

### 2.2 Open Graph incompleto: `og:title` y `og:image` vacíos
```html
<meta property="og:title">                 <!-- sin content -->
<meta property="og:image">                 <!-- sin content -->
<meta property="og:image:alt" content="">  <!-- vacío -->
<meta property="og:type" content="article"> <!-- debería ser "website" -->
<meta property="og:locale" content="en">    <!-- debería ser "es_CO" -->
```
- **Impacto:** al compartir el enlace en WhatsApp, Facebook o Instagram **no aparece imagen ni
  título**, solo un texto plano. Para un negocio que vive de WhatsApp y redes, esto reduce
  drásticamente los clics de los enlaces compartidos.
- **Recomendado:** `og:title`, `og:image` (1200×630 con marca PADS), `og:type=website`,
  `og:locale=es_CO`.

### 2.3 Sin datos estructurados (Schema.org / JSON-LD)
No existe ningún bloque `application/ld+json`. Un portal inmobiliario debería declarar al menos:
- **`RealEstateAgent` / `Organization`** (nombre, logo, teléfono, dirección — Carrera 16 #93-78,
  Bogotá — redes sociales).
- **`WebSite` + `SearchAction`** (habilita la caja de búsqueda directa en Google).
- **`Residence` / `Product` + `Offer`** en cada ficha de propiedad (precio, ubicación, m²,
  habitaciones) → habilita **resultados enriquecidos** con precio y foto.
- **`BreadcrumbList`** para las rutas.
- **Impacto:** se pierde elegibilidad para *rich results*, que aumentan visibilidad y CTR.

### 2.4 No hay `sitemap.xml`
`https://pads.com.co/sitemap.xml` y `/sitemap-index.xml` devuelven **404**. Sin sitemap, Google
descubre las miles de fichas de propiedad solo por enlaces internos, lo que ralentiza la
indexación de inventario nuevo (clave en un portal que rota inventario constantemente).
- **Recomendado:** generar `sitemap-index.xml` (Astro lo soporta con `@astrojs/sitemap`),
  segmentado (páginas estáticas + propiedades + brokers + blog), y declararlo en `robots.txt`.

---

## 3. Hallazgos importantes 🟠

### 3.1 Jerarquía de encabezados débil
El único `<h1>` de la home es **"Últimas Publicaciones"** —un título de sección, no la propuesta
de valor—. El H1 debe contener la palabra clave principal.
- **Recomendado:** H1 = *"Inmuebles en venta y arriendo en Colombia"* (o similar), y bajar
  "Últimas Publicaciones" a `<h2>`.

### 3.2 `robots.txt` no enlaza el sitemap
Actual:
```
User-agent: *
Disallow:
```
Permite rastrear todo (bien), pero **no incluye `Sitemap:`**. Añadir:
`Sitemap: https://pads.com.co/sitemap-index.xml`.

### 3.3 Sin `hreflang` entre Colombia y México
Existe **pads.com.co** y **pads.mx** (mismo producto, distinto país). Sin anotaciones `hreflang`
(`es-CO` / `es-MX`), Google puede mostrar el dominio equivocado al usuario equivocado y tratar el
contenido como duplicado.

### 3.4 Sin Twitter Cards
No hay etiquetas `twitter:card`. Al compartir en X/Twitter el enlace se ve sin tarjeta enriquecida.
Añadir `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`.

---

## 4. Hallazgos menores 🟡

| # | Hallazgo | Recomendación |
|---|---|---|
| 4.1 | **Imágenes sin `alt`** — 6 de 13 `<img>` de la home tienen `alt` vacío | Texto alternativo descriptivo en todas las fotos (ubicación + tipo de inmueble) |
| 4.2 | **`site.webmanifest` con `name` y `short_name` vacíos** | `"name": "PADS — Inmuebles en Colombia"`, `"short_name": "PADS"` |
| 4.3 | **`cache-control: no-store, must-revalidate` en el HTML** | Estrategia de caché (p. ej. `s-maxage` + `stale-while-revalidate`) para mejorar TTFB en repetición |
| 4.4 | **Peso de imágenes / LCP** — fotos de hasta ~1.9 MB | `srcset` responsivo + AVIF/WebP + `loading="lazy"` bajo el pliegue + `fetchpriority="high"` en la del hero |
| 4.5 | **Falta `meta robots` explícita** | Añadir `<meta name="robots" content="index,follow">` (buena práctica) |

---

## 5. Lo que ya está bien ✅

- HTTPS con HTTP/2.
- `<link rel="canonical">` correcto en la home.
- `lang="es-CO"` en `<html>`.
- `<meta name="viewport">` presente (base responsive).
- `meta description` presente y relevante.
- Favicons y `apple-touch-icon` configurados.
- Stack moderno (Astro) que **facilita** implementar todas las correcciones anteriores.

---

## 6. Plan de acción priorizado

**Fase 1 — Quick wins (1–2 días, máximo impacto):**
1. Añadir `<title>` único por página.
2. Completar Open Graph (`og:title`, `og:image`, `og:type=website`, `og:locale=es_CO`) + Twitter Cards.
3. Publicar `sitemap-index.xml` y enlazarlo en `robots.txt`.
4. Corregir H1 de la home.

**Fase 2 — Datos estructurados (3–5 días):**
5. JSON-LD `Organization` + `WebSite/SearchAction` en el sitio.
6. JSON-LD `Residence/Offer` + `BreadcrumbList` en cada ficha de propiedad.

**Fase 3 — Rendimiento e internacionalización (continuo):**
7. `hreflang` CO/MX.
8. Optimización de imágenes (AVIF/WebP, `srcset`, lazy-load) y Core Web Vitals.
9. `alt` en todas las imágenes y `webmanifest` completo.

> **Nota comercial:** todos los puntos de la Fase 1 y 2 quedan resueltos de fábrica en el rediseño
> propuesto (ver `index.html` y `README.md` de esta carpeta), que incluye `<title>`, Open Graph y
> Twitter Cards completos, JSON-LD de `Organization` + `WebSite`, jerarquía de encabezados correcta
> e imágenes con `alt`.
