<template>
  <div id="body">
    <dl class="admin_login">
      <dt>
        <strong>站点后台管理系统</strong>
        <em>Management System</em>
      </dt>
      <dd class="user_icon">
        <input v-model="admin.aname" type="text" placeholder="账号" class="login_txtbx"/>
      </dd>
      <dd class="pwd_icon">
        <input v-model="admin.apassword" type="password" placeholder="密码" class="login_txtbx"/>
      </dd>
      <dd class="val_icon">
        <div class="checkcode">
          <input type="text" id="J_codetext" placeholder="验证码" maxlength="4" class="login_txtbx">
          <canvas class="J_codeimg" id="myCanvas" @click="code()">对不起，您的浏览器不支持canvas，请下载最新版浏览器!</canvas>
          <input type="hidden" id="abcd"/>
        </div>
        <input type="button" value="验证码核验" class="ver_btn" @click="validate()">
      </dd>
      <dd>
        <input type="button" value="立即登陆" class="submit_btn" @click="login()"/>
      </dd>
      <dd>
        <p>© 2015-2016 jq22 版权所有</p>
        <p>陕B2-8998988-1</p>
      </dd>
    </dl>
  </div>
</template>

<script scoped>
  import {Particleground} from '../assets/js/Particleground';
  import {verificationNumbers} from'../assets/js/verificationNumbers';
  import {jquery} from '../assets/js/jquery';
  import $ from 'jquery';
  import '../assets/css/style.css';
  import axios from 'axios';

  $(document).ready(function() {
    //粒子背景特效
    $('body').particleground({
      dotColor: '#5cbdaa',
      lineColor: '#5cbdaa'
    });
    //测试提交，对接程序删除即可
    $(".submit_btn").click(function(){
      location.href="javascrpt:;"/*tpa=http://***index.html*/;
    });
  });

export default {
  name: "adminLogin",
  data() {
    return {
      admin: {
        aname: '',
        apassword: ''
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        aname: [
          {required: true, message: '账号不可为空', trigger: 'blur'}
        ],
        apassword: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      },
      // 对话框显示和隐藏
      dialogVisible: false,
    }
  },
  mounted() {
    Particleground();
    verificationNumbers();
    jquery();
  },
  methods: {
    showCheck:function(a){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,1000,1000);
    ctx.font = "80px 'Microsoft Yahei'";
    ctx.fillText(a,0,100);
    ctx.fillStyle = "white";
  },
    code:function () {
      var code = "";
      var codeLength = 4;
      var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');
      for(var i=0;i<4;i++) {
        var charIndex = Math.floor(Math.random()*35);
        code+=selectChar[charIndex];
      }
      if(code.length != codeLength){
        this.code();
      }
      this.showCheck(code);
      document.getElementById("abcd").value=code; //获取输入验证码
    },

    validate :function() {
      var inputCode = document.getElementById("J_codetext").value.toUpperCase(); //获取输入验证码
      var code=document.getElementById("abcd").value;
      var codeToUp=code.toUpperCase();
      if(inputCode.length <=0) {
        document.getElementById("J_codetext").setAttribute("placeholder","输入验证码");
        this.code();
        return false;
      }
      else if(inputCode != codeToUp ){
        document.getElementById("J_codetext").value="";
        document.getElementById("J_codetext").setAttribute("placeholder","验证码错误");
        this.code();
        return false;
      }else {
        document.getElementById("J_codetext").setAttribute("placeholder","验证码正确");
      }
  },
    login:function () {
      var inputCode = document.getElementById("J_codetext").value.toUpperCase(); //获取输入验证码
      var code=document.getElementById("abcd").value;
      var codeToUp=code.toUpperCase();
      if(inputCode.length <=0) {
        document.getElementById("J_codetext").setAttribute("placeholder","输入验证码");
        this.code();
        return false;
      }
      else if(inputCode != codeToUp ){
        document.getElementById("J_codetext").value="";
        document.getElementById("J_codetext").setAttribute("placeholder","验证码错误");
        this.code();
        return false;
      }else {
          var url="api/AdminLogin";
          axios.post(url,this.admin).then(res=>{
            if(res.data=="success"){
                //跳管理员页面
              this.$router.push("/main");
            }else {
               alert(res.data);
            }
          })
      }
    }
  },
}
</script>
<style>

  body{height:100%;background:#16a085;overflow:hidden;}
  canvas{z-index:-1;position:absolute;}

</style>
