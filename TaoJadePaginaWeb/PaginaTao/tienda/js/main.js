// ==========================================
    // 3. LÓGICA DE LA VENTANA FLOTANTE (Modal de Tienda)
    // ==========================================
    const modal = document.getElementById('modalCotizacion');
    const botonesCotizar = document.querySelectorAll('.btn-cotizar');
    const btnCerrarModal = document.getElementById('btnCerrarModal');

    // Solo ejecuta si estamos en la página del catálogo
    if (modal) {
        // Al hacer clic en CUALQUIER botón de producto, abrimos el modal
        botonesCotizar.forEach(boton => {
            boton.addEventListener('click', () => {
                modal.classList.add('mostrar');
            });
        });

        // Al hacer clic en la X, cerramos el modal
        btnCerrarModal.addEventListener('click', () => {
            modal.classList.remove('mostrar');
        });

        // Al hacer clic afuera de la cajita blanca, también lo cerramos
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('mostrar');
            }
        });
        document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LÓGICA DEL MENÚ DE HAMBURGUESA (Móvil)
    // ==========================================
    const menuToggle = document.getElementById('menu-toggle');
    const navPrincipal = document.getElementById('nav-principal');

    if (menuToggle && navPrincipal) {
        
        // Al hacer clic en el botón de las 3 líneas
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // <--- ¡ESTA ES LA LÍNEA MÁGICA QUE FALTABA!
            navPrincipal.classList.toggle('menu-open');
            menuToggle.classList.toggle('active');
        });

        // Si el usuario hace clic fuera del menú, lo cerramos
        document.addEventListener('click', (event) => {
            // Solo si el menú está abierto intentamos cerrarlo
            if (navPrincipal.classList.contains('menu-open')) {
                if (!navPrincipal.contains(event.target) && !menuToggle.contains(event.target)) {
                    navPrincipal.classList.remove('menu-open');
                    menuToggle.classList.remove('active');
                }
            }
        });

        // Si el usuario agranda la pantalla (pasa a computadora), reseteamos
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navPrincipal.classList.remove('menu-open');
                menuToggle.classList.remove('active');
            }
        });
    }

    // ==========================================
    // 2. LÓGICA DEL CARRUSEL (Para la página de inicio)
    // ==========================================
    const slides = document.querySelectorAll('.carrusel-item');
    
    if (slides.length > 0) {
        let slideActual = 0;

        function mostrarSlide(indice) {
            slides.forEach(slide => slide.classList.remove('activa'));
            
            if (indice >= slides.length) slideActual = 0;
            if (indice < 0) slideActual = slides.length - 1;
            
            slides[slideActual].classList.add('activa');
        }

        window.moverCarrusel = function(direccion) {
            slideActual += direccion;
            mostrarSlide(slideActual);
        };

        setInterval(() => {
            slideActual++;
            mostrarSlide(slideActual);
        }, 6000);
    }

});
    }