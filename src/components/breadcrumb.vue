<template>
<el-breadcrumb separator="/">
  <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">
        <router-link v-if="item.url" :to="item.url">{{item.name}}</router-link>
        <a v-else>
            {{item.name}}
        </a>
    </el-breadcrumb-item>
</el-breadcrumb>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
        .el-breadcrumb {
            font-size: 14px;
            padding: 0 20px 20px 30px;
        }
</style>