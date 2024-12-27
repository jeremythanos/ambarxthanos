// script.js
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.querySelector('.contenedor');

    // Ocultar el loader y mostrar el contenido después de cargar la página
    loader.style.display = 'none';
    content.style.display = 'block';
});
