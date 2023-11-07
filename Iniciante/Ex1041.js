//ENUNCIADO
// Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).
let input = require("fs").readFileSync("/dev/stdin","utf8");
let linhas = input.split("\n");
let valores = linhas[0].split(" ");
let x = parseFloat(valores[0]);
let y = parseFloat(valores[1]);
if(x == 0 && y == 0){
    console.log("Origem");
}else if(x == 0){
    console.log("Eixo Y");
}else if(y == 0){
    console.log("Eixo X");
}else if(x > 0 && y > 0){
    console.log("Q1");
}else if(x > 0 && y < 0){
    console.log("Q4");
}else if(y > 0 && x < 0){
    console.log("Q2");
}else if(y < 0 && x < 0){
    console.log("Q3");
}