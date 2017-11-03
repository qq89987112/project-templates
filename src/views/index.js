import Vue from 'vue'
import Router from 'vue-router'
import Register from './account/register.vue'
import AddressSet from './address/set.vue'
import AddressManager from './address/manager.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/register'
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/address/set',
      name: 'address.set',
      component: AddressSet
    },
    {
      path: '/address/manager',
      name: 'address.manager',
      component: AddressManager
    },

  ]
})
