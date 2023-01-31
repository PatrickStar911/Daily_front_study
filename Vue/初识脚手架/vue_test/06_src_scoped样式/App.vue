<template>
  <div>
    <Student />
    <hr />
    <School />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
};
</script>

<style></style>
