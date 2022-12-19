<template>
  <div class="list-posts">
    <p v-if="posts.length === 0" class="loading">Loading posts...</p>
    <div v-else class="list">
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :on-click="goToPostDetail(post.id)"
      ></post-item>
    </div>
    <app-pagination :total="total" :set-page="setPage"></app-pagination>
  </div>
</template>

<script>
import { get, dispatch } from "vuex-pathify";
import AppPagination from "../components/app/CommonPagination.vue";
import PostItem from "../components/PostItem.vue";

export default {
  components: {
    AppPagination,
    PostItem,
  },

  computed: {
    posts: get("posts"),
    limit: get("params@limit"),
    currentPage: get("params@currentPage"),
    total: get("params@total"),
  },

  methods: {
    goToPostDetail(postId) {
      return () => {
        this.$router.push(`posts/${postId}`);
      };
    },

    setPage(newPage) {
      dispatch("SET_PAGE", newPage);
    },
  },

  watch: {
    currentPage() {
      dispatch("SET_INITIAL_STATE");
      this.$router.push(`posts?page=${this.currentPage}&limit=${this.limit}`);
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
