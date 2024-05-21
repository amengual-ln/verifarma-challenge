<template>
    <Loading v-if="loading" />
    <main v-else>
        <Hero :backdrop="popularMovie?.backdrop_path" />
        <section class="px-3 py-4">
            <div class="grid grid-cols-3 md:grid-cols-6 gap-4 w-full max-w-screen-xl mx-auto">
                <MovieItem v-for="movie in movies" :movie="movie" />
            </div>
        </section>
    </main>
</template>

<script setup>
const { movies, popularMovie, loading, fetchMovies } = useMovies()

onMounted(() => {
    fetchMovies()
})
</script>