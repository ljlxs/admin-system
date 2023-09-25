<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted, nextTick } from 'vue'
const option = defineProps<{
  chartOption: any
}>()
const chartRef = ref()
let chart: echarts.ECharts

onMounted(() => {
  chart = echarts.init(chartRef.value)
  chart.setOption(option.chartOption)
  // 监听浏览器的窗口变化, 让图表进行自适应
  window.addEventListener('resize', () => {
    nextTick(() => {
      chart && chart.resize()
    })
  })
})
</script>
<template>
  <div ref="chartRef"></div>
</template>
<style lang="scss" scoped></style>
