let input = require("fs").readFileSync("/dev/stdin","utf8");
let linhas = input.split("\n");
let distancia = parseInt(linhas.shift());
let combustivel = parseFloat(linhas.shift());
let kml = distancia/combustivel;
console.log(`${kml.toFixed(3)} km/l`);
