AOS.init();

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

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 4,
    spaceBetween: 32,
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        300: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    }

});

var swiper = new Swiper(".mySwiper-3", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".mySwiper-4", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        300: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        }
    }, autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".mySwiper-5", {
    spaceBetween: 48,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, breakpoints: {
        300: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        }
    },
    on: {
        init: function () {
            setActiveClass(this);
        },
        slideChange: function () {
            setActiveClass(this);
        }
    }, autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".mySwiper-6", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    }
});


function setActiveClass(swiper) {
    var slides = swiper.slides;
    var activeIndex = swiper.activeIndex;
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    var middleSlideIndex = Math.floor(slides.length / 3);
    var activeSlideIndex = (activeIndex + middleSlideIndex) % slides.length;
    slides[activeSlideIndex].classList.add('active');
}

function setActiveClass(swiper) {
    var slides = swiper.slides;
    var activeIndex = swiper.activeIndex;
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    var middleSlideIndex = Math.floor(slides.length / 4);
    var activeSlideIndex = (activeIndex + middleSlideIndex) % slides.length;
    slides[activeSlideIndex].classList.add('active');
}

const forms = document.querySelectorAll('.needs-validation')
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
    }, false)
})


let counters = document.querySelectorAll(".counter");
let statistics = document.getElementById("statistics");
let activated = false;

function startCounter() {
    counters.forEach(counter => {
        counter.innerHTML = 0;
        let count = 0;
        function updateCount() {
            const target = parseInt(counter.dataset.count);
            if (count < target) {
                count++;
                counter.innerHTML = count;
                setTimeout(updateCount, 1);
            } else {
                counter.innerHTML = target;
            }
        }
        updateCount();
        activated = true;
    });
}

function resetCounter() {
    counters.forEach(counter => {
        counter.innerHTML = 0;
    });
    activated = false;
}

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const statisticsOffset = statistics.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition > statisticsOffset - windowHeight && !activated) {
        startCounter();
    } else if (scrollPosition < statisticsOffset - windowHeight || scrollPosition === 0) {
        resetCounter();
    }
});

let fixedNavbar = document.querySelectorAll(".fixedNavbar");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
        fixedNavbar.forEach((element) => {
            element.classList.add("active");
        });
    } else {
        fixedNavbar.forEach((element) => {
            element.classList.remove("active");
        });
    }
});