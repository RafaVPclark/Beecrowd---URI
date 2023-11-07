let input = require("fs").readFileSync("/dev/stdin","utf8");
let linhas = input.split("\n");
let velocidade = parseInt(linhas.shift());
let tempo = parseInt(linhas.shift());
let distancia = velocidade * tempo;
litros = distancia/12;
console.log(`${litros.toFixed(3)}`);