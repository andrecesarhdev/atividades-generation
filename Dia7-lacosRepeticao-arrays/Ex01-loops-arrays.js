// Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro 
// número deve ser menor do que o segundo número. Caso contrário, deve ser 
// exibida uma mensagem na tela informando que o intervalo é inválido e sair do 
// programa.  
// No intervalo informado, mostre na tela todos os números que são 
// múltiplos de 3 e 5

// Ler 2 números inteiros via teclado. -> RESOLVIDO

//O primeiro deve ser menor que o segundo. -> RESOLVIDO

//Se não for, mostrar:
// "Intervalo inválido"
// e encerrar o programa. -> RESOLVIDO

// Se o intervalo for válido, mostrar todos os números entre eles que sejam múltiplos de 3 E de 5 ao mesmo tempo.

const leia = require("readline-sync");

let n1,n2

n1 = leia.questionInt("digite o primeiro valor: ");
n2 = leia.questionInt("digite o segundo valor: ");

if (n1 >= n2) {
    console.log("Intervalo invalido");
    return;
}
for (let i = n1; i <= n2; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " é multiplo de 3 e 5");
    }
}