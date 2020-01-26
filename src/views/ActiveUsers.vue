<template>
  <UserTable
    :title="title"
    :textSelect="textSelect"
    :shouldHighlight="shouldHighlight"
  />
</template>

<script>
import UserTable from "../components/UserTable";
export default {
  name: "ActiveUsers",
  data() {
    return {
      title: "Find active users",
      textSelect: "Select Active Users"
    };
  },
  components: {
    UserTable
  },
  methods: {
    shouldHighlight(user, highlightUsers) {
      if (!highlightUsers) return "";
      return user.login_count > 0 ? "is-valid" : "";
    }
  }
};
</script>
