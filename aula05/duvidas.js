const prompt = require("prompt-sync")();

let usuario = prompt("Olá, usuário digite seu nome: ");
let senha = prompt("digite a senha: ");


while (senha == usuario) {
    console.log("A senha digitada é muito fraca.")
    senha = prompt("digite a senha: ")
}