<template>
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
        <div id="info">
          <div id="name"> <h1>{{names}}</h1><hr></div><br><br/><br/>
          <div id="info-info"><h1 id="buy">我的购买</h1>
          <el-table
            :data="order"
            style="width: 65%;margin: 0 auto"
            :row-class-name="tableRowClassName">
            <el-table-column
              prop="tradcname"
              label="商品"
              width="160">
            </el-table-column>
            <el-table-column
              prop="tradnum"
              label="订单号"
              width="240">
            </el-table-column>
            <el-table-column
              prop="tradtime"
              label="时间"
              width="240">
            </el-table-column>
            <el-table-column
              prop="tradacount"
              label="金额">
            </el-table-column>
            <el-table-column
              prop="tradstatus"
              label="订单状态">
            </el-table-column>
          </el-table>
          </div>
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
        imgUrl1:'',
        order:[],
        showname:true,
        names:'',
      };
    },
    created(){
    let urlTemp1 = "assets/logo1.png";
    this.imgUrl1 = require("@/"+urlTemp1);
    let urlTemp = "assets/title.png";
    this.imgUrl = require("@/"+urlTemp);
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      infomation:function (id) {
        var pid=id
        this.$router.push({path:'/product/'+pid})
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
        //页面加载时（页面初始化   需要加载的数据）

      var uname='admin';//uname未获取
      var url="api/selectDingDanByUname?uname="+uname;
      axios.post(url).then(res=>{
          this.order=res.data;
      })
    }
  }
</script>
<style>
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
  #middle{
    width: 1500px;
    height: auto;
    margin: 0 auto;
  }
  #middle-info{
    border: 1px solid #cceff5;
    background-color: #FAFFF0;
    width: 350px;
    height: 300px;
    margin-left: 10px;
    margin-top: 20px;
    float: left;
    transition: all .2s ease-in .1s;
  }
  #middle-info :hover{
    transform: scale(1.4);
  }
  #footer{
    width: 1500px;
    height: 65px;
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
    margin-top: 18px;
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
  #name{
    float: left;
    margin-left: 165px;
  }
  #info-info{
    margin-top: 30px;
  }
  #buy{
    width: 200px;
    margin-left: 165px;
  }
</style>

