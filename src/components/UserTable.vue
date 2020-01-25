<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">{{ title }}</h2>
      <div class="columns">
        <div class="column is-4">
          <div class="card" v-show="users.length">
            <header class="card-header">
              <p class="card-header-title">User list</p>
            </header>
            <ul class="list is-hoverable">
              <li v-for="user in users" :key="user.id">
                <UserRecord
                  :user="user"
                  :className="shouldHighlight(user, highlightUsers)"
                />
              </li>
            </ul>
            <SelectUserFooter
              :textSelect="textSelect"
              :isSelectActive="highlightUsers"
              @selectUsers="selectUsers"
              @unselectUsers="unselectUsers"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from "../shared";
import UserRecord from "./UserRecord";
import SelectUserFooter from "./SelectUserFooter";
export default {
  name: "UserTable",
  props: {
    title: {
      type: String,
      default: ""
    },
    textSelect: {
      type: String,
      default: ""
    },
    shouldHighlight: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      users: [],
      highlightUsers: false
    };
  },
  components: {
    UserRecord,
    SelectUserFooter
  },
  async created() {
    await this.loadHeroes();
  },
  methods: {
    async loadHeroes() {
      this.users = [];
      this.message = "getting the user, please be patient";

      this.users = await data.getUsers();

      this.message = "";
    },
    selectUsers() {
      this.highlightUsers = true;
    },
    unselectUsers() {
      this.highlightUsers = false;
    }
  }
};
</script>
