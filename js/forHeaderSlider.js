let sliderInterval;
const sliders = document.querySelectorAll('.slide-wrapper input[type="radio"]');
let currentSlide = 0;
let direction = 1;

function changeSlide(slideIndex) {
    sliders[currentSlide].checked = false;
    sliders[slideIndex].checked = true;
    currentSlide = slideIndex;
}

function startSlideRotation() {
    changeSlide(0);

    sliderInterval = setInterval(() => {
        if (currentSlide === sliders.length - 1) {
            direction = -1;
        } else if (currentSlide === 0 && direction === -1) {
            direction = 1;
        }

        const nextSlide = currentSlide + direction;
        changeSlide(nextSlide);
    }, 5000);
}
startSlideRotation();