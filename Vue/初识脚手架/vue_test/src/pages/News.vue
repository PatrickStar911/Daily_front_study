<template>
  <div>
    <ul>
      <li :style="{ opacity }">news001</li>
      <input type="text" name="" id="" />
      <li>news002</li>
      <input type="text" name="" id="" />
      <li>news003</li>
      <input type="text" name="" id="" />
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  //   mounted() {
  //     setInterval(() => {
  //       this.opacity -= 0.01;
  //       if (this.opacity <= 0) this.opacity = 1;
  //     }, 16);
  //   },
  activated() {
    console.log("News组件被激活");
    this.timmer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("News组件失活了");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>