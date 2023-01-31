<template>
  <!-- 组件的结构 -->
  <div class="demo">
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

<style scoped>
/* style加了 scoped标识符表示作用域，该样式只用在该文件，不会引起冲突 */
.demo {
  background-color: #008c8c;
}
</style>

<style lang="">
/* 这个lang的写法里面可以写less 或css 或scss */
/* 需要按照less-loader插件 安装时报错是因为版本不兼容 可以使用npm view xxx versions查看版本号 */
</style>