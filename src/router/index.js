import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index',
      component: resolve => require(['@/layout/index.vue'], resolve),
      children:[{
        path: 'index',
        name: 'index',
        component: resolve => require(['@/views/Home/index.vue'], resolve),
        meta: [{
          name: '首页'
        }]
      },
      {
        path:'MedicalRecord',
        name: 'MedicalRecord',
        component: resolve => require(['@/views/MedicalRecord/index.vue'],resolve),
        meta:[{
          name:'首页',
          url: '/index'
        },
        {
          name: '就诊记录'
        }]
      },
      {
        path:'RecentBrowse',
        name: 'RecentBrowse',
        component: resolve => require(['@/views/RecentBrowse/index.vue'],resolve),
        meta:[{
          name:'首页',
          url: '/index'
        },
        {
          name: '最近浏览'
        }]
      },
      {
        path:'Collect',
        name: 'Collect',
        component: resolve => require(['@/views/Collect/index.vue'],resolve),
        meta:[{
          name:'首页',
          url: '/index'
        },
        {
          name: '收藏夹'
        }]
      },
      {
        path:'Journal',
        name: 'Journal',
        component: resolve => require(['@/views/Journal/index.vue'],resolve),
        meta:[{
          name:'首页',
          url: '/index'
        },
        {
          name: '工作日志'
        }]
      }
    ],
      
    }
  ],
  
})
