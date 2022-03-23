let animais = ['Boi','Vaca','Porco','Cachorro','Cavalo'];

let fazenda1 = ['Boi', 'Vaca'];

for(let boi in fazenda1){
    boi = fazenda1[boi];
    console.log(boi)
    if(boi.valueOf() == 'Boi' && boi == 'Vaca'){
        console.log('OK');
    }else{
        console.log('Animal não encontrado')
    }
}