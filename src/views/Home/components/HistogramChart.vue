<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>
<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
export default {
    props: {
        className: {
            type: String,
            default: 'chart'
        },
            width: {
            type: String,
            default: '90%'
        },
            height: {
            type: String,
            default: '327px'
        }
    },
    data() {
    return {
        chart: null,
        data:['肺癌','胃癌','甲状腺癌','肝癌','鼻咽癌','白血病'],
        number:[79, 52, 200, 334, 456, 330]
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
        this.chart = echarts.init(this.$el, 'macarons')
        this.chart.setOption({
        
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
            top: 15,
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: this.data,
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                nterval:0,
                rotate:40
            }
        }],
        yAxis: [{
            type: 'value',
        }],
        series: [{
            name: '统计',
            type: 'bar',
            barWidth: '50%',
            data: this.number,
            smooth: true,
            itemStyle: {
                normal: {
                    color: '#409EFF',
                    lineStyle: {
                        color: '#409EFF',
                        width: 2
                    },
                    areaStyle: {
                        color: '#409EFF'
                    }
                }
            },
        }]
      })
      }
  }
}
</script>
<style lang="scss">

</style>