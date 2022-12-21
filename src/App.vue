<template>
  <div id="app">
    <common-layout>
      <router-view :key="$route.path"></router-view>
    </common-layout>
  </div>
</template>

<script>
import CommonLayout from "./layout/CommonLayout.vue";

export default {
  name: "App",
  components: {
    CommonLayout,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 60px 10% 20px;
  background-color: #2c3e50;
  min-height: 100vh;
}

body {
  margin: 0;
}

a {
  text-decoration: none;
}

.svg-icon {
  height: 36px;
  width: 36px;
  > path {
    fill: #fff;
  }
}
</style>
