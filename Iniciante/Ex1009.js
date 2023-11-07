let input = require("fs").readFileSync("/dev/stdin", "utf8");
let linha = input.split("\n");

let nome = linha.shift();
let salFixo = parseFloat(linha.shift());
//vendas no mês em dinheiro
let vendasMes = parseFloat(linha.shift());
let total = salFixo + vendasMes*0.15;
console.log(`TOTAL = R$ ${total.toFixed(2)}`);
