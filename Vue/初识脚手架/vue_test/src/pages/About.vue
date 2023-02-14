<template>
  <h2>我是About组件</h2>
</template>

<script>
export default {
  name: "About",

  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("About---beforeRouteEnter");
    next();
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("About---beforeRouteLeave", to, from);
    next();
  },
};
</script>

<style>
</style>