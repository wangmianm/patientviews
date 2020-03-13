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
      default: '100%'
    },
    height: {
      type: String,
      default: '235px'
    }
  },
  data() {
    return {
        chart: null,
        data: [
            { value: 280, name: '过敏性鼻炎' },
            { value: 259, name: '哮喘' },
            { value: 220, name: '甲状腺' },
            { value: 198, name: '急性肾炎' },
            { value: 197, name: '甲流' },
            { value: 129, name: '感冒' },
            { value: 99, name: '其它' }
        ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: null,
          show: false
        },
        series: [
          {
            name: '数据',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['47%', '55%'],
            data: this.data,
             label: {
                show: true
            },
             emphasis: {
                label: {
                    show: true
                }
            },
          }
        ]
      })
    }
  }
}
</script>
