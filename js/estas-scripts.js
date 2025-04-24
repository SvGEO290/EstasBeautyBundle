// ESTAS Skincare Custom Scripts

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileMenuBtn.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
    });
}

// Navigation Scroll Effect
const nav = document.querySelector('.estas-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Video Hover Effects
document.querySelectorAll('.media-container').forEach(container => {
    const video = container.querySelector('.hover-video');
    
    container.addEventListener('mouseenter', () => {
        if (video) {
            video.play().catch(error => {
                console.log('Video play failed:', error);
            });
        }
    });
    
    container.addEventListener('mouseleave', () => {
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
});

// Reviews Carousel
const reviewsTrack = document.querySelector('.reviews-track');
const prevReview = document.querySelector('.prev-review');
const nextReview = document.querySelector('.next-review');
const reviewCard = document.querySelector('.review-card');

if (reviewsTrack && prevReview && nextReview && reviewCard) {
    const cardWidth = reviewCard.offsetWidth + 32; // Width + gap

    prevReview.addEventListener('click', () => {
        reviewsTrack.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });

    nextReview.addEventListener('click', () => {
        reviewsTrack.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });
}

// Step Video Hover Effects
const stepContainers = document.querySelectorAll('.step-media-container');

stepContainers.forEach(container => {
    const video = container.querySelector('video');
    
    container.addEventListener('mouseenter', () => {
        if (video) {
            video.play();
        }
    });

    container.addEventListener('mouseleave', () => {
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
}); 