const leia = require("readline-sync");
let operacao, saque, saldo = 1000.00, novoSaldo,deposito


operacao = leia.questionInt("Escolha a operacao desejada: \n1 - SALDO\n2 - SAQUE\n3 - DEPOSITO\n")

switch (operacao) {
    case 1: 
        operacao = "Saldo"
        console.log("Seu saldo é de: " + saldo);
        break;
    case 2: 
        operacao = "Saque"
        saque = leia.questionFloat("Qual o valor voce deseja sacar: ");
        novoSaldo = saldo - saque;
        if (saldo < saque) {
            console.log("Saldo insuficiente");
        }else{
            console.log("Novo saldo: " + novoSaldo);
        }
        break;
    case 3: 
        operacao = "Deposito"
        deposito = leia.questionFloat("Quanto voce deseja depositar:  ")
        novoSaldo = saldo + deposito;
        console.log("Novo saldo: " + novoSaldo);
        break;

    default:
        console.log("Operação invalida");
        break;
}