<template>
    <div class="card-panel">
        <div class="card-panel-description">
            <div class="card-panel-text">
               {{item.title}}
            </div>
            <count-to :start-val="0" :end-val="item.sum" :duration="2600" class="card-panel-num" />
        </div>
        <PageEchart :yNumber="item.devoteY" :xNumber='item.devoteX' :bgColor="item.color" :Type='item.type'></PageEchart>
        <div class="card-panel-bottom">
            <el-card  shadow="never">
                {{item.label}} <span>{{item.num}}</span>
            </el-card>
        </div>
    </div>
</template>
<script>
import CountTo from 'vue-count-to'
import PageEchart from '@/views/Home/components/PageEchart'
export default {
    components: {
        CountTo,
        PageEchart
    },
    props: {
        item:{
             type: Object,
             default: {}
        }
    },
    data () {
        return {
        }
    }
}
</script>
<style lang="scss">

</style>