import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
//vueResource插件 用于发送ajax请求
import vueResource from "vue-resource";
//引入路由器
import router from "./router/index";

Vue.use(vueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
