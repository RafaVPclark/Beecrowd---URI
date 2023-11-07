let input = require("fs").readFileSync("/dev/stdin", "utf8");
let linhas = input.split("\n");

let numFun = parseInt(linhas.shift());
let horas = parseInt(linhas.shift());
let valHora = parseFloat(linhas.shift());
let salario = horas*valHora;

console.log(`NUMBER = ${numFun}\nSALARY = U$ ${salario.toFixed(2)}`);