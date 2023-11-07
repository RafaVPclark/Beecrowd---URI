let input = require("fs").readFileSync("/dev/stdin","utf8");
let linhas = input.split("\n");
let entrada = linhas.shift();
let resto = entrada;
let minutosTotais = parseInt(entrada/60);
let horas = parseInt(minutosTotais/60);
let minutos = minutosTotais - (horas*60);
let segundos = entrada - (horas*60*60) - (minutos*60);

console.log(horas+":"+minutos+":"+segundos);