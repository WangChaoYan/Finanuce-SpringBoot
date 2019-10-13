<template>
  <div style="margin: auto;border: black solid 1px;text-align: center">
    <el-form :inline="true" :model="loaninfo" class="demo-form-inline">
      <el-form-item label="贷款金额">
        <el-input-number v-model="loaninfo.loanAmount"  :min="1000" :max="50000" :step="1000" ></el-input-number>
      </el-form-item>
      <el-form-item label="分期">
        <el-input-number v-model="loaninfo.loanStage"  :min="3" :max="12"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                loaninfo: {
                    loanAmount:'',
                    loanStage:'',
                    repaymentamount:''
                }
            }
        },
        methods: {
            onSubmit() {
                var url ="api/repaymentamount"
                axios.post(url,this.loaninfo).then(res=>{
                    this.loaninfo.repaymentamount=res.data
                    this.confirm()
                })
            },
            confirm() {
                this.$confirm('您每期应还款'+this.loaninfo.repaymentamount/this.loaninfo.loanStage, '订单确认', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    dangerouslyUseHTMLString:'true',
                    center: true
                }).then(() => {
                    alert("确认");
                    this.$router.push({ path:'/loan_confirm',query:{loaninfo:this.loaninfo} })
                }).catch(() => {
                    location.reload();
                });
            }
        }
    }
</script>
