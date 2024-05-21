<template>
    <h2 class="text-xl font-medium mt-4">Similar movies</h2>
    <section class="grid grid-cols-3 md:grid-cols-6 gap-4 w-full max-w-screen-xl mx-auto">
        <MovieItem v-for="movie in similarMovies" :movie="movie" />
    </section>
</template>

<script setup>
const { movie } = defineProps([
    'movie'
])

const { data: similarResults } = await useFetch("http://localhost:3000/api/movie/" + movie.id + "/similar")
const similarMovies = similarResults.value
</script>