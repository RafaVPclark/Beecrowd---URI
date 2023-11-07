let input = require("fs").readFileSync("/dev/stdin","utf8");
let linhas = input.split("\n");
let valoresLinha = linhas.shift().split(" ");
let A = parseFloat(valoresLinha[0]);
let B = parseFloat(valoresLinha[1]);
let C = parseFloat(valoresLinha[2]);
if(A == 0 || ((B*B) - 4 * A * C) < 0){
    console.log("Impossivel calcular");
}else{
    let baskara = Math.sqrt((B*B) - 4*A*C);
    let R1 = (-B + baskara)/(2 * A);
    let R2 = (-B - baskara)/(2 * A);
    console.log(`R1 = ${R1.toFixed(5)}\nR2 = ${R2.toFixed(5)}`);
}