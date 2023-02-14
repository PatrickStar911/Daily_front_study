import Vue from "vue";
//该文件用于创建Vuex中最为核心的store

//引入Vuex
import Vuex from "vuex";

//准备actions————用于响应组件中的动作
const actions = {
  oddAdd(context, val) {
    if (context.state.sum % 2) {
      context.commit("ADD", val);
    }
  },
  waitAdd(context, val) {
    setTimeout(() => {
      context.commit("ADD", val);
    }, 500);
  },
};

//准备mutations————用于操作state中的数据
const mutations = {
  ADD(state, val) {
    state.sum += val;
  },
  DECREMENT(state, val) {
    state.sum -= val;
  },
};

//准备state————用于存放数据
const state = {
  sum: 0,
};

Vue.use(Vuex);

//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
