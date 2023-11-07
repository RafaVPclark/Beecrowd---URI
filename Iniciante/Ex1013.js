let input = require("fs").readFileSync("/dev/stdin","utf8");
let linhas = input.split("\n");
let linha = linhas.shift().split(" ");
let A = parseInt(linha[0]);
let B = parseInt(linha[1]);
let C = parseInt(linha[2]);
if(A >= B && A >= C){
    console.log(`${A} eh o maior`);
}else if(B >= A && B>= C){
    console.log(`${B} eh o maior`);
}else{
    console.log(`${C} eh o maior`);
}