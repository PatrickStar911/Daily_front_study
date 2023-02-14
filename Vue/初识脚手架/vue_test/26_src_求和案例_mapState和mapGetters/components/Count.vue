<template>
  <div>
    <div>当前求和为{{ sum }}</div>
    <div>当前求和为放大十倍值{{ bigSum }}</div>
    <div>我在{{ school }},学习{{ subject }}</div>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="oddAdd">当前求和为奇数再加</button>
    <button @click="waitAdd">等等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Count",
  computed: {
    //靠程序员亲自去写计算属性
    // summer() {
    //   return this.$store.state.sum;
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },

    //借助mapState生成计算属性，从state中读取数据。(对象写法)
    // ...mapState({ summer: "sum", school: "school", subject: "subject" }),
    // ...mapGetters({ bigSum: "bigSum" }),

    //借助mapState生成计算属性，从state中读取数据。(数组写法)
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(["bigSum"]),
  },
  data() {
    return {
      n: 1, //用户选择的数据
    };
  },
  methods: {
    increment() {
      this.$store.commit("ADD", this.n);
    },
    decrement() {
      this.$store.commit("DECREMENT", this.n);
    },
    oddAdd() {
      this.$store.dispatch("oddAdd", this.n);
    },
    waitAdd() {
      this.$store.dispatch("waitAdd", this.n);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>