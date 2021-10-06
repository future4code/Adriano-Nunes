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

  } else if(num2 >= num1) {
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

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
