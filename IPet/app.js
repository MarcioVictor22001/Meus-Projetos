function doacao(){
    let valorDoacao = prompt('Valor: ');
    if(isNaN(valorDoacao)){
        alert('Digite um valor válido!!');
        return;
    }else{
        alert('Obrigado pela Doação :)');
    }
}

function myFunction() {
    let dropdown = document.querySelector("#dropdown");
    let areaLogin = document.querySelector('#areaLogin');
    if (dropdown.style.display === "block" && areaLogin.style.display === "block") {
      dropdown.style.display = "none";
      areaLogin.style.display = "none";
    } else {
      dropdown.style.display = "block";
      areaLogin.style.display = "block";
    }
  }