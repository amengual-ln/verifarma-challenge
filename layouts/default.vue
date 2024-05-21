<template>
    <div class="flex flex-col justify-between min-h-screen bg-gray-900">
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter,
.page-leave-active {
    opacity: 0;
}

.page-leave,
.page-enter-active {
    opacity: 1;
}
</style>