const leia = require("readline-sync");

let nome, codigo, salario,porcentagem,cargo,novoSalario;

nome = leia.question("Digite seu nome: ");
codigo = leia.questionInt("Digite o codigo do colaborador (1 a 6): ");
salario = leia.questionFloat("digite seu salario: ");

switch (codigo) {
    case 1: 
        cargo = "Gerente";
        porcentagem = salario * 0.10;
        novoSalario = salario + porcentagem;
        break;
    case 2: 
        cargo = "Vendedor";
        porcentagem = salario * 0.07;
        novoSalario = salario + porcentagem;
        break;
    case 3: 
        cargo = "Supervisor";
        porcentagem = salario * 0.09;
        novoSalario = salario + porcentagem;
        break;
    case 4: 
        cargo = "Motorista";
        porcentagem = salario * 0.06;
        novoSalario = salario + porcentagem;
        break;
    case 5: 
        cargo = "Estoquista";
        porcentagem = salario * 0.05;
        novoSalario = salario + porcentagem;
        break;
    case 6: 
        cargo = "Tecnico de TI";
        porcentagem = salario * 0.08;
        novoSalario = salario + porcentagem;
        break;
    default:
        console.log("Digite uma opcao valida.");
        
        break;
}
console.log("===========INFORMAÇOES DO FUNCIONARIO==================================");

console.log(nome + " é " + cargo + " e seu salario com reajuste é: " + novoSalario);