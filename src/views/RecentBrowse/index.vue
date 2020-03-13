<template>
  <div class="page-content-wrapper">
    <breadcrumb/>
    <div class="page-content">
        <div class="page-main">
            <div class="card-panel">
                 <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="视 图" name="first">
                        <time-line :items="BrowseData"/>
                    </el-tab-pane>
                    <el-tab-pane label="列 表" name="second">
                        <browse-list/>
                    </el-tab-pane>
                </el-tabs>
                
            </div>
        </div>
    </div>  
  </div>
</template>
<script>
import breadcrumb from '@/components/breadcrumb'
import TimeLine from '@/views/RecentBrowse/components/TimeLine'
import BrowseList from '@/views/RecentBrowse/components/BrowseList'
export default {
    components: {
        breadcrumb,
        TimeLine,
        BrowseList
    }, 
    data() {
      return {
          activeName: 'first',
          BrowseData: [
              {BrowseDate: '2020-02-11', name:'王二', age: '20', diagnosis: '心律不齐', diagnoseDate:'2020-01-02'},
              {BrowseDate: '2020-02-01', name:'张三', age: '42', diagnosis: '综合性心律不齐冠心病前期', diagnoseDate:'2020-02-02'},
              {BrowseDate: '2020-01-23', name:'李四', age: '54', diagnosis: '冠心病', diagnoseDate:'2020-01-12'},
              {BrowseDate: '2020-01-14', name:'赵五', age: '24', diagnosis: '急性肠胃炎', diagnoseDate:'2020-01-23'},
              {BrowseDate: '2020-01-10', name:'孙六', age: '65', diagnosis: '哮喘', diagnoseDate:'2020-02-8'},
            ]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }      
}
</script>
<style lang="scss" scoped>
    .page-content-wrapper {
        padding: 20px;
        .page-content {
            background-color: white;
            padding: 20px;
            overflow: hidden;
        }
    }
</style>