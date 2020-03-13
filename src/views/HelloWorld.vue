<template>
  <div class="svg"></div>
</template>

<script>
import * as d3 from "d3";

export default {
  methods: {
    drawChart() {
      let data = [
        { name: "自费", num: 30 },
        { name: "医保", num: 20 },
        { name: "住院", num: 50 }
      ];
      let width = 400;
      let height = 260;
      let svg = d3
        .select(".svg").append('svg')
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", "0 0 1000 1000")
        .attr("font-size", 10)
        .attr("text-anchor", "middle");

      let pack = d3
        .pack()
        .size([width, height])
        .padding(1.5);
      let root = d3.hierarchy({ children: data }).sum(d => d.num);
      let node = svg
        .selectAll("g")
        .data(pack(root).leaves())
        .enter()
        .append("g")
        .attr("transform", d => `translate(${d.x},${d.y})`);
      node
        .append("circle")
        .attr("r", d => d.r)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("fill-opacity", 0.7)
        .attr("fill", "yellow")
        .attr("stroke", "orange");
      node
        .append("text")
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "central")
        .attr("dy", "1.3em")
        .text(d => d.name);
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>