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

    <app-button type="button" :on-click="createPost" title="Create" />
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
    initialTitle: {
      type: String,
      default: "",
    },
    initialContent: {
      type: String,
      default: "",
    },
    pageTitle: {
      type: String,
      default: "Create Post",
    },
  },
  data() {
    return {
      title: this.initialTitle,
      content: this.initialContent,
      error: false,
    };
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
        dispatch("ADD_POST", { title: this.title, body: this.content });
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
