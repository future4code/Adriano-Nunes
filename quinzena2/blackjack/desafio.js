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
// let cartaJogador = [];
// let cartaPc = [];

// if((confirm("Bem Vindo ao jogo de Blackjack! ♣️ ♦️ ♠️ ♥️ \nVamos jogar uma partida?"))){
//    let sortearDoisAs = true
//    while(sortearDoisAs){
//       cartaJogador.push(comprarCarta());
//       cartaJogador.push(comprarCarta());
//       cartaPc.push(comprarCarta());
//       cartaPc.push(comprarCarta());
//       if((cartaJogador[0].valor === 11 && cartaJogador[1].valor)||(cartaPc[0].valor === 11 && cartaPc[1].valor === 11)){
//          cartaJogador = [];
//          cartaPc = [];
//       } else {
//          sortearDoisAs = false
//       }
//       console.log(`As cartas do jogador são ${cartaJogador[0].valor}, ${cartaJogador[1].valor}
//       e as cartas do adversario são ${cartaPc[0].valor} e ${cartaPc[1].valor}`)
//    }
// }

// let continuarComprandoCarta = true;
// while(continuarComprandoCarta){
//    let categoria = "";
//    let pontos = 0;
//    for(let carta of cartaJogador){
//       categoria += carta.texto + " ";
//       pontos += carta.valor
//    }

//    if(pontos > 21){
//       continuarComprandoCarta = false
//    } else {
//       let comprar = confirm(`Suas cartas são ${categoria}. E a carta do Computador é ${cartaPc[0].texto}
//       \nDeseja comprar outra carta?`)
//          if(comprar === true){
//             cartaJogador.push(comprarCarta());
//          } else {
//             continuarComprandoCarta = false
//          }
//    }
// }








