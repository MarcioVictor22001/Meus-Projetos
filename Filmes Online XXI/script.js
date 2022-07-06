let toggle = document.getElementById('mobile-btn-menu');
const navTop  = document.querySelector('.header-main-nav');

toggle.addEventListener('click', function(){
    navTop.classList.toggle("active");
})

// Scroll
document.addEventListener('DOMContentLoaded', function () {
    let btnLeft = document.querySelector('#btnLeft');
    let btnRight = document.querySelector('#btnRight');

    btnLeft.onclick = function () {
        document.querySelector('.poster-container').scrollLeft +=250;
    };

    btnRight.onclick = function () {
        document.querySelector('.poster-container').scrollLeft -= 250;
    };
}, false);