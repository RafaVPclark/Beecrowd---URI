let input = require("fs").readFileSync("/dev/stdin", "utf8");
let linhas  = input.split("\n");

let A = parseFloat(linhas.shift());
let B = parseFloat(linhas.shift());
let C = parseFloat(linhas.shift());
let mp = (A*2 + B*3 + C*5) / 10;
console.log(`MEDIA = ${mp.toFixed(1)}`);