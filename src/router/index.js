import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    //展示store例子
    path: '/store',
    component: () =>import('../components/Store.vue'),
  },
  {
    //展示store/modules axios django后端 的例子
    path: '/messages',
    name: 'messages',
    component: () => import('../components/Messages.vue')
  },
  {
    //展示element ui plus 布局的例子
    path: '/layout',
    name: 'ele-layout',
    component: () => import('../components/Layout.vue')
  },
  {
    //展示element plus button的例子
    path: '/button',
    name: 'button',
    component: () => import('../components/Button.vue')
  },
  {
    //展示element plus icon 的例子
    path: '/icon',
    name: 'icon',
    component: () => import('../components/Icon.vue')
  },
  {
    //展示 echarts bar
    path: '/echart-bar',
    name: 'echart-bar',
    component: () => import('../components/EchartBar.vue')
  },
  {
    //展示 charts pie
    path: '/echart-pie',
    name: 'echart-pie',
    component: () => import('../components/EchartPie.vue')
  },
]

export default createRouter({
//采用hash路由方式，#
  history: createWebHashHistory(),
  routes,
})

