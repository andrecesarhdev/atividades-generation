// Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em OK
// seguida, mostre na tela: 
// ●  Todos os elementos dos índices ímpares do vetor  - OK
// ●  Todos os elementos do vetor que são números pares - OK
// ●  A Soma de todos os elementos do vetor OK
// ●  A Média de todos os elementos do vetor, armazenada em uma variável do tipo real - OK

const leia = require("readline-sync");
let soma =0;

let list = [];

for (let i = 0; i < 10; i++) {
    let numero = leia.questionInt("digite um numero: ")
    list[i] = numero;
}
console.log("Elementos nos índices ímpares:");

for (let i = 0; i < list.length; i++) {
    if (i % 2 !== 0) {
        console.log("indice " + i + ": " + list[i]);
    }
}
console.log("Elementos que sao numeros pares:");

for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
        console.log("elementos: " + list[i]);
    }
}
for (let i = 0; i < list.length; i++) {
     soma += list[i];
}
console.log("Soma total: " + soma);
let media = soma / list.length;
console.log("Media dos elementos: " + media);


