// 引入vuex组件
import { createStore } from "vuex";

//引入messages子模块
import messages from './modules/messages'
/*
1. state:
    1) state 对象返回一个对象，此对象下的所有属性都具有响应性
    2) state 状态的改变只能通过mutation中定义的方法触发 

2. mutations: 定义更新state的方法  
    1) mutations中只能调用同步方法
    2) 在选项式组件中通过this.$store.commit('increment')触发
    3) 在组合式组件中通过:
        import useStore form 'vuex'
        store = useStore()
        调用

3. action 异步更新
4. moules 大型项目中，区分子模块，项目数据结构更清晰

*/
export default createStore({
  //全局state
  state () {
    return {
      count: 5,
    }
  },
 //全局mutations
  mutations: {
    increment (state) {
      state.count++
    }
  },
  //全局actions
  actions: {},
  //全局modules
  modules: { messages }
})