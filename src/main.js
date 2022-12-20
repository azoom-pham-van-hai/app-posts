import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { store } from "./store";
import { router } from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
  store,
  beforeMount() {
    const { page, limit } = this.$route.query;
    this.$store.dispatch("SET_PAGE", page);
    this.$store.dispatch("SET_LIMIT", limit);
    this.$store.dispatch("SET_INITIAL_STATE", { page, limit });
  },
}).$mount("#app");
