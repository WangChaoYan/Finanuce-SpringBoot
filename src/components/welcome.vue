<template>
  <div class="hello">
    <div id="header">
      <div id="header_left"><p id="p-title">金融P2P</p></div>
      <div id="header_right"><h3>登录|注册</h3></div>
    </div>
    <el-container>
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
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><router-link to="/myself">我的</router-link></el-menu-item>
        </el-menu>
      <el-main>
        <div id="lunbo"><el-carousel :interval="4000" type="card" height="350px">
          <el-carousel-item >
            <h3 class="medium"><img :src="imgUrl2" width="740px" height="350px"/></h3>
          </el-carousel-item>
          <el-carousel-item >
            <h3 class="medium"><img :src="imgUrl3" width="740px" height="350px"/></h3>
          </el-carousel-item>
          <el-carousel-item >
            <h3 class="medium"><img :src="imgUrl4" width="740px" height="350px"/></h3>
          </el-carousel-item>
          <el-carousel-item >
            <h3 class="medium"><img :src="imgUrl5" width="740px" height="350px"/></h3>
          </el-carousel-item>
        </el-carousel>
        </div>
        <div><img :src="imgUrl" width="1464px" height="200px"/></div>
        <div id="el-row">
        <el-row :gutter="20">
          <el-col :span="5"><div class="grid-content bg-purple">
            <div id="el-color">
              <h3>财富</h3>
              <h3>新手最高领888元</h3>
            </div>
            <div id="el-bottom">
              <p class="p1">官方|综合财富平台</p>
              <p class="p1">安全可靠|严控资金，多重风控审核</p>
              <p class="p1">优质产品|知名合作伙伴，精选理财产品</p>
            </div>
          </div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple">

            <div id="el-color1">
              <h3>贷款</h3>
              <h3>1分钟放款</h3>
            </div>
            <div id="el-bottom1">
              <p class="p1">借还灵活|最高20万，借还灵活</p>
              <p class="p1">急速放款|最快1分钟到账</p>
              <p class="p1">超低利率|日息万2起，按日计息</p>
            </div>
          </div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple">
            <div id="el-color2">
              <h3>保险</h3>
              <h3>超低价格，2.3折起</h3>
            </div>
            <div id="el-bottom2">
              <p class="p1">健康险|精选产品，全面保障</p>
              <p class="p1">财产险|贴心保障，售后无忧</p>
              <p class="p1">汽车险|二次费改，低至2.3折</p>
            </div>

          </div></el-col>
          <el-col :span="5"><div class="grid-content bg-purple">
            <div id="el-color3">
              <h3>支付</h3>
              <h3>惠生活</h3>
            </div>
            <div id="el-bottom3">
              <p class="p1">便捷支付|安全快捷，智慧营销</p>
              <p class="p1">协议支付|轻松接入，无忧管理</p>
              <p class="p1">合作|银联主要战略合作伙伴</p>
            </div>

          </div></el-col>
        </el-row>
        </div>
      </el-main>
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
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        imgUrl:'',
        imgUrl2:'',
        imgUrl3:'',
        imgUrl4:'',
        imgUrl5:''
      };
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
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      infomation:function (id) {
        var pid=id
        this.$router.push({path:'/product/'+  pid})
      }
    },
    mounted(){
        //页面加载时（页面初始化   需要加载的数据）
    }
  }
</script>
<style>
  .hello{
    width: 1500px;
    height: auto;
    margin: 0 auto;
  }

  #header{
    width:1500px ;
    margin:0  auto;
    height: 50px;
    background-color: beige;
  }
  #header_left{
    width: 300px;
    height: 40px;
    margin: 0 auto;
    margin-left:200px ;
    float: left;
  }

  #header_right{
    width: 400px;
    height: 40px;
    float: right;
    margin-right:-150px ;
  }
  #p-title{
  font-size: 40px;
}

  #footer{
    width: 1500px;
    height: 60px;
    margin: 0 auto;
    background-color:#FAFFF0;
  }
  #left{
    width: 1000px;
    float: left;
  }
  #right{
    width: 400px;
    float: right;
  }
  #left_left{
    width: 170px;
    margin-top: 7px;
    float: left;
  }
  #left_right{
    width: 700px;
    margin-left:-50px;
    float: left;
  }
  #top{
    width: 700px;
    height: 27px;
    margin-top: 8px;
    margin-left: -246px;
    float: left;
  }
  #foot{
    width: 700px;
    height: 27px;
    float: left;
    background-color: beige;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-col {
    border-radius: 4px;
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
     background-color: #FF7F50;
   }
  #el-color1{
    border-radius: 8px;
    background-color: #40E0D0;
  }
  #el-color2{
    border-radius: 8px;
    background-color: #FF8C00;
  }
  #el-color3{
    border-radius: 8px;
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
  #lunbo{
    width: 1500px;
    height: 400px;
    margin: 0 auto;
  }
</style>

