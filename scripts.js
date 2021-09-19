let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
  

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...")
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdttotalcarne =  carnePP(duracao) * adultos +(carnePP(duracao) / 2 * criancas);
    let qdttotalcerveja=  cervejaPP(duracao) * adultos ;
    let qdttotalbebida =  bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qdttotalcarne / 1000} kg de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdttotalcerveja / 355)} Latas de cervejas </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdttotalbebida / 2000)} Pet´s 2l de bebidas </p>`
    

}      
function carnePP(duracao){
    if (duracao >= 6) {
        return 650;
    }else{
        return 400;
    }
}

     
function cervejaPP(duracao){
    if (duracao >= 6) {
        return 2000;
    }else{
        return 1200;
    }
}
   
function bebidasPP(duracao){
    if (duracao >= 6) {
        return 2000;
    }else{
        return 1000;
    }
}
