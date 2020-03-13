<template>
 <el-container class="app-wrapper">
    <el-container>
        <!-- 侧边导航 -->
        <Sidebar/>
       
         <div :class="classObj" class="main-container">
            <!-- 头部 -->
            <NavHeader/> 
            <!-- 内容 -->
            <app-main />
        </div>
   
   </el-container>

</el-container>  
  
</template>
<script>
import NavHeader from './components/Header' 
import Sidebar from './components/Sidebar/index'
import AppMain from './components/AppMain'
import { mapState } from 'vuex'
export default {
    components: {
        NavHeader,
        Sidebar,
        AppMain
    },
    computed: {
         ...mapState({
            sidebar: state => state.app.sidebar
        }),
        classObj() {
            return {
                hideSidebar: !this.sidebar.opened,
                openSidebar: this.sidebar.opened,
                withoutAnimation: this.sidebar.withoutAnimation,
            }
        }
    }
}
</script>
<style lang="scss">
    .app-wrapper {
        background-color: #F5F6FA;
         .main-container {
            min-height: 100%;
            transition: margin-left .28s;
            position: relative;
            width: 100%;
        }
    }
</style>