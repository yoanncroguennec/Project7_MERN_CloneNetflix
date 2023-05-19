// API
import { BASE_URL } from "./api";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// REQUESTS
const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
  fetchMoviePosters: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213&language=fr-FR`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=99`,
};

export default requests;
