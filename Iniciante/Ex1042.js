// ENUNCIADO
// Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.
let input = require("fs").readFileSync("/dev/stdin","utf8");
let linhas = input.split("\n");
let valores = linhas[0].split(" ");
let primeiro = parseInt(valores[0]);
let segundo = parseInt(valores[1]);
let terceiro = parseInt(valores[2]);
//Inserção
for(let i = 1; i < 3; i++){
    let tmp = parseInt(valores[i]);
    let j = i - 1;
    while((j >= 0) && (parseInt(valores[j])>tmp) ){
        valores[j + 1] = valores[j];
        j--;
    }
    valores[j + 1] = tmp;
}
for(let i = 0 ; i < 3 ; i++){
    console.log(`${valores[i]}`);
}
console.log("\n"+primeiro);
console.log(segundo);
console.log(terceiro);