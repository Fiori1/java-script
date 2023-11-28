/*

let peso = 70 ;
let altura = 1.70 ;

 imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Sobrepeso");
} else if (imc >= 30 && imc < 34.9) {
    console.log("Obeso");
} else if (imc >= 35 && imc < 39.9) {
    console.log("Obesidade grave");
} 

console.log(imc);*/

function imc(peso, altura) {
    let valor =  peso / (altura * altura);

if (valor < 18.5) {
    return"Abaixo do peso";
} else if (valor >= 18.5 && valor < 24.9) {
    return"Peso normal";
} else if (valor >= 25 && valor < 29.9) {
    return"Sobrepeso";
} else if (valor >= 30 && valor < 34.9) {
    return"Obeso";
} else if (valor >= 35 && valor < 39.9) {
    return"Obesidade grave";
}
}
console.log(imc(70, 1.70));
console.log(imc(80, 1.70));