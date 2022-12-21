import Vue from "vue";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";

import App from "./App.vue";
import { store } from "./store";
import { router } from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
  render: (h) => h(App),
  router,
  store,
  beforeMount() {
    const { page, limit } = this.$route.query;
    this.$store.dispatch("SET_PAGE", page ?? 1);
    this.$store.dispatch("SET_LIMIT", limit ?? 10);
    this.$store.dispatch("SET_INITIAL_STATE", { page, limit });
  },
  validations: {},
}).$mount("#app");
