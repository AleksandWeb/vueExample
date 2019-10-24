<template>
    <div class="productList">
        <p class="emptyProductListInfo" v-if="isEmptyList">Товары отсутствуют</p>
        <div
                class="productItem"
                v-for="product in productList"
                :key="product.id" >
            <div class="product__image-block">
                <img :src="product.image_preview" :alt="product.title">
            </div>
            <div class="product__name">{{product.title}}</div>
            <div class="product__price">Цена: <span class="product__price_red">{{product.price}}</span> руб</div>
            <div
                    class="product__toCart"
                    v-on:click="addToCart(product.id)"
            >В корзину</div>
        </div>
    </div>
</template>

<script>
    export default {

        computed: {
            isEmptyList() {
                return !this.$store.state.products.products.length;
            },
            productList() {
                return this.$store.state.products.products;
            }
        },
        methods: {
            addToCart(id){
                this.$store.dispatch('addToCart', {id});
            }
        }

    }
</script>

<style src="./productList.css">

</style>