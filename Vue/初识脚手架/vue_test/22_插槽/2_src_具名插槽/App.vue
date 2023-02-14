<template>
  <div class="container">
    <Category title="美食">
      <img
        src="https://img2.baidu.com/it/u=849995377,520435495&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
        alt=""
        slot="center"
      />
      <a href="" slot="footer">更多美食</a>
    </Category>
    <Category title="游戏" :listData="games">
      <ul v-for="(item, index) in games" :key="index" slot="center">
        <li>{{ item }}</li>
      </ul>
      <div class="gameGroup" slot="footer">
        <a href="">单机游戏</a>
        <a href="">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        slot="center"
      ></video>
      <!-- slot新写法，用于写在template内 -->
      <template v-slot:footer>
        <div class="filmGroup">
          <a href="">热门</a>
          <a href="">经典</a>
          <a href="">推荐</a>
        </div>
        <h4 slot="footer">欢迎前来观影</h4>
      </template>
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
.container .gameGroup,
.filmGroup {
  display: flex;
  justify-content: space-evenly;
}
.filmGroup + h4 {
  text-align: center;
}
</style>
