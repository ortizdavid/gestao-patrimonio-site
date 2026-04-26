// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sistema de Gestão de Património - Site Pronto');
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});