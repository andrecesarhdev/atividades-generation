const leia = require("readline-sync");

let maiorIdade = 0;
let menorIdade = 0;
let idade;
let continua = true

while (continua) {

   idade = leia.questionInt("Digite a idade: ");
    
    if (idade < 0) {
        continua = false
    }

     if (idade < 21) {
        menorIdade += 1;
    }else if(idade > 50){
        maiorIdade += 1;
    }
}
console.log("pessoas menores de 21 anos: " + menorIdade);
console.log("pessoas menores de 50 anos: " + maiorIdade);
