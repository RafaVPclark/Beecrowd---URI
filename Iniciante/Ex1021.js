let input = require("fs").readFileSync("/dev/stdin","utf8");
// Separar pelos pontos
let valores = input.split('.');
let notas = parseInt(valores[0]);
let moedas = parseInt(valores[1]);
//Começar a contagem da parte das NOTAS e ir subtraindo do total
let restoNotas = notas;
let notasCem = parseInt(notas/100);
restoNotas = notas - (notasCem*100);
let notasCinquenta = parseInt(restoNotas/50);
restoNotas = restoNotas - (notasCinquenta*50);
let notasVinte = parseInt(restoNotas/20);
restoNotas = restoNotas - (notasVinte*20);
let notasDez = parseInt(restoNotas/10);
restoNotas = restoNotas - (notasDez*10);
let notasCinco = parseInt(restoNotas/5);
restoNotas = restoNotas - (notasCinco*5);
let notasDois = parseInt(restoNotas/2);
restoNotas = restoNotas - (notasDois*2);
//Começar a subtrair a parte das MOEDAS e ir subtraindo
if(isNaN(moedas) == true){
    moedas = 0;
}
let restoMoedas = moedas + (restoNotas*100);
let moedasUm = parseInt(restoMoedas/100);
restoMoedas = restoMoedas - (moedasUm*100);
let moedasCinquenta = parseInt(restoMoedas/50);
restoMoedas = restoMoedas - (moedasCinquenta*50);
let moedasVintecinco = parseInt(restoMoedas/25);
restoMoedas = restoMoedas - (moedasVintecinco*25);
let moedasDez = parseInt(restoMoedas/10);
restoMoedas = restoMoedas - (moedasDez*10);
let moedasZeroCinco = parseInt(restoMoedas/5);
restoMoedas = restoMoedas - (moedasZeroCinco*5);
let moedasZeroUm = parseInt(restoMoedas/1);


console.log("NOTAS:");
console.log(notasCem + " nota(s) de R$ 100.00");
console.log(notasCinquenta + " nota(s) de R$ 50.00");
console.log(notasVinte  + " nota(s) de R$ 20.00");
console.log(notasDez  + " nota(s) de R$ 10.00");
console.log(notasCinco  + " nota(s) de R$ 5.00");
console.log(notasDois  + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(moedasUm + "moeda(s) de R$ 1.00");
console.log(moedasCinquenta  + "moeda(s) de R$ 0.50");
console.log(moedasVintecinco  + "moeda(s) de R$ 0.25");
console.log(moedasDez  + "moeda(s) de R$ 0.10");
console.log(moedasZeroCinco  + "moeda(s) de R$ 0.05");
console.log(moedasZeroUm +  "moeda(s) de R$ 0.01");