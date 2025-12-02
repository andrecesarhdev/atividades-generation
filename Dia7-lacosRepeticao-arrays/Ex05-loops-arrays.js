const leia = require ("readline-sync")

let numero 
let soma = 0;


do {
    numero = leia.questionInt("digite um numero: ")

     if (numero > 0) {
        soma = soma + numero
     }

} while (numero !== 0);

console.log("soma dos mumeros positivos e: " + soma);
