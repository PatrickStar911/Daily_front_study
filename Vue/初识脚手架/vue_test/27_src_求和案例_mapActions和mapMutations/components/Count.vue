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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  computed: {
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
    // increment() {
    //   this.$store.commit("ADD", this.n);
    // },
    // decrement() {
    //   this.$store.commit("DECREMENT", this.n);
    // },
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    ...mapMutations({ increment: "ADD", decrement: "DECREMENT" }),

    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
    // ...mapMutations(["ADD", "DECREMENT"]),

    /* ************************************************ */
    /* 程序员亲自写的方法 */
    // oddAdd() {
    //   this.$store.dispatch("oddAdd", this.n);
    // },
    // waitAdd() {
    //   this.$store.dispatch("waitAdd", this.n);
    // },
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
    ...mapActions({ incrementOdd: "oddAdd", incrementWait: "waitAdd" }),

    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
    // ...mapActions(["oddAdd",  "waitAdd" ]),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>