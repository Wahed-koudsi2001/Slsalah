var swiper = new Swiper(".mySwiper", {
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

/* slide vartical */
var slides = document.querySelectorAll('#slider .main');
var titles = document.querySelectorAll('.slide-title');
var sections = document.querySelectorAll('.slide-section');
var slideSayisi = slides.length;
var bolen = slides.length;
var sliderHeight = slides[0].clientHeight;
var upBtn = document.querySelector('.up');
var downBtn = document.querySelector('.down');
var index = 1;
var devir = 0 + 1000 * slideSayisi;
function sliderAcilis() {
    setTimeout(function () {
        titles[devir % slideSayisi].style.opacity = '1';
    }, 1000);
    setTimeout(function () {
        sections[devir % slideSayisi].style.opacity = '1';
    }, 2000);
}
function sliderReset() {
    for (let index = 0; index < slideSayisi; index++) {
        titles[index].style.opacity = 0;
        sections[index].style.opacity = 0;
    }
}
sliderAcilis();
upBtn.addEventListener('click', function () {
    devir++;
    for (let index = 0; index < slideSayisi; index++) {
        slides[index].style.transform = 'translateY(-' + ((devir % slideSayisi * sliderHeight)) + 'px)';

    }
    sliderAcilis();
    if (devir % slideSayisi !== index) { sliderReset(); }
});
downBtn.addEventListener('click', function () {
    devir--;
    for (let index = 0; index < slideSayisi; index++) {
        slides[index].style.transform = 'translateY(-' + ((devir % slideSayisi * sliderHeight)) + 'px)';
    }
    sliderAcilis();
    if (devir % slideSayisi !== index) { sliderReset(); }
});

// Scroll To Top With progress
let calcScrollValue = () => {
    let scrollProgress = document.querySelector("#progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.style.background = `conic-gradient(#347BD9  ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
// Scroll To Top With progress
let scrollProgress = document.querySelector("#progress");
scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

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