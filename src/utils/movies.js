//gerar um lista de filmes com o tamanho que eu desejar

export function getListMovies(size,movies){
    let popularMovies = [];

    for(let i = 0, l = size; i < l; i++){
        popularMovies.push(movies[i])
    }
return popularMovies;
}

// gerar um número aleatório para servir como capa do aplicativo baseado na lista de filmes 

export function randomBanner(movies){
    return Math.floor(Math.random()* movies.length )
}