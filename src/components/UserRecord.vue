<template>
  <a class="list-item" :class="className">
    <span>{{ user.username }}</span>
  </a>
</template>

<script>
export default {
  name: "UserRecord",
  props: {
    user: {
      type: Object,
      default: () => {}
    },
    className: {
      type: String,
      default: ""
    }
  }
};
</script>
