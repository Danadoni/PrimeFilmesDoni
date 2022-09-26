import axios from "axios";


//URL FILMES EM CARTAZ :

//https://api.themoviedb.org/3/movie/now_playing?api_key=5d7a174ab32583655f441728ae72d5e4&language=pt-BR&page=1

export  const key = '5d7a174ab32583655f441728ae72d5e4';
const api = axios.create({
    baseURL:'https://api.themoviedb.org/3'

})

export default api;