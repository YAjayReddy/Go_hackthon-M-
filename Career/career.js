let currentIndex = 0;
const totalSlides = 5; // Total number of slides
const slidesToShow = 3; // Number of slides to show at once
const carouselInner = document.getElementById('carousel-inner');
const indicators = document.getElementById('carousel-indicators').children;

function showSlide(index) {
    const offset = -index * (100 / slidesToShow);
    carouselInner.style.transform = `translateX(${offset}%)`;
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove('active');
    }
    indicators[index % totalSlides].classList.add('active');
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

function autoSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds
