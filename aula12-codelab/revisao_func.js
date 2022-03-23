// AREA COM VARIÁVEL

// let largura = 10;
// let comprimento = 20;
// let area = largura * comprimento;
// console.log(area);


// ----------------------


// AREA COM FUNÇÃO -- SEM PARÂMETRO

// DECLAREI
// function calcularArea() {
//     let largura = 10;
//     let comprimento = 20;
//     let area = largura * comprimento;

//     console.log(area);
// }

// CHAMAR FUNÇÃO
// calcularArea();

// ----------------------


// AREA COM FUNÇÃO - COM PARÂMETROS
// const prompt = require("prompt-sync")();

// // DECLAREI
// function calcularArea(ladoA, ladoB) {
//     console.log("Lado A: ", ladoA);
//     console.log("Lado B: ", ladoB);
//     let area = ladoA * ladoB;
//     console.log("Área: ", area);
// }

// console.log();
// let largura = +prompt("Digite a largura (m²): ");
// let comprimento =  +prompt("Digite a comprimento (m²): ");

// // CHAMAR FUNÇÃO
// console.log();
// calcularArea(largura, comprimento);
// console.log();



// ----------------------


// AREA COM FUNÇÃO - COM PARÂMETROS E RETORNO
const prompt = require("prompt-sync")();

// DECLAREI
// function calcularArea(ladoA, ladoB) {
//     console.log("Lado A: ", ladoA);
//     console.log("Lado B: ", ladoB);
//     return ladoA * ladoB;
// }

// ARROW FUNCTION

// TIPO 1
// const calcularArea = (ladoA, ladoB) => {
//     console.log("Lado A: ", ladoA);
//     console.log("Lado B: ", ladoB);
//     return ladoA * ladoB
// }

// TIPO 2
// const calcularArea = (ladoA, ladoB) => {
//     return ladoA * ladoB
// }

// TIPO 2
const calcularArea = (ladoA, ladoB) => ladoA * ladoB

console.log();
let largura = +prompt("Digite a largura (m²): ");
let comprimento =  +prompt("Digite a comprimento (m²): ");

// CHAMAR FUNÇÃO
console.log();

let retornoFunc = calcularArea(largura, comprimento);
console.log("Retorno da função (área): ", retornoFunc);

console.log();








// EXTRA!!!!!

// function calcularPerimetro(lados) {
//     return lados[0] + lados[1] + lados[2]
// }

// let listaLados = [10, 30, 40]
// let retorno = calcularPerimetro(listaLados)
// console.log(retorno);

 const valores = (num1, num2) => {
    let mult = num1 * num2
    console.log(`O valor é :${mult}`);  // console.log(`O valor é ${ num1 *num2 }`)
    let soma = num1 + num2
    console.log(`O valor é :${soma}`);  // console.log(`O valor é ${ num1 + num2 }`)
    let div = num1 / num2
    console.log(`O valor é :${div}`);
    let sub = num1 - num2
    console.log(`O valor é :${sub}`);
 }
 
 
 
 let valor1 = +prompt('Digite o numero : ');
 let valor2 = +prompt('Digite o segundo numero: ');
 valores(valor1, valor2); 