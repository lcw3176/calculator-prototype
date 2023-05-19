import { createRouter, createWebHistory } from 'vue-router'

// Nprogress
import NProgress from 'nprogress'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },

  {
    path: '/calculate',
    name: 'calculate',
    component: () => import(/* webpackChunkName: "calculate" */ '../views/CalculateView.vue')
  },

  {
    path: '/chart',
    name: 'chart',
    component: () => import(/* webpackChunkName: "chart" */ '../views/ChartView.vue')
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


router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
