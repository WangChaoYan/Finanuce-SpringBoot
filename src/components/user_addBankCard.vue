<template>
  <div style="margin: auto;border: black solid 1px;text-align: center;width: 50%">
    <el-form :model="bankcard" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="银行卡账号" prop="bankCardId">
        <el-input v-model="bankcard.bankCardId"></el-input>
      </el-form-item>
      <el-form-item label="持卡人姓名" prop="name">
        <el-input v-model="bankcard.name"></el-input>
      </el-form-item>
      <el-form-item label="身份证号码" prop="idCardCode">
        <el-input v-model="bankcard.idCardCode"></el-input>
      </el-form-item>
      <el-form-item label="预留手机号" prop="bankPreMobile">
        <el-input v-model="bankcard.bankPreMobile"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即绑定</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                bankcard: {
                    bankCardId: '',
                    name:'',
                    idCardCode:'',
                    bankPreMobile:''

                },
                rules: {
                    bankCardId:[
                        { required: true, message: '请输入银行卡号', trigger: 'blur' },
                        { min: 19, max: 19, message: '请输入正确的银行卡号', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入持卡人姓名',trigger: 'blur'},
                        { min: 2, max: 8, message: '请输入正确的持卡人姓名',trigger: 'blur' }
                    ],
                    idCardCode: [
                        { required: true, message: '请输入持卡人身份证号码',trigger: 'blur'},
                        { min: 18, max: 18, message: '请输入正确的持卡人身份证号码',trigger: 'blur' }
                    ],
                    bankPreMobile: [
                        { required: true, message: '请输入银行预留的手机号码',trigger: 'blur'},
                        { min: 11, max: 11, message: '请输入正确的银行预留的手机号码',trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var url ="api/verifyuserbankcard"
                        axios.post(url,this.bankcard).then(res=>{
                           if(res.data){
                               this.$message({
                                   type: 'success',
                                   message: '银行卡验证成功'
                               });
                               var url ="api/adduserbankcard"
                               axios.post(url,this.bankcard).then(res=>{
                                   if(res.data==1){
                                       this.$message({
                                           type: 'success',
                                           message: '绑定成功'
                                       });
                                   }else {
                                       this.$message({
                                           type: 'info',
                                           message: '绑定失败'
                                       });
                                   }
                               })
                           }else{
                               this.$message({
                                   type: 'info',
                                   message: '银行卡验证失败'
                               });
                           }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
