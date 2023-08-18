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
    component: () => import('../components/Messages.vue')
  },
  {
    path: '/layout',
    name: 'ele-layout',
    component: () => import('../components/Layout.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../components/Button.vue')
  },
  {
    path: '/icon',
    name: 'ele',
    component: () => import('../components/Icon.vue')
  },
  {
    path: '/echart-bar',
    name: 'echart-bar',
    component: () => import('../components/EchartBar.vue')
  },
  {
    path: '/echart-pie',
    name: 'echart-pie',
    component: () => import('../components/EchartPie.vue')
  },
  {
    path: '/ele-button',
    name: 'ele',
    component: () => import('')
  },
  {
    path: '/ele-icon',
    name: 'ele',
    component: () => import('')
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})

