# Maycol Zaraza Aguilera — GitHub Pages Portfolio

Repositorio esperado: `mzaraza.github.io`
URL: `https://mzaraza.github.io`

## Probar localmente

```bash
python -m http.server 8000
```

Abrir: `http://localhost:8000`

## Crear repositorio

1. GitHub → `+` → `New repository`
2. Owner: `mzaraza`
3. Repository name: `mzaraza.github.io`
4. Description: `Earth Observation, Geospatial AI and Remote Sensing professional portfolio.`
5. Visibility: `Public`
6. `Add README`: Off
7. Sin `.gitignore`
8. Sin license por ahora
9. `Create repository`

## Subir archivos

En el repositorio vacío:

1. `Add file` → `Upload files`
2. Subir el CONTENIDO de esta carpeta:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `assets/`
3. Commit message: `Create professional geospatial portfolio`
4. `Commit changes`

La raíz debe quedar así:

```text
mzaraza.github.io/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
```

## Activar GitHub Pages

1. Repository → `Settings`
2. `Pages`
3. Build and deployment
4. Source: `Deploy from a branch`
5. Branch: `main`
6. Folder: `/(root)`
7. `Save`

Abrir luego: `https://mzaraza.github.io`

## Imágenes opcionales

La página funciona sin imágenes reales. Para reemplazar los fondos, agrega:

- `assets/images/hero-eo.webp`
- `assets/images/land-cover.webp`
- `assets/images/agriculture.webp`
- `assets/images/mining.webp`
- `assets/images/orinoquia.webp`
- `assets/images/multisource-monitoring.webp`
- `assets/images/gee-app.webp`
- `assets/images/change-detection-dl.webp`
- `assets/images/time-series.webp`

### Hero recomendado
Usar un visual real, limpio y horizontal:
- opción preferida: imagen satelital RGB a la izquierda + resultado de clasificación/coberturas a la derecha;
- alternativa: mosaico de RGB + SAR + mapa clasificado;
- alternativa: captura limpia de una aplicación Google Earth Engine.

Evitar stock genérico, globos 3D y visuales tipo “AI cyberpunk”.

### Seguridad
No publicar ubicaciones sensibles, datos operativos, credenciales, archivos `.env`, claves API, shapefiles restringidos ni material de terceros sin autorización.


---

## Últimos ajustes V4

### Navegación
La navegación superior queda:
- About / Perfil
- Experience / Experiencia
- Projects / Proyectos
- Current work / Trabajo actual
- Publications / Publicaciones
- Education / Formación
- Contact / Contacto

La sección Expertise ahora está integrada dentro de About / Perfil.

### Iconos de proyectos
La página NO genera imágenes. Puedes usar iconos propios guardándolos con estos nombres:

```text
assets/images/icon-landcover.png
assets/images/icon-agriculture.png
assets/images/icon-mining.png
assets/images/icon-orinoquia.png
assets/images/icon-illicit-crops.png
assets/images/icon-gee.png
assets/images/icon-deep-learning.png
assets/images/icon-time-series.png
```

Si un archivo no existe, la tarjeta muestra automáticamente las siglas LC, AG, MN, OR, IC, GEE, DL o TS.

Recomendación:
- PNG con fondo transparente.
- 128x128 o 256x256 px.
- Iconos simples y del mismo estilo visual.
- No es necesario generar imágenes nuevas; puedes utilizar iconos propios/licenciados o los que ya tengas.

### Publicaciones
Todos los artículos/libros tienen enlace:
- 2026: DOI
- 2023: DOI
- 2022: DOI IEEE
- 2021: DOI Revista de Teledetección
- 2020: DOI IEEE LAGIRS
- 2020: AbeBooks
- 2019: DOI Revista de Teledetección
- 2017: AbeBooks

### GitHub
Usuario actual:
`mzaraza`

Sitio:
`https://mzaraza.github.io`

El proyecto Deep Learning apunta a:
`https://github.com/mzaraza/change-detection_DL`
