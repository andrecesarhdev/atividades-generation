//  Escreva um algoritmo que leia 3 palavras (string), que definem as características de 
// um tipo de animal, segundo o diagrama abaixo, que deve ser lido da esquerda para a 
// direita. 
const leia = require("readline-sync");

let p1, p2, p3, animal = ""

p1 = leia.question("digite a primeira palavra: ");
p2 = leia.question("digite a segunda palavra: ");
p3 = leia.question("digite a terceira palavra: ");

if (p1 === "vertebrado") {
    if (p2 === "ave") {
        if (p3 === "carnivoro") {
            animal = "Aguia"
        } else if (p3 === "onivero") {
            animal = "pomba";
        }
    } else if (p2 === "mamifero") {
        if (p3 === "onivoro") {
            animal = "Homem"
        } else if (p3 === "herbivoro")
            animal = "Vaca"
    }
} else if (p1 === "invertebrado") {
    if (p2 === "inseto") {
        if (p3 === "hematofago") {
            animal = "Pulga"
        } else if (p3 === "herbivoro") {
            animal = "Largata"
        }
    } else if (p2 === "anelidio") {
        if (p3 === "hematofago") {
            animal = "saguessuga"
        }else if (p3 === "onivoro") {
            animal = "minhoca"
        }
    }
}

console.log("Animal: " + animal);


