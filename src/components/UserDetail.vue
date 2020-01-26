<template>
  <div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ clonedUser.username }}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="field">
            <label class="label" for="id">id</label>
            <label class="input" name="id" readonly>{{ clonedUser.id }}</label>
          </div>
          <div class="field">
            <label class="label" for="firstName">name</label>
            <input
              class="input"
              name="username"
              v-model="clonedUser.username"
            />
          </div>
          <div class="field">
            <label class="label" for="loginCount">login count</label>
            <label class="input" name="loginCount" readonly>{{
              clonedUser.login_count
            }}</label>
          </div>
          <div class="field">
            <label class="label" for="lastLogin">last login</label>
            <label class="input" name="lastLogin" readonly>{{
              clonedUser.last_login
            }}</label>
          </div>
          <div class="field">
            <label class="label" for="projectCount">project count</label>
            <label class="input" name="projectCount" readonly>{{
              clonedUser.project_count
            }}</label>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <button
          class="link card-footer-item cancel-button"
          @click="cancelUser()"
        >
          <span>Cancel</span>
        </button>
        <button class="link card-footer-item" @click="saveUser()">
          <span>Save</span>
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";

// import { displayDateFormat } from "../shared";

export default {
  name: "UserDetail",
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      clonedUser: { ...this.user }
    };
  },
  methods: {
    cancelUser() {
      this.$emit("cancel");
    },
    saveUser() {
      this.$emit("save", this.clonedUser);
    }
  },
  filters: {
    shortDate: function(value) {
      return format(value, "MM/dd/yyyy");
    }
  }
};
</script>
