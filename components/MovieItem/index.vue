<template>
    <article>
        <NuxtLink :to="`/movie/${movie.id}`">
            <figure class="rounded-lg overflow-hidden">
                <NuxtImg v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w400${movie.poster_path}`"
                    alt="Movie poster" class="transform hover:scale-110 transition" />
                <img v-else src="/moviePlaceholder.png" alt="Movie poster" />
            </figure>
            <h1 class="text-white font-medium pt-2 line-clamp-2 overflow-hidden">{{ movie.title }}</h1>
        </NuxtLink>
    </article>
</template>

<script setup>
defineProps([
    "movie"
])
</script>