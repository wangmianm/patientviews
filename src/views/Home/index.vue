<template>
    <div class="page-content-wrapper">
        <div class="page-content">
            <panel-group />
            <el-row :gutter="8" class="page-center">
                 <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}">
                    <div class="chart-wrapper">
                        <div class="card-panel-text">
                        当天门诊挂号科室分布图
                        </div>
                        <bubble-chart/>
                    </div>
                </el-col>
                 <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}">
                   <div class="card-panel">
                        <el-card shadow="never">
                            <el-avatar icon="el-icon-user-solid"></el-avatar>
                            <div class="card-panel-right">
                                <div class="card-panel-text">
                                患者收藏总数
                                </div>
                                <count-to :start-val="0" :end-val="Collect" :duration="2600" class="card-panel-num"/>
                                <span style="margin-left:-10px; display:flex;">人</span>
                            </div>
                        </el-card>
                        <div class="card-panel-description">
                            <div class="card-panel-text">
                            门诊疾病占比总数
                            </div>
                            <pie-chart />
                        </div>
                    </div>
                </el-col>
                <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}">
                   <div class="card-panel">
                        <el-card shadow="never">
                            <el-avatar icon="el-icon-user-solid"></el-avatar>
                            <div class="card-panel-right">
                                <div class="card-panel-text">
                                最近浏览记录
                                </div>
                                <count-to :start-val="0" :end-val="browseNum" :duration="2600" class="card-panel-num"/>
                                <span style="margin-left:-10px; display:flex;">人</span>
                            </div>
                        </el-card>
                        <div class="card-panel-description">
                            <div class="card-panel-text card-panel-top">
                            近期门诊确诊疾病数
                            </div>
                            <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane label="当天" name="first">
                                    <bar-chart :className='clinicClass' :Height='height' :XData='ClinicNum' :YData='ClinicData'/>
                                </el-tab-pane>
                                <el-tab-pane label="本周" name="second">
                                    <week-chart />
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="8" class="page-center">
                 <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}">
                    <div class="chart-wrapper">
                        <div class="card-panel-text">
                        当天住院科室分布图
                        </div>
                        <bubble-charts/>
                    </div>
                </el-col>
                 <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}">
                   <div class="card-panel">
                        <div class="card-panel-description">
                            <div class="card-panel-text">
                            重大疾病确诊量
                            </div>
                            <histogram-chart />
                            
                        </div>
                    </div>
                </el-col>
                <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}">
                   <div class="card-panel">
                        <div class="card-panel-description">
                            <div class="card-panel-text card-panel-top">
                            近期手术记录
                            </div>
                               <bar-chart :className='className' :Height='heightChart' :XData='operationNum' :YData='operationData'/>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import PanelGroup from './components/PanelGroup'
import BubbleChart from '@/components/charts/bubbleChart'
import BubbleCharts from '@/components/charts/bubbleCharts'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import weekChart from './components/weekChart'
import HistogramChart from './components/HistogramChart'
import CountTo from 'vue-count-to'
export default { 
    components: {
        PanelGroup,
        BubbleChart,
        BubbleCharts,
        PieChart,
        BarChart,
        weekChart,
        HistogramChart,
        CountTo
    },
    data () {
        return {
            Collect: 61,
            browseNum: 220,
            activeName: 'first',
            clinicClass:"ClinicChart",
            height: '227px',
            ClinicData: ['乙型流感','过敏性咳嗽','急性肠胃炎','扁桃体发炎','感冒'],
            ClinicNum:[79, 52, 200, 334, 390, 330, 220],
            className: 'operationChart',
            heightChart:'327px',
            operationNum:[23,54,68,98,42,56,76],
            operationData:['2019-12-12','2019-12-13','2019-12-14','2019-12-15','2019-12-16','2019-12-17','2019-12-18']
        }
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>
<style lang="scss">
    .page-content-wrapper {
        .page-content {
            padding: 20px 0;
              .panel-group {
                margin:0 !important;
                .card-panel-col {
                    .card-panel {
                        background-color: #ffffff;
                        box-shadow:0px 6px 20px 0px rgba(0,0,0,0.06);
                        border-radius:10px;
                        .card-panel-description {
                            text-align: left;
                            padding: 10px 20px 0 20px;
                            .card-panel-text {
                                color: #666666FF;
                                margin-bottom: 6px;
                            }
                            .card-panel-num {
                                color: #1A1A1AFF;
                                font-size: 22px;
                            }
                        }
                        .card-panel-bottom {
                            padding: 0 20px;
                            .el-card {
                                border:none;
                                border-top: 1px solid #EBEEF5;
                                .el-card__body {
                                    padding: 10px 0;
                                    color: #666666FF;
                                    text-align: left;
                                    span {
                                        color: #1A1A1AFF;
                                    }
                                }
                            }
                        }                
                    }
                }
            }
            .el-row {
                margin: 0 !important;
            }
            .page-center {
                padding-top: 20px;
                .el-col {
                    padding-left: 20px !important;
                    padding-right: 20px !important;
                    .chart-wrapper {
                        border-radius:10px;
                        background-color: #ffffff;
                        box-shadow:0px 6px 20px 0px rgba(0,0,0,0.06);
                        border: none;
                        .card-panel-text {
                            padding: 10px 0 0;
                        }
                    }
                    .card-panel {
                        .el-card {
                            border-radius:10px;
                            background-color: #ffffff;
                            box-shadow:0px 6px 20px 0px rgba(0,0,0,0.06);
                            border: none;
                            margin-bottom: 20px;
                            .el-card__body {
                                overflow: hidden;
                                padding: 10px 20px;
                                .el-avatar {
                                    float: left;
                                    margin-top: 6px;
                                }
                                .card-panel-right {
                                    float: left;
                                    padding-left: 20px;
                                    .card-panel-text {
                                        color: #666666;
                                        padding-bottom: 5px;
                                    }
                                    .card-panel-num {
                                        float: left;
                                        color: #1A1A1AFF;
                                        font-size: 22px;
                                    }
                                }
                            }
                        }
                        .card-panel-description {
                            text-align: left;
                            border-radius:10px;
                            background-color: #ffffff;
                            box-shadow:0px 6px 20px 0px rgba(0,0,0,0.06);
                            overflow: hidden;
                            .card-panel-text {
                                color: #666666;
                                padding: 10px 0 0 20px;
                            }
                            .card-panel-top {
                                float: left;
                            }
                            .el-tabs__header {
                                float: right;
                                margin-bottom: 0;
                                padding-right: 20px;
                            }
                            .el-tabs__content {
                                clear: both;
                            }
                            .operationChart {
                                clear: both;
                            }
                        }
                    }
                }
            }
        }
    }
</style>