<template>
  <div id="app" class="demo">
    <transition-group name="flip-list" tag="ul">
      <li v-for="curImg in currImgs" v-bind:key="curImg" class="list-item">
        <img :src="curImg" width="1550px" height="760px">
      </li>
    </transition-group>
    <div class="register-container">
      <el-form ref="loginForm" :model="user" :rules="rules" class="login-box">
        <h1 style="height: 40px;font-size: 40px">ShareLink</h1>
        <h2>Link the world. Share to world.</h2>
        <div>
          <el-form-item style="height: 40px;width: 300px" prop="uname">
            <el-input v-model="user.uname" placeholder="请输入昵称" style="width: 300px;opacity: 0.4" oncontextmenu="return false" onpaste="return false"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item style="height: 40px;width: 300px" prop="upassword">
            <el-input v-model="user.upassword" name="password" class="password" placeholder="请输入密码" type="password" style="width: 300px;opacity: 0.3" oncontextmenu="return false" onpaste="return false"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item style="height: 40px;width: 300px" prop="uage">
            <el-input v-model="user.uage" placeholder="请输入年龄" style="width: 300px;opacity: 0.4"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item style="height: 40px;width: 300px" prop="uemail">
            <el-input v-model="user.uemail" placeholder="请输入邮箱" style="width: 300px;opacity: 0.4"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item style="height: 40px;width: 300px" prop="urealname">
            <el-input v-model="user.urealname" placeholder="请输入真实姓名" style="width: 300px;opacity: 0.4"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item style="height: 40px;width: 300px" prop="ujob">
            <el-input v-model="user.ujob" placeholder="请输入工作" style="width: 300px;opacity: 0.4"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item style="height: 40px;width: 300px" prop="contact">
            <el-input v-model="user.contact" placeholder="请输入联系人" style="width: 300px;opacity: 0.4"></el-input>
          </el-form-item><br/>
          <el-form-item style="height: 1px" label="请选择性别:">
            <el-radio v-model="user.usex" label="0" style="height: 10px">男</el-radio>
            <el-radio v-model="user.usex" label="1" style="height: 10px">女</el-radio>
          </el-form-item>
        </div>
        <el-button id="submit" type="primary" @click="add()" style="height: 40px">注 册</el-button>
        <a href="/login">
          <el-button type="info" class="register-tis" style="height: 40px">已经有账号？</el-button>
        </a>
      </el-form>


    </div>
  </div>



</template>

<script>
  import axios from 'axios';
  import $ from 'jquery';

