
// Escreva um programa para criar uma Collection Set do tipo number. O programa 
// deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos 
// e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede: 
// ●  Mostre na tela todos os elementos da Collection Set

// criar uma colletions set<number> OK
// ler 10 valores inteiros não repetidos ok
// mostrar todos os eleentso do set no final


//importe de biblioteca para receber dados 
import leia = require('readline-sync');

//declara constante que cria uma coleção vazia que ira receber os valores do usuario
const numeros: Set<number> = new Set<number>([]);

// estrutura para receber 10 numeros em sequencia e validar se é repetido ou nao.
for (let i = 0; i < 10; i++) {
    let number = leia.questionInt(`digite o numero ${i+1}: `);

        //numeros.has retorna true se algum elemento se repetir
    if (numeros.has(number)) {
        console.log(`valor repetido, digite um numero valido.\n`);
        i-- // decremento para o contador nao pular um indice faz ele ficar na mesma posição.
    }else{
        numeros.add(number) // adiciona os numeros que passaram na validação do if ou seja ou numeros nao repetidos
        // console.log(`numero adicionado.`);
    }
}                                         //Usar o Spread Operator [...numeros] para exibir colletions set atraves de interpolação de string
console.log( `os numeros adicionados foram: ${[...numeros]}`);



