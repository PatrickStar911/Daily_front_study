<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学生地址：{{ adress }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  props: ["getSchoolName"],
  data() {
    return {
      name: "尚硅谷",
      adress: "北京",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
  mounted() {
    this.helloId = pubsub.subscribe("hello", (msgName, data) => {
      console.log(this);
      console.log("有人发布了hello消息，hello消息的回调执行了", data);
    });
  },
  beforeDestroy() {
    //必须要通过id的方式才能取消订阅 类似于定时器id
    pubsub.unsubscribe(this.helloId);
  },
};
</script>

<style>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>