<template>
    <section alt="Imagen descriptiva de la película"
        class="relative bg-cover bg-center md:bg-cover aspect-square md:aspect-[16/6] bg-no-repeat"
        :style="`background-image: url(https://image.tmdb.org/t/p/original${backdrop})`">
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 from-0% to-transparent to-40%" />
    </section>
</template>

<script setup>
defineProps([
    "backdrop"
])
</script>