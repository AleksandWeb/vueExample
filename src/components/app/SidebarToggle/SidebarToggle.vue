<template>
    <div class="flex-inner">
        <div class="sidebar-toggle" v-on:click="$emit('toggleSidebar')" :class="{sidebarToggle_close: value}">
            <span class="sidebar-toggle__inner"></span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["value"],
    }
</script>
<style src="./SidebarToggle.css"></style>