// EXERCÍCIO 01
function inverteArray(array) {
  let numerosInvertidos = [];
  for(let i = array.length-1; i >= 0; i--){
    numerosInvertidos.push(array[i]);
  }
  return numerosInvertidos;
  
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayNumeros = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      arrayNumeros.push(array[i]**2);
    }
  }
  return arrayNumeros;
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      numerosPares.push(array[i]);
    }
  }
  return numerosPares;
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = array[0];
  for(let i = 0; i < array.length; i++){
    let numeroDaVez = array[i];
    if(numeroDaVez > maiorNumero){
      maiorNumero = numeroDaVez;
    }
  }
  return maiorNumero;
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  let outroArray = array.length;
  return outroArray;
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true;
  const booleano2 = false;
  const booleano3 = !booleano2;
  const booleano4 = !booleano3; 
  
  const respostas = [
    booleano1 && booleano2 && !booleano4,
    (booleano1 && booleano2) || !booleano3,
    (booleano2 || booleano3) && (booleano4 || booleano1),
    !(booleano2 && booleano3) || !(booleano1 && booleano3),
    !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  ];
  
  return respostas;
  
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numperosPares = [];
  for(let i = 0; i < n; i++){
      numperosPares.push(i*2);
  }
  return numperosPares;
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  let ladoA = a;
  let ladoB = b;
  let ladoC = c;

  if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
    return "Equilátero";
  } else if(ladoA === ladoB && ladoA != ladoC || ladoA == ladoC && ladoA !=ladoB){
    return "Isósceles"
  } else if(ladoA != ladoB !=ladoC){
    return "Escaleno"
  }
  
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  if(num1 >= num2) {
    let maiorNumero = num1;
    let maiorDivisivelPorMenor = num1 % num2 === 0;
    let diferenca = num1 - num2;

    return respostas = {
      maiorNumero: maiorNumero, 
      maiorDivisivelPorMenor: maiorDivisivelPorMenor, 
      diferenca: diferenca
    }

  } else {
    let maiorNumero = num2;
    let maiorDivisivelPorMenor = num2 % num1 === 0;
    let diferenca = num2 - num1;

    return respostas = {
      maiorNumero: maiorNumero, 
      maiorDivisivelPorMenor: maiorDivisivelPorMenor, 
      diferenca: diferenca
    }
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let arrayOriginal = [];
  for(item of array){
    let posicaoNoArray = 0;
    for(outroItem of array){
      if(item > outroItem){
        posicaoNoArray++;
      }
    }
    arrayOriginal[posicaoNoArray] = item;
  }
  return [arrayOriginal[arrayOriginal.length - 2], arrayOriginal[1]];
  //                 descobrir o segundo maior, e o segundo menor
}

// EXERCÍCIO 11
function ordenaArray(array) {
  let arrayCrescente = [];
  for(item of array){
    let contador = 0;
    for(itemComparado of array){
      if(item > itemComparado){
        contador++;
      }
    }
    arrayCrescente[contador] = item;
  }
  return arrayCrescente;
}

// EXERCÍCIO 12
function filmeFavorito() {
 
  return astrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

}

// EXERCÍCIO 13s
function imprimeChamada() {
  
  const astrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

  return `Venha assistir ao filme ${astrodev.nome}, de ${astrodev.ano}, dirigido por ${astrodev.diretor} e estrelado por ${astrodev.atores[0]}, ${astrodev.atores[1]}, ${astrodev.atores[2]}, ${astrodev.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }

  return retangulo;
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  pessoa.nome = "ANÔNIMO";
  
  return pessoa;
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maioresDeIdade = arrayDePessoas.filter((item) =>{
    return item.idade >= 18
  })
  return maioresDeIdade
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menoresDeIdade = arrayDePessoas.filter((item) => {
    return item.idade < 18
  })
  return menoresDeIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const arrayNovo = array;
  const multiplicacao = arrayNovo.map(item => item * 2);
  return multiplicacao;
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const array17B = array;
  const retornaString = array17B.map(item => item * 2);
  return retornaString.map(String);
}


// EXERCÍCIO 17C
function verificaParidade(array) {
  let array18C = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      array18C.push(`${array[i]} é par`);
    } else {
      array18C.push(`${array[i]} é ímpar`);
    }
  }
  return array18C.map(String);
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const permissao = pessoas.filter((item) => {
    if(item.idade > 14 && item.idade < 60 && item.altura >= 1.5){
      return pessoas;
    }
  })
  return permissao;
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const bloquearEntrada = pessoas.filter((item) => {
    if(item.idade <= 14 || item.idade > 60 || item.altura < 1.5){
      return pessoas;
    }
  })
  return bloquearEntrada;
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  // const extrato = (x, y) => x + y;
  // const saldo = contas => {
  //   contas.map(item => ({
  //     ...contas,
  //     saldoTotal: item.saldoTotal - item.compras.reduce(extrato, 0)
  //   }));
  // }
  // return saldo;
}
