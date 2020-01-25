<template>
  <div id="app">
    <NonActiveUsers />
  </div>
</template>

<script>
import NonActiveUsers from "./components/NonActiveUsers.vue";

export default {
  name: "app",
  components: {
    NonActiveUsers
  }
};
</script>

<style lang="scss">
@import "@/design/index.scss";
</style>
