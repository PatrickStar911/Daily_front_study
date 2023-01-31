<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "派大星",
      sex: "男",
    };
  },
};
</script>
