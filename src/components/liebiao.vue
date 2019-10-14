<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>理财管理</template>

            <el-submenu index="1-1">
              <template slot="title">定期理财</template>
              <el-menu-item index="1-1-1" @click="">长期</el-menu-item>
              <el-menu-item index="1-1-2" @click="">中短期</el-menu-item>
              <el-menu-item index="1-1-3" @click="">活期</el-menu-item>
            </el-submenu>

            <el-submenu index="1-4">
              <template slot="title">基金投资</template>
              <el-menu-item index="1-4-1"@click="">热销基金</el-menu-item>
              <el-menu-item index="1-4-2" @click="">主题投资</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>贷款管理</template>
            <el-menu-item index="1-4-1" @click="">贷款管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>
<script>

</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
