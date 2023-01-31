<template>
  <!-- 组件的结构 -->
  <div>
    <h1>无敌战神---{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ Number(myAge) + 1 }}</h2>
    <button @click="changeAge">点我修改年龄</button>
  </div>
</template>

<script>
//组件交互相关的代码(数据、方法等等)
export default {
  name: "Student",
  data() {
    console.log(this);
    return {
      msg: "就是派大星啊",
      myAge: this.age,
    };
  },
  methods: {
    changeAge() {
      this.myAge++;
    },
  },
  // props: ["name", "sex", "age"],
  props: {
    name: {
      type: String, //name的类型是字符串
      required: true, //name是必要的
    },
    age: {
      type: Number,
      default: 99, //默认值
    },
    sex: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.school {
  background-color: aquamarine;
}
</style>
