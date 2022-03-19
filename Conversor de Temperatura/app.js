document.getElementById('converter').onclick = tempConvert;
document.getElementById('reset').onclick = resetForm;

function tempConvert(){
    var fahrenheit = document.getElementById('fahrenheit').value;
    var celsius = document.getElementById('celsius').value;

    if(isNaN(fahrenheit) || isNaN(celsius)){
        alert('Digite um valor válido!');
        return
    }else if(fahrenheit === ''){
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }else if(celsius === ''){
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    }

    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
}

function resetForm(){
    document.getElementById('fahrenheit').value = "";
    document.getElementById('celsius').value = "";

}
