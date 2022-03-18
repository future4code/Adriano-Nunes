//---------------------------------- EXERCICIO 1 ----------------------------------
//a) Pela propriedade process.argv 

//b)
// const nome = process.argv[2];
// const idade = process.argv[3];

// const mensagem = `Olá, ${nome}! Você tem ${idade} anos.`

// console.log(mensagem);

//c)
// const idadeSeteAnos = Number(process.argv[3])+7

// const novaMensagem = `Olá, ${nome}! Você tem ${idade} anos. Em seta anos você terá ${idadeSeteAnos}`

// console.log(novaMensagem);

//---------------------------------- EXERCÍCIO 2 ----------------------------------
//a)
// const num1 = Number(process.argv[2]);
// const num2 = Number(process.argv[3]);
// const operacao = process.argv[4];

// switch(operacao){
//     case "add":
//         console.log(num1 + num2);
//         break;
//     case "sub":
//         console.log(num1 - num2);
//         break;
//     case "multi":
//         console.log(num1 * num2);
//         break;
//     case "div":
//         console.log(num1 / num2);
//         break;
// }

//---------------------------------- EXERCÍCIO 3 ----------------------------------
const tarefa = process.argv[2]
const listaTarefa = ["Comprar pão", "Comer o pão", tarefa]

console.log(listaTarefa)