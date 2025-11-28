const leia = require("readline-sync");

let n1 = leia.questionFloat("Digite nota 1: ");
let n2 = leia.questionFloat("Digite nota 2: ");
let n3 = leia.questionFloat("Digite nota 3: ");
let n4 = leia.questionFloat("Digite nota 4: ");

let diferenca = (n1*n2)-(n3*n4);

console.log("A difenrença entre os valores sao: ", diferenca);
