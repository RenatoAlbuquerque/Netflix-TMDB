const API_KEY = 'dd33f07f2e3481f8294cf2684231cf67'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error: ", error);
  }
  }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () =>{
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },{
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },{
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },{
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },{
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },{
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },{
        slug: 'animation',
        title: 'Animação',
        items: await basicFetch(`/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`)
      },{
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      }
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId){
      // eslint-disable-next-line default-case
      switch(type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        break;
        default:
          info = null;
        break;
      }
    }

    return info
  }
}