<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>

import MainLayout from "./layouts/MainLayout/MainLayout"
import CartLayout from "./layouts/CartLayout/CartLayout"

export default {
  computed: {
    layout() {
      return this.$store.state.topMenu.layout;
    }
  },
  components: {
    MainLayout, CartLayout
  }
}
</script>

<style>

</style>
