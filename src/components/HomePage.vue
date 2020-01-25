<template>
  <div class="content-container">
    <NonActiveUsers />
  </div>
</template>

<script>
import NonActiveUsers from "./NonActiveUsers";
export default {
  name: "HomePage",
  components: {
    NonActiveUsers
  }
};
</script>
