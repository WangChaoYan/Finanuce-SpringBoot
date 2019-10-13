<template>
  <div style="margin: auto;text-align: center">
    <el-form :inline="true" :model="loan" class="demo-form-inline">
    <el-form-item label="用户贷款额度">
      <el-input-number v-model="loan.limit"  :min="0" :max="100000" :step="1000" ></el-input-number>
    </el-form-item><br>
    <el-form-item label="用户贷款利率">
      <el-input-number v-model="loan.rate"  :step="0.000001"></el-input-number>
    </el-form-item><br>
    <el-form-item>
      <el-button type="primary" @click="update">确认</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                loan: {
                    rate: '',
                    limit: ''
                }
            }
        },
        mounted:function(){
            this.loadloanproduct();
        },
        methods: {
            update() {
                var url ="api/updateloanproduct"
                axios.post(url,this.loan).then(res=>{
                  if (res.data==1){
                      this.$message({
                          type: 'success',
                          message: '修改成功'
                      })
                      this.loadloanproduct()
                  }else {
                      this.$message({
                          type: 'error',
                          message: '修改失败'
                      })
                      this.loadloanproduct()
                  }
                })
            },
            loadloanproduct(){
                var url ="api/loadloanproduct"
                axios.get(url).then(res=>{
                    this.loan.limit=res.data.limit;
                    this.loan.rate=res.data.rate;
                })
            }
        }
    }
</script>
