// ---------------------> EXERCÍCIOS DE INTERPRETAÇÃO DO CODIGO  <---------------------
//1)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//a) RESPOSTA : Irá aparecer no console os nomes com os apelidos seguindo a posição no index 0, 1 e 2, e depois irá mostrar todo o array

//2)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//RESPOSTA: Será impresso apenas os nomes da array usuarios

//3)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//RESPOSTA: Será impresso apenas dois objetos, exceto o que possui apelido "CHIJO", pois está filtrando.

// ---------------------> EXERCÍCIOS DE ESCRITA DO CODIGO  <---------------------
// //1)
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  //a)
//  const nomesDoguinhos = pets.map((item) =>{
//      return item.nome;
//  })

//  console.log(nomesDoguinhos);

//  //b)
// const racaSalsicha = pets.filter((item) =>{
//     return item.raca === "Salsicha";
// })

// console.log(racaSalsicha);

// //c)
// const racaPoodle = pets.filter((item) =>{
//     return item.raca === "Poodle";
    
// })

// const nomeDogPoodle = racaPoodle.map((item) =>{
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`); 
// })


//2)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ];

 //a)
 const nomeProdutos = produtos.map((item) =>{
     return item.nome;
 })

 console.log(nomeProdutos);

 //b)
 const precoComDesconto = produtos.map((item) =>{
     const valorComDesconto = item.preco * 0.95;
     const resultado = {
         nome: item.nome, 
         preço: valorComDesconto};

        return resultado;
 });

 console.log(precoComDesconto);

 //c)
 const bebidas = produtos.filter((item) =>{
     return item.categoria === "Bebidas";
 })

 console.log(bebidas);

 //d)
 const nomesYpes = produtos.filter((item) =>{
     return item.nome.includes("Ypê");
 })

 //console.log(nomesYpes);

 //e)
 const produtosYpes = nomesYpes.map((item) =>{
     return item.nome;
 })

 const precoYpe = nomesYpes.map((item) =>{
     return item.preco;
 })
 

 console.log(`Compre ${produtosYpes[0]} por R$${precoYpe[0]}`)
 console.log(`Compre ${produtosYpes[1]} por R$${precoYpe[1]}`)