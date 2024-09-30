// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const totalSlides = slides.length;
    const slideInterval = 5000; // Time between slides in milliseconds

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${-(currentSlide * 100)}%)`;
        });
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, slideInterval); 

    showSlide(currentSlide); 
});
