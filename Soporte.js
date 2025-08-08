
document.addEventListener('DOMContentLoaded', function() {
/**---------------------------------------------------------------------- SOPORTE------------- */
    // Efecto hover en las tarjetas de juego
    const gameCards = document.querySelectorAll('.game-card, .topic-card');
    
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 25px rgba(209, 54, 57, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Simulación de búsqueda
    const searchBox = document.querySelector('.search-box');
    const searchInput = searchBox.querySelector('input');
    const searchButton = searchBox.querySelector('button');
    
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (searchInput.value.trim() === '') {
        alert('Por favor ingresa un término de búsqueda');
        searchInput.focus();
        } else {
        alert('Buscando: ' + searchInput.value + '\n(Esta es una simulación)');
        }
    });
    
    // Permitir búsqueda con Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
        searchButton.click();
        }
    });
    
    // Simulación de opciones de contacto
    const contactOptions = document.querySelectorAll('.contact-option');
    
    contactOptions.forEach(option => {
        option.addEventListener('click', function(e) {
        e.preventDefault();
        const optionText = this.querySelector('span').textContent;
        alert('Redirigiendo a: ' + optionText + '\n(Esta es una simulación)');
        });
    });
});