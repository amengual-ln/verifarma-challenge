import { ref } from "vue"

export function useMovies() {
    const movies = ref([])
    const popularMovie = ref(null)
    const loading = ref(true)
    const error = ref(null)

    const fetchMovies = async () => {
        try {
            const movieResults = await $fetch("/api/movies")
            const popularResult = await $fetch("/api/movie/popular")
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