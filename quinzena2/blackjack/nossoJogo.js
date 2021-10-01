/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem Vindo ao jogo de Blackjack! ♣️ ♦️ ♠️ ♥️");

let nomeUsuario = prompt("Digite seu nome: ");

let telaDeBemVindo = confirm(`${nomeUsuario}! Vamos jogar?`);

if(telaDeBemVindo === true){
   let rodada = confirm("Quer iniciar uma nova rodada?");
     
   if(rodada === true) {
         let cartaUsuario1 = comprarCarta();
         let cartaUsuario2 = comprarCarta();
         let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
         console.log(`Usuário - Cartas: ${cartaUsuario1.texto} e ${cartaUsuario2.texto} - Pontuação da rodada: ${pontuacaoUsuario}`);
            
         let cartaPc1 = comprarCarta();
         let cartaPc2 = comprarCarta();
         let pontuacaoPc = cartaPc1.valor + cartaPc2.valor;
         console.log(`Computador - Cartas: ${cartaPc1.texto} e ${cartaPc2.texto} - Pontuação da rodada: ${pontuacaoPc}`);

         if(pontuacaoUsuario > pontuacaoPc) {
            console.log(`${nomeUsuario}, você ganhou! =D`);
         } else if(pontuacaoUsuario < pontuacaoPc) {
            console.log("O Computador ganhou! :(");
         } else {
            console.log("Empate!");
         }
      } else {
         console.log("O jogo acabou!");
         }
   
   } else {
      console.log("O jogo acabou!");
}
    