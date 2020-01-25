<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";

export default {
  name: "app",
  components: {
    HomePage
  }
};
</script>

<style lang="scss">
@import "@/design/index.scss";
</style>
