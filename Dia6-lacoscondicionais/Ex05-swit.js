

const leia = require("readline-sync")

let codigo, quantidade, total, produto = "", preco = 0

codigo = leia.questionInt("Digite o codigo do seu produto (1 a 6): ");
quantidade = leia.questionInt("digite a quantidade: ")

switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;

    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;

    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;

    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;

    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;

    case 6:
        produto = "Suco de Laranja";
        preco = 13.00;
        break;

    default:
        console.log("Código inválido!");
        return; // encerra o programa
}
 total = quantidade*preco;
 console.log("\nProduto: " + produto);
 console.log("\nPreço: " + total);
