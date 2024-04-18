import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/currency',
      name: 'Currency',
      component: () => import('../views/GetCurrency.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/gacha',
      name: 'Gacha',
      component: () => import('../views/GachaView.vue')
    },
  ]
})

export default router
