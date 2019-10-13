<template>
    <el-container style=" height:630px;border: 1px solid #eee">
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item></el-dropdown-item>
            <el-dropdown-item ></el-dropdown-item>
            <el-dropdown-item><el-button>退出</el-button></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-tag>王小虎</el-tag>
      </el-header>
      <el-container>
      <el-aside  style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="[]">
          <el-submenu index="1">
            <template slot="title"  ><i class="el-icon-s-goods" >理财管理</i></template>
            <el-submenu index="1-1">
              <template slot="title">定期理财</template>
              <el-menu-item index="1-1-1" ><router-link to="long">长期</router-link></el-menu-item>
              <el-menu-item index="1-1-2" ><router-link to="long1">中短期</router-link></el-menu-item>
              <el-menu-item index="1-1-3" ><router-link to="long2">活期</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">基金投资</template>
              <el-menu-item index="1-2-1"><router-link to="long3">热销基金</router-link></el-menu-item>
              <el-menu-item index="1-2-2"><router-link to="long4">主题投资</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item><router-link to="product">全部数据</router-link></el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu">贷款管理</i></template>
            <el-menu-item index="2-1"><router-link to="loan_updateLoanProduct">贷款额度及利率调整</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="admin_showUserBankCard">用户银行卡信息</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="loan_order">贷款订单管理</router-link></el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-user-solid">用户管理</i></template>
            <el-menu-item index="3-1"><router-link to="userlist">用户信息管理</router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="userOne">单用户查询</router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="">用户权限审核</router-link></el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-s-tools">资产管理</i></template>
            <el-menu-item index="4-1"><router-link to="manageZiChan">公司资产查询</router-link></el-menu-item>
            <el-menu-item index="4-2"><router-link to="manageDingdan">订单查询</router-link></el-menu-item>
          </el-submenu>
          </el-menu>
      </el-aside>
      <el-main >
          <RouterView></RouterView>
      </el-main>
      </el-container>
    </el-container>
</template>


<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
<script>
  import axios from 'axios'
  export default {
    data() {
      return{
        product:[],
      }

    },mounted(){
      this.show();
    },methods:{
      del:function (pid) {
        alert(pid)
        var url="api/del/"+pid
        axios.get(url).then(res=>{
          if(res.data!=null){
            this.show();
          }
        })
      },
      add:function (){

        this.$router.push('/AddProduct')
      }, update: function (pid) {

        this.$router.push({path: '/Update/' + pid})


      },

      long1:function (id) {
        var url="api/findByIdLike/"+1;
        axios.post(url).then(res=>{
          this.product=res.data;
        })
      },
      long2:function (id) {
        var url="api/findByIdLike/"+2;
        axios.post(url).then(res=>{
          this.product=res.data;
        })
      },
      long3:function (id) {
        var url="api/findByIdLike/"+3;
        axios.post(url).then(res=>{
          this.product=res.data;
        })
      },
      long4:function (id) {
        var url="api/findByIdLike/"+4;
        axios.post(url).then(res=>{
          this.product=res.data;
        })
      },
      long5:function (id) {
        var url="api/findByIdLike/"+5;
        axios.post(url).then(res=>{
          this.product=res.data;
        })
      },show:function () {
        var url = "api/findAll"
        axios.post(url).then(res => {
          this.product = res.data;
        })

      },
      ultable:function () {
        alert("1")
        this.$router.push('/ultable')
      }
    }
  };
</script>
