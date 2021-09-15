// ------------------------------->EXERCICIOS DE INTREPRETACAO <-------------------------------
// 1)
// let array
// console.log('a. ', array) //R: undefined

// array = null
// console.log('b. ', array) //R: null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) //R: 11

// let i = 0
// console.log('d. ', array[i]) //R: 3

// array[i+1] = 19
// console.log('e. ', array) //R: 11

// const valor = array[i+6]
// console.log('f. ', valor) //R: 9

// 2)
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// R: SUBI NUM ÔNIBUS EM MIRROCOS, 27 

// ------------------------------->EXERCICIOS DE CÓDIGO <-------------------------------
// 1)
// const nomeUsuario = prompt("Digite seu nome:");
// const emailUsuario = prompt("Digite seu email:");

// console.log(`O email ${emailUsuario.trim()} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}`);

// 2)
// const comidasPreferidas = ["Churrasco", "Lasanha", "Ala minuta", "Sushi", "Fricassé"];

// console.log(`Essas são as minhas comidas preferidas:
// ${comidasPreferidas[0]}
// ${comidasPreferidas[1]}
// ${comidasPreferidas[2]}
// ${comidasPreferidas[3]}
// ${comidasPreferidas[4]}`);

// const comidaUsuario = prompt("Digite sua comida preferida:");
// comidasPreferidas.splice(1, 1);
// comidasPreferidas.push(comidaUsuario);

// console.log(comidasPreferidas);

// 3)
// let listaTarefas = [];
// let tarefasUsuario1 = prompt("Digite a primeira tarefa do dia: ");
// let tarefasUsuario2 = prompt("Digite a segunda tarefa do dia: ");
// let tarefasUsuario3 = prompt("Digite a terceira tarefa do dia: ");
// listaTarefas = [tarefasUsuario1, tarefasUsuario2, tarefasUsuario3];addEventListener
// console.log(`As tarefas do dia são: ${listaTarefas}`);

// let tarefaRealizada = Number(prompt("Digite de 0, 1 ou 2 a tarefa que você já realizou:"));
// listaTarefas.splice(tarefaRealizada, 1);
// console.log(listaTarefas);

// ------------------------------->DESAFIOS <-------------------------------
// 1)
// const frase = prompt("Digite uma frase: ");
// const array = [frase.split(" ")];
// console.log(array);

// 2)
// const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
// console.log(array.includes("Banana"), array.length);
