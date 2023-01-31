<template>
  <div>
    <!-- 添加了ref标签 可以获得该元素的真实DOM节点 -->
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDom">点我显示上方的DOM元素</button>
    <!-- 如果给组件加上ref标签 则this.$refs.sch获取的是该组件的实例对象vc -->
    <School ref="sch" />
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {
    showDom() {
      console.log(this.$refs); //refs对象
      console.log(this.$refs.title); //真实DOM元素
      console.log(this.$refs.sch); //School组件的实例对象
    },
  },
};
</script>

<style></style>
