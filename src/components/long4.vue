<template>
  <div>
      <el-table :data=" product">
        <el-table-column prop="pid" label="商品ID">
        </el-table-column>

        <el-table-column prop="pname" label="名称">
        </el-table-column>
        <el-table-column prop="pinfomation" label="信息">
        </el-table-column>
        <el-table-column prop="rate" label="利率（%）">
        </el-table-column>
        <el-table-column prop="days" label="期限（天）">
        </el-table-column>
        <el-table-column prop="limits" label="金额">
        </el-table-column>

        <el-table-column
          label="操作"
          width="180">
          <template   slot-scope="product">
            <el-button type="warning" plain style="width: 70px;height: 40px;"  @click="update(product.row.pid)" >修改</el-button>
            <el-button type="danger" plain style="width: 70px;height: 40px" @click="del(product.row.pid)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    <el-button @click="add" type="success" style="margin-top: 20px">新增</el-button>
  </div>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
<script>
  import axios from 'axios'
  export default {
    data() {
      return{
        product:[],
      }

    },mounted(){
      this.show();
    },methods:{
      del:function (pid) {
        alert(pid)
        var url="api/del/"+pid
        axios.get(url).then(res=>{
          if(res.data!=null){
            this.show();
          }
        })
      },
      add:function (){

        this.$router.push('/AddProduct')
      }, update: function (pid) {

        this.$router.push({path: '/Update/' + pid})


      },

      long1:function (id) {
        var url="api/findByIdLike/"+1;
        axios.post(url).then(res=>{
          this.product=res.data;
        })
      },
      long2:function (id) {
        var url="api/findByIdLike/"+2;
        axios.post(url).then(res=>{
          this.product=res.data;
        })
      },
      long3:function (id) {
        var url="api/findByIdLike/"+3;
        axios.post(url).then(res=>{
          this.product=res.data;
        })
      },
      long4:function (id) {
        var url="api/findByIdLike/"+4;
        axios.post(url).then(res=>{
          this.product=res.data;
        })
      },
      long5:function (id) {
        var url="api/findByIdLike/"+5;
        axios.post(url).then(res=>{
          this.product=res.data;
        })
      },show:function () {
        var url="api/findByIdLike/"+5;
        axios.post(url).then(res => {
          this.product = res.data;
        })

      },
      ultable:function () {
        alert("1")
        this.$router.push('/ultable')
      }
    }
  };
</script>

