# Proyecto: Sitio Web Institucional - UNPA | UART

Este proyecto es un ejercicio desarrollado para la materia Laboratorio de Desarrollo de Software, con el objetivo de aplicar los fundamentos del desarrollo web front-end (HTML, CSS y JavaScript).

## Estructura del Proyecto

El repositorio está organizado de la siguiente manera para mantener una clara separación de responsabilidades:

```
/ mockup
|-- index.html       (Estructura semántica de la página principal)
|-- css/
|   |-- style.css    (Hoja de estilos principal para la web)
|-- js/
|   |-- script.js    (Lógica e interactividad del carrusel de noticias)
|-- img/
    |-- (Todas las imágenes y recursos gráficos utilizados en el sitio)

```

## Diseño y Tecnologías

### HTML5 Semántico
Se ha utilizado HTML5 semántico (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`) para mejorar la accesibilidad y el SEO, además de proporcionar una estructura clara y legible del documento.

### CSS
La hoja de estilos `style.css` contiene todo el diseño visual. Se ha organizado de forma [Describir la organización, ej: "modular, con secciones para el header, noticias, etc."].

### JavaScript
El archivo `script.js` maneja la interactividad del slider de noticias. La lógica principal se basa en las funciones `desplazar()` y `mostrar()` que manipulan las clases CSS para mostrar las diapositivas.

## Puntos de Aprendizaje Clave

Este proyecto sirve como ejemplo para:
- Estructurar un documento HTML5 de forma semántica.
- Crear un menú de navegación con submenús desplegables.
- Implementar un carrusel de imágenes simple con JavaScript.
- Organizar un proyecto web en carpetas (CSS, JS, imágenes).

## Cómo Ejecutar el Proyecto
Simplemente abra el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, etc.). No se requiere un servidor local.
