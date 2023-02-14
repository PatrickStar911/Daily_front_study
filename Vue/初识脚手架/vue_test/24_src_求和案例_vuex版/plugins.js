export default {
    install(Vue) {
        console.log("@@@@install", Vue);
        //全局过滤器
        Vue.filter("myslice", function (value) {
            return value.slice(0, 4);
        })
        //定义全局指令
        Vue.directive("find", {
            bind() { },
            inserted() { },
            updated() { },
        });
        //定义混入
        Vue.mixin({
            data() {
                return {
                    name: "派大星",
                    age: 18
                }
            }
        })

        //给Vue原型上添加一个方法
        Vue.prototype.demo = ()=> alert("你好")
    }

}