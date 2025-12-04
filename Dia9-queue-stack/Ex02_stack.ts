// Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
// 2: Listar todos os livros da Pilha
// 3: Retirar um livro da pilha 
// 0: O programa deve ser finalizado. 
// Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.

import leia = require('readline-sync');

import { Stack } from './Stack';

const pilhaLivro: Stack<string> = new Stack<string>();

let opcao
let livro

do {
    console.log('*************************************');
    console.log('1 - Adicionar na fila');
    console.log('2 - mostrar a fila');
    console.log('3 - remover da fila');
    console.log('0 - sair');
    console.log('*************************************');

    opcao = leia.questionInt('Escolha a opcao do menu acima: ')
    console.log('*************************************');

    switch (opcao) {
        case 1:
            livro = leia.question('Digite o livro a ser adicionado na sua biblioteca: ');
            pilhaLivro.push(livro);
            console.log('O livro adicionado com sucesso\n');
            break;
        case 2:
            console.log('Mostrando todos os livros: ');
            pilhaLivro.printStack();
            break;
        case 3:
            if (pilhaLivro.isEmpty()) {
                console.log("A biblioteca está vazia");
                break;
            } else {
                console.log('Livro retirado da biblioteca!');
                console.log(' biblioteca atualizada: ');
                pilhaLivro.pop();
                pilhaLivro.printStack();
                break;
            }
        // console.log('Removendo livro');

        case 0:
            console.log('Obrigado por usar o sistema');
            break;
        default:
            console.log('Escolha uma opcao valida');
            break;
    }
} while (opcao !== 0);
