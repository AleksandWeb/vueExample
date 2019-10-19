<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout"
import MainLayout from "./layouts/MainLayout"

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "Main") + "Layout"
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<style>

</style>
