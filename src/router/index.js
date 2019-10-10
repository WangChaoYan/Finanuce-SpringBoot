import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import registered from '@/components/registered'
import information from '@/components/information'
import adminlogin from '@/components/adminlogin'


import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/registered',
      name: 'registered',
      component: registered
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },

    {
      path: '/adminlogin',
      name: 'adminlogin',
      component: adminlogin
    },

  ]
})
