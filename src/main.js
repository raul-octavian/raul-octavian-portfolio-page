import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSmoothScroll from "vue2-smooth-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;
Vue.use(VueSmoothScroll, {
  duration: 500,
  updateHistory: true,
  offset: -150
});

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
