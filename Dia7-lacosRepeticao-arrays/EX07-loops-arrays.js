
// Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa 
// um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um 
// número e o programa deve exibir na tela a posição deste número no vetor. Caso o 
// número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida 
// na tela. Veja os exemplos abaixo:



const leia = require("readline-sync");
let numero
let encontrado = false;

const list = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
numero = leia.questionInt ("Digite um numero: ");

for(let i = 0; i < list.length; i++){
    if (list[i] === numero) {
        console.log("numero encontrado na posição: " + i);
        encontrado = true;
        break;
    }
}
if (!encontrado){
    console.log("Nao foi encontrado");   
}
