<template>
  <div class="container">
    <Category title="美食">
      <img
        src="https://img2.baidu.com/it/u=849995377,520435495&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
        alt=""
      />
    </Category>
    <Category title="游戏" :listData="games">
      <ul v-for="(item, index) in games" :key="index">
        <li>{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["CF", "英雄联盟", "王者荣耀", "绝地求生"],
      films: ["教父", "《拆弹专家》", "《你好！李焕英》", "流浪地球"],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
