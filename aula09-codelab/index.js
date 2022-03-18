const prompt = require("prompt-sync")();

// let rodadas = +prompt("Rodadas: ");
// console.log(rodadas);

// for (let i=0; i < rodadas; i++)
// {
//     console.log("RODADA");
// }

let valor = prompt("Valor: ");
console.log(valor != 0)

while (valor != 0 && valor != 1)
{
    console.log("ERRO");
    valor = prompt("Valor: ");
}

// LÓGICA E

// TEM QUE ACERTAR O USUÁRIO E A SENHA
// TRUE  && TRUE   = TRUE
// TRUE  && FALSE  = FALSE
// FALSE && TRUE   = FALSE
// FALSE && FALSE  = FALSE

