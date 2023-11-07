let input = require("fs").readFileSync("/dev/stdin", "utf8");
let linhas  = input.split("\n");

let A = parseFloat(linhas.shift());
let B = parseFloat(linhas.shift());
let mp = (A*3.5 + B*7.5) / 11;
console.log(`MEDIA = ${mp.toFixed(5)}`);