<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学生地址：{{ adress }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
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
};
</script>

<style>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>