// Funcionalidad adicional para la página Riot Games
document.addEventListener('DOMContentLoaded', function() {
    // -----------------------------------------------------
    // Efecto hover para el logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            this.style.color = '#fff';
        });
        logo.addEventListener('mouseout', function() {
            this.style.color = '#ff4655';
        });
    }

    // -----------------------------------------------------
    // Efecto para el botón de Iniciar Sesión en el header
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#ff4655';
            this.style.transform = 'scale(1.05)';
        });
        loginBtn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.transform = 'scale(1)';
        });
    }

    // -----------------------------------------------------
    // Efecto para los botones de "Conocer Más" en las tarjetas de juegos
    const conocerMasBtns = document.querySelectorAll('.ConoceMas-btn');
    conocerMasBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#ff4655';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    // -----------------------------------------------------
    // Funcionalidad para el botón "Ver más noticias"
    const moreNewsBtn = document.querySelector('.more-news-btn');
    if (moreNewsBtn) {
        moreNewsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simular carga de más noticias
            const originalText = this.textContent;
            this.textContent = 'Cargando...';
            this.style.opacity = '0.7';
            
            setTimeout(() => {
                // Redirigir a la página de noticias
                window.location.href = 'Noticias.html';
                
                // Opción alternativa: restaurar el botón si no se redirige
                // this.textContent = originalText;
                // this.style.opacity = '1';
            }, 1000);
        });
    }

    // -----------------------------------------------------
    // Efectos para las tarjetas de juegos
    const gameCards = document.querySelectorAll('.game-card, .game-card-simple');
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // -----------------------------------------------------
    // Efecto para el botón de Soporte
    const supportBtn = document.querySelector('.support-btn');
    if (supportBtn) {
        supportBtn.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#ff4655';
            this.style.transform = 'scale(1.05)';
        });
        supportBtn.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.transform = '';
        });
    }


    // Efecto para los botones de descarga
    const downloadBtns = document.querySelectorAll('.download-btn');

        downloadBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const originalText = this.innerHTML;
                this.textContent = 'Preparando descarga...';
                
                setTimeout(() => {
                    const gameFeature = this.closest('.game-feature');
                    if (gameFeature) {
                        const gameName = gameFeature.querySelector('h3')?.textContent || 'el juego';
                        console.log(`Descarga iniciada para ${gameName}`);
                    }
                    this.innerHTML = originalText; // Restaura el contenido original (incluyendo el icono).
                }, 1000);
            });
        });
    
    // Efecto para los botones
    const trailerBtns = document.querySelectorAll('.trailer-btn');

    trailerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const gameName = this.closest('.game-feature').querySelector('h3').textContent;
            alert('Reproduciendo tráiler de ' + gameName);
        });
    });

    const conocerBtns = document.querySelectorAll('.ConoceMas-btn');
    
    conocerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const gameTitle = this.closest('.game-card-simple').querySelector('h3').textContent;
            
            // Efecto visual al hacer click
            this.textContent = 'Cargando...';
            this.style.opacity = '0.8';
            
            setTimeout(() => {
                alert(`Redirigiendo a más información sobre ${gameTitle}`);
                // Aquí iría la redirección real
                // window.location.href = `detalles-juego.html?game=${encodeURIComponent(gameTitle)}`;
                
                // Restaurar botón después de 2 segundos (solo para demo)
                setTimeout(() => {
                    this.innerHTML = '<i class="icon icon-info"></i> Conocer Más';
                    this.style.opacity = '1';
                }, 2000);
            }, 500);
        });
    });

    //efectos ---------TAREJTAS 
    const tournamentCards = document.querySelectorAll('.tournament-card');
    
    tournamentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(255, 70, 85, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Carrusel de equipos
    const carousel = document.querySelector('.teams-carousel');
    if (carousel) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });
        
        carousel.addEventListener('mouseleave', () => {
            isDown = false;
        });
        
        carousel.addEventListener('mouseup', () => {
            isDown = false;
        });
        
        carousel.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
    }


    // Animación de las tarjetas de noticias al aparecer - Versión simplificada
    document.addEventListener('DOMContentLoaded', () => {
    const newsCards = document.querySelectorAll('.news-card');
    
        // Mostrar todas las tarjetas inmediatamente
        newsCards.forEach((card, index) => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    });

/**  ------------------------------RUNATERRA PAGE---------------------------------------*/
    // Botón flotante
  const backToTopButton = document.querySelector('.back-to-top');
  
  // Mostrar/ocultar botón al hacer scroll
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
    
    // Animación de las tarjetas de noticias
    animateNewsCards();
  });
  
  // Scroll suave al hacer clic en el botón
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Animación de las tarjetas de noticias al aparecer
  function animateNewsCards() {
    const newsCards = document.querySelectorAll('.news-card');
    const screenPosition = window.innerHeight / 1.3;
    
    newsCards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      
      if (cardPosition < screenPosition) {
        setTimeout(() => {
          card.classList.add('show');
        }, index * 150);
      }
    });
  }
  
  // Efecto hover en los botones de plataforma
  const platformBtns = document.querySelectorAll('.platform-btn');
  
  platformBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      const icon = btn.querySelector('.platform-icon i');
      icon.style.transform = 'rotate(360deg)';
      icon.style.transition = 'transform 0.5s ease';
    });
    
    btn.addEventListener('mouseleave', () => {
      const icon = btn.querySelector('.platform-icon i');
      icon.style.transform = 'rotate(0deg)';
    });
  });
  
  // Efecto hover en las tarjetas de región
  const regionCards = document.querySelectorAll('.region-card');
  
  regionCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const img = card.querySelector('img');
      img.style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      const img = card.querySelector('img');
      img.style.transform = 'scale(1)';
    });
  });
  
  // Ejecutar animaciones al cargar la página
  animateNewsCards();



/**--------------------------------- WILD RIFT -----------------------------*/
    // Botón flotante
    const helpButton = document.querySelector('.help-button');
    
    // Mostrar/ocultar botón al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
        } else {
        backToTopButton.classList.remove('active');
        }
    });
    
    // Scroll suave al hacer clic en el botón
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    });
    
    // Botón de ayuda
    helpButton.addEventListener('click', () => {
        // Aquí podrías implementar un chat real o un modal de ayuda
        const response = confirm('¿Necesitas ayuda? ¿Quieres visitar nuestra página de soporte?');
        if (response) {
        window.open('https://support-wildrift.riotgames.com', '_blank');
        }
    });
    
    // Efecto hover en las tarjetas de campeones
    const championCards = document.querySelectorAll('.champion-card');
    
    championCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
        const img = card.querySelector('.champion-image img');
        img.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', () => {
        const img = card.querySelector('.champion-image img');
        img.style.transform = 'scale(1)';
        });
    });
    
    // Carrusel de campeones con scroll suave
    const carrusel = document.querySelector('.champions-carousel');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        carousel.style.cursor = 'grabbing';
    });
    
    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });
    
    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
    
    // Para dispositivos táctiles
    carousel.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
    
    carousel.addEventListener('touchend', () => {
        isDown = false;
    });
    
    carousel.addEventListener('touchmove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

    
});
