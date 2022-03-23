function doacao(){
    let valorDoacao = prompt('Valor: ');
    if(isNaN(valorDoacao)){
        alert('Digite um valor válido!!');
        return;
    }else{
        alert('Obrigado pela Doação :)');
    }
}