let input = require("fs").readFileSync("/dev/stdin", "utf8");
let linhas = input.split("\n");
let A = parseInt(linhas.shift());
let B = parseInt(linhas.shift());
let soma = A + B;
console.log(`SOMA = ${soma}`);