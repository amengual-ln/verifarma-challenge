/*globals defineEventHandler */
export default defineEventHandler(async () => {
    const popularMovie = await fetch(`${process.env.BASE_URL}/movie/discover?sort_by=popularity.desc&api_key=${process.env.TMDB_API_KEY}`).then(res => res.json().then(data => data))
    return popularMovie
})