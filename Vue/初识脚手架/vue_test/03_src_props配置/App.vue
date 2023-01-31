<template>
  <div>
    <Student name="李四" sex="男" />
    <hr />
    <Student name="王五" sex="男" age="24" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { Student },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
};
</script>

<style></style>
