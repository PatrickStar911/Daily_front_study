<template>
  <div class="app">
    <h2>{{ msg }}，学生姓名是;{{ studentName }}</h2>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 这里的v-on:可以换成@ -->
    <!-- <Student v-on:atguigu="getStudentName" /> -->
    <!-- <Student @atguigu="getStudentName" @demo="m1" /> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
    <!-- 加了.native vue就不会认为click是自定义事件了 而是按默认事件来执行 -->
    <Student ref="student" @click.native="show" />

    <hr />
    <!-- 通过父组件给子组件传递函数类型的props实现子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
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
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名：", name);
    },
    /*     getStudentName(name, ...params) {
      //这里如果Student传递过来多个参数，可以用...params接收，接受的params是一个数组
      this.studentName = name;
      console.log("App收到了学生名：", name, params);
    }, */
    m1() {
      console.log("demo事件被触发了！");
    },
    show() {
      alert("hello");
    },
  },
  mounted() {
    //通过this.$refs的方式拿到student的实例对象，给它绑定自定义事件 当atguigu被触发的时候，调用这个回调函数
    // this.$refs.student.$on("atguigu", this.getStudentName);
    this.$refs.student.$on("atguigu", function (name, ...params) {
      console.log("App收到了学生名：", name, params);
      console.log(this); //这里的this指向的是student实例对象 可以将上面的普通函数改为箭头函数
      this.studentName = name;
    });
    // 只触发一次
    // this.$refs.student.$once("atguigu", this.getStudentName);
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
