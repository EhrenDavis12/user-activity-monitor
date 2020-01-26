<template>
  <a class="list-item" :class="className" @click="selectUser">
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
  },
  methods: {
    selectUser() {
      this.$emit("selectUser", this.user);
    }
  }
};
</script>
