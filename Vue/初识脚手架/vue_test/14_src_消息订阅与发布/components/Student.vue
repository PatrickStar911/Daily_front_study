<template>
  <!-- 组件的结构 -->
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: "派大星",
      sex: "男",
    };
  },
  mounted() {
    console.log("student", window.x);
  },
  methods: {
    sendStudentName() {
      pubsub.publish("hello", 666);
    },
  },
};
</script>

<style scoped>
/* style加了 scoped标识符表示作用域，该样式只用在该文件，不会引起冲突 */
.student {
  background-color: #008c8c;
  padding: 5px;
  margin-top: 30px;
}
</style>
