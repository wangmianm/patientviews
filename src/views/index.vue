<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div class="log">患者360视图</div>
          <div class="right-menu">
              <span id="HospitalName" class="uusername username-hide-on-mobile" style="margin-right:20px;">人民医院</span>
              <el-dropdown>
                  <div class="avatar-wrapper">
                      <i class="iconfont icon-yisheng"></i>
                      <span id="CurrentUserName" class="username username-hide-on-mobile">管理员</span>
                      <!-- <i class="el-icon-caret-bottom"></i> -->
                  </div>
                    
                  <!-- <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>修改密码</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                  </el-dropdown-menu> -->
                  
              </el-dropdown>
              <a href="javascript:;" class="dropdown-toggle"><img src="../assets/zhuxiao.svg"></a>
          </div>
        </el-header>
        <div class="tages-view-container">
          <div class="left-menu">
            <label>患者EMPI:</label>           
            <span id="HZID">{{obj.id}}</span>
            <label>姓名:</label>
            <span id="HZXM">{{obj.name}}</span>
            <label>性别:</label>
            <span id="HZXB">{{obj.sex}}</span>
            <label>年龄:</label>
            <span id="HZNL">{{obj.age}}</span>
          </div>
          <div class="right-menu">
            <el-menu class="el-menu-demo">
              <el-menu-item index='1'> <i class="iconfont icon-yanqinghover" style="color: darkorange; margin-right: 2px;"></i>隐藏顶部</el-menu-item>
              <el-menu-item index='2'><i class="iconfont icon-quanping" style="color:royalblue;"></i>全景视图</el-menu-item>
              <el-menu-item index='3'><i class="iconfont icon-shijianzhou" style="color:deepskyblue;"></i>时间轴视图</el-menu-item>
              <el-menu-item index='4'><i class="iconfont icon-fanhui1" style="color: #0CB7C6;"></i>返回</el-menu-item>
            </el-menu>
          </div>
        </div>
      
  <el-container>
     <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">摘要信息</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">就诊</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">诊断</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">过敏</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">医嘱</span>
      </el-menu-item>
      <el-submenu index="6">
        <template slot="title"><i class="el-icon-setting"></i>检验</template>
      </el-submenu>
       <el-submenu index="7">
        <template slot="title"><i class="el-icon-setting"></i>检查</template>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title"><i class="el-icon-setting"></i>电子病历</template>
      </el-submenu>
      <el-menu-item index="9">
        <i class="el-icon-setting"></i>
        <span slot=title>手术</span>
      </el-menu-item>
      <el-menu-item index="10">
         <i class="el-icon-setting"></i>
        <span slot=title>病案首页</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
    data() {
        const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
        return {
             tableData: Array(20).fill(item),
             obj: {
               id:'E20160302E16658',
               name: "王二",
               sex: "女",
               age: 37
             }
        }
    }
};
</script>
<style lang="scss">

.el-header {
    background-color: #0CB7C6;
    color: white;
    line-height: 50px;
    height: 50px !important;
    .log {
        float: left;
        font-size: 24px;
        line-height: 50px;
        letter-spacing: 4px;
        cursor: pointer;
    }
    .right-menu {
        float: right;
        font-size: 16px;
        .username-hide-on-mobile {
          color: white;
          font-size: 16px;
        }
        .el-dropdown {
          margin-right: 20px;
          cursor: pointer;
          i {
            color: white;
          }
        }
        .dropdown-toggle {
          color: white;
          img {
            vertical-align: text-top
          }
          
        }
    }
}
.tages-view-container {
  background-color: #ecf5ff;
  height: 36px;
  line-height: 36px;
  padding: 0 20px;
  .left-menu {
    float: left;
    font-weight: bold;
    span {
      margin-right: 15px;
    }
  }
  .right-menu {
    float: right;
    .el-menu {
      background-color: #ecf5ff;
      border:none;
      .el-menu-item {
        height: 36px;
        line-height: 36px;
        float: left;
        padding: 0 10px;
      }
    }
  }
}
</style>