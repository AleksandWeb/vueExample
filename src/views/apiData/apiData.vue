<template>
    <div>
        <h1>Вывод данных категории</h1>
        <div v-if="requestUrl" class="requestTo">
            <span>Request to:</span> <input class="requestTo__input" type="text" readonly v-model="requestUrl">
        </div>
        <component :is="componentName"></component>
    </div>
</template>
<script>

import fetchResult from "./fetchResult"
import info from "./info"
import preloader from "../preloader/preloader"
export default {
    computed: {
        requestUrl() {
            if(this.$store.state.categories.activeItem.ident.length) {
                return this.$store.state.categories.apiUrl + this.$store.state.categories.activeItem.ident;
            }
            return false;
        },
        componentName() {
            return this.$store.state.categories.component;
        },
    },
    components: {
        fetchResult, info, preloader
    },
}
</script>
<style src="./apiData.css"></style>