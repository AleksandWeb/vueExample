<template>
    <div class="mainLayout">
        <div class="header-place"></div>
        <header class="header">
            <SidebarToggle v-model="isOpen" v-on:toggleSidebar="isOpen = !isOpen" />
            <TopMenu />
        </header>
        <div class="pageContent">
            <div class="sidebarPlace" :class="{sidebarPlace_hidden: !isOpen}"></div>
            <Sidebar v-model="isOpen" />
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
    import Sidebar from "../../components/app/Sidebar/Sidebar";
    import SidebarToggle from "../../components/app/SidebarToggle/SidebarToggle";

    import apiData from "../../views/apiData/apiData";
    import apiProducts from "../../views/apiProducts/apiProducts";
    import apiCart from "../../views/apiCart/apiCart";
    import preloader from "../../views/preloader/preloader";
    export default {
        name: "MainLayout",
        data: function () {
            return {
                items: [],
                isOpen: true,
            }
        },
        computed: {
            viewName() {
                let view = this.$store.state.views.views.find((view) => view.active);
                return typeof view !== "undefined" ? view.name : "preloader";
            }
        },
        components: {
            TopMenu, Sidebar, SidebarToggle, apiData, apiProducts, apiCart, preloader
        }

    }

</script>
<style src="./MainLayout.css" >

</style>