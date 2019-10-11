<template>
  <div>
    <el-table :data="order" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="tradcname" label="购买的基金" width="180" align="center">
      </el-table-column>
      <el-table-column prop="tradacount" label="金额" width="180" align="center">
      </el-table-column>
      <el-table-column prop="tradnum" label="订单号" width="180" align="center">
      </el-table-column>
      <el-table-column prop="tradtime" label="下单时间" width="180" align="center">
      </el-table-column>
      <el-table-column prop="tradstatus" label="状态" width="180" align="center">
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    tableRowClassName({row,rowIndex}) {
        if(rowIndex===1){
            return 'warning_row';
        }else if(rowIndex===3){
            return 'success-row';
        }

    },
    data(){
      return{
          order:[]
      }
    },mounted(){
      axios.post("/api/alipay_callback",{app_id:this.$route.query.app_id,
        total_amount:this.$route.query.total_amount,out_trade_no:this.$route.query.out_trade_no}).then(res=>{
        this.order=res.data;
      })
    }
  }
</script>
