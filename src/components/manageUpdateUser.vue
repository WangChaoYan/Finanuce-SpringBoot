<template>
  <div>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="user">

      <el-form-item label="id" hidden>
        <el-input v-model="user.uid" label-width="180px" hidden></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="user.uname" label-width="180px"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.upassword"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="user.usex"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="user.uage"></el-input>
      </el-form-item>

      <el-form-item label="电话">
        <el-input v-model="user.utel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="user.uemail"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="user.urealname"></el-input>
      </el-form-item>
      <el-form-item label="工作">
        <el-input v-model="user.ujob"></el-input>
      </el-form-item>
      <el-form-item label="状态码">
        <el-input v-model="user.status"></el-input>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="user.contact"></el-input>
      </el-form-item>
      <el-form-item label="创建时间" type="hidden">
        <el-input v-model="user.createtime" ></el-input>
      </el-form-item>
      <el-button type="primary" plain @click="updateUser()">提交</el-button>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {ElButton},
    data() {
      return {
        labelPosition: 'right',
        user: {
            uid:'',
          uname: '',
          upassword: '',
          usex: '',
          uage:'',
          utel:'',
          uemail:'',
          urealname:'',
          ujob:'',
          status:'',
          contact:'',
          createtime:'',
        }
      };
    },
    mounted(){
       // alert(this.$route.params.uid)//route是取参数，router时漏油跳转
        var uid=this.$route.params.uid
      var url="api/manageSelectById"  /*修改先查询，的先用id查*/
      axios.post(url,{uid:uid}).then(res=>{
          if(res.data!=null){
              this.user=res.data
          }
      })
    },
    methods:{
      updateUser:function () {
        var url="api/manageUpdate"
        axios.post(url,this.user).then(res=>{
          if (res.data!=null){
              this.$message({
                  type: 'success',
                  message: '修改成功!'
              });
            this.$router.push({name:"userlist"})
          }else{
            alert("添加失败")
          }
        })
      }
    }
  }
</script>

