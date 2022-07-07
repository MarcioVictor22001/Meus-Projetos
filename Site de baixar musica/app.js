let toggle = document.querySelector('.mobile-btn-menu');
const navTop  = document.querySelector('.topo');

toggle.addEventListener('click', function(){
    navTop.classList.toggle("active");
})
