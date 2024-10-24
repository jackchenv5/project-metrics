import { createRouter, createWebHistory } from 'vue-router'
import SoftwareCycle from '@/views/SoftwareCycle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/software-cycle',
      name: 'software-cycle',
      component: SoftwareCycle
    },
    {
      path: '/hardware-cycle',
      name: 'hardware-cycle',
      component: () => import('@/views/HardwareCycle.vue')
    },
    {
      path: '/gantt/:project_id',
      name: 'gantt',
      component: () => import('@/views/gantt/ProjectGantt.vue')
    },
  ]
})

export default router
