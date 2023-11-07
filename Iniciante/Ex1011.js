let input = require("fs").readFileSync("/dev/stdin","utf8");
let linha = input.split("\n");
const pi = 3.14159;
let raio = parseFloat(linha.shift());
let volume = (4/3) * pi * raio * raio * raio;
console.log(`VOLUME = ${volume.toFixed(3)}`);