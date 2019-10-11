<template>
  <div id="box">
    <div id="div">
      <el-form ref="loginForm" :model="user" :rules="rules" class="login-box">
        <el-form-item prop="utel" style="width: 300px;height: 40px">
          <el-input v-model="user.utel" placeholder="请输入手机号" style="opacity: 0.5"></el-input>
        </el-form-item>
          <el-button type="primary" style="width: 110px;height: 40px" @click="yzm()">获取验证码</el-button>
          <el-input v-model="usercode.code" placeholder="请输入验证码" style="width: 190px;height: 40px;opacity: 0.5"></el-input><br/><br/><br/>
          <el-button type="warning" style="width: 300px" @click="add()">确定</el-button><br/><br/>
          <el-button type="success" style="width: 300px" @click="back()">已经有账号?</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
export default {
  name: "Registered",
  data() {
    return {
      user:{
          utel:'',
      },
      usercode:{
          code:'',
      },
      rules: {
        utel: [
          {required: true, message: '手机号不可为空', trigger: 'blur'}
        ],

      },
    }
  },
  mounted() {
    this.$router.push("/registered");
  },
  methods: {
    yzm:function () {
      var url="api/judgeTel";
      axios.post(url,this.user).then(res=>{
         this.user.utel=res.data;
      });
    },
    add:function () {
      var url="api/judgeCode";
      axios.post(url,this.usercode).then(res=>{
        if(res.data=="success"){
          this.$router.push("/information");       //跳到注册信息页面
        }else {
            alert(res.data);
        }
      });
    },
    back:function () {
      this.$router.push("/login");
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#box{
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image:url("http://pxwjw0muw.bkt.clouddn.com/FoPWdLD3d7EDq71xDIvbWgjjRrMV");
}
#div{
  width: 400px;
  height: 280px;
  border: 1px solid #aaaaff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

</style>
