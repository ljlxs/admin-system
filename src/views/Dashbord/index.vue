<script setup lang="ts">
import type { OverviewType } from '@/types/Dashbord'
import { ref } from 'vue'
import EchartsItem from '@/components/EchartsItem/index.vue'
type EChartsOption = echarts.EChartsOption
const overviewList = ref<OverviewType[]>([
  {
    name: '总访问量',
    value: '54543.00',
    icon: 'View',
    color: '#f60'
  },
  {
    name: '总订单量',
    value: '54543.00',
    icon: 'Clock',
    color: 'green'
  },
  {
    name: '成交额',
    value: '54543.00',
    icon: 'User',
    color: 'blue'
  },
  {
    name: '告警统计',
    value: '54543.00',
    icon: 'Memo',
    color: 'pink'
  }
])
// 折线图
const chartOption = ref<EChartsOption>({
  title: {
    left: 'center',
    text: '折线图示例',
    textStyle: {
      color: '#333'
    }
  },
  grid: {
    left: '10%',
    top: '13%',
    right: '3%',
    bottom: '8%'
  },
  xAxis: {
    boundaryGap: false,
    type: 'category',
    data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#409EFF'
      }
    }
  ]
})
// 柱状图
const barOption = ref<EChartsOption>({
  title: {
    left: 'center',
    text: '柱状图示例',
    textStyle: {
      color: '#333'
    }
  },
  grid: {
    left: '10%',
    top: '13%',
    right: '3%',
    bottom: '8%'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'bar',
      itemStyle: {
        color: '#F56C6C',
        borderRadius: 20
      },
      barWidth: '20%'
    }
  ]
})
// 待办事项
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
const handleClick = () => {}
// 前往多少页
const currentPage4 = ref(1)
const pageSize4 = ref(5)
const small = ref(false)
const disabled = ref(false)
// 一页多少条
const handleSizeChange = (val: number) => {
  console.log(val)
}
// 当前页
const handleCurrentChange = (val: number) => {
  console.log(val)
}
</script>

<template>
  <div class="dashbord-page">
    <el-row :gutter="10">
      <el-col :span="6" v-for="(item, index) in overviewList" :key="index">
        <div class="top-col">
          <el-icon :style="{ color: item.color }">
            <component :is="item.icon"></component>
          </el-icon>
          <div class="right">
            <p>{{ item.name }}</p>
            <p :style="{ color: item.color }">{{ item.value }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="echart">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>统计图表</span>
          </div>
        </template>
        <div class="text">
          <div>
            <EchartsItem class="line-chart" :chartOption="chartOption" />
          </div>
          <div>
            <EchartsItem class="line-chart" :chartOption="barOption" />
          </div>
        </div>
      </el-card>
    </div>
    <el-card class="table-card">
      <template #header>
        <div class="card-header">
          <span>待办事项</span>
        </div>
      </template>
      <div class="item">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="名称" />
          <el-table-column prop="name" label="时间" />
          <el-table-column prop="name" label="备注" />
          <el-table-column label="操作">
            <template #default>
              <el-button link type="primary" size="small" @click="handleClick">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[5, 10, 15, 20]"
        :small="small"
        :disabled="disabled"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.dashbord-page {
  .top-col {
    display: flex;
    align-items: center;
    background: #fff;
    padding-left: 10px;
    border-radius: 6px;

    .el-icon {
      font-size: 30px;
      margin: 0 20px;
    }
    .right {
      > p:first-child {
        color: #121212;
        font-size: 14px;
      }
    }
  }
  .echart {
    margin-top: 10px;
    .text {
      display: flex;
      > div {
        width: 50%;
      }
    }
    .line-chart,
    .bar-chart {
      height: 300px;
    }
  }
  .table-card {
    margin-top: 20px;
    .item {
      margin-bottom: 10px;
    }
  }
}
</style>
