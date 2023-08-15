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
  {path:'/layout',
   name:'ele-layout',
   component: ()=>import('../components/Layout.vue')
  },
  {path:'/ele-button',
   name:'ele',
   component: ()=>import('')
  },
  {path:'/ele-icon',
   name:'ele',
   component: ()=>import('')
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})

