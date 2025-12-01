//1)  Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a 
//soma de A + B é maior, menor ou igual a C

const leia = require("readline-sync");

let a, b, c, soma

a = leia.questionFloat("digite o valor de a: ");
b = leia.questionFloat("Digite o valor de b: ");
c = leia.questionFloat("Digite o valor de c: ");
soma = a+b
if(soma > c){
    console.log(" A soma de a + b é maior que c.");
}else if(soma < c){
    console.log(" A soma de a + b é menor que c.");
} else{
    console.log(" A soma de a + b é igual que c.");
}
