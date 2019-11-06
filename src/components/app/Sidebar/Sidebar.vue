<template>
    <div class="sidebar" :class="{sidebar_hidden: !value}">
        <div class="categories-list">
            <CategoriesList />
        </div>
    </div>
</template>

<script>
    import CategoriesList from "./CategoriesList/CategoriesList"
    export default {
        props: ["value"],
        components: {
            CategoriesList
        },

    }
</script>

<style src="./sidebar.css">

</style>