const leia = require("readline-sync");

let salarioBruto = leia.questionFloat("Digite seu salario: ");
let adicionalNoturno = leia.questionFloat("Digite seu adicional noturno: ");
let horasExtras = leia.questionFloat("Digite suas horas extras: ");
let descontos = leia.questionFloat("Digite seus descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("SAlario liquido: %f" + salarioLiquido);
