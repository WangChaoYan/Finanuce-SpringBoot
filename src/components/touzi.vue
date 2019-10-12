<template>
  <div class="hello">
    <div id="header">
      <div id="header_left"><p id="p-title">金融P2P</p></div>
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
        <el-menu-item index="4"><router-link :to="{name:'myself',params:{names:this.names}}">我的</router-link></el-menu-item>
      </el-menu>

      <div id="middle">
        <div id="info">
          <div id="title"><h1>{{products.pname}}</h1></div><br>
          <div id="info_left"><h1>{{products.rate}}%</h1><br>近1年历史年化收益率</div>
          <div id="info_middle"><h2>{{products.limits}}</h2><br>起购金额（元）</div>
          <div id="info_right"><h2>{{products.days}}</h2><br>产品期限（天）</div><br><br><br><br><br><br/>
          <div id="shuoming"><h4>投资连结保险的投资回报具有不确定性，产品投资风险由投保人承担。</h4></div>
        </div>
        <div id="buy"> <el-button type="success" round @click="buy()">扫码购买</el-button></div>
      </div>
      <div id="maininfo">
        <div id="main_title"><h2>投资周期</h2></div>
        <div id="main_nav">
          <el-steps :active="1" align-center>
            <el-step title="购买"></el-step>
            <el-step title="计算收益"></el-step>
            <el-step title="可免费领取"></el-step>
            <el-step title="到账" description="3个工作日内"></el-step>
          </el-steps>
        </div>
        <hr>
        <div id="main_info">
          <h3 id="p1">购买说明</h3><br/>
          <div id="p2"> <p>该产品为投资连结保险，购买初始费用1%，犹豫期内退保可退还。</p><br/>
            <p id="p3">满期后自动退还至原购买银行卡；未满期时，可随时退保，退保费用详见费用规则。</p></div>
        </div>
        <div id="main_table">
          <h3 class="p4">购买与领取</h3><br/>
          <table border="1px black" width="700px" height="250px">
            <tr>
              <td>购买金额</td>
              <td>{{products.limits}}元起，且为1000的整数倍；单人累计持有上限100万元。</td>
            </tr>
            <tr>
              <td>年龄限制</td>
              <td>18周岁-70周岁（含）</td>
            </tr>
            <tr>
              <td>犹豫期</td>
              <td>15天</td>
            </tr>
            <tr>
              <td>领取规则</td>
              <td>满期后，自动退还至原购买银行卡；未满期时，可随时退保，退保费用详见费用规则。</td>
            </tr>
            <tr>
              <td>领取到账</td>
              <td>2-3个工作日</td>
            </tr>

          </table>
        </div>
        <br/>
        <div id="main_table1">
          <h3 class="p4">基本信息</h3><br/>
          <table border="1px black" width="700px" height="250px">
            <tr>
              <td>产品名称</td>
              <td>{{products.pname}}（投资连结型）</td>
            </tr>
            <tr>
              <td>报备文号</td>
              <td>{{products.number}}</td>
            </tr>
            <tr>
              <td>承保公司</td>
              <td>{{products.pname}}人寿保险股份有限公司</td>
            </tr>
            <tr>
              <td>销售区域</td>
              <td>{{products.address}}</td>
            </tr>
            <tr>
              <td>投资账户</td>
              <td>{{products.account}}</td>
            </tr>

          </table>
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
  import ElContainer from "../../node_modules/element-ui/packages/container/src/main";
  import ElFooter from "../../node_modules/element-ui/packages/footer/src/main";
  export default {
    components: {
      ElFooter,
      ElContainer},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        products:{
          pname:'',
          rate:'',
          limits:'',
          days:'',
          address:'',
          number:'',
          account:''
        },
        imgUrl1:'',
        names:''
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
      buy: function () {
        if(this.names!=''){
          var url = "api/pay";
          axios.post(url,this.products).then(res => {
            if(res.status==200){
              let routerData=this.$router.resolve({path:'/Test',query:{htmls:res.data}})
              this.htmls=res.data
              window.open(routerData.href,'_back')
              const div=document.createElement('div')
              div.innerHTML=htmls;
              document.body.appendChild(div)
              document.forms[0],submit();
            }
          })
        }else{
          this.$router.push('/login');
        }

//        var url = "api/insertDingDan";
//        axios.post(url, this.products).then(res => {
//          alert(res.data);
//        })
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
      var pid=this.$route.params.pid;
      var url="api/selectProductById?pid="+pid;
      axios.post(url).then(res=>{
        this.products=res.data;
      })
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
  #middle{
    width: 1500px;
    height: 220px;
    margin: 0 auto;
  }
  #title{
    width: 350px;
    height: auto;
    margin-left: 60px;
    border-bottom: 1px solid gainsboro;
  }
  #info{
    width: 900px;
    height: auto;
    margin-left: 60px;
    float:left;
    border: 1px solid gainsboro;
  }
  #shuoming{
    margin-left: 60px;
  }
  #info_left{
    float: left;
    margin-left: 60px;
  }
  #info_middle{
    float: left;
    margin-left: 60px;
  }
  #info_right{
    float: left;
    margin-left: 60px;
  }
  #buy{
    width: 100px;
    height: 100px;
    float: left;
    margin-top: 50px;
    margin-left: 200px;
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
  #maininfo{
    width: 1400px;
    height: 950px;
    margin-left: 60px;
    border: 1px solid gainsboro;
  }
  #main_title{
    margin-left: 50px;
    float: left;
  }
  #main_nav{
    margin-top: 80px;
  }
  #main_info{
    width: 1400px;
    height: 100px;
  }
  #p1{
    margin-left: 50px;
    font-size: 15px;
  }
  .p4{
    font-size: 15px;
    font-size: 15px;
  }
  #p2{
    float: left;
    margin-left: 100px;
  }
  #main_table{
    margin-left: 50px;
  }
  #main_table1{
    margin-left: 50px;
  }
</style>

