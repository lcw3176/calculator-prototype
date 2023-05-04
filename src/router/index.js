import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/CalculatorView.vue'

const routes = [
  {
    path: '/',
    alias: ['/calculator'],
    name: 'calculator',
    component: () => import(/* webpackChunkName: "diet" */ '../views/CalculatorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
