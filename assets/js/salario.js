


function imposto (salario) {
    if (salario <= 1100)
        return 0.05;

    else if (salario > 1100 && salario <= 2000)
        return 0.1;

    else if (salario > 2500 )
        return 0.15; 



}
const salarioBruto = 2000;
const beneficio = 250;

const calcularImposto = imposto(salarioBruto) * salarioBruto;
const salarioFinal = salarioBruto - calcularImposto + beneficio;

console.log(salarioFinal);






