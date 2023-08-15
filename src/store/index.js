import { createStore } from "vuex";
import messages from './modules/messages'
export default createStore({
  state () {
    return {
      count: 5,
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {},
  modules: { messages }
})