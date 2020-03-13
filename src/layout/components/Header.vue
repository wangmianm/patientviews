<template>
<el-container>
    <el-header style="text-align: right; font-size: 12px">
      <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
      <div class="right-menu">
      <el-avatar icon="el-icon-user-solid" :size="28"></el-avatar>
      <span class="user-name">{{name}}</span>
      <el-dropdown>
        <i class="el-icon-setting"> 设置</i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
    </el-header>
  </el-container>

</template>
<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
export default {
  components:{
    Hamburger
  },
   computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  
   data(){
        return {
          name: "李医生"
        }
    },
    methods:{
      toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
      },
    }
}
</script>
<style lang="scss" scoped>
.el-container {
  .el-header {
    background-color: white;
    color: white;
    line-height: 60px;
    border-bottom: 1px solid #eee;
    .hamburger-container {
      line-height: 60px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;
      padding: 0 !important;
      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }
    .right-menu {
      float: right;
      .el-avatar {
        position: relative;
        top: 7px;
      }
      .user-name {
        color: #606266;
        margin-right: 10px;
        font-size: 18px;
      }
      .el-dropdown {
        i {
          font-size: 18px;
        }
      }
    }
  }
}

.el-dropdown-menu {
  .el-dropdown-menu__item {
    font-size: 16px;
  }
}

</style>