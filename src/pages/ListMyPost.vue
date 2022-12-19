<template>
  <div class="list-posts">
    <h1 v-if="!posts?.length">You have no post</h1>
    <div v-else class="list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :show-body="true"
        :on-click="updatePost(post.id)"
      ></post-item>
    </div>
  </div>
</template>

<script>
import { get } from "vuex-pathify";
import PostItem from "../components/PostItem.vue";

export default {
  components: {
    PostItem,
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
</style>
