import { ref } from 'vue'

export function useSimilarMovies() {
    const similarMovies = ref(null);
    const loading = ref(true);
    const error = ref(null);

    const fetchSimilarMovies = async (id) => {
        try {
            const result = await $fetch(`/api/movie/${id}/similar`)
            similarMovies.value = result;
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    };

    return {
        similarMovies,
        loading,
        error,
        fetchSimilarMovies
    };
}