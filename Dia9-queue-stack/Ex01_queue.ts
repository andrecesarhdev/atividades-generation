// 1)  Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo 
// string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O 
// programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3: OK
// ●  1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente. 
// ●  2: Listar todos os Clientes na fila 
// ●  3: Chamar (retirar) uma pessoa da fila  
// ●  0: O programa deve ser finalizado.  
// Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar 
// (chamar) um cliente da fila.


// importa biblioteca para receber dados
import leia = require('readline-sync');

// importa config da fila
import { Queue } from './Queue';

// cria constante pra receber os dados da fila
const ordemFila: Queue<string> = new Queue<string>();

// recebe os nomes para inserir na fila
let nome
// vai dentro do do whille
let opcao


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
            nome = leia.question('Digite o nome a ser adicionado na fila: ');
            ordemFila.enqueue(nome);
            console.log('Nome adicionado com sucesso\n');
            break;
        case 2:
            console.log('Clientes na fila');
            ordemFila.printQueue();
            break;
        case 3:
            if (ordemFila.isEmpty()) {
                console.log("A fila está vazia");
                break;
            } else {
                console.log('proximo da fila, pode vim!');
                console.log(' Fila atualizada: ');
                ordemFila.dequeue();
                ordemFila.printQueue();
                break;
            }
        case 0:
            console.log('Obrigado por usar o sistema');
            break;
        default:
            console.log('Escolha uma opcao valida');
            break;
    }
} while (opcao !== 0);

