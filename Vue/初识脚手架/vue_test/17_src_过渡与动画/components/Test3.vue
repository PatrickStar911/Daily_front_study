<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear属性设置为true后，默认一开始就播放动画 -->
    <transition
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__fadeInDownBig"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" key="1">你好啊Test3！</h1>
    </transition>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: skyblue;
}
</style>