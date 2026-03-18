document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // LÓGICA DEL CARRUSEL DE IMÁGENES (Solo index)
    // ==========================================
    
    let slideActual = 0;
    const slides = document.querySelectorAll('.carrusel-item');
    
    // Si la página actual no tiene carrusel (ej. Agricultura), detenemos el script
    if (slides.length === 0) return;

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

    // Cambia de imagen automáticamente cada 6 segundos
    setInterval(() => {
        slideActual++;
        mostrarSlide(slideActual);
    }, 6000);

});