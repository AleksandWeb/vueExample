<template>
    <div class="cart">
        <h1>Корзина</h1>
        <component :is="cartComponent" />
    </div>
</template>

<script>
    import productList from "./productList";
    import preloader from "../preloader/preloader";

    export default {
        computed: {
            cartComponent() {
                return this.$store.state.cart.component;
            },
        },
        mounted: function() {
            this.$store.dispatch('getCartProducts');
        },
        components: {
            productList, preloader
        },
    }

</script>