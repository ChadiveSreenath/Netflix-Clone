const key="e46160d8312076614c1434db0e7a959d"

export const requests={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestToprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestTrending:`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
    requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=horror`,

}

export default requests