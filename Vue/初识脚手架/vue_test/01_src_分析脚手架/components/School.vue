<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{ schoolName }}</h2>
        <h2>学校地址：{{ adress }}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
    //组件交互相关的代码(数据、方法等等)
export default {
    name: "SchoolComponent",
    data() {
        return {
            schoolName: "尚硅谷",
            adress: "北京",
        };
    },
    methods: {
        showName() {
            alert(this.schoolName);
        },
    },
}

</script>

<style>
    .demo{
        background-color: aquamarine;
    }
</style>