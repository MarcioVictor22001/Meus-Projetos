let toggle = document.getElementById('mobile-btn-menu');
const navTop  = document.querySelector('.header-main-nav');

toggle.addEventListener('click', function(){
    navTop.classList.toggle("active");
})

// Scroll
    let btnLeft = document.getElementsByClassName('btnLeft');
    let btnRight = document.getElementsByClassName('btnRight');

    let posterItem = document.getElementsByClassName('poster-container');
    
    for( let i = 0; i < btnLeft.length; i++){
        btnLeft[i].addEventListener('click', function(event){
            for(let x = 0; x < posterItem.length; x++){
                posterItem[i].scrollLeft += 250;
            }
        })
    }

    for( let i = 0; i < btnRight.length; i++){
        btnRight[i].addEventListener('click', function(event){
            for(let x = 0; x < posterItem.length; x++){
                posterItem[i].scrollLeft -= 250;
            }
        })
    }