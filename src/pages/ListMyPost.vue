<template>
  <div class="list-posts">
    <h1 v-if="!posts?.length">You have no post</h1>
    <div v-else class="list">
      <h1>Your post</h1>
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :show-body="true"
        :on-click="updatePost(post.id)"
      >
        <app-button
          class="deletebtn"
          :on-click="deletePost(post.id)"
          title="Delete"
        ></app-button>
      </post-item>
    </div>
  </div>
</template>

<script>
import { get, dispatch } from "vuex-pathify";

import PostItem from "../components/PostItem.vue";
import AppButton from "../components/app/CommonButton.vue";

export default {
  components: {
    PostItem,
    AppButton,
  },

  computed: {
    posts: get("myPosts"),
  },

  methods: {
    updatePost(id) {
      return () => {
        this.$router.push(`/update-post/${id}`);
      };
    },

    deletePost(id) {
      return () => {
        dispatch("DELETE_POST", id);
      };
    },
  },
};
</script>

<style scoped lang="scss">
.list-posts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f0dbdb;
  padding: 10px;
  border-radius: 5px;

  > .link {
    width: 100%;
  }

  > .link > .app-button {
    margin-bottom: 10px;
  }

  > .loading {
    font-size: 28px;
  }

  > .list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  > .app-pagination {
    margin-top: 20px;
  }
}

.deletebtn {
  width: 100px;
  height: 30px;
  font-size: 14px;
}
</style>
