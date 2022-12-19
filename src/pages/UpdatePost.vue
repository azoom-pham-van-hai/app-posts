<template>
  <create-post page-title="Update Post" :post="post"></create-post>
</template>

<script>
import { get } from "vuex-pathify";

import CreatePost from "./CreatePost.vue";

export default {
  components: {
    CreatePost,
  },

  data() {
    return {
      post: {},
    };
  },

  beforeMount() {
    const { postId } = this.$route.params;
    const post = get("getMyPostById").call(this)(Number(postId));
    this.post = post;
  },
};
</script>
