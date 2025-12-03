// Criar um Array<number> já inicializado com 10 valores. OK

// Ler um número inteiro digitado pelo usuário. OK

// Procurar esse número dentro do array.

// Se encontrar → mostrar a posição (índice).

// Se NÃO encontrar → mostrar:
// "O número NN não foi encontrado!"

import leia = require('readline-sync');

const numeros: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6);

let n1 = leia.questionInt(`digite um numero: `);
let encontrado = false;

for(let i = 0; i < numeros.length; i++){
    if (numeros[i] === n1) {
        console.log("numero encontrado na posição: " + i);
        encontrado = true;
        break;
    }
}
if (!encontrado){
    console.log("Nao foi encontrado");   
}