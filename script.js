let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  const offset = -slideIndex * 100;
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

// Automatically advance slides every 3 seconds
setInterval(nextSlide, 3000);

// Show initial slides
showSlides();
