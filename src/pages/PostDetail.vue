<template>
  <div>
    <p v-if="!post || !user">Loading...</p>
    <div v-else class="post-detail">
      <h2 class="title">{{ post.title }}</h2>
      <h4 class="author">Author: {{ user.name }}</h4>
      <p class="content">{{ post.body }}</p>
      <div class="groupbtn">
        <router-link class="link" :to="`/posts/${previousPostId}`"
          ><app-button title="Previous"></app-button
        ></router-link>
        <router-link class="link" :to="`/posts/${nextPostId}`"
          ><app-button title="Next"></app-button
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../components/app/CommonButton.vue";

import { get } from "vuex-pathify";

import { kyApi } from "../config/api";

export default {
  components: {
    AppButton,
  },

  data() {
    return {
      post: {},
      user: {},
    };
  },

  computed: {
    total: get("params@total"),
    nextPostId() {
      return this.post.id < this.total ? this.post.id + 1 : this.post.id;
    },
    previousPostId() {
      return this.post.id > 1 ? this.post.id - 1 : this.post.id;
    },
  },

  methods: {
    async handleGetPost() {
      try {
        const { postId } = this.$route.params;
        const resPost = await kyApi.get(`posts/${postId}`).json();
        const resUser = await kyApi.get(`users/${resPost.userId}`).json();
        this.post = resPost;
        this.user = resUser;
      } catch (e) {
        console.log(e);
      }
    },
  },

  beforeMount() {
    this.handleGetPost();
  },
};
</script>

<style scoped lang="scss">
.post-detail {
  background: #fefcf3;
  border-radius: 5px;
  padding: 20px;
  text-align: left;

  > .title {
    background-color: #f0dbdb;
    padding: 10px;
    border-radius: 5px;
  }

  > .author {
    margin: 10px 0 20px;
    text-decoration: underline;
    cursor: pointer;
  }

  > .groupbtn {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  > .groupbtn > .link > .app-button {
    width: 120px;
    padding: 5px 10px;
    outline: none;
    font-size: 16px;
    height: 40px;
  }
}
</style>
