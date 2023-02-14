import Vue from "vue";
import App from "./App.vue";
//vueResource插件 用于发送ajax请求
import vueResource from "vue-resource";

Vue.use(vueResource);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
});
