import Vue from 'vue'
import Router from 'vue-router'

import Home from 'components/home/Home'
import ShopCart from 'components/ShopCart/ShopCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/shopCart',
      component: ShopCart
    }
  ]
})
