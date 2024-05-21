<template>
    <Loading v-if="loading" />
    <main v-else class="text-white">
        <div v-if="movie">
            <Hero :backdrop="movie.backdrop_path" />
            <section class="flex flex-col gap-4 p-4 max-w-screen-xl mx-auto">
                <MovieDetail :movie="movie" />
                <MovieSimilar :movie="movie" />
            </section>
        </div>
    </main>
</template>

<script setup>
const route = useRoute();
const { movie, loading, error, fetchMovieDetails } = useMovieDetails()

onMounted(() => {
    const movieId = route.params.id
    fetchMovieDetails(movieId)
})
</script>