<template>
  <div>
    <el-input  placeholder="请输入id"  v-model="cid"  clearable style="width: 100px">
    </el-input>
    <el-button type="primary" plain @click="ffone(cid)">点击查询</el-button>
    <el-table
      :data="users"
      style="width: 100%">
      <el-table-column fixed prop="uid"  label="id"  >
      </el-table-column>
      <el-table-column  prop="uname"  label="用户名"  >
      </el-table-column>
      <el-table-column  prop="upassword"  label="密码"  width="350">
      </el-table-column>
      <el-table-column  prop="usex"  label="性别"  width="50">
      </el-table-column>
      <el-table-column  prop="uage"  label="年龄"  width="50">
      </el-table-column>
      <el-table-column  prop="utel"  label="电话"  width="130">
      </el-table-column>
      <el-table-column  prop="uemail"  label="邮箱"  width="200">
      </el-table-column>
      <el-table-column  prop="urealname"  label="真实姓名"  width="80">
      </el-table-column>
      <el-table-column  prop="ujob"  label="工作"  width="80">
      </el-table-column>
      <el-table-column  prop="status"  label="状态码"  width="50">
      </el-table-column>
      <el-table-column  prop="contact"  label="联系人"  width="130">
      </el-table-column>
      <el-table-column  prop="createtime"  label="创建时间"  width="100">
      </el-table-column>

      <el-table-column fixed="right" prop="操作" label="操作" width="180">
        <template slot-scope="user">
          <el-button type="warning" plain  @click="updateUser(user.row.uid)">修改</el-button>
          <el-button type="danger" plain @click="deleteUser(user.row.uid)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
   <!-- <el-pagination
      background
      layout="prev, pager, next"
      :page-size="this.params.size"
      v-on:current-change="changePage"
      :total="total" :current-page="this.params.page">
    </el-pagination>-->
  </div>
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>

<script>
  import axios from 'axios'
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {
      ElButton,
      ElInput},
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1 ) {
          return 'success-row';
        }
        return '';
      },
      deleteUser:function (cid) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          /*自己的*/
          var url = "api/deleteUser"
          axios.post(url, {uid: cid}).then(res => {
            if (res.data != null) {
              alert("删除成功")
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }
          })
          /*自己的*/
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });



      },
      ffone:function (cid) {  /*加个模糊查询，如果先输入后查询，怎末保证*/
        var url="api/findUserOne" /*findUserOne/这是contrroller中的路径*/
        axios.post(url,{uid: cid}).then(res=>{
          if (res.data!=null){

            this.users=res.data;
            //alert(users)
          }else {
            alert("用户不存在")
          }

        })
      },

      updateUser: function (uid) {
        /*this.$router.push({path: '/manageUpdateUser/' + uid})*/
        this.$router.push({path:'/manageUpdateUser/'+uid})
      }
    },
    data() {
      return {
        users:[],
        /*user: {
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
        },*/
        cid:'',

      }
    },

  }
</script>
