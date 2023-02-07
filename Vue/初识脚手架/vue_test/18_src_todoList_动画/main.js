import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    console.log(this);
    Vue.prototype.$bus = this;
  },
});
