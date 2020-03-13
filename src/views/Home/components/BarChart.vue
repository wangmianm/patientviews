<template>
  <div :class="className" :style="{height:Height,width:Width}" />
</template>
<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
export default {
    props: {
        className: {
            type: String,
            default: ''
        },
        Width: {
            type: String,
            default: '100%'
        },
        Height: {
            type: String,
            default: ''
        },
        XData:{
            type: [Number,Array],
            default:[],
        },
        YData:{
            type: [Number,Array],
            default:[],
        }
    },
    data() {
    return {
        chart: null
    }
    },
    mounted() {
        this.$nextTick(() => {
            this.initChart()

    })
  },
  methods: {
      // 图表初始化数据
      initChart() {
        this.chart = echarts.init(this.$el, 'macarons');
         this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
            top: 10,
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'value',
            show: false
        }],
        yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            data: this.YData
        }],
        series: [{
            name: '统计',
            type: 'bar',
            stack: '总量',
            barWidth: '50%',
            label: {
                    show: true
                },
            data: this.XData
        }]
      })
      }
  }
}
</script>
<style lang="scss">

</style>