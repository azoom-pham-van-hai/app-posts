<template>
  <button class="app-button" @click="onClick" :type="buttonType">
    <slot></slot>
    <p>{{ title }}</p>
  </button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      default: "button",
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.app-button {
  background-color: #dba39a;
  border-radius: 5px;
  width: 100%;
  color: #fff;
  height: 50px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  > .svg-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
}
</style>
