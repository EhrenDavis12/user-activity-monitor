<template>
  <div id="app">
    <div class="main-section columns">
      <NavBar />
      <main class="column">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "@/design/index.scss";
</style>
