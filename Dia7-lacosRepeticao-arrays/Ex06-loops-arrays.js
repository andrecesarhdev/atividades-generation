// Escreva um algoritmo, que leia números inteiros via teclado, até que o número 
// zero seja digitado. Ao final, mostre na tela a média de todos os números 
// digitados, que sejam múltiplos de 3. Veja o exemplo abaixo: 

// 1 - ler varios numeros interios via teclado -> RESOLVIDO
// 2 - continuar lendo ate que o usuario digite 0 -> RESOLVIDO
// 3 - calcular media apenas dos numeros multiplos de 3 que foram digitados 
// 4 mostrar essa media final

const leia = require("readline-sync");

let numero;
let continua = true
let soma = 0;
let i = 0;
let media 

 do {
    numero = leia.questionInt("Escreva um numero: ");

    if (numero === 0) {
        continua = false;
    } else if(numero % 3 ===0) {
        soma += numero;
        i++
    }
} while (continua) 
if (i>0) {
    media = soma/i
    console.log("numeros multiplos de 3: " + i);
    console.log("Media dos multiplos de 3: " + media);
}else{
    console.log("nenhum numero multiplo de 3");
}
