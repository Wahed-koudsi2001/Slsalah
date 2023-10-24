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