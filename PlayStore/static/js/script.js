const slider = document.querySelector('.image-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

const slideWidth = document.querySelector('.image-item').clientWidth;

nextBtn.addEventListener('click', () => {
    if (currentIndex < slider.children.length - 1) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});