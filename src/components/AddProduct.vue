<template>
 <div style="margin: auto">
   <from>
     分类：<el-input v-model="product.id" placeholder="分类ID" style="width: 15%;height: 10%"></el-input><br><br>
     名称：<el-input v-model="product.pname" placeholder="名称" style="width: 15%"></el-input><br><br>
     信息：<el-input v-model="product.pinfomation" placeholder="信息" style="width: 15%"></el-input><br><br>
     利率：<el-input v-model="product.rate" placeholder="利率" style="width: 15%"></el-input><br><br>
     周期：<el-input v-model="product.days" placeholder="周期" style="width: 15%"></el-input><br><br>
     金额：<el-input v-model="product.limits" placeholder="金额" style="width: 15%"></el-input><br><br>
     <el-button type="primary" plain @click="Add()">   提交</el-button>
   </from>
 </div>
</template>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
            product:{
                id:'',
              pname:'',
              pinfomation:'',
              rate:'',
              days:'',
              limits:'',

            }
          }
      },methods:{
          Add:function () {
            var url="api/add"
            axios.post(url,this.product).then(res=>{
              if(res.data!=null){
                this.$router.push({name:"main"})
              }else {
                alert("添加失败")
              }
            })
          }
    }
  }
</script>
