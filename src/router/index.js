import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import registered from '@/components/registered'
import information from '@/components/information'
import adminlogin from '@/components/adminlogin'
import productShow from '@/components/productShow'
import productBuy from '@/components/productBuy'
import touzi from '@/components/touzi'
import touziShow from '@/components/touziShow'
import allproduct from '@/components/allproduct'
import welcome from '@/components/welcome'
import myself from '@/components/myself'
import Test from '@/components/Test'
import dingdan from '@/components/dingdan'
import loan_main from '@/components/loan_main'
import loan_do from '@/components/loan_do'
import user_addBankCard from '@/components/user_addBankCard'
import loan_confirm from '@/components/loan_confirm'
import loan_updateLoanProduct from "../components/loan_updateLoanProduct"
import admin_showUserBankCard from "../components/admin_showUserBankCard"
import loan_order from "../components/loan_order"


import AddProduct from '@/components/AddProduct'
import Update from '@/components/Update'
import main from '@/components/main'
import liebiao from '@/components/liebiao'
import product from '@/components/product'
import long from '@/components/long'
import long1 from '@/components/long1'
import long2 from '@/components/long2'
import long3 from '@/components/long3'
import long4 from '@/components/long4'

import userlist from '@/components/userlist'
import manageInsertUser from '@/components/manageInsertUser'
import manageUpdateUser from '@/components/manageUpdateUser'
import manageZiChan from '@/components/manageZiChan'
import manageDingdan from '@/components/manageDingdan'
import userOne from '@/components/userOne'


import VueParticles from 'vue-particles'
Vue.use(VueParticles)


Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/loan_main',
    name: 'loan_main',
    component: loan_main
  },
    {
      path: '/loan_do',
      name: 'loan_do',
      component: loan_do
    },
    {
      path: '/user_addBankCard',
      name: 'user_addBankCard',
      component: user_addBankCard
    },
    {
      path: '/loan_confirm',
      name: 'loan_confirm',
      component: loan_confirm
    },
    {
      path: '/main',
      name: 'main',
      component:main,
      children:[
        {path:'/product',component:product},
        {path:'/long',component:long},
        {path:'/long1',component:long1},
        {path:'/long2',component:long2},
        {path:'/long3',component:long3},
        {path:'/long4',component:long4},
        {path: '/loan_updateLoanProduct', name: 'loan_updateLoanProduct', component: loan_updateLoanProduct},
        {path: '/admin_showUserBankCard', name: 'admin_showUserBankCard', component: admin_showUserBankCard},
        {path: '/loan_order', name: 'loan_order', component: loan_order},

        {path:'/userlist',name:'userlist',component:userlist},
        {path:'/manageInsertUser',name:'manageInsertUser',component:manageInsertUser},/*这个带/时候，子页面之间点击跳转不影响，但是直接访问路径就出错，去掉/直接访问该页面也不会报错，会自动加载父子页面*/
        {path:'/manageUpdateUser/:uid',name:'manageUpdateUser',component:manageUpdateUser},/*子页面，原本是不加/的但是，你传参的时候，不带/只给后面加/：id 他就不认为你传参,当你是一个整体的pathle而不是带参。*/
        {path:'/userOne',name:'userOne',component:userOne},
        {path:'/manageZiChan',name:'manageZiChan',component:manageZiChan},
        {path:'/manageDingdan',name:'manageDingdan',component:manageDingdan},
        {path:'/AddProduct', name:'AddProduct', component:AddProduct},
        {path:'/Update/:pid', name:'Update', component:Update},
        {path:'/liebiao', name:'liebiao', component:liebiao},
      ]
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
      path:'/productByy/:pid',
      name:'productBuy',
      component:productBuy
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
    },{
      path:'/dingdan',
      name:'dingdan',
      component:dingdan
    }

  ]
})
