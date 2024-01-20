let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
  slides.forEach((slide, idx) => {
    slide.style.display = idx === index ? 'block' : 'none';
  });
}

function moveCarousel(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
}

// Initialize the carousel by showing the first slide
showSlide(currentSlide);
