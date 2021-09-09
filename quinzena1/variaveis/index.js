/*EXERCICIO 1
let a = 10
let b = 10

console.log(b)  R: 10

b = 5
console.log(a, b) R: 10 5

EXERCICIO 2
let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c) //R: 10 10 10

EXERCICIO 3
let p = prompt("Quantas horas você trabalha por dia?") R:let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?") R: let pagamentoDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`) R: alert ("Você recebe ${pagamentoDia/horasTrabalhadas} por hora")*/

let nome;
let idade;
console.log(typeof nome);
console.log(typeof idade);
// No console apareceu UNDEFINED pois não foi atribuido nenhum valor para as variaveis

let nomeUsuario = prompt("Qual seu nome? ");
let idadeUsuario = prompt("Qual sua idade? ");
console.log(typeof nomeUsuario);
console.log(typeof idadeUsuario);
// Nos dois console apareceu o tipo string, mesmo no campo de idade, é necessario converter a variavel idadeUsuario de String para Number

let idadeUsuarioNumero = Number(idadeUsuario);
console.log(typeof idadeUsuarioNumero);

console.log("Olá", nomeUsuario, ", você tem", idadeUsuarioNumero, "anos.")

let pergunta1 = prompt("Você é gaúcho?");
let pergunta2 = prompt("Você gosta de churrasco?");
let pergunta3 = prompt("Você já tomou chimarrão?");

console.log("Você é gaúcho?", pergunta1);
console.log("Você gosta de churrasco?", pergunta2);
console.log("Você já tomou chimarrão?", pergunta3);

let a = 10;
let b = 25;
let c;
c = a;
a = b;
b = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);

let primeiroNumero = prompt("Digite o primeiro número:"); 
let segudoNumero = prompt("Digite o segundo número:");
let primeiroNumeroConvertido = Number(primeiroNumero);
let segudoNumeroConvertido = Number(segudoNumero);

console.log("O primeiro número somado ao segundo número resulta em:", primeiroNumeroConvertido+segudoNumeroConvertido);
console.log("O primeiro número multiplicado pelo segundo número resulta em:", primeiroNumeroConvertido*segudoNumeroConvertido);