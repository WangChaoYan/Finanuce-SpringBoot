<template>
  <div>


    <!--data绑定下面的data里面的usedrs-->
  <el-table
    :data="dingdan"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column  prop="id"  label="id"  width="150">
    </el-table-column>
    <el-table-column  prop="uname"  label="用户名"  width="180">
    </el-table-column>
    <el-table-column  prop="pname"  label="商品名"  width="180">
    </el-table-column>
    <el-table-column  prop="time"  label="时间"  width="180">
    </el-table-column>
    <el-table-column  prop="money"  label="金额"  width="180">
    </el-table-column>
    <el-table-column  prop="status"  label="状态码"  width="180">
    </el-table-column>


    <!--<el-table-column prop="操作" label="操作" width="180">
      <template slot-scope="user">
      <el-button type="warning" plain  @click="updateUser(user.row.uid)">修改</el-button>
      <el-button type="danger" plain @click="deleteUser(user.row.uid)">删除</el-button>
      </template>
    </el-table-column>-->

  </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="this.params.size"
      v-on:current-change="changePage"
      :total="total" :current-page="this.params.page" style="margin-left: 500px;margin-top: 5px;">
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
     /* deleteUser: function (uid) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          /!*自己的*!/
          var url = "api/manageDelete"
          axios.post(url,{uid:uid}).then(res=>{/!*都说了uid这个前面你弄个id搞毛线啊，前面是k：v后面是value值猫狗都行的没要求啊啊*!/

            if (res.data!=null){
              this.query()
            }
          })
          /!*自己的*!/
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });*/



      query: function () {

        var url = "api/manageDingdan/" + this.params.page + "/" + this.params.size
        axios.get(url).then(res => {

          this.dingdan = res.data.list;
          this.total = res.data.total;

        })
      },
      changePage: function (page) {
        this.params.page = page;
        this.query();
      },

      /*insertUser: function () {
        this.$router.push({name: 'manageInsertUser'})
        /!*需要去的页面，就是他的路径漏油里面的*!/
      },
      updateUser: function (uid) {
        /!*this.$router.push({path: '/manageUpdateUser/' + uid})*!/
        this.$router.push({path:'/manageUpdateUser/'+uid})
      }
    ,*/
    },
    data() {
      return {
        dingdan: [],
        total: 0,
        params: {
          size: 5,
          page: 1
        },

      }
    },

  }
</script>
