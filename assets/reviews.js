document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.reviews-carousel');
  const cards = document.querySelectorAll('.review-card');
  const prevBtn = document.querySelector('.carousel-nav.prev');
  const nextBtn = document.querySelector('.carousel-nav.next');
  let currentIndex = 0;
  const cardWidth = cards[0].offsetWidth;
  const visibleCards = window.innerWidth < 768 ? 1 : 3;
  const totalCards = cards.length;

  function updateCarousel() {
    const offset = -currentIndex * cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  function showNext() {
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
      updateCarousel();
    }
  }

  function showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  // Auto-advance carousel
  setInterval(showNext, 5000);

  // Handle window resize
  window.addEventListener('resize', function() {
    const newVisibleCards = window.innerWidth < 768 ? 1 : 3;
    if (newVisibleCards !== visibleCards) {
      currentIndex = 0;
      updateCarousel();
    }
  });
}); 