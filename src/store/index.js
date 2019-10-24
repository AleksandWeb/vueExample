import Vue from 'vue'
import Vuex from 'vuex'
import views from "./views"
import topMenu from "./topMenu"
import categories from "./categories"
import products from "./products"
import cart from "./cart"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        views, topMenu, categories, products, cart
    }
})