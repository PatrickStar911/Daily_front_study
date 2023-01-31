//创建vue实例vm 只负责跟App对话
import App from "./App.vue";

new Vue({
  el: "#root",
  template: "<App></App>",
  components: { App },
});
