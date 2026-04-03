document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LÓGICA DEL MENÚ DE HAMBURGUESA
    // ==========================================
    const menuToggle = document.getElementById('menu-toggle');
    const navPrincipal = document.getElementById('nav-principal');

    if (menuToggle && navPrincipal) {
        menuToggle.onclick = (e) => {
            e.stopPropagation();
            navPrincipal.classList.toggle('menu-open');
            menuToggle.classList.toggle('active');
        };

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (navPrincipal.classList.contains('menu-open')) {
                if (!navPrincipal.contains(e.target) && !menuToggle.contains(e.target)) {
                    navPrincipal.classList.remove('menu-open');
                    menuToggle.classList.remove('active');
                }
            }
        });
    }

    // ==========================================
    // 2. LÓGICA DE ZOOM (MODAL) PARA GALERÍA
    // ==========================================
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('imgFull');
    const fotosVida = document.querySelectorAll('.foto-vida');

    if (modal && modalImg) {
        fotosVida.forEach(foto => {
            foto.onclick = function() {
                const style = window.getComputedStyle(this);
                // Extrae la URL de background-image correctamente
                const url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
                modal.style.display = "flex";
                modalImg.src = url;
            };
        });

        // Cerrar modal al hacer clic en la X o fuera de la imagen
        modal.onclick = () => {
            modal.style.display = "none";
        };
    }
});