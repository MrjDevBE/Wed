const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const slidesContainer = document.getElementById('slidescontainer');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
}

const interval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3500);

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    clearInterval(interval);
    showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    clearInterval(interval);
    showSlide(currentSlide);
}); 