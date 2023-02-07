<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;<button @click="SearchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    SearchUsers() {
      //请求前更新List的数据
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get(`http://api.github.com/search/users?q=${this.keyWord}`).then(
        (res) => {
          //请求成功后更新List的数据
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: res.data.items,
          });
        },
        (err) => {
          //请求失败更新List的数据
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: err.message,
            users: [], //users必须清空 否则会残留上一次的结果
          });
        }
      );
    },
  },
};
</script>

<style>
</style>