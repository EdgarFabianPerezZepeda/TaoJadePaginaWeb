# TAO de Jade - Plataforma Web

Repositorio oficial del frontend para **TAO de Jade**, una organización dedicada a capacitar jóvenes en agricultura orgánica, artes y oficios en Compostela, Nayarit. 

Este proyecto está construido enteramente en **Vanilla Web Technologies** (HTML5, CSS3, JavaScript ES6) priorizando el rendimiento, la accesibilidad y un diseño fluido sin dependencias de librerías pesadas como jQuery o frameworks de UI.

## Estructura del Proyecto

El proyecto sigue una arquitectura clásica de sitio estático multipágina:

```text
📦 tao-de-jade
├── /apoyaUnJoven
│   ├── /css
│   │   └── styles.css
│   ├── /img
│   └── apoya.html
├── /artes
│   ├── /css
│   │   └── styles.css
│   ├── /img
│   └── artes.html
├── /contactanos
│   ├── /css
│   │   └── styles.css
│   ├── /img
│   └── contactanos.html
├── /inicio
│   ├── /css
│   │   └── styles.css
│   ├── /img
│   ├── /js
│   └── index.html
├── /nosotros
│   ├── /css
│   │   └── styles.css
│   ├── /img
│   ├── main.js
│   └── nosotros.html
├── /oficios
│   ├── /css
│   │   └── styles.css
│   ├── /img
│   └── oficios.html
├── /talleres
│   ├── /agricultura
│   │   ├── /img
│   │   └── agricultura.html
│   ├── /carpinteria
│   │   ├── /img
│   │   └── carpinteria.html
│   ├── /cocinaIndustrial
│   │   ├── /img
│   │   └── cocinaindustrial.html
│   ├── /costura
│   │   ├── /img
│   │   └── costura.html
│   ├── main.js
│   └── styles.css             # CSS compartido para todos los talleres
└── /tienda
    ├── /css
    │   └── styles.css
    ├── /img
    └── tienda.html
```

## 🛠 Arquitectura del Código CSS (`styles.css`)

El CSS fue diseñado utilizando una metodología orientada a componentes y variables globales para fácil mantenimiento.

* **Variables Globales (`:root`):** Todo el esquema de colores (verde espiral, mostaza, óxido, café logo) y tipografías se gestionan a través de Custom Properties.
* **Layouts Flexibles:** Uso extensivo de `CSS Grid` para galerías (ej. `.grid-perfil`, `.grid-info`) y `Flexbox` para la alineación del carrusel y barra de navegación.
* **Diseño Mobile-First y Media Queries:** Se establece un *breakpoint* principal en `@media (max-width: 768px)` donde la estructura cambia drásticamente (ej. el menú se convierte en *Off-Canvas*, las columnas se colapsan a `1fr`).
* **Animaciones y Keyframes:**
  * `flotar-icono`: Animación de ciclo infinito que altera `transform: translateY` y `rotate` para los elementos decorativos.
  * `scroll-vida` / `scroll-infinito`: Desplazamiento horizontal continuo para galerías, calculado matemáticamente con `calc()` basado en el ancho y cantidad de las tarjetas.
* **Animaciones en Cascada (Carrusel):** Se utiliza el pseudo-selector `:not(.activa)` junto con `.activa` para manejar los estados del slider. Se aplican `transition-delay` escalonados (0.3s, 0.5s, 0.7s, etc.) para que los elementos entren a la pantalla uno por uno.

## Lógica JavaScript (`main.js`)

El script está encapsulado en un `DOMContentLoaded` para asegurar que el DOM esté completamente pintado antes de ejecutar la lógica. Se divide en 4 módulos principales:

### 1. Navegación Off-Canvas (Móvil)
Controla el estado de la clase `.menu-open` en el `<nav>` y `.active` en el botón hamburguesa (`#menu-toggle`). Implementa `e.stopPropagation()` para evitar cierres prematuros y un listener global en `document` para cerrar el menú si se hace clic fuera del contenedor.

### 2. Motor del Carrusel de Imágenes
Script ligero que maneja un NodeList de diapositivas (`.carrusel-item`).
* Mantiene un track del `slideActual`.
* Función `mostrarSlide(indice)` que remueve y añade la clase `.activa`.
* Integración de `setInterval` para auto-play (6000ms).
* Función global `window.moverCarrusel` expuesta para los botones de control manual en el HTML.

### 3. Intersection Observer (Fade-In Scroll)
Para evitar el uso de librerías de scroll (como AOS), se implementó la API nativa `IntersectionObserver`.
* **Threshold:** 0.15 (La animación se dispara cuando el 15% del elemento es visible).
* Añade dinámicamente la clase `.visible` a los elementos con clase `.fade-in`.
* Utiliza `observer.unobserve(entry.target)` para que la animación ocurra solo una vez, ahorrando recursos de GPU.

### 4. Modal / Lightbox de Galería
Escucha los clics en elementos `.foto-vida`. Extrae la URL de la imagen de fondo computada (`window.getComputedStyle`) y la inyecta en una etiqueta `<img>` dentro de un modal de pantalla completa (`display: flex`).

## Configuración de EmailJS (Contacto)

El formulario de contacto funciona de manera asíncrona a través de EmailJS. 

**Para configurar o modificar los envíos de correo:**
1. Acceder a [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Credenciales del proyecto:
   * **Usuario:** `tao@mardejade.mx`
   * **Contraseña:** `Tao12345`
3. **Variables en código:**
   Si se clona este repositorio para otro entorno, asegurarse de inicializar EmailJS en el JS con la llave pública correcta y verificar que los atributos `name=""` del HTML coincidan con las variables del template en EmailJS.

```javascript
// Ejemplo de uso esperado en el código de contacto:
emailjs.init("TU_PUBLIC_KEY");
// form.addEventListener('submit', ...) -> emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', this)
```

## Despliegue (Deployment)

Al ser un proyecto de tipología estática, no requiere servidor backend (Node.js/Python). Puede ser desplegado directamente en servicios gratuitos como:
* GitHub Pages
* Vercel
* Netlify
* Hostinger

Simplemente apunta el directorio raíz del despliegue a la carpeta donde se encuentra el `index.html` de inicio.

***
