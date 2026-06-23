# Sitio web — Laura Victoria Herrera M.

Sitio web (portafolio) de la arquitecta **Laura Victoria Herrera M.**
(Bucaramanga, Santander – Colombia).

El objetivo del sitio es **impulsar la contratación independiente**: presentar su
trabajo de forma profesional y convertir visitantes en clientes, con **WhatsApp
como canal principal de contacto**.

> El contenido de esta carpeta es **autocontenido**: su raíz es la raíz del sitio.
> Copia todo lo que hay aquí (incluidas las carpetas `assets/`, `content/`,
> `.github/` y los archivos ocultos `.gitignore`) a la raíz del repositorio.

## El sitio

- **`index.html`** — Sitio de una sola página (one-page), estático.
- **Bilingüe ES/EN** con selector de idioma (autodetecta el idioma del navegador).
- **Enfoque en conversión:** botón de WhatsApp fijo en el header, CTA en el hero,
  sección de servicios, CTA por proyecto y un botón flotante de WhatsApp siempre
  visible. Todos los enlaces de WhatsApp llevan un mensaje prellenado.
- **Secciones:** Hero · Perfil + métricas · Servicios · Proyectos (con galería
  tipo lightbox) · Trayectoria (CV) · Contacto.
- **Stack:** HTML + Tailwind CSS (compilado a un archivo estático, sin CDN en
  tiempo de ejecución) + un único archivo JS sin dependencias.
- Responsive, accesible (foco visible, navegación por teclado, `alt`, respeta
  `prefers-reduced-motion`) y optimizado (imágenes `.webp`, lazy-loading).

### Datos de contacto usados

- **WhatsApp / Celular:** +57 315 3980 538
- **Email:** lauraherreram@gmail.com
- **Ubicación:** Bucaramanga, Santander (Colombia)

## Estructura

```
index.html                # El sitio web
tailwind.config.js        # Configuración de Tailwind (colores, fuentes)
.gitignore
.github/workflows/
  deploy-pages.yml        # Despliegue automático a GitHub Pages (push a main)
assets/
  css/
    input.css             # Entrada de Tailwind (@tailwind ...)
    styles.css            # CSS compilado que usa el sitio (NO editar a mano)
  js/
    site.js               # i18n, navegación, galería/lightbox, CTAs de WhatsApp
  portfolio/
    cover.jpg             # Imagen de portada (redes sociales / Open Graph)
    portrait.webp         # Retrato recortado para la sección "Perfil"
    carrera25-feature.webp# Render recortado para la tarjeta del proyecto
    pages/
      page-01.webp …      # Las 38 páginas del portafolio en orden
      page-38.webp
content/
  portfolio.md            # Información completa del portafolio (perfil, CV, proyectos)
```

## Vista previa local

```bash
python3 -m http.server 8000
# luego abrir http://localhost:8000
```

## Desplegar en GitHub Pages

> Si el repositorio es **privado**, GitHub Pages requiere un plan de pago. En
> cuentas gratuitas, primero haz el repositorio **público**
> (*Settings → General → Change visibility*).

### Opción A — Deploy from a branch (la más simple, sin Actions)

1. Sube esta carpeta a la rama `main` del repositorio.
2. **Settings → Pages → Build and deployment → Source: "Deploy from a branch"**.
3. **Branch:** `main` · carpeta **`/ (root)`** → **Save**.
4. En ~1 minuto el sitio estará en `https://<usuario>.github.io/<repo>/`.

### Opción B — GitHub Actions

Ya viene el workflow `.github/workflows/deploy-pages.yml`: al hacer push a `main`
publica el sitio automáticamente. En *Settings → Pages → Source* elige
**"GitHub Actions"**.

## Recompilar el CSS (solo si cambias clases de Tailwind)

```bash
npx tailwindcss@3 -c tailwind.config.js -i assets/css/input.css -o assets/css/styles.css --minify
```
