<template>
    <div class="mainLayout">
        <TopMenu />

        <router-view />
    </div>
</template>

<script>
    import TopMenu from "./../components/app/TopMenu"

    export default {
        name: "MainLayout",
        components: {
            TopMenu
        }
    }

</script>