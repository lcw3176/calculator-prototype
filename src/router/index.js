import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    alias: ['/home'],
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },

  {
    path: '/calculate',
    name: 'calculate',
    component: () => import(/* webpackChunkName: "calculate" */ '../views/CalculateView.vue')
  },

  {
    path: '/recommend',
    name: 'recommend',
    component: () => import(/* webpackChunkName: "recommend" */ '../views/RecommendView.vue')
  },


  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
