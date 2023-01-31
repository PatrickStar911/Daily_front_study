<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学生地址：{{ adress }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "尚硅谷",
      adress: "北京",
    };
  },
};
</script>