export default {
  name: "information",
  data() {
    return {
      user:{
        uname:'',
        upassword:'',
        usex:'',
        uage:'',
        utel:'',
        uemail:'',
        urealname:'',
        ujob:'',
        contact:'',
      },
      rules: {
        uname: [
          {required: true, message: '账号不可为空', trigger: 'blur'}
        ],
        upassword: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ],
        uage: [
          {required: true, message: '年龄不可为空', trigger: 'blur'}
        ],
        uemail: [
          {required: true, message: '邮箱不可为空', trigger: 'blur'}
        ],
        urealname: [
          {required: true, message: '真实姓名不可为空', trigger: 'blur'}
        ],
        ujob: [
          {required: true, message: '职业不可为空', trigger: 'blur'}
        ],
        contact: [
          {required: true, message: '联系人电话不可为空', trigger: 'blur'}
        ]
      },
      // 对话框显示和隐藏
      dialogVisible: false,
      currImgs: [],
      imgs: [
        'http://pxwjw0muw.bkt.clouddn.com/FrHQXrShMbbYQ8KUqwOfsLVgJq_Z',
        'http://pxwjw0muw.bkt.clouddn.com/Fo5eY2PfbCJnywg7O3x4gCp2dqTq',
        'http://pxwjw0muw.bkt.clouddn.com/Fsau8bPUNmpU83bh35s03LZv2GLQ'
      ],
      index: 0

    }
  },

  mounted(){
    this.currImgs = [this.imgs[0]];
    this.startChange();
  },
  methods: {
    add:function () {
        var url="api/registered";
        axios.post(url,this.user).then(res=>{
            if(res.data=="success"){
                this.$router.push('/');//跳到登陆页面
            }else{
                alert(res.data);
            }
        })
    },
    //背景图片轮播图
    startChange: function () {
      var _this = this;
      setInterval(function () {
        if (_this.index < _this.imgs.length - 1) {
          _this.index++
        } else {
          _this.index = 0
        }
        _this.currImgs.splice(0, 1, _this.imgs[_this.index]);
      }, 4000);
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .register-container{
    width:1600px;
    height:800px;
    display:table-cell;
    vertical-align:middle;
    text-align: center;
  }
  #box{
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image:url("http://pxwjw0muw.bkt.clouddn.com/FrHQXrShMbbYQ8KUqwOfsLVgJq_Z");
  }
  form{position:relative;width:305px;margin:15px auto 0 auto;text-align:center}
  input{width:270px;height:42px;line-height:42px;margin-top:25px;padding:0 15px;background:#2d2d2d;background:rgba(45,45,45,.15);-moz-border-radius:6px;-webkit-border-radius:6px;border-radius:6px;border:1px solid #3d3d3d;border:1px solid rgba(255,255,255,.15);-moz-box-shadow:0 2px 3px 0 rgba(0,0,0,.1) inset;-webkit-box-shadow:0 2px 3px 0 rgba(0,0,0,.1) inset;box-shadow:0 2px 3px 0 rgba(0,0,0,.1) inset;font-family:"Microsoft YaHei",Helvetica,Arial,sans-serif;font-size:14px;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.1);-o-transition:all .2s;-moz-transition:all .2s;-webkit-transition:all .2s;-ms-transition:all .2s}
  input:-moz-placeholder{color:#fff}
  input:-ms-input-placeholder{color:#fff}
  input::-webkit-input-placeholder{color:#fff}
  input:focus{outline:0;-moz-box-shadow:0 2px 3px 0 rgba(0,0,0,.1) inset,0 2px 7px 0 rgba(0,0,0,.2);-webkit-box-shadow:0 2px 3px 0 rgba(0,0,0,.1) inset,0 2px 7px 0 rgba(0,0,0,.2);box-shadow:0 2px 3px 0 rgba(0,0,0,.1) inset,0 2px 7px 0 rgba(0,0,0,.2)}
  button{cursor:pointer;width:300px;height:44px;margin-top:25px;padding:0;  background: rgba(6, 127, 228, 0.71);-moz-border-radius:6px;-webkit-border-radius:6px;border-radius:6px;border:0;-moz-box-shadow:0 15px 30px 0 rgba(255,255,255,.25) inset,0 2px 7px 0 rgba(0,0,0,.2);font-family:"Microsoft YaHei",Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.1);-o-transition:all .2s;-moz-transition:all .2s;-webkit-transition:all .2s;-ms-transition:all .2s}
  button:hover{-moz-box-shadow:0 15px 30px 0 rgba(255,255,255,.15) inset,0 2px 7px 0 rgba(0,0,0,.2);-webkit-box-shadow:0 15px 30px 0 rgba(255,255,255,.15) inset,0 2px 7px 0 rgba(0,0,0,.2);box-shadow:0 15px 30px 0 rgba(255,255,255,.15) inset,0 2px 7px 0 rgba(0,0,0,.2)}
  button:active{-moz-box-shadow:0 15px 30px 0 rgba(255,255,255,.15) inset,0 2px 7px 0 rgba(0,0,0,.2);-webkit-box-shadow:0 15px 30px 0 rgba(255,255,255,.15) inset,0 2px 7px 0 rgba(0,0,0,.2);box-shadow:0 5px 8px 0 rgba(0,0,0,.1) inset,0 1px 4px 0 rgba(0,0,0,.1);border:0 solid #016FCB}
  body, p, img, dl, dt, dd, ul, ol, h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
  body { position: relative; font: 12px/1.5 Simsun, Arial; }
  ul, ol { list-style: none; }
  img { border: 0 none; }
  input, select { vertical-align: middle; }
  table { border-collapse: collapse; }
  s, em, i { font-style: normal; text-decoration: none; }
  a { outline: none; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .clear { *zoom: 1; }
  .clear:after { clear: both; content: "."; display: block; height: 0; overflow: hidden; visibility: hidden; zoom: 1; }
  .flip-list-enter-active, .flip-list-leave-active {
    transition: all 1s;
  }
  .flip-list-enter, .flip-list-leave-active {
    opacity: 0;
  }
  #app li {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
