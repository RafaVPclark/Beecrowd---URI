// ENUNCIADO
// Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela mensagem "Media: ". Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.". Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.". Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".
// No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " segido da média final para esse aluno.
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let linhas = input.split("\n");
let valores = linhas[0].split(" ");
let N1 = parseFloat(valores[0]);
let N2 = parseFloat(valores[1]);
let N3 = parseFloat(valores[2]);
let N4 = parseFloat(valores[3]);
let mediaPonderada = ((2 * N1) + (3 * N2) + (4 * N3) + (1 * N4))/10; 
console.log(`Media: ${mediaPonderada.toFixed(1)}`);
if(mediaPonderada >= 7){
    console.log("Aluno aprovado.");
}
else if(mediaPonderada < 5){
    console.log("Aluno reprovado.");
}
else if(mediaPonderada >= 5 && mediaPonderada <= 6.9){
    console.log("Aluno em exame.");
    let exame = parseFloat(linhas[1]);
    mediaPonderada = (mediaPonderada + exame)/2;
    console.log(`Nota do exame: ${exame.toFixed(1)}`);
    if(mediaPonderada >= 5){
        console.log("Aluno aprovado.");
    }else if(mediaPonderada <= 4.9){
        console.log("Aluno reprovado.");
    }
    console.log(`Media final: ${mediaPonderada.toFixed(1)}`);
}
