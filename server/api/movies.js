/*globals defineEventHandler */
export default defineEventHandler(async () => {
    const movies = await fetch(`${process.env.BASE_URL}/discover/movie?api_key=${process.env.TMDB_API_KEY}`).then(res => res.json().then(data => data))
    return movies.results.slice(0, 18)
})