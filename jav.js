let botaoVermelho = document.getElementById("vermelho");

let botaoVerde = document.getElementById("verde");

function mudaCorFundo(cor){
    document.body.style.backgroundColor = cor;
}
botaoVermelho.addEventListener("click", function(){
    mudaCorFundo("red");
})
botaoVerde.addEventListener("click", function(){
    mudaCorFundo("green");
})