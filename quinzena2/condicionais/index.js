// -------------------------> EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO <-------------------------
//1)
/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/

//a) O teste é se o número inserido realizar uma operação matemático. A operação é o resta da divisão.
// O resultado para passar no teste é 0, se nao ter o resultado esperado, o teste não passa.
//b) Números pares
//c) Números ímpares

//2)
/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/

//a) Esse código serve paraa melhorar o código, para nao escrever muito If/Else
//b) O preço da fruta Maça é R$ 2.25
//c) O preço iria ser 5 em vez de 5.5

//3)
/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/

//a) Solicitando um número para o usuário
//b) Se for digitado 10, a mensagem que será imprimida é "Esse número passou no teste"; se for -10 não apacerá nada no console
//c) O erro apacerá na variável let.

//*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*---*
// -------------------------> EXERCÍCIOS DE ESCRITA DE CÓDIGO <-------------------------
//1)
// const idade = Number(prompt("Digite a sua idade:"));

// function habilitaçãoCNH(idade){
//     if(idade >= 18){
//         console.log("Você pode dirigir!")
//     } else {
//         console.log("Você não pode dirigir. Precisar ter maioridade!")
//     }
// }

// habilitaçãoCNH(idade);

// 2)
// const turno = prompt("Digite M(matutino) ou V(Vespertino) ou N(Noturno)");

// function turnoDoAluno(turno){
//     if(turno === "M"){
//         console.log("Bom dia!")
//     } else if(turno === "V") {
//         console.log("Boa Tarde")
//     } else {
//         console.log("Boa Noite")
//     }
// }

// turnoDoAluno(turno);

// 3)
// const turno = prompt("Digite M(matutino) ou V(Vespertino) ou N(Noturno)");

// switch(turno){
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa Tarde!")
//         break
//     case "N":
//         console.log("Boa Noite!")
//         break
//     default:
//         console.log("Turno não encontrado. Digite M(matutino) ou V(Vespertino) ou N(Noturno)")
//         break
// }

// 4)
// const genero = prompt("Digite um gênero de filme:")
// const generoMinusculo = genero.toLowerCase();
// const precoIngresso = Number(prompt("Qual o valor do ingresso?"))

// function exibicaoFilme(genero, precoIngresso){
//     if(genero === "fantasia" && precoIngresso <= 15){
//         console.log("Bom filme!")
//     } else {
//         console.log("Escolha outro filme")
//     }
// }

// exibicaoFilme(generoMinusculo, precoIngresso);
// exibicaoFilme("comédia", 18);

// -------------------------> DESAFIO <-------------------------
//1)
// const genero = prompt("Digite um gênero de filme:")
// const generoMinusculo = genero.toLowerCase()
// const precoIngresso = Number(prompt("Qual o valor do ingresso?"))

// function exibicaoFilme(genero, precoIngresso){
//     if(genero === "fantasia" && precoIngresso <= 15){
//         const lanche = prompt("Digite o lanche para acompanhar o filme:")
//         console.log(`Bom filme! Aproveite o(a) seu(sua) ${lanche}!`)
//     } else {
//         console.log("Escolha outro filme")
//     }
// }

// exibicaoFilme(genero, precoIngresso)

//2)
const nomeCompleto = prompt("Digite seu nome:")
const tipoDeJogo = prompt("IN - Jogo Internacional ou DO - Jogo Nacional:")
const etapaDoJogo = prompt("SF - semi-final; DT - decisão de terceiro lugar; FI - final:")
const categoria = Number(prompt("Digite a categoria: 1, 2, 3 ou 4"))
const quantidadeIngressos = Number(prompt("Digite a quantidade de ingressos a serem comprados:"))
let precoIngresso 

switch(etapaDoJogo){
    case "SF":
        switch(categoria){
            case 1:
                precoIngresso = 1320;
                break;
            case 2:
                precoIngresso = 880;
                break;
            case 3:
                precoIngresso = 550;
                break;
            case 4:
                precoIngresso = 220;
                break;
            default:
                precoIngresso = 0;
                break;
        }
        break;
    case "DT":
        switch(categoria){
            case 1:
                precoIngresso = 660;
                break;
            case 2:
                precoIngresso = 440;
                break;
            case 3:
                precoIngresso = 330;
                break;
            case 4:
                precoIngresso = 170;
                break;
            default:
                precoIngresso = 0;
                break;
        }
        break;
    case "FI":
        switch(categoria){
            case 1:
                precoIngresso = 1980;
                break;
            case 2:
                precoIngresso = 1320;
                break;
            case 3:
                precoIngresso = 880;
                break;
            case 4:
                precoIngresso = 330;
                break;
            default:
                precoIngresso = 0;
                break;
        }
        break;
    default:
        break;
}

if(tipoDeJogo === "IN"){
    precoIngresso = precoIngresso * 0.2439
}


const valorTotalIngresso = precoIngresso * quantidadeIngressos

console.log(`---DADOS DA COMPRA--- 
Nome do Cliente: ${nomeCompleto}
Tipo do Jogo: ${tipoDeJogo}
Etapa do Jogo: ${etapaDoJogo}
Categoria: ${categoria}
Quantidade de Ingressos: ${quantidadeIngressos}
---VALORES---
Valor do Ingresso: ${precoIngresso}
Valor total: ${valorTotalIngresso}`)


