<template>
  <!-- 组件的结构 -->
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
//引入一个混合(mixin)
// import { mixin } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "派大星",
      sex: "男",
    };
  },
  // mixins: [mixin],
  // mounted() {
  //   console.log("你好啊！！！"); //此处mouted后于mixin中的mouted打印
  // },
};
</script>
