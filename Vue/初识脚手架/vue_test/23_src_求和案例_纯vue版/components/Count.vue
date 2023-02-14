<template>
  <div>
    <div>当前求和为{{ sum }}</div>
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
export default {
  name: "Count",
  data() {
    return {
      sum: 0, //当前的和
      n: 1, //用户选择的数据
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    oddAdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    waitAdd() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>