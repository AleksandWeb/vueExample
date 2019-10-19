<template>
    <ul>
        <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            exact
        >
            <a href="/login">{{link.name}}</a>
        </router-link>
    </ul>
</template>

<script>
    export default {
        data: () => ({
            links: [
                {name: "Авторизация", url: "/login"},
                {name: "Главная", url: "/"},
            ]
        })
    }
</script>
