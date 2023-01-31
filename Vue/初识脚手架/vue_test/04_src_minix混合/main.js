import Vue from "vue";
import App from "./App.vue";
import {mixin,mixin2} from './mixin';
//配置如下代码 可让所有的vc和vm都使用混合
Vue.mixin(mixin)
Vue.mixin(mixin2)

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
});
