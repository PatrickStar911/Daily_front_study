<template>
  <!-- 组件的结构 -->
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学生地址：{{ adress }}</h2>
    <h2>{{ x }}</h2>
  </div>
</template>

<script>
//引入一个混合(mixin)
//mixin还可以写到main.js文件中，设置全局引入
// import { mixin, mixin2 } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "尚硅谷",
      adress: "北京",
      x: 666, //data中有x，minxin中也有的话 以data中的x为主
    };
  },
  // mixins: [mixin, mixin2], //并集，混合用
};
</script>
