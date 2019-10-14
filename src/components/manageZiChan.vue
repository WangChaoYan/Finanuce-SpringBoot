<template>
  <div>

    <!--data绑定下面的data里面的usedrs-->
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="180px" :model="ziChan">


      <el-form-item label="公司资金">
        <el-tag v-text="ziChan.zijin" type="success"></el-tag>
      </el-form-item>

    </el-form>



  </div>
</template>



<script>
  import axios from 'axios'
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";

  export default {
    components: {ElInput},

    mounted:function () {
        this.query()
      },
    methods: {





      query: function () {

        var url = "api/manageEAM"
        axios.get(url).then(res=>{

          if(res.data!=null){
              //alert(res.data)
            this.ziChan = res.data;//res就是后端返回的，vue前端可以自动解析，
            //alert(ziChan.zijin)
          }else {
            alert("请刷新再次点击")
          }

        })
      },


    },
    data() {
      return {
        labelPosition: 'middle',
        ziChan:{
          Zijin:'',
        }


      }
    },

  }
</script>
