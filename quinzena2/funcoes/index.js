// ------------------------> EXERCÍCIOS DE INTERPRETAÇÃO <------------------------
// 1)
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2)) //R: 10
// console.log(minhaFuncao(10)) //R: 50

// b)No console não aparecerá nada. Mas ficará armazenada a resposta

// 2)
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a) A função faz que a variavel texto fique com todas as letras maiusculas e retorna um boleano (true ou false)
// se exixte a string "cenoura" no texto.

// b) i - EU GOSTO DE CENOURA - true
//    ii - CENOURA É BOM PRA VISTA - true
//    iii - CENOURAS CRESCEM NA TERRA - true

// ------------------------> EXERCÍCIOS DE CÓDIGO <------------------------
// 1)
// a)
// function informacoesPessoais(){
//     const nome = "Adriano";
//     const idade = 29;
//     const cidadeQueMora = "Canoas";
//     const profissao = "Estudante";

//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidadeQueMora} e sou ${profissao}`);
// }

// informacoesPessoais();

// b)
// function informacoesPessoais(nome, idade, cidadeQueMora, profissao){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidadeQueMora} e sou ${profissao}`);
// }

// informacoesPessoais("Lais", 23, "São Paulo", "instrutora");

// 2)
// a)
// function somaDeDoisNumeros(num1, num2){
//     const soma = num1 + num2;
//     return soma;
// }

// console.log(somaDeDoisNumeros(10, 15));

// b)
// function numeroMaiorOuIgual(num1, num2){
//     const verificaraçãoDoNumero = num1 >= num2;
//     return verificaraçãoDoNumero;
// }

// console.log(numeroMaiorOuIgual(10, 10));

// c)
// function numeroPar(num1){
//     const numeroPar = num1 % 2 === 0;
//     return numeroPar;
//  }

//  console.log(numeroPar(12));

// d)
// function mensagem(string){
//     const maiusculoString = string.toUpperCase();
//     const tamanhoString = maiusculoString.length;

//     return tamanhoString + maiusculoString;
// }

// console.log(mensagem(" Sport Club Internacional"));


// 3)
// function operacoesMatematicos(num1, num2){
//     const soma =  num1 + num2;
//     const subtracao =  num1 - num2;
//     const multiplicacao =  num1 * num2;
//     const divisao =  num1 / num2;

//     return [soma, subtracao, multiplicacao, divisao];
// }

// const expressao1 = Number(prompt("Digite o primeiro número: "));
// const expressao2 = Number(prompt("Digite o segundo número: "));

// console.log("Números inseridos:", expressao1, expressao2)
// console.log(`Soma: ${operacoesMatematicos(expressao1, expressao2)[0]}`);
// console.log(`Diferença: ${operacoesMatematicos(expressao1, expressao2)[1]}`);
// console.log(`Multiplicação: ${operacoesMatematicos(expressao1, expressao2)[2]}`);
// console.log(`Divisão: ${operacoesMatematicos(expressao1, expressao2)[3]}`);

// ------------------------> DESAFIO <------------------------
// 1)
// a)
// const palavraParametro = (parametro) =>{
//     const parametro1 = prompt("Digite um parâmetro: ")
//     return parametro1
// }

// console.log(palavraParametro());

// b)
// const imprimirMensagem = (mensagem) => {
//     const aparecerMensagem = (mensagem)
//     console.log("Soma:", aparecerMensagem)
// }

// const somarValores = (num1, num2) =>{
//     const soma = num1 + num2;
//     imprimirMensagem(soma)
// }
// somarValores(10, 5);

// 2)
// function teoremaPitagoras(hip, a, b){
//     const hipotenusa = ((a*a) + (b*b));
//     const raizQuadrada = hipotenusa ** (1/2);

//     return raizQuadrada;
// }

// console.log(teoremaPitagoras("hip", 12, 5));
