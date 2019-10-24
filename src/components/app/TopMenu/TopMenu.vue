<template>
    <div class="nav">
        <span class="nav__item"
              v-for="item in items"
              :key="item.id"
              :class="{active: item.active}"
              v-on:click="setActive(item)"
        >{{item.name}}</span>
    </div>
</template>

<script>
    export default {
        computed: {
            items() {
                return this.$store.state.topMenu.items
            }
        },
        methods: {
            setActive(item) {
                this.$store.dispatch('topMenuClick', {item: item});
            }
        },
        mounted: function() {
            this.items.forEach((dataItem) => {
                if(dataItem.active) {
                    this.$store.dispatch('setView', {viewId: dataItem.viewId});
                }
            });
        }
    }
</script>
<style src="./TopMenu.css"></style>