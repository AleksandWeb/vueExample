import Vue from 'vue'
import Router from "vue-router"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/login",
            name: "login",
            meta: {layout: "Empty"},
            component: () => import("./views/login.vue")
        },
        {
            path: "/",
            name: "home",
            meta: {layout: "Main"},
            component: () => import("./views/home.vue")
        }
    ],
})
