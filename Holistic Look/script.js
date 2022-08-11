let btnToggle = document.getElementById('btn-toggle');
let headerTop = document.querySelector('.header-top');

btnToggle.onclick = () =>{
    if(headerTop.classList.contains('active')){
        headerTop.classList.remove('active');
    }else{
        headerTop.classList.add('active');
    }
}
