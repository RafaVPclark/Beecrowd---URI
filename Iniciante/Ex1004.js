let input = require("fs").readFileSync("/dev/stdin","utf8");
let linhas = input.split("\n");
let n1 = parseInt(linhas.shift());
let n2 = parseInt(linhas.shift());
let prod = n1*n2;
console.log(`PROD = ${prod}`);