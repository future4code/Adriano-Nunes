//----------> EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO <----------
//1)
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//RESPOSTA: está fazendo um laço de repetição e o resultado que será imprimido é 10

//2)
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a)RESPOSTA: Irá imprimir os numeros maiores de 18 que sao 19, 21, 23, 25, 27 e 30
//b) RESPOSTA: Sim

//3)
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// RESPOSTA: Será imprimida 4 linhas com asteriscos, sendo que na primeira linha, terá *, na segunda ** e assim por diante

//----------> EXERCÍCIOS DE ESCRITA DE CÓDIGO <----------
//1)
// let quantidadePets = Number(prompt("Digite a quantidade de bichinhos de estimação você possui?"));
// let nomePet = [];

// if(quantidadePets === 0){
//     console.log("Que pena! Você pode adotar um pet!");
// } else if (quantidadePets > 0){
//     for(let i = 0; i < quantidadePets; i++){ //a variavel i precisa ser menor q a quantidade de pets digitada pelo usuario, para nao entrar em loop infinito
//         let pets = prompt("Digite o nome do seu pet:");
//         nomePet[i] = pets;
//     }

// }

// console.log(nomePet)

// 2)

//a)
//let arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const verificarArrayOriginal = (numeros) => {
//    for(let numero of numeros){
//        console.log(numero)
//    }
// }

//verificarArrayOriginal(arrayOriginal);

//b)
// const divisaoPorDez = (numeros) => {
//     for(let numero of numeros){
//            console.log(numero / 10);
//      }
// }

//  divisaoPorDez(arrayOriginal);

// let array = [1, 2, 3, 4, 5, 55, 80, 82, 91, 94];
// let arrayPares = [];

//c)
// const verificarNumerosPares = (numeros) => {
//     for(let numero of numeros){
//         if(numero % 2 === 0){
//             arrayPares.push(numero);
//         }
//     }
//     console.log(arrayPares); 
// }

// verificarNumerosPares(array);

//d)
// let arrayOriginal = [10, 20, 30, 40, 50];
// let novoArray = [];

// const imprimirElemento = (string) =>{    
//     for(let i = 0; i < string.length; i++) {
//         let arrayComString = `O elemento do índex ${[i]} é ${arrayOriginal[i]}`
//         console.log(arrayComString)
//     }
// }

// imprimirElemento(arrayOriginal);

//e)
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// const verificarNumero = (numeros) =>{
//     let maiorNumero = numeros[0];
//     let menorNumero = numeros[0];
//     for(let i = 0; i < numeros.length; i++){
//         const numeroDaVez = numeros[i];
//         if(numeroDaVez > maiorNumero){
//             maiorNumero = numeroDaVez;
//         }  else if(numeroDaVez < menorNumero){
//             menorNumero = numeroDaVez;
//         }
//     }
//     return(`O maior número é ${maiorNumero} e o menor número é ${menorNumero}.`);
// }

// console.log(verificarNumero(array))

