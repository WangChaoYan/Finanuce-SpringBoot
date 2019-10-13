<template>
  <div style="margin: auto">
    <from>
      分类：<el-input v-model="product.id" placeholder="分类ID" style="width: 15%;height: 10%"></el-input><br><br>
      名称：<el-input v-model="product.pname" placeholder="名称" style="width: 15%"></el-input><br><br>
      信息：<el-input v-model="product.pinfomation" placeholder="信息" style="width: 15%"></el-input><br><br>
      利率：<el-input v-model="product.rate" placeholder="利率" style="width: 15%"></el-input><br><br>
      周期：<el-input v-model="product.limits" placeholder="金额" style="width: 15%"></el-input><br><br>
      状态：<el-input v-model="product.days" placeholder="周期" style="width: 15%"></el-input><br><br>
      金额：<el-input v-model="product.status" placeholder="金额" style="width: 15%"></el-input><br><br>
      <el-button type="primary" plain  @click="update()" style="width: 15%">提交</el-button>
      <input v-model="product.pid" hidden>
    </from>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        product:{
          pid:'',
          id:'',
          pname:'',
          pinfomation:'',
          rate:'',
          days:'',
          limits:'',
          status:''

        }
      }
    },mounted(){

      var  pid=this.$route.params.pid;
      var url="api/findById";

      axios.post(url,{pid:pid}).then(res=>{

        if(res.data!=null){
          this.product=res.data;
        }
      })
    },methods:{
      update:function () {
        var url="api/update"
        axios.post(url,this.product).then(res=>{
          if(res.data!=null){
            this.$router.push({name:"HelloWorld"})
          }else {
            alert("修改失败")
          }
        })
      }
    }
  }
</script>
