//------------------------ EXERCÍCIO 1 ------------------------

const minhaString: string = "String"

const meuNumero: number | string = 455

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum Cores {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

const pessoa1 : Pessoa = {
    nome: "Adriano",
    idade: 29,
    corFavorita: Cores.VERMELHO
}

const pessoa2 : Pessoa = {
    nome: "Keianne",
    idade: 29,
    corFavorita: Cores.AZUL
}

const pessoa3 : Pessoa = {
    nome: "João Silencioso",
    idade: 15,
    corFavorita: Cores.VIOLETA
}

//console.log(pessoa1, pessoa2, pessoa3)

//------------------------ EXERCÍCIO 2 ------------------------
function obterEstatisticas(numeros: Array<number>) {

    const numerosOrdenados: Array<number> = numeros.sort (
        (a, b) => a - b
    )

    let soma: number = 0
    let num: number = 0

    for (num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas

}