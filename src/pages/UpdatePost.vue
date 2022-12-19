<template>
  <create-post
    page-title="Update Post"
    :initial-content="body"
    :initial-title="title"
  ></create-post>
</template>

<script>
import CreatePost from "./CreatePost.vue";

export default {
  components: {
    CreatePost,
  },
};
</script>
