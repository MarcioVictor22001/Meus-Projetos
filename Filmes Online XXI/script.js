let toggle = document.getElementById('mobile-btn-menu');
const navTop  = document.querySelector('.header-main-nav');

toggle.addEventListener('click', function(){
    navTop.classList.toggle("active");
})

// Scroll
let btnLeft = document.querySelectorAll('.btnLeft');
let btnRight = document.querySelectorAll('.btnRight');

let posterItem = document.querySelectorAll('.poster-container');

//poster 1
btnLeft[0].onclick = function(){
    posterItem[0].scrollLeft += 250;
}

btnRight[0].onclick = function(){
    posterItem[0].scrollLeft -= 250;
}
//poster 2 
btnLeft[1].onclick = function(){
        posterItem[1].scrollLeft += 250;
}

btnRight[1].onclick = function(){
        posterItem[1].scrollLeft -= 250;
}