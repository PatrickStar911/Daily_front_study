<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 作用域插槽 -->
    <slot :games="games" msg="我可以传递多个数据"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      games: ["CF", "英雄联盟", "王者荣耀", "绝地求生"],
    };
  },
  props: ["title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: #008c8c;
}
li {
  list-style: none;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>