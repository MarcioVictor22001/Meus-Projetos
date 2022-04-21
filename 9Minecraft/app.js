let date = new Date();
document.querySelector('.hours').innerHTML = date.getHours();

document.querySelector('.month').innerHTML = date.toLocaleString('default', { month: 'long' });