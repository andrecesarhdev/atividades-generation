// Escreva um programa para criar uma Collection Array de Objetos do tipo string. O OK
// programa deverá solir ao usuário, que ele digite via teclado 5 cores e deverá OK
// adicioná-las individualmente no Array. Em seguida, faça o que se pede: OK
// ●  Mostre na tela todas as cores adicionadas.  OK
// ●  Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.


import leia = require("readline-sync");

const cores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
    let cor = leia.question(`digite uma cor ${i + 1}: `);
    cores.push(cor)
}
console.log(`Lista das cores escolhidas ${cores}`);
console.log(`Lista das cores ordenadas: ${cores.sort()}`);
