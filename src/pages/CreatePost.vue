<template>
  <div class="create-post">
    <h1>{{ pageTitle }}</h1>
    <app-input
      :value="title"
      placeholder="Post title"
      name="title"
      label="Title"
      @input="handleTitleChange"
    />
    <app-input
      :value="content"
      placeholder="Post body"
      name="body"
      label="Content"
      @input="handleBodyChange"
    />

    <app-button type="button" :on-click="createPost" :title="buttonTitle" />
    <p v-if="error" class="error">Title and body are both required</p>
  </div>
</template>

<script>
import { dispatch } from "vuex-pathify";

import AppButton from "../components/app/CommonButton.vue";
import AppInput from "../components/app/CommonInput.vue";

export default {
  components: {
    AppButton,
    AppInput,
  },

  props: {
    post: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      title: this.post.title,
      content: this.post.body,
      error: false,
    };
  },

  computed: {
    pageTitle() {
      console.log(this.post.id);
      return !this.post.id ? "Create post" : "Update post";
    },
    buttonTitle() {
      return !this.post.id ? "Create" : "Update";
    },
  },

  methods: {
    checkDataValidate() {
      if (!this.title || !this.content) {
        this.error = true;
        return false;
      }
      return true;
    },

    createPost() {
      if (this.checkDataValidate()) {
        this.error = false;
        dispatch("ADD_POST", {
          id: this.post.id,
          title: this.title,
          body: this.content,
        });
        this.$router.push("/my-posts");
      }
    },

    handleTitleChange(e) {
      this.title = e;
    },
    handleBodyChange(e) {
      this.content = e;
    },
  },

  watch: {
    title() {
      this.error = false;
    },
    content() {
      this.error = false;
    },
  },
};
</script>

<style scoped lang="scss">
.create-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fefcf3;
  border-radius: 5px;

  > .error {
    color: red;
  }
}
</style>
