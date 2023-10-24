AOS.init();



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

let animationStarted = false;

function handleScroll() {
    var section = document.getElementById('more-about-us');
    var sectionTop = section.offsetTop;
    var windowHeight = window.innerHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > sectionTop - windowHeight + windowHeight / 2) {
        if (!animationStarted) {
            animationStarted = true;
            var images = document.querySelectorAll('#more-about-us .imgs img');
            images.forEach(function (image, index) {
                setTimeout(function () {
                    image.classList.add('show');
                }, (index + 1) * 1500);
            });
        }
    } else {
        if (animationStarted) {
            animationStarted = false;
            var images = document.querySelectorAll('#more-about-us .imgs img');
            images.forEach(function (image) {
                image.classList.remove('show');
            });
        }
    }
}

window.addEventListener('DOMContentLoaded', function () {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
});