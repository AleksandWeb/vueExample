<template>
    <div>
        <h1>{{h1}}</h1>
        <h2>{{categoryName}}</h2>
        <component :is="componentName" />
    </div>

</template>

<script>
    import productList from "./productList";
    import preloader from "../preloader/preloader";
    export default {
        data: () => ({
            h1: "Список товаров"
        }),

        computed: {
            categoryName () {
                return this.$store.state.categories.activeItem.name;
            },
            componentName() {
                if(this.$store.state.categories.component === "preloader") {
                    return "preloader";
                }
                return "productList";
            }
        },

        components: {
            productList, preloader
        },

    }

</script>

<style src="./apiProducts.css" >

</style>