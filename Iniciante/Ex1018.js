let input = require("fs").readFileSync("/dev/stdin","utf8");
let linhas = input.split("\n");
let entrada = linhas.shift();
//Declarações das variáveis
let resto = entrada;
let notasCem = parseInt(entrada/100);
resto = resto - (notasCem*100);
let notasCinquenta = parseInt(resto/50);
resto = resto -(notasCinquenta*50);
let notasVinte = parseInt(resto/20);
resto = resto - (notasVinte*20);
let notasDez = parseInt(resto/10);
resto = resto - (notasDez*10);
let notasCinco = parseInt(resto/5);
resto = resto - (notasCinco*5);
let notasDois = parseInt(resto/2);
resto = resto - (notasDois*2);
let notasUm = parseInt(resto);
// Prints de tela
console.log(entrada);
console.log(notasCem + " nota(s) de R$ 100,00");
console.log(notasCinquenta + " nota(s) de R$ 50,00");
console.log(notasVinte + " nota(s) de R$ 20,00");
console.log(notasDez + " nota(s) de R$ 10,00");
console.log(notasCinco + " nota(s) de R$ 5,00");
console.log(notasDois + " nota(s) de R$ 2,00");
console.log(notasUm + " nota(s) de R$ 1,00");