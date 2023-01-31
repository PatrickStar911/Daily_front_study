<template>
  <div>
    <img src="./assets/logo.png" alt="">
    <SchoolComponent></SchoolComponent>
    <StudentComponent></StudentComponent>
  </div>
</template>

<script>
    //引入组件
    import SchoolComponent from './components/School.vue';
    import StudentComponent from './components/Student.vue';
    
    export default {
        name: "App",
        components:{SchoolComponent,StudentComponent}
    }
</script>

<style>

</style>