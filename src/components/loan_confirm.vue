<template>
  <div style="margin: auto;border: black solid 1px;text-align: center;width: 20%">
    <el-form ref="form" :model="loaninfo" label-width="80px" disabled>
      <el-form-item label="贷款金额:">
        <el-input v-text="loaninfo.loanAmount" style="color: red"></el-input>
      </el-form-item>
      <el-form-item label="还款分期:">
        <el-input v-text="loaninfo.loanStage" style="color: red"></el-input>
      </el-form-item>
      <el-form-item label="每期应还:">
        <el-input v-text="loaninfo.repaymentamount/loaninfo.loanStage" style="color: red"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
      data() {
          return{
              loaninfo: {
                  loanAmount:'',
                  loanStage:'',
                  repaymentamount:''
              }
          }
      },
      mounted() {
          this.loaninfo=this.$route.query.loaninfo
      }
  }
</script>
