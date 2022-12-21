<template>
  <div class="common-layout">
    <div class="sidebar">
      <ul class="list">
        <router-link :to="`/posts?page=${page}&limit=${limit}`"
          ><app-button title="View all posts"
            ><post-icon></post-icon
          ></app-button>
        </router-link>
        <router-link to="/my-posts"
          ><app-button title="View your posts"
            ><person-icon></person-icon
          ></app-button>
        </router-link>
        <router-link to="/create-post"
          ><app-button title="Create new post"
            ><write-icon></write-icon
          ></app-button>
        </router-link>
        <router-link to="/create-user"
          ><app-button title="Create new user"
            ><person-icon></person-icon
          ></app-button>
        </router-link>
      </ul>
    </div>
    <div class="main"><slot></slot></div>
  </div>
</template>

<script>
import { get } from "vuex-pathify";

import AppButton from "../components/app/CommonButton.vue";
import PersonIcon from "../assets/icons/PersonIcon.vue";
import WriteIcon from "../assets/icons/WriteIcon.vue";
import PostIcon from "../assets/icons/PostIcon.vue";

export default {
  components: {
    AppButton,
    PersonIcon,
    WriteIcon,
    PostIcon,
  },

  computed: {
    limit: get("params@limit"),
    page: get("params@currentPage"),
  },
};
</script>

<style scoped lang="scss">
.common-layout {
  display: flex;
  justify-content: space-around;

  > .sidebar {
    width: 30%;
    margin-top: 0;
    margin-right: 40px;
    border: 1px solid #dba39a;
    border-radius: 5px;
    padding: 20px;
    height: fit-content;
  }

  > .sidebar > .list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 20px;
    // background-color: #f0dbdb;
    padding: 0;
    border-radius: 5px;
    margin: 0;
  }

  > .main {
    flex-basis: 70%;
  }
}
</style>
