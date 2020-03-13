<template>
    <div class="svg"></div>
</template>
<script>
import * as d3 from "d3";
export default {
    data () {
        return {
            width: 780,
            height:323
        }
    },
      mounted () {
        this.initChart();
    },
    methods: {
        // 图表初始化数据
        initChart() {
            let data = [
                { name: "眼科", value: 20},
                { name: "口腔科", value: 30},
                { name: "耳鼻科", value: 38},
                { name: "内科", value: 49},
                { name: "外科", value: 58},
                { name: "牙科", value: 14}
            ];
            let total = data.map(item=>item.value).reduce((a,b) => a + b , 0);
            data.unshift({name:"挂号总数",value:total});
            this.className = +this.item;
            let width = 780;
            let height = 323;
            let color = d3.scaleOrdinal(d3.schemeCategory10);
            let format = d3.format(",d");
            let svg = d3
                .select(".svg").append('svg')
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", "0 0 1500 600")
                .attr("font-size", 15)
                .attr("text-anchor", "middle");
            let pack = d3
                .pack()
                .size([width, height])
                .padding(1.5);
            let root = d3.hierarchy({ children: data }).sum(d => d.value);
            let node = svg
                .selectAll("g")
                .data(pack(root).leaves())
                .enter()
                .append("g")
                .style("cursor","pointer")
                .attr("transform", d => `translate(${d.x},${d.y})`);
            node.append('circle')
                .attr('r', d => d.r) //设置圆的半径
                .attr('cx', d => d.x)
                .attr('cy', d => d.y)
                .attr("fill-opacity", 0.6)
                .style('fill', d => color(d.value));
            var text = node.append('text')
                .attr("x", d => d.x)
                .attr("y", d => d.y)
                .attr("alignment-baseline","central")
                .style("font-size","24")
                .attr("text-anchor", "middle");
            var tspan = text.selectAll('tspan')
                .data(d =>{
                    var arr = [];
                    arr.push(d.data.name);
                    arr.push(d.value+"人");
                    return arr;
                })
                 .enter().append('tspan')
                .text(d => d);
            var x = $(text._groups[0][0]).attr("x");
            $(tspan._groups[0][1]).attr("x",x).attr("dy",30);
            for(var i =1;i<tspan._groups.length; i++){
                $(tspan._groups[i]).hide();
            };
            var tooltip = d3.select("body").append("div")
                .attr("class","tooltip") //用于css设置类样式
                .attr("opacity",0.0);
            node.on('mouseover',d => {
                tooltip.html(d.data.name+":"+d.value + "人")
                    .style("left",(d3.event.pageX)+"px")
                    .style("top",(d3.event.pageY+10)+"px")
                    .style("opacity",0.5);
            })
            .on('mouseout',d => {
                tooltip.style("opacity",0.0);
            });
        }
    }
}
</script>
<style lang="scss">
.tooltip{
        font-family:simsun;
        font-size:16px;
        width:120;
        height:auto;
        position:absolute; 
        text-align:center;
        color: white;
        background-color: #333333;
        border-radius:4px;
        padding: 4px;
        opacity: 0.2;	
    }
</style>