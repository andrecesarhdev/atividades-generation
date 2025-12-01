// 2)  Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma 
// mensagem indicando se este número é par ou ímpar e se o número é positivo ou 
// negativo. Veja os exemplos abaixo:

const leia = require("readline-sync");

let numero;

numero = leia.questionFloat("digite um numero: ");

if(numero % 2 == 0){
 console.log("numero par");
 
} else{
    console.log("numero impar");
}