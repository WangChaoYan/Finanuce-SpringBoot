<template>
  <div style="margin: auto;text-align: center">
    <el-table :data="loanorder" style="width: 100%">
      <el-table-column prop="loanOrderId" label="订单编号" width="180" ></el-table-column>
      <el-table-column prop="loanAmount" label="贷款金额" width="180"></el-table-column>
      <el-table-column prop="loanStage" label="贷款分期"></el-table-column>
      <el-table-column prop="repaymentAmount" label="应还总金额"></el-table-column>
      <el-table-column prop="userBankcardId" label="收款银行卡号"></el-table-column>
      <el-table-column prop="loanDate" label="贷款日期"></el-table-column>
      <el-table-column prop="uid" label="用户编号"></el-table-column>
      <el-table-column prop="status" label="是否放款"></el-table-column>
    </el-table>
  </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                loanorder:[]
            }
        },
        mounted:function(){
            this.loadallloanorder();
        },
        methods: {
            loadallloanorder(){
                var url ="api/loadallloanorder"
                axios.get(url).then(res=>{
                    this.loanorder=res.data
                })
            }
        }
    }
</script>
