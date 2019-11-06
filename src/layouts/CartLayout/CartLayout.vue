<template>
    <div class="mainLayout">
        <div class="header-place"></div>
        <header class="header">
            <p>{{date | date("datetime")}}</p>
            <TopMenu />
        </header>
        <div class="pageContent">
            <div class="content">
                <component :is="viewName"></component>
            </div>
        </div>
        <footer class="footer">
            <span class="copyrite">© Тестовое задание - часть 2</span>
        </footer>
    </div>
</template>

<script>
    import TopMenu from "../../components/app/TopMenu/TopMenu";

    import apiCart from "../../views/apiCart/apiCart";
    import preloader from "../../views/preloader/preloader";
    export default {
        name: "CartLayout",
        data: () => ({
            date: new Date(),
            dateInterval: null,
        }),
        computed: {
            viewName() {
                let view = this.$store.state.views.views.find((view) => view.active);
                return typeof view !== "undefined" ? view.name : "preloader";
            }
        },
        components: {
            TopMenu, apiCart, preloader
        },
        mounted() {
            this.dateInterval = setInterval(() => {
                this.date = new Date();
            }, 1000);
        },
        beforeDestroy() {
            clearInterval(this.dateInterval);
        }

    }
</script>

<style src="../MainLayout/MainLayout.css" >

</style>