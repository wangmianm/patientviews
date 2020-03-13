<template>
    <div class="sidebar-logo-container" :class="{'collapse':collapse}">
        <transition name="sidebarLogoFade">
            <router-link v-if="collapse" class="sidebar-logo-link" :to="{name:'index'}">
                <img v-if="logo" :src="logo"  class="sidebar-logo">
                <h1 v-else class="sidebar-title">{{title}}</h1>
            </router-link>
             <router-link v-else key="expand" class="sidebar-logo-link" :to="{name:'index'}">
                <img v-if="logo" :src="logo"  class="sidebar-logo">
                <h1 class="sidebar-title">{{title}}</h1>
            </router-link>
        </transition>
    </div>
</template>
<script>
export default {
  name: 'SidebarLogo',
   props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
    data(){
        return {
            title: '360视图',
            logo: require('../../../icons/360.svg')
        }
    }
}
</script>
<style lang="scss">
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 10px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 20px;
    
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>