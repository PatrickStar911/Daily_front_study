import Vue from "vue";
import App from "./App.vue";
//vueResource插件 用于发送ajax请求
import vueResource from "vue-resource";
//引入store
import store from "./store/index";

Vue.use(vueResource);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  mounted() {
    console.log("App", this);
  },
});
