document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.reviews-carousel');
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.review-card');
    const prevButton = document.querySelector('.carousel-nav.prev');
    const nextButton = document.querySelector('.carousel-nav.next');
    
    let currentIndex = 0;
    let autoSlideInterval;
    const slideDuration = 5000; // 5 seconds
    
    // Initialize the carousel
    function initCarousel() {
        // Set initial active card
        updateActiveCard();
        
        // Start auto-slide
        startAutoSlide();
        
        // Add event listeners
        prevButton.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            slideToPrev();
            startAutoSlide();
        });
        
        nextButton.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            slideToNext();
            startAutoSlide();
        });
        
        // Pause auto-slide on hover
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }
    
    function updateActiveCard() {
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
        
        // Calculate the transform value to center the active card
        const cardWidth = cards[0].offsetWidth;
        const gap = parseInt(getComputedStyle(track).gap);
        const offset = -(currentIndex * (cardWidth + gap));
        track.style.transform = `translateX(${offset}px)`;
    }
    
    function slideToNext() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateActiveCard();
    }
    
    function slideToPrev() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateActiveCard();
    }
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(slideToNext, slideDuration);
    }
    
    // Initialize the carousel
    initCarousel();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        updateActiveCard();
    });
}); 