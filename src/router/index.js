import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import User from '../components/User.vue'
// import Messages from '../components/Messages.vue'

const routes = [
  {
    path: '/',
    component: HelloWorld,
  },
  {
    path: '/messages',
    name: 'messages',
    component: import('../components/Messages.vue')
  },
  {
    path: '/users',
    component: User,
  },
  {
    path: '/ele-'
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})

