<template>
  <div style="margin: auto;text-align: center">
    <el-table :data="userbankcard" style="width: 100%">
      <el-table-column prop="userId" label="用户编号" width="180" ></el-table-column>
      <el-table-column prop="bankCardId" label="银行卡账号" width="180"></el-table-column>
      <el-table-column prop="name" label="持卡人姓名"></el-table-column>
      <el-table-column prop="idCardCode" label="持卡人身份证号"></el-table-column>
      <el-table-column prop="bankPreMobile" label="银行预留手机号"></el-table-column>
    </el-table>
  </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                userbankcard:[]
            }
        },
        mounted:function(){
            this.loaduserbankcard();
        },
        methods: {
            loaduserbankcard(){
                var url ="api/loadalluserbankcard"
                axios.get(url).then(res=>{
                    this.userbankcard=res.data
                })
            }
        }
    }
</script>
