const leia = require("readline-sync");

let salario = leia.questionFloat("Digite seu salario: ");
let abono = leia.questionFloat("Digite o abono: ");
let novoSalario = salario + abono;
console.log(novoSalario);

