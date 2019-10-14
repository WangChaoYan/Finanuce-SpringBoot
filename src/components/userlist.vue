<template>
  <div>
    <el-button @click="insertUser()" type="success" style="margin-top: 20px">新增用户</el-button>
    <!--data绑定下面的data里面的usedrs-->
  <el-table
    :data="users"
    style="width: 100%;"  >
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
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="this.params.size"
      v-on:current-change="changePage"
      :total="total" :current-page="this.params.page" style="margin-left:500px;margin-top: 5px;">
    </el-pagination>
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

  export default {
      mounted:function () {
        this.query()
      },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      deleteUser: function (uid) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          /*自己的*/
          var url = "api/manageDelete"
          axios.post(url,{uid:uid}).then(res=>{
            if (res.data!=null){
              this.query()
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
      query: function () {
        var url = "api/manageSelect/" + this.params.page + "/" + this.params.size
        axios.get(url).then(res => {

          this.users = res.data.list;
          this.total = res.data.total;

        })
      },
      changePage: function (page) {
        this.params.page = page;
        this.query();
      },

      insertUser: function () {
        this.$router.push({name: 'manageInsertUser'})
        /*需要去的页面，就是他的路径漏油里面的*/
      },
      updateUser: function (uid) {
        /*this.$router.push({path: '/manageUpdateUser/' + uid})*/
        this.$router.push({path:'/manageUpdateUser/'+uid})
      }
    },
    data() {
      return {
        users: [],
        total: 0,
        params: {
          size: 5,
          page: 1
        },

      }
    },
    }
</script>
