<template>
    <el-row :gutter="40" class="panel-group">
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col" v-for="item in items" :key="item.title">
            <areaChart :item="item"></areaChart>
        </el-col>
         <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
            <div class="card-panel">
                <div class="card-panel-description">
                    <div class="card-panel-text">
                       代办事项
                    </div>
                    <count-to :start-val="0" :end-val="commission" :duration="2600" class="card-panel-num" />
                </div>
                <el-progress :percentage="number" :stroke-width="16"></el-progress>
                <div class="card-panel-bottom">
                    <el-card  shadow="never">
                        当天事项 <span>{{num}}</span>
                    </el-card>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>

import areaChart from '@/components/charts/areaChart'
import CountTo from 'vue-count-to'
export default {
    components: {
        areaChart,
        CountTo
    },
    data(){
        return {
            commission: 2,  //代办事项
            num: 0,    //当天事项
            number:70, 
            items:[
                {
                    title:"门诊记录",
                    sum: 13432,
                    devoteY:[10,52,22,46,12],         
                    devoteX:['2019-12-10','2019-12-11','2019-12-12','2019-12-13','2019-12-14'],
                    label: "当天门诊记录",
                    num: 120,
                    color:"#975fe4",
                    type: "line"
                },
                {
                    title:"住院记录",
                    sum: 1343,
                    devoteY:[5,40,18,26,12],         
                    devoteX:['2019-12-10','2019-12-11','2019-12-12','2019-12-13','2019-12-14'],
                    label: "当天住院记录",
                    num: 10,
                    color: "#FFA58A",
                    type: "line"
                },
                 {
                    title:"手术记录",
                    sum: 560,
                    devoteY:[5,12,18,26,13,30,8,20,15,22,55,3],         
                    devoteX:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                    label: "当天手术记录",
                    num: 3,
                    color: "#6F87F0",
                    type: "bar"
                }
            ]
        }

    }
}
</script>
<style lang="scss">
  .el-progress {
      padding: 16.6px 0;
      .el-progress__text {
          display: none;
      }
      .el-progress-bar__inner {
          background-color:#64DEA1;
      }
  }
</style>