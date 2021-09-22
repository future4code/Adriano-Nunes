//-----------------------> EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO <-----------------------
//1)
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) RESPOSTA = "Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]) RESPOSTA = 4
console.log(filme.transmissoesHoje[2]) RESPOSTA = "Globo" "14h"

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a) O que vai ser impresso no console?
RESPOSTA: ["Juca", 3, "SRD"]
          ["Juba"]
          ["Jubo"]

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
RESPOSTA: faz uma cópia do objeto anterior, um tipo de espelhamento


3)
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) O que vai ser impresso no console?
RESPOSTA: ["Caio", 23, false]
          ["Caio", 23, undefenid]

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
RESPOSTA: No primeiro console, foi impresso as informações da pessoa, como nome, idade e retorno um boelano em relação 
a última variavel. No segundom a "altura", não está definida, pois nao possui nenhum variavel com esse nome
*/

//-----------------------> EXERCÍCIOS DE ESCRITA DE CÓDIGO <-----------------------
// 1)
// const pessoa = {
//     nome: "Adriano",
//     apelidos: ["Branco", "Affifonsinho", "Pesadelo"]
// }

// const imprimir = (pessoa) => {
//     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
// }

// imprimir(pessoa)

// const outrosApelidos = {
//     ...pessoa,
//     apelidos: ["Branquinho", "Adrianinho", "Seco"]
// }

// imprimir(outrosApelidos)

// 2)
// const usuario1 = {
//     nome: "Adriano",
//     idade: 29,
//     profissao: "Dev"
// }

// const usuario2 = {
//     nome: "Keianne",
//     idade: 29,
//     profissao: "Pedagoga"
// }

// const dadosUsuario = (usuario1, usuario2) => {
//     console.log([usuario1.nome || usuario2.nome, 
//         usuario1.nome.length || usuario2.nome.length, 
//         usuario1.idade || usuario2.idade, 
//         usuario1.profissao || usuario2.profissao, 
//         usuario1.profissao.length || usuario2.profissao.length])
// }

// dadosUsuario(usuario1);
// dadosUsuario(usuario2);

// 3)
// const carrinho = [];

// const fruta1 = {
//     nome: "Morango",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "Abacaxi",
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "Abacate",
//     disponibilidade: true
// }

// const adicionaCarrinho = (fruta) =>  {
//     carrinho.push(fruta)
//     console.log(carrinho)
// }

// adicionaCarrinho(fruta1);
// adicionaCarrinho(fruta2);
// adicionaCarrinho(fruta3);



//-----------------------> DESAFIO <-----------------------
// 1)
// const informacoes = {
//     nome: prompt("Digite seu nome:"),
//     idade: Number(prompt("Digite sua idade:")),
//     profissao: prompt("Digite a sua profissão:")
// }

// const perguntasUsuario = (informacoes) => {
//     console.log(informacoes.nome, informacoes.idade, informacoes.profissao);
//     console.log(informacoes);
//     console.log(typeof informacoes);
// }

// perguntasUsuario(informacoes);

// 2)
// const filme1 = {
//     nome: "Velozes e Furiosos 9",
//     anoLancamento: 2021
// }

// const filme2 = {
//     nome: "Se Beber Não Case",
//     anoLancamento: 2021
// }

// const mensagem = (filme1, filme2) => {
//    console.log("O primeiro filme foi lançado antes do segundo?", filme1.anoLancamento < filme2.anoLancamento);
//    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", filme1.anoLancamento === filme2.anoLancamento );
// }

// mensagem(filme1, filme2);

// 3)
// const carrinho = [];

// const fruta1 = {
//     nome: "Morango",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "Abacaxi",
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "Abacate",
//     disponibilidade: true
// }

// const adicionaCarrinho = (fruta) =>  {
//     carrinho.push(fruta)
//     console.log(carrinho)
// }

// adicionaCarrinho(fruta1);
// adicionaCarrinho(fruta2);
// adicionaCarrinho(fruta3);

// const estoque = (fruta) => {
//     fruta.disponibilidade = !fruta.disponibilidade;
// }
// estoque(fruta1);
// estoque(fruta3);