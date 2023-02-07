<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear属性设置为true后，默认一开始就播放动画 -->
    <transition :appear="true">
      <h1 v-show="isShow" class="go">你好啊！</h1>
    </transition>
    <!-- 如果给transition加了name="xxx" 下面的样式就不能用v-enter-acitve了 必须使用 xxx-enter-active -->
    <!-- <transition name="hello">
      <h1 v-show="isShow" class="go">你好啊！</h1>
    </transition> -->
  </div>
</template>

<script>
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
.v-enter-active {
  animation: atguigu 1s linear;
}
.v-leave-active {
  animation: atguigu 1s reverse;
}
@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>