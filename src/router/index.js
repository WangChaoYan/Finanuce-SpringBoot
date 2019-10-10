import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
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
