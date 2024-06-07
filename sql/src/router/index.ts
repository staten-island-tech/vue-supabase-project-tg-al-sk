import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('../views/UserView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/currency',
      name: 'Currency',
      component: () => import('../views/GetCurrency.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
      meta: {requiresAuth: false}
    },
    {
      path: '/gacha',
      name: 'Gacha',
      component: () => import('../views/GachaView.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: () => import('../views/UserInventory.vue'),
      meta: {requiresAuth: true}
    }
  ]
})

export default router
