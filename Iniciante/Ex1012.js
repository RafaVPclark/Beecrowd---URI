let input = require("fs").readFileSync("/dev/stdin","utf8");
let linhas = input.split("\n");
let linha = linhas.shift().split(" ");
let A = parseFloat(linha[0]);
let B = parseFloat(linha[1]);
let C = parseFloat(linha[2]);
const pi = parseFloat(3.14159);
let areaTriangulo = (A*C)/2;
let areaCirculo = pi *C*C;
let areaTrapezio = ((A + B)*C)/2
let areaQuadrado = B*B;
let areaRetangulo = A*B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);