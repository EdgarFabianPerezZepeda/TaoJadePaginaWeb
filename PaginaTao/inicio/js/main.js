// Esperamos a que todo el HTML cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DEL CARRUSEL ---
    let slideActual = 0;
    const slides = document.querySelectorAll('.carrusel-item');
    
    // Si no hay slides en la página, detenemos el script para no marcar errores
    if (slides.length === 0) return;

    // Función para mostrar el slide deseado
    function mostrarSlide(indice) {
        // Ocultar todos los slides quitando la clase 'activa'
        slides.forEach(slide => slide.classList.remove('activa'));
        
        // Manejar los límites (si pasa del último vuelve al primero y viceversa)
        if (indice >= slides.length) slideActual = 0;
        if (indice < 0) slideActual = slides.length - 1;
        
        // Mostrar el slide actual
        slides[slideActual].classList.add('activa');
    }

    // Función que se llama con los botones
    window.moverCarrusel = function(direccion) {
        slideActual += direccion;
        mostrarSlide(slideActual);
    };

    // Auto-reproducción: Cambia de imagen cada 6 segundos (6000 ms)
    setInterval(() => {
        slideActual++;
        mostrarSlide(slideActual);
    }, 6000);

});