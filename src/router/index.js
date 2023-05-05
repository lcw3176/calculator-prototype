import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    alias: ['/diet'],
    name: 'diet',
    component: () => import(/* webpackChunkName: "diet" */ '../views/DietView.vue')
  },

  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
