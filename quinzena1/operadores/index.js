/*
-----------------------------> EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO <-----------------------------
1)
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) R: false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) R: false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) R: true

console.log("d. ", typeof resultado) R: boolean

2)
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
R: Será concatenado as duas String, pois as variaveis são String e não números, é necessário realizar a conversão das variáveis

3)
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

*/

// -----------------------------> EXERCÍCIOS DE ESCRITA DE CÓDIGO <-----------------------------
// 1)
// const idadeUsuario = Number(prompt("Digite sua idade:"));
// const idadeAmigo = Number(prompt("Digite a idade de seu (sua) amigo (a):"));
// console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo);

// const diferencaIdade = idadeUsuario - idadeAmigo;
// console.log("Diferença de Idade:", diferencaIdade);

// 2)
// let numeroPar = Number(prompt("Insira um número par:"));
// console.log(numeroPar % 2);
// R: Se for sempre digitado números pares, o resultado é 0 e se for digitado números ímpares o resultado é 1.

// 3)
// const idadeUsuario = Number(prompt("Digite sua idade:"));
// console.log("Sua idade (meses):", idadeUsuario * 12, "meses de idade!");
// console.log("Sua idade (dias):", idadeUsuario * 365, "dias de idade!");
// console.log("Sua idade (horas):", idadeUsuario * 8760, "horas de idade!");

// 4)
// const primeiroNumero = Number(prompt("Digite o seu primeiro número:"));
// const segundoNumero = Number(prompt("Digite o seu segundo número:"));
// const restoDivisao1 = primeiroNumero % segundoNumero;
// const restoDivisao2 = segundoNumero % primeiroNumero;
// const ehDivisivel1 = restoDivisao1 === 0;
// const ehDivisivel2 = restoDivisao2 === 0;

// console.log("O primeiro número é maior que segundo?", primeiroNumero > segundoNumero);
// console.log("O primeiro número é igual ao segundo", primeiroNumero === segundoNumero);
// console.log("o primeiro número é divisível pelo segundo?", ehDivisivel1);
// console.log("O segundo número é divisível pelo primeiro?", ehDivisivel2);

// -----------------------------> DESAFIO <-----------------------------
// 1)

// let fahrenheit = 77;
// let temperaturaK = (fahrenheit - 32) * (5 / 9) + 273.15;
// console.log("O valor da temperatura de 77°F em Kelvin é", temperaturaK, "°K");

// let celsius = 80;
// let temperaturaF = celsius * (9 / 5) + 32;
// console.log("O valor da temperatura em 80°C em Fahrenheit é", temperaturaF, "°F");

// let celsius = 30;
// let celsius = Number(prompt("Digite o valor em °C que desejar converter:"));
// let fahrenheit = celsius * (9 / 5) + 32;
// console.log("O valor da temperatura em", celsius ,"°C em Fahrenheit é", fahrenheit, "°F");

// let kelvin = (fahrenheit - 32) * (5 / 9) + 273.15;
// console.log("O valor da temperatura de", fahrenheit , "°F em Kelvin é", kelvin, "°K");

// 2)
// const kwh = 0.05;
// let consumo = 280 * 0.05;
// console.log("O valor gasto de uma casa que consome 280Kw/h é R$", consumo, "!");

// const kwh = 0.05;
// const desconto = 0.85
// let consumo = (280 * 0.05) * desconto;
// console.log("O valor gasto de uma casa que consome 280Kw/h é R$", consumo, " com 15% de desconto!");

// 3)
// const pesoLb = 20;
// const kg = pesoLb / 2.205;
// console.log(pesoLb, "lb equivalem a", kg, "kg.")

// const pesoOz = 10.5;
// const kg = pesoOz / 35.274;
// console.log(pesoOz, "oz equivalem a", kg, "kg.");

// const distanciaMi = 100;
// const distanciaM = distanciaMi * 1609;
// console.log(distanciaMi, "milhas equivalem a", distanciaM, "metros.");

// const distanciaFt = 50;
// const distanciaM = distanciaFt / 3.281;
// console.log(distanciaFt, "pés equivalem a", distanciaM, "metros.");

// const galao = 103.56;
// const litro = galao * 3.785;
// console.log(galao, "galão equivalem a", litro, "litros.");

// const xicara = 450;
// const litro = xicara / 3.5;
// console.log(xicara, "xícaras equivalem a", litro, "litros.");

// const litro = Number(prompt("Digite a quantida de litros:"));
// const galao = litro / 3.785;
// console.log(litro , "litros equivalem a" , galao , "galoes.");

