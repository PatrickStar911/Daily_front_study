<template>
  <div class="container">
    <Category title="游戏">
      <template scope="data">
        <ul v-for="(item, index) in data.games" :key="index">
          <li>{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games,msg}">
        <ol v-for="(item, index) in games" :key="index">
          <li>{{ item }}</li>
        </ol>
        <h2>{{ msg }}</h2>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <h4 v-for="(item, index) in games" :key="index">
          <li>{{ item }}</li>
        </h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/category.vue";
export default {
  name: "App",
  components: { Category },
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
