// 3)  Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 
// 69  anos,  só  podem  doar  sangue  se  não  for  a  sua  primeira  doação.  Escreva  um 
// Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do 
// doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a 
// doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto 
// para doar sangue. Veja os exemplos abaixo:

const leia = require("readline-sync");

let nome, idade, doador
let apto = false;

nome = leia.question("digite seu nome: ")
idade = leia.questionInt("digite sua idade: ")
doador = leia.question("e a sua primeira doacao? (s/n):  ")

if (idade >= 18 && idade <= 69) {

    if (idade >= 60 && idade <= 69) {
        if (doador === 'n') {
            apto = true;
        } else {
            apto = false
        }

    } else {
        apto = true
    }
} else {
    apto = false
}

if (apto) {
    console.log(nome + " esta apto para doar sangue");

} else {
    console.log(nome + " Não está apto para doar sangue");

}