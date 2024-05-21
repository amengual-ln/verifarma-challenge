import { ref } from "vue"

export function useMovies() {
    const movies = ref([])
    const popularMovie = ref(null)
    const loading = ref(true)
    const error = ref(null)

    const fetchMovies = async () => {
        try {
            const movieResults = await $fetch("http://localhost:3000/api/movies")
            const popularResult = await $fetch("http://localhost:3000/api/movie/popular")
            movies.value = movieResults
            popularMovie.value = popularResult.results[Math.floor(Math.random() * 5)]
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    return {
        movies,
        popularMovie,
        loading,
        error,
        fetchMovies
    }
}