const leia = require("readline-sync");

let n1, n2, codigo, operacao

n1 = leia.questionFloat("Digite o primeiro numero: ");
n2 = leia.questionFloat("Digite o segundo numero: ");
codigo = leia.questionInt("Escolha uma opcao:\n1 - Somar\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir ");

switch (codigo) {
    case 1: 
        operacao = (n1 + n2)
        break;
    case 2: 
        operacao = (n1-n2)
        break;
    case 3: 
        operacao = (n1 * n2)
        break;
    case 4: 
        operacao = (n1/n2)
        break;

    default:
        console.log("Operacao invalida");
        return;
}

console.log("O resultado da operacao escolida foi: " + operacao);
