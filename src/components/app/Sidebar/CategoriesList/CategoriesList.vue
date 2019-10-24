<template>
    <div class="categories-list">
        <span class="categories-list__item"
              v-for="item in items"
              :key="item.ident"
              :class="{active: item.active}"
              v-on:click="setCategory(item.ident)"
        >{{item.name}}</span>
    </div>
</template>

<script>
    export default {
        computed: {
            items() {
                return this.$store.state.categories.items;
            }
        },
        methods: {
            setCategory(ident) {
                this.$store.dispatch('setCategory', {ident: ident});
            }
        },
    }
</script>

<style src="./CategoriesList.css">

</style>