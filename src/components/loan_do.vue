<template xmlns:font-family="http://www.w3.org/1999/xhtml" xmlns:line-height="http://www.w3.org/1999/xhtml"
          xmlns="http://www.w3.org/1999/html">
  <div class="hello">
    <div id="header">
      <div id="header_left" style="font-size: 35px">金融P2P</div>
      <div id="header_right" style="font-size: 15px">
        <div>
          <span v-if="showname">
            <span @click="login()">登录</span> | <span @click="registered()">注册</span>
          </span>
          <span v-if="!showname">
            <span>{{names}}</span> | <span @click="out()">退出</span>
          </span>
        </div>
      </div>
    </div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title"><router-link to="/allproduct">财富</router-link></template>
        <el-menu-item index="2-1"><router-link to="/productShow/1">定期活期</router-link></el-menu-item>
        <el-menu-item index="2-2"><router-link to="/touziShow/2">资金投资</router-link></el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><router-link to="/loan_main">贷款</router-link></el-menu-item>
      <el-menu-item index="4"><router-link :to="{name:'myself',params:{names:this.names}}">我的</router-link></el-menu-item>
    </el-menu>
    <div style="width:1500px;height:300px;margin: auto;border: black solid 1px;text-align: center">
      <el-form :inline="true" :model="loaninfo" class="demo-form-inline" style="margin-top: 80px">
        <el-form-item label="贷款金额">
          <el-input-number v-model="loaninfo.loanAmount"  :min="1000" :max="50000" :step="1000" ></el-input-number>
        </el-form-item>
        <el-form-item label="分期">
          <el-input-number v-model="loaninfo.loanStage"  :min="3" :max="12"></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-footer>
      <div id="footer">
        <div id="left">
          <div id="left_left"><img :src="imgUrl1"/></div>
          <div id="left_right">
            <div id="top">
              <div>帮助中心&nbsp;|&nbsp;关注我们&nbsp;|&nbsp;微博</div>
            </div>
            <div id="foot">
              <div>Copyright © mi.com 京ICP备10046444号-7&nbsp;|&nbsp;京公网安备 11010802020134号&nbsp;|&nbsp;京ICP证110507号</div>
            </div>
          </div>
        </div>
        <div id="right">
          <div>客服电话</div>
          <div>400-100-3399</div>
          <div>周一至周日 9:00-19:00(仅收市话费)</div>
        </div>
      </div>

    </el-footer>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        loaninfo: {
          loanAmount:'',
          loanStage:'',
          repaymentamount:''
        }
      }
    },
    created(){
      let urlTemp1 = "assets/logo1.png";
      this.imgUrl1 = require("@/"+urlTemp1);
      let urlTemp = "assets/title.png";
      this.imgUrl = require("@/"+urlTemp);
      let urlTemp2 = "assets/1.jpg";
      this.imgUrl2 = require("@/"+urlTemp2);
      let urlTemp3 = "assets/2.jpg";
      this.imgUrl3 = require("@/"+urlTemp3);
      let urlTemp4 = "assets/3.jpg";
      this.imgUrl4 = require("@/"+urlTemp4);
      let urlTemp5 = "assets/4.jpg";
      this.imgUrl5 = require("@/"+urlTemp5);
    },
    methods: {
      onSubmit() {
        var url ="api/repaymentamount"
        axios.post(url,this.loaninfo).then(res=>{
          this.loaninfo.repaymentamount=res.data
          this.confirm()
        })
      },
      confirm() {
        this.$confirm('您每期应还款'+this.loaninfo.repaymentamount/this.loaninfo.loanStage, '订单确认', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          dangerouslyUseHTMLString:'true',
          center: true
        }).then(() => {
          alert("确认");
          this.$router.push({ path:'/loan_confirm',query:{loaninfo:this.loaninfo} })
        }).catch(() => {
          location.reload();
        });
      },
      registered:function () {
        this.$router.push('/registered')
      },
      login:function () {
        this.$router.push('/login')
      },
      showUser:function () {
        var url="api/getUserSession";
        var _this=this;
        axios.post(url).then(res=>{
          if(res.data==null||res.data==""){
            _this.showname=true;
          }else {
            _this.names=res.data;
            _this.showname=false;
          }
        })
      },
      out:function () {
        var url="api/userLoginOut";
        axios.post(url).then(res=>{
          this.$router.push('/login');
        })
      }
    },
    mounted(){
      this.showUser();
    }
  }
</script>

<style>
  body {
    line-height: normal;
  }
  .hello{
    width: 1500px;
    height: 100%;
    margin: 0 auto;
  }
  #header{
    width:1500px ;
    margin:0  auto;
    height: 72px;
    background-color: beige;
  }
  #header_left{
    width: 300px;
    float: left;
    align-items: center;
    text-align: center;
    line-height: 72px;
  }
  #header_right{
    width: 400px;
    float: right;
    margin-top: 8px;
    line-height: 60px;
  }
  #footer{
    width: 1500px;
    height: 65px;
    margin: 0 auto;
    background-color:#f0f0f0;
    margin-top: 15px;
    margin-left: -20px;
  }
  #left{
    width: 800px;
    float: left;
    margin-top: 10px;
    margin-left: 30px;
  }
  #right{
    width: 400px;
    float: right;
    margin-top: 5px;
  }
  #left_left{
    width: 100px;
    float: left;
  }
  #left_right{
    width: 650px;
    float: left;
  }
  #top{
    margin-top: 8px;
  }
  #foot{
    margin-top: 8px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  #el-color{
    border-radius: 8px;
    height: auto;
    background-color: #FF7F50;
  }
  #el-color1{
    border-radius: 8px;
    height: auto;
    background-color: #40E0D0;
  }
  #el-color2{
    border-radius: 8px;
    height: auto;
    background-color: #FF8C00;
  }
  #el-color3{
    border-radius: 8px;
    height: auto;
    background-color: #32CD32;
  }
  #el-bottom{
    height: 150px;
    border-radius: 8px;
    padding-top: 8px;
    background-color: #FF7F50;
  }
  #el-bottom1{
    height: 150px;
    border-radius: 8px;
    padding-top: 8px;
    background-color: #40E0D0;
  }
  #el-bottom2{
    height: 150px;
    border-radius: 8px;
    padding-top: 8px;
    background-color: #FF8C00;
  }
  #el-bottom3{
    height: 150px;
    border-radius: 8px;
    padding-top: 8px;
    background-color: #32CD32;
  }
  h3{
    text-align: center;
    font-size: large;
    margin-bottom: 5px;
  }
  .p1{
    text-align: center;
    font-size: large;
    margin-top: 25px;
  }


</style>
