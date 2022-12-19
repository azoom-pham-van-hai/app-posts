<template>
  <div class="post-item" @click="onClick">
    <strong>{{ post.id }}. </strong>{{ post.title }}
    <p v-if="showBody">{{ post.body }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    showBody: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.post-item {
  background: #fefcf3;
  box-shadow: 0 0 2px #dba39a;
  border-radius: 5px;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  user-select: none;
}
</style>
