//导入获取message数据api
import messageService from '../../services/messageService'

//子模块state
const state = {
  messages: []
}

//子模块getters:类似于vue中的computed属性
const getters = {
  messages: state => {
    return state.messages
  }
}

//子模块actions
const actions = {
  //获取信息
  getMessages ({ commit }) {
    messageService.fetchMessages()
      .then(messages => {
        commit('setMessages', messages)
      })
  },
  //添加信息
  addMessage ({ commit }, message) {
    messageService.postMessage(message)
      .then(() => {
        commit('addMessage', message)
      })
  },
  //删除信息
  deleteMessage ({ commit }, msgId) {
    messageService.deleteMessage(msgId)
    commit('deleteMessage', msgId)
  }
}

//更新state
const mutations = {
  setMessages (state, messages) {
    state.messages = messages
  },
  addMessage (state, message) {
    state.messages.push(message)
  },
  deleteMessage (state, msgId) {
    state.messages = state.messages.filter(obj => obj.pk !== msgId)
  }
}


//组装成一个state对象，供调用者导入
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}