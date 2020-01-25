<template>
  <footer class="card-footer">
    <button
      class="link card-footer-item cancel-button"
      v-if="isSelectActive"
      @click="unselectUsers"
    >
      <span>{{ textUnSelect }}</span>
    </button>
    <button class="link card-footer-item" v-else @click="selectUsers">
      <span>{{ textSelect }}</span>
    </button>
  </footer>
</template>

<script>
export default {
  name: "SelectUserFooter",
  props: {
    textSelect: {
      type: String,
      default: ""
    },
    textUnSelect: {
      type: String,
      default: "Cancel"
    },
    isSelectActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    unselectUsers() {
      this.$emit("unselectUsers");
    },
    selectUsers() {
      this.$emit("selectUsers");
    }
  }
};
</script>
