document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LÓGICA DEL MENÚ DE HAMBURGUESA (Móvil)
    // ==========================================
    const menuToggle = document.getElementById('menu-toggle');
    const navPrincipal = document.getElementById('nav-principal');

    if (menuToggle && navPrincipal) {
        // Abrir/cerrar menú al hacer clic en la hamburguesa
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Evita que el clic se propague y cierre el menú inmediatamente
            navPrincipal.classList.toggle('menu-open');
            menuToggle.classList.toggle('active');
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (event) => {
            if (navPrincipal.classList.contains('menu-open')) {
                if (!navPrincipal.contains(event.target) && !menuToggle.contains(event.target)) {
                    navPrincipal.classList.remove('menu-open');
                    menuToggle.classList.remove('active');
                }
            }
        });

        // Resetear al pasar a escritorio
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navPrincipal.classList.remove('menu-open');
                menuToggle.classList.remove('active');
            }
        });
    }

    // ==========================================
    // 2. LÓGICA DEL CARRUSEL (Solo si existe)
    // ==========================================
    const slides = document.querySelectorAll('.carrusel-item');
    
    // Solo iniciamos el carrusel si encontramos diapositivas en esta página
    if (slides.length > 0) {
        let slideActual = 0;

        function mostrarSlide(indice) {
            slides.forEach(slide => slide.classList.remove('activa'));
            
            if (indice >= slides.length) slideActual = 0;
            if (indice < 0) slideActual = slides.length - 1;
            
            slides[slideActual].classList.add('activa');
        }

        // Exponemos la función globalmente para que funcionen los botones en HTML
        window.moverCarrusel = function(direccion) {
            slideActual += direccion;
            mostrarSlide(slideActual);
        };

        // Autoplay
        setInterval(() => {
            slideActual++;
            mostrarSlide(slideActual);
        }, 6000);
    }

}); 