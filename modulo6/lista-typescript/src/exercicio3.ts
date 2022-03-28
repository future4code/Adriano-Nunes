 export type MoviesInfo = {
    name: string,
    releaseYear: number,
    genro: GENERO,
    movieReview ?: number
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const filmCatalog = (
    name: string,
    releaseYear: number,
    genro: GENERO,
    movieReview?: number
) : MoviesInfo => {
    const movies: MoviesInfo = {
        name,
        releaseYear,
        genro,
        movieReview
    }
    return movies
}

console.log(filmCatalog("Duna", 2021, GENERO.ACAO, 74))
console.log(filmCatalog("Duna", 2021, GENERO.ACAO))