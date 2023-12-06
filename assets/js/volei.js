const incrementoB = document.getElementById('btnAcresentar');
const decrementoB = document.getElementById('btnRemover');
const incrementoI = document.getElementById('btnAcresentar1');
const decrementoI = document.getElementById('btnRemover1');
let pontoBrasil = 0;
let pontoItalia = 0;

incrementoB.addEventListener('click', function(){
    const brasilPoint = document.getElementById('brasilPoint');
    pontoBrasil++;
    document.getElementById('bset1').innerHTML = pontoBrasil;-
})

decrementoB.addEventListener('click', function(){
    const brasilPoint = document.getElementById('brasilPoint');
    pontoBrasil--;
    document.getElementById('bset1').innerHTML = pontoBrasil;-
})