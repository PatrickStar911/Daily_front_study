<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{
          item.title
        }}</router-link> -->
        <!-- 转路由并携带query参数，to的对象写法 -->
        <!-- name后面的字符串是命名空间 -->
        <router-link
          :to="{
            name: 'xiangqing',
            query: { id: item.id, title: item.title },
          }"
        >
          {{ item.title }}
        </router-link>
        <button @click="pushShow(item)">push查看</button>
        <button @click="replaceShow(item)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息1" },
        { id: "002", title: "消息2" },
        { id: "003", title: "消息3" },
      ],
    };
  },
  methods: {
    pushShow(item) {
      this.$router.push({
        name: "xiangqing",
        query: { id: item.id, title: item.title },
      });
    },
    replaceShow(item) {
      this.$router.replace({
        name: "xiangqing",
        query: { id: item.id, title: item.title },
      });
    },
  },
};
</script>

<style>
</style>