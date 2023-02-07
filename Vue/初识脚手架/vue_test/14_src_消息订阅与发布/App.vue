<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <School />
    <Student />
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

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
