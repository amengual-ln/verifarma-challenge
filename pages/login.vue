<template>
    <section class="grid h-[calc(100vh-100px)] place-content-center">
        <form class="grid gap-4 m-8 text-white">
            <label for="username" class="grid">
                User
                <input type="text" name="username" class="bg-gray-700 rounded-lg px-4 py-2" />
            </label>
            <label for="password" class="grid">
                Password
                <input type="password" name="password" class="bg-gray-700 rounded-lg px-4 py-2" />
            </label>
            <button @click="handleLogin" class="bg-verifarmaPurple rounded-lg p-x4 py-2">Log in</button>
        </form>
    </section>
</template>

<script setup>
const handleLogin = async (event) => {
    event.preventDefault()
    navigateTo("/")
}
</script>