<template>
<el-container style="display: contents">
    <el-aside style="background-color: rgb(238, 241, 246); width: 200px;" :style="{width:sideBarWidth}" :collapse="isCollapse">
            <logo :collapse="isCollapse" />
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"  :collapse="isCollapse">
           <el-menu-item index="1">
                <i class="iconfont icon-yibiaopan"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="iconfont icon-jiuzhenjilu"></i>
                <span slot="title">就诊记录</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="iconfont icon-zuijinliulan"></i>
                <span slot="title">最近浏览</span>
            </el-menu-item>
             <el-menu-item index="4">
                <i class="iconfont icon-shoucangjia"></i>
                <span slot="title">收藏夹</span>
            </el-menu-item>
             <el-menu-item index="5">
                <i class="iconfont icon-gongzuorizhi1"></i>
                <span slot="title">工作日志</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</el-container>
</template>
<script>
import { mapGetters } from 'vuex'
import Logo from './logo'
export default {
    components:{ Logo },
     computed: {
    ...mapGetters([
      'sidebar'
    ]), 
    isCollapse() {
      return !this.$store.getters.sidebar.opened
    },
    sideBarWidth() {
    }
  },
    data() {
        return {

        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="scss">
    .el-container {
        .page-logo {
            background-color: #00284d;
            a {
                display: block;
                line-height: 20px;
                font-size: 20px;
                color: white; 
            }
        }
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 250px;
            min-height: 400px;
        }
        .el-menu{
            border-right: none;
            background-color: #001529;
            height: 951px;
            .el-menu-item {
                text-align: left;
                color: rgba($color: #ffffff, $alpha: 0.6);
                font-size: 16px;
                i {
                    color: rgba($color: #ffffff, $alpha: 0.6);
                }
                i:hover {
                     color: rgba($color: #ffffff, $alpha: 1);
                }
            }
            .el-menu-item.is-active,.el-menu-item:hover,.el-menu-item:focus {
                background-color: #33669a;
                color: rgba($color: #ffffff, $alpha: 1);

            }
           
        }

    }
</style>