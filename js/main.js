var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 32,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        280: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        }
    }
});


var swiper = new Swiper(".mySwiper2", {
    watchSlidesProgress: true,
    slidesPerView: 5,
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
