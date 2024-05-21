<template>
    <h1 class="text-3xl text-white font-medium text-center">{{ movie.title }}</h1>
    <span class="text-center font-medium">{{ movie.vote_average.toFixed(1) }} / 10</span>
    <ul class="flex gap-2 justify-center text-gray-200">
        <li>{{ movie.release_date.split('-')[0] }} | </li>
        <li>{{ formatDuration(movie.runtime) }} | </li>
        <li>{{ movie.genres.slice(0, 3).map(genre => genre.name).join(', ') }}</li>
    </ul>

    <p class="text-xl text-pretty text-justify">{{ movie.overview }}</p>
</template>

<script setup>
defineProps([
    "movie"
])
const { formatDuration } = useFormatDuration()
</script>