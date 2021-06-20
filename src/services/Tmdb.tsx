const API_KEY = 'a0e6937a7b18cb52726d8cd5a259a469';
const API_BASE = 'https://api.themoviedb.org/3';


const requestFecth = async (endpoint:string) =>{
    return (await fetch(`${API_BASE}${endpoint}`)).json();
}

export const getHomeList = async () =>{
    return [
        {
            slug:'originals',
            title:'Originais NetFlix',
            items: await requestFecth(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title : "Recomendados para Você",
            items : await requestFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title : "Em Alta",
            items : await requestFecth(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title : "Ação",
            items : await requestFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title : "Comédia",
            items : await requestFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title : "Terror",
            items : await requestFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title : "Romance",
            items : await requestFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },            
        {
            slug: 'documentary',
            title : "Documentários",
            items : await requestFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        },
    ]
}

export const getMovieInfo = async (movieID:string,type:string) =>{
    let info = {}
    if(movieID){
        switch (type) {
            case 'movie':
                info = await requestFecth(`/movie/${movieID}?language=pt-BR&api_key=${API_KEY}`);
            break;
            case 'tv' :
                info = await requestFecth(`/tv/${movieID}?language=pt-BR&api_key=${API_KEY}`);
            break;
        
            default:
            break;
        }
    }
    return info;
};