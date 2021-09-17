// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const altura = Number(prompt("Digite uma altura do retângulo:"));
  const largura = Number(prompt("Digite a largura do retângulo"));

  console.log(altura * largura);
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Digite o ano atual:"));
  const anoNascimento = Number(prompt("Digite o ano de seu nascimento:"));
  const idade = anoAtual - anoNascimento;

  console.log(idade);
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = Number(prompt("Digite o seu peso:"));
  const altura = Number(prompt("Digite sua altura:"));
  const imc = peso / (altura * altura);

  console.log(imc);
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nomeUsuario = prompt("Digite seu nome:");
  const idadeUsuario = prompt("Digite a sua idade:");
  const emailUsuario = prompt("Digite seu email:");

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`);
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt("Digite a primeira cor: ");
  const cor2 = prompt("Digite a segunda cor: ");
  const cor3 = prompt("Digite a terceira cor: ");

  const coresFavoritas = [cor1, cor2, cor3];
  console.log(coresFavoritas);
  
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const palavra = prompt("Digite uma palavra: ");
  console.log(palavra.toUpperCase());
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoEspetaculo = Number(prompt("Digite o valor de um espetáculo: "));
  const valorIngresso = Number(prompt("Digite o valor do ingresso: "));

  const quantidadeIngressos = custoEspetaculo / valorIngresso;
  console.log(quantidadeIngressos);
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const palavra1 = prompt("Digite uma palavra: ");
  const palavra2 = prompt("Digite outra palavra: ");

  console.log(palavra1.length === palavra2.length);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const string1 = prompt("Digite uma palavra: ");
  const string2 = prompt("Digite outra palavra: ");

  console.log(string1.toLowerCase() === string2.toLowerCase());
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Digite o ano atual:"));
  const anoNascimento = Number(prompt("Digite o ano de seu nascimento:"));
  const anoRG = Number(prompt("Digite o ano que sua carteira de identidade foi emitida:"));
  
  const idade = anoAtual - anoNascimento;
  
  const renovacaoRG5anos = idade <= 20 && anoAtual - anoRG >= 5;
  const renovacaoRG10anos = idade > 20 && idade <= 50 && anoAtual - anoRG >= 10;
  const renovacaoRG15anos = idade > 50 && anoAtual - anoRG >= 15;

  console.log(renovacaoRG5anos || renovacaoRG10anos || renovacaoRG15anos);
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const ano = Number(prompt("Digite um ano qualquer:"));
  const anoBissexto1 = ano % 400 === 0;
  const anoBissexto2 = ano % 4 === 0 ;
  const anoBissexto3 = ano % 100 !== 0;

  console.log(anoBissexto1 || anoBissexto2 && anoBissexto3)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const idadeAluno = prompt("Você tem mais de 18 anos? sim ou não:");
  const respostaIdade = idadeAluno.toLowerCase()=== "sim";
 
  const ensinoMedio = prompt("Você possui ensino médio completo? sim ou nao:");
  const respostaEnsino = ensinoMedio.toLowerCase() === "sim";
  
  const disponibilidadeHorario = prompt("Você possui disponibilidade exlcusiva durante os horários do curso? sim ou nao:");
  const respostaDisponibilidade = disponibilidadeHorario.toLowerCase() === "sim";

  const inscricaoValida = respostaIdade && respostaEnsino && respostaDisponibilidade;

  console.log(inscricaoValida) 
}