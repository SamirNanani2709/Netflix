const key = "98ee6ed6cd75ae1b0a841a3b465a863d";
const baseUrl = "https://api.themoviedb.org/3";

const endpoints = {
  popular: `${baseUrl}/movie/popular?api_key=${key}`,
  trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
  comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
  upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
};
export function createImageUrl(filename, size) {
  return `https://image.tmdb.org/t/p/${size}/${filename}`;
}

export default endpoints;
