<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校姓名：{{ name }}</h2>
        <h2>学校年龄：{{ age }}</h2>
    </div>
</template>

<script>
    //组件交互相关的代码(数据、方法等等)
export default {
    name: "Student",
    data() {
        return {
            name: "派大星",
            age: 18,
        };
    },
}

</script>