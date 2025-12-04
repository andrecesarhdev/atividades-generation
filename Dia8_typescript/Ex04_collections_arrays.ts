// Escreva um programa para criar uma Collection Set do tipo number, inicializada 
// com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via 
// teclado 1 número inteiro e caso ele seja encontrado na Collection Set, exiba na tela a 
// mensagem: O Número NN foi encontrado! Caso o número não seja encontrado, o 
// programa deverá exibir na tela a mensagem: O número NN não foi encontrado! 


//importe de biblioteca para receber dados 
import leia = require('readline-sync');

//declara constante que cria uma coleção vazia que ira receber os valores do usuario
const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);
// le um numero inteiro
let number = leia.questionInt(`digite o numero que voce deseja encontrar: `);

let encontrado = false;

// laço de repetição para percorrer o set
for (const n of numeros) {

    //laço condicioal para verificar se o numedo digitado esta no set
    if (n === number) {
        encontrado = true;
        break;
    } 
}           

// laco condicional para verificar se encontrou e mostrar a msg.
if (encontrado) {
    
    console.log(`O número ${number} foi encontrado!`);
}else{
    console.log(`O número ${number} nao foi encontrado!`);

}