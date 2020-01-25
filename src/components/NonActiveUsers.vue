<template>
  <UserTable
    :title="title"
    :textSelect="textSelect"
    :shouldHighlight="shouldHighlight"
  />
</template>

<script>
import UserTable from "./UserTable";
export default {
  name: "NonActiveUsers",
  data() {
    return {
      title: "Find non active users",
      textSelect: "Select Non Active Users"
    };
  },
  components: {
    UserTable
  },
  methods: {
    shouldHighlight(user, highlightUsers) {
      if (!highlightUsers) return "";
      return user.login_count === 0 ? "is-invalid" : "";
    }
  }
};
</script>
