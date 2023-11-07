let input = require("fs").readFileSync("/dev/stdin","utf8");
let linhas = input.split("\n");
let n1 = parseInt(linhas.shift());
let tempo = 2*n1;
console.log(`${tempo} minutos`);