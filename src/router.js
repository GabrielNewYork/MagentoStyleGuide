import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/product-carousel',
      name: 'product-carousel',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ProductCarousel.vue')
    },
    {
      path: '/product-detail-page',
      name: 'product-detail-page',
      component: () => import(/* webpackChunkName: "about" */ './components/main/NewProductPage/NewProductPage.vue')
    },
    {
      path: '/product-measurement',
      name: 'product-measurement',
      component: () => import(/* webpackChunkName: "about" */ './views/ProductMeasurement')
    },
    {
      path: '/find-a-store',
      name: 'find-a-store',
      component: () => import(/* webpackChunkName: "about" */ './views/FindAStore')
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: () => import(/* webpackChunkName: "about" */ './views/ThankYouPage')
    },


  ]
})
