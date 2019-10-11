import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import registered from '@/components/registered'
import information from '@/components/information'
import adminlogin from '@/components/adminlogin'


import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import productShow from '@/components/productShow'
import product from '@/components/product'
import touzi from '@/components/touzi'
import touziShow from '@/components/touziShow'
import allproduct from '@/components/allproduct'
import welcome from '@/components/welcome'
import myself from '@/components/myself'
import Test from '@/components/Test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },{
      path: '/allproduct',
      name: 'allproduct',
      component: allproduct
    },{
      path: '/productShow/:status',
      name: 'productShow',
      component: productShow
    },  {
      path:'/touzi/:pid',
      name:'/touzi',
      component:touzi
    },{
      path:'/product/:pid',
      name:'product',
      component:product
    },{
      path:'/touziShow/:status',
      name:'touziShow',
      component:touziShow
    },{
      path:'/myself',
      name:'myself',
      component:myself
    },{
      path:'/Test',
      name:'Test',
      component:Test
    },{
      path: '/login',
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
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },{
      path: '/allproduct',
      name: 'allproduct',
      component: allproduct
    },{
      path: '/productShow/:status',
      name: 'productShow',
      component: productShow
    },  {
      path:'/touzi/:pid',
      name:'/touzi',
      component:touzi
    },{
      path:'/product/:pid',
      name:'product',
      component:product
    },{
      path:'/touziShow/:status',
      name:'touziShow',
      component:touziShow
    },{
      path:'/myself',
      name:'myself',
      component:myself
    },{
      path:'/Test',
      name:'Test',
      component:Test
    }
  ]
})
