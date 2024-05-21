import { ref } from 'vue'

export function useMovieDetails() {
    const movie = ref(null);
    const loading = ref(true);
    const error = ref(null);

    const fetchMovieDetails = async (id) => {
        try {
            const result = await $fetch(`http://localhost:3000/api/movie/${id}`)
            movie.value = result;
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    };

    return {
        movie,
        loading,
        error,
        fetchMovieDetails
    };
}