<template>
    <header>
        <router-link :to="'/'">
            Home
        </router-link>
        <router-link :to="'contact'">
            Contact
        </router-link>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>