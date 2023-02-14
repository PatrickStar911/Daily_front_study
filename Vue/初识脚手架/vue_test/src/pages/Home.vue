<template>
  <div>
    <h2>我是Home组件</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link
          class="list-group-item"
          active-class="actvie"
          to="/home/news"
          >News</router-link
        >
      </li>
      <li>
        <router-link
          class="list-group-item"
          active-class="actvie"
          to="/home/message"
          >Message
        </router-link>
      </li>
    </ul>
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>