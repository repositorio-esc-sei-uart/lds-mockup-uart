/**
 * Variable global que almacena el índice de la diapositiva actualmente visible.
 * Se inicializa en 1 porque nuestra lógica es 1-basada (slide 1, slide 2).
 */
let slideIndex = 1;
// Se llama a la función principal una vez al cargar el script para configurar
// el estado inicial del slider, mostrando la primera imagen sin animación.
showSlide(slideIndex, "none");

/**
 * @description Avanza o retrocede en el carrusel.
 * @param {number} n - El número de diapositivas a desplazar. Usualmente 1 para siguiente, -1 para anterior.
 */
function desplazar(n) {
    // Se determina la animación a usar basándose en la dirección del desplazamiento.
    // Es una forma concisa de un if/else usando un operador ternario.
    let animacion = n > 0 ? "fadeLeft" : "fadeRight";
    // Se actualiza el índice global y se llama a la función principal para mostrar la diapositiva correcta.
    slideIndex += n;
    showSlide(slideIndex,animacion);
}

/**
 * @description Muestra una diapositiva específica, generalmente llamada desde los puntos indicadores (dots).
 * @param {number} n - El índice exacto de la diapositiva a mostrar.
 */
function mostrar(n) {
    // Se establece el índice global al número de diapositiva deseado y se muestra con una animación genérica.
    slideIndex = n;
    showSlide(slideIndex, "fade");
}

/**
 * @description Es la función central que controla la lógica de visualización del slider.
 * Oculta todas las diapositivas y puntos, y luego muestra solo los elementos activos.
 * @param {number} n - El índice de la diapositiva que se debe mostrar.
 * @param {string} animacion - El nombre de la clase de animación CSS que se debe aplicar.
 */
function showSlide(n, animacion) {
    // Obtiene todas las diapositivas y puntos del DOM. getElementsByClassName devuelve una HTMLCollection.
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Si el índice es mayor que el número de slides, se resetea al primero.
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Si el índice es menor que 1, se va al último slide.
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Se itera sobre todas las diapositivas para ocultarlas. Esto asegura que solo
    // una diapositiva esté visible a la vez.
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
        // También se elimina cualquier animación previa para evitar conflictos.
        slides[index].style.animation = "none";
    }

    // Se itera sobre todos los puntos para quitarles la clase "active".
    for (let index = 0; index < dots.length; index++) {
        // Se usa .replace() para quitar la clase 'active' de forma segura,
        // sin afectar otras posibles clases que el elemento pueda tener.
        dots[index].className = dots[index].className.replace(" active", "");
    }

    // Se selecciona la diapositiva y el punto correctos. Se usa 'slideIndex - 1' porque
    // los arrays en JS son 0-indexados, pero nuestra lógica usa 1-indexado.
    let currentSlide = slides[slideIndex - 1];
    // Se muestra la diapositiva actual.
    currentSlide.style.display = "block";

    // ¡TÉCNICA AVANZADA! Forzar un "reflow" del navegador.
    // Al acceder a una propiedad como 'offsetWidth', se obliga al navegador a recalcular
    // el layout del elemento. Esto es crucial para que la animación CSS se reinicie
    // y se ejecute cada vez que se cambia de diapositiva. Sin esto, la animación
    // solo se ejecutaría la primera vez.
    void currentSlide.offsetWidth;

    // Se aplica la animación correspondiente que fue pasada como parámetro.
    // La propiedad 'forwards' en la animación CSS asegura que el slide se mantenga
    // en su estado final después de que la animación termine.
    if (animacion === "fadeLeft" || animacion === "fadeRight") {
        currentSlide.style.animation = animacion + " 0.8s ease forwards";
    } else if (animacion === "fade") {
        currentSlide.style.animation = "fade 0.8s ease forwards";
    }

    // Se añade la clase "active" al punto indicador correspondiente.
    dots[slideIndex-1].className += " active";
}

/**
 * Se utiliza setInterval para automatizar el carrusel.
 * Llama a la función desplazar(1) cada 5000 milisegundos (5 segundos).
 * En un proyecto más avanzado, se podría pausar este intervalo cuando el
 * usuario interactúa con el carrusel (ej. al pasar el mouse por encima).
 */
setInterval(function() {
    desplazar(1)
} , 5000);