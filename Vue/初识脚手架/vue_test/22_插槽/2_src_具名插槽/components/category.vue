<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义一个插槽(挖个坑，等着组件的使用者进行填充) -->
    <slot name="center"
      >我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot
    >
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["listData", "title"],
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