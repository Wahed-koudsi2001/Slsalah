var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 48,
//     freeMode: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
//         300: {
//             slidesPerView: 1
//         },
//         768: {
//             slidesPerView: 2
//         },
//         991: {
//             slidesPerView: 3
//         }
//     },
//     on: {
//         init: function () {
//             setActiveClass(this);
//         },
//         slideChange: function () {
//             setActiveClass(this);
//         }
//     }
// });

var swiper = new Swiper(".mySwiper-11", {
    slidesPerView: 3,
    spaceBetween: 48,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
    }
});

function setActiveClass(swiper) {
    var slides = swiper.slides;
    var activeIndex = swiper.activeIndex;

    // Remove the active class from all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // Add the active class to the middle slide
    var middleSlideIndex = Math.floor(slides.length / 3);
    var activeSlideIndex = (activeIndex + middleSlideIndex) % slides.length;
    slides[activeSlideIndex].classList.add('active');
}

var swiper = new Swiper(".mySwiper-7", {
    slidesPerView: 3,
    spaceBetween: 48,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
    }
});

function setActiveClass(swiper) {
    var slides = swiper.slides;
    var activeIndex = swiper.activeIndex;

    // Remove the active class from all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // Add the active class to the middle slide
    var middleSlideIndex = Math.floor(slides.length / 4);
    var activeSlideIndex = (activeIndex + middleSlideIndex) % slides.length;
    slides[activeSlideIndex].classList.add('active');
}


var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    grabCursor: false,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 4
        }
    }
});


var swiper = new Swiper(".mySwiper3", {
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
    },
});



const forms = document.querySelectorAll('.needs-validation')
// Loop over them and prevent submission
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