<template xmlns:font-family="http://www.w3.org/1999/xhtml" xmlns:line-height="http://www.w3.org/1999/xhtml">
  <div style="margin: auto;border: black solid 1px;text-align: center">
    <h1>您当前的贷款额度为</h1>
    <h2 style="color: red" v-text="loan.limit"></h2>
    <h1>当前日息低至</h1>
    <h2 style="color: red" v-text="loan.rate"></h2>
    <el-button type="danger" round v-on:click="loan_do">立即借款</el-button>
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
            loan_do() {
                this.$router.push({ path:'/loan_do'})
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
