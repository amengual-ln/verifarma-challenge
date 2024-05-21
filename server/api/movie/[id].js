/*global defineEventHandler, getRouterParam */
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const movies = await fetch(`${process.env.BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`).then(res => res.json().then(data => data))
    return movies
})