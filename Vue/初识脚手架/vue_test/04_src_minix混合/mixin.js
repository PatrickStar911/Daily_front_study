export const mixin = {
  methods: {
    showName() {
      alert(this.name);
    },
  },
  //混合中可以写任何new Vue中的属性
  mounted() {
    console.log("你好！");
  },
}
export const mixin2 = {
  data() {
    return {
      x: 100,
      y: 200
    }
  }
}