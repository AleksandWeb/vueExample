<template>
    <div class="cartProducts">
        <div
                class="cartProduct"
                v-for="product in cartProducts"
                :key="product.id"
        >
            <div class="cartProduct__name">
                {{product.product.title}}
            </div>
            <div class="cartProduct__info">
                <div class="cartProduct__infoItem">
                    <p class="cartProduct__infoItemName">Количество:</p>
                    <p class="cartProduct__infoItemValue">
                        <span class="val">{{product.amount}}</span> шт.
                    </p>
                </div>
                <div class="cartProduct__infoItem">
                    <p class="cartProduct__infoItemName">Цена:</p>
                    <p class="cartProduct__infoItemValue">
                        <span class="val">{{product.price}}</span> руб.
                    </p>
                </div>
                <div class="cartProduct__infoItem">
                    <p class="cartProduct__infoItemName">Итого:</p>
                    <p class="cartProduct__infoItemValue">
                        <span class="val">{{product.total}}</span> руб.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            cartProducts() {
                return this.$store.state.cart.products;
            }
        },
    }
</script>

<style src="./productList.css"></style>