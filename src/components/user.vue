<template>
  <div>
    <div id="header"></div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <div class="tree">
            <ul style="padding-left:0px;" class="list-group">
              <li class="list-group-item tree-closed" >
                <a href="main.html"><i class="glyphicon glyphicon-dashboard"></i> 控制面板</a>
              </li>
              <li class="list-group-item">
                <span><i class="glyphicon glyphicon glyphicon-tasks"></i> 权限管理 <span class="badge" style="float:right">3</span></span>
                <ul style="margin-top:10px;">
                  <li style="height:30px;">
                    <a href="user.html" style="color:red;"><i class="glyphicon glyphicon-user"></i> 用户维护</a>
                  </li>
                  <li style="height:30px;">
                    <a href="role.html"><i class="glyphicon glyphicon-king"></i> 角色维护</a>
                  </li>
                  <li style="height:30px;">
                    <a href="permission.html"><i class="glyphicon glyphicon-lock"></i> 许可维护</a>
                  </li>
                </ul>
              </li>
              <li class="list-group-item tree-closed">
                <span><i class="glyphicon glyphicon-ok"></i> 业务审核 <span class="badge" style="float:right">3</span></span>
                <ul style="margin-top:10px;display:none;">
                  <li style="height:30px;">
                    <a href="auth_cert.html"><i class="glyphicon glyphicon-check"></i> 实名认证审核</a>
                  </li>
                  <li style="height:30px;">
                    <a href="auth_adv.html"><i class="glyphicon glyphicon-check"></i> 广告审核</a>
                  </li>
                  <li style="height:30px;">
                    <a href="auth_project.html"><i class="glyphicon glyphicon-check"></i> 项目审核</a>
                  </li>
                </ul>
              </li>
              <li class="list-group-item tree-closed">
                <span><i class="glyphicon glyphicon-th-large"></i> 业务管理 <span class="badge" style="float:right">7</span></span>
                <ul style="margin-top:10px;display:none;">
                  <li style="height:30px;">
                    <a href="cert.html"><i class="glyphicon glyphicon-picture"></i> 资质维护</a>
                  </li>
                  <li style="height:30px;">
                    <a href="type.html"><i class="glyphicon glyphicon-equalizer"></i> 分类管理</a>
                  </li>
                  <li style="height:30px;">
                    <a href="process.html"><i class="glyphicon glyphicon-random"></i> 流程管理</a>
                  </li>
                  <li style="height:30px;">
                    <a href="advertisement.html"><i class="glyphicon glyphicon-hdd"></i> 广告管理</a>
                  </li>
                  <li style="height:30px;">
                    <a href="message.html"><i class="glyphicon glyphicon-comment"></i> 消息模板</a>
                  </li>
                  <li style="height:30px;">
                    <a href="project_type.html"><i class="glyphicon glyphicon-list"></i> 项目分类</a>
                  </li>
                  <li style="height:30px;">
                    <a href="tag.html"><i class="glyphicon glyphicon-tags"></i> 项目标签</a>
                  </li>
                </ul>
              </li>
              <li class="list-group-item tree-closed" >
                <a href="param.html"><i class="glyphicon glyphicon-list-alt"></i> 参数管理</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title"><i class="glyphicon glyphicon-th"></i> 数据列表</h3>
            </div>
            <div class="panel-body">
              <form class="form-inline" role="form" style="float:left;">
                <div class="form-group has-feedback">
                  <div class="input-group">
                    <div class="input-group-addon">查询条件</div>
                    <input class="form-control has-success" type="text" id="searchName" placeholder="请输入查询条件">
                  </div>
                </div>
                <button type="button" onclick="search()" class="btn btn-warning"><i class="glyphicon glyphicon-search"></i> 查询</button>
              </form>
              <button type="button" class="btn btn-danger" id="batch_del" style="float:right;margin-left:10px;"><i class=" glyphicon glyphicon-remove"></i> 删除</button>
              <button type="button" class="btn btn-primary" style="float:right;" onclick="window.location.href='add.html'"><i class="glyphicon glyphicon-plus"></i> 新增</button>
              <br>
              <hr style="clear:both;">
              <div class="table-responsive">
                <table class="table  table-bordered">
                  <thead>
                  <tr >
                    <th width="30">#</th>
                    <th width="30"><input type="checkbox"  id="checkAllBtn"></th>
                    <th>账号</th>
                    <th>名称</th>
                    <th>邮箱地址</th>
                    <th width="100">操作</th>
                  </tr>
                  </thead>
                  <tbody>

                  </tbody>
                  <tfoot>
                  <tr >
                    <td colspan="6" align="center">
                      <ul class="pagination">

                        <!--<li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>-->
                        <!--<li><a href="#">2</a></li>-->
                        <!--<li><a href="#">3</a></li>-->
                        <!--<li><a href="#">4</a></li>-->
                        <!--<li><a href="#">5</a></li>-->
                        <!--<li id="next"><a href="#"  onclick="nextPage()">下一页</a></li>-->
                      </ul>
                    </td>
                  </tr>

                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
