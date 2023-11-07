// ENUNCIADO
// Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.
const listaDeItens = {
    preco1: 4,
    preco2: 4.5,
    preco3: 5,
    preco4: 2,
    preco5: 1.5,
}
let input = require("fs").readFileSync("/dev/stdin","utf-8");
let linhas = input.split("\n");
let linha = linhas[0]; 
let valores  = linha.split(" ");
let id = parseInt(valores[0]);
let qtd = parseInt(valores[1]);

if(id == 1){
    console.log(`Total: R$ ${parseFloat((listaDeItens.preco1)*qtd).toFixed(2)}`);
}
else if(id == 2){
    console.log(`Total: R$ ${parseFloat((listaDeItens.preco2)*qtd).toFixed(2)}`);
}
else if(id == 3){
    console.log(`Total: R$ ${parseFloat((listaDeItens.preco3)*qtd).toFixed(2)}`);
}
else if(id == 4){
    console.log(`Total: R$ ${parseFloat((listaDeItens.preco4)*qtd).toFixed(2)}`);
}
else if(id == 5){
    console.log(`Total: R$ ${parseFloat((listaDeItens.preco5)*qtd).toFixed(2)}`);
}