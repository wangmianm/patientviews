<template>
    <div class="block">
  <el-timeline>
    <el-timeline-item v-for="(item,index) in items" :key="index" :timestamp="item.BrowseDate" placement="top" size="large">
      <el-card>
        <ul>
            <li><label>姓名：</label><span>{{item.name}}</span></li>
            <li><label>年龄：</label><span>{{item.age}}</span></li>
            <li><label>诊断结果：</label><span>{{item.diagnosis}}</span></li>
            <li><label>就诊时间：</label><span>{{item.diagnoseDate}}</span></li>
        </ul>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            default:[],
        }
    },
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss">
    .block {
        padding: 20px 0 0;
        .el-timeline {
            .el-timeline-item {
                .el-timeline-item__wrapper {
                    .el-timeline-item__timestamp {
                        text-align: left;
                        font-size: 15px;
                    }
                    .el-card.is-always-shadow {
                        .el-card__body {
                            overflow: hidden;
                            p {
                                margin:0;
                            }
                            ul {
                                li {
                                    list-style:none;
                                    float: left;
                                    padding-right: 20px;
                                    font-size: 16px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>