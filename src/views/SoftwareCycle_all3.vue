<template>
  <Header></Header>
  <div style="height: 90px;position: fixed;right: 0;display: flex; flex-direction: column;justify-content: space-around;align-items: flex-end;z-index: 10000;">
    <a href="/software-cycle" class="btn-link active" >软件周期</a>
    <a href="/hardware-cycle" class="btn-link" >硬件周期</a>
  </div>
  <div style="">
    <div style="display: flex;flex-direction: column;width: 100%;height: 94vh;">
        <div style="margin-top: 10px;">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="业务类型">
      <el-select
        v-model="formInline.region"
        placeholder="业务类型"
        clearable
      >
        <el-option label="主干版本" value="主干版本" />
        <el-option label="单点需求定制" value="单点需求定制" />
      </el-select>
    </el-form-item>
    <el-form-item label="产品类别">
      <el-select
        v-model="formInline.region"
        placeholder="产品类别"
        clearable
      >
        <el-option label="TAP" value="TAP" />
        <el-option label="交换机" value="交换机" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>
        </div>
        <div>
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="数据表" name="first">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="散点图" name="second">
              <div ref="chartRef" :style="{ width: '100vw', height: '80vh' }">
              </div>
            </el-tab-pane>
          </el-tabs>

    </div>

    </div>

    </div>
  
</template>
<script lang="ts" setup>
import { h, ref,watch,onMounted,nextTick } from 'vue';
import Header from '@/components/layouts/Header.vue';
import * as echarts from 'echarts';

import { reactive } from 'vue'
const chartRef = ref();
nextTick(() => {
    let chartInstance = echarts.init(chartRef.value);
    let data = [650, 360, 450, 480, 200, 500, 560, 820,500,600]
    const option = {
  toolbox: {
    feature: {
      saveAsImage: {
        name: 'x-Bar R均值控制图'
      }
    }
  },
  xAxis: {
    type: 'category',
    axisTick: false,
    data: [1, 2, 3, 4, 5, 6, 7, 8,9,10]
  },
  tooltip: {
    trigger: 'item'
  },
  grid: {
    right: '15%'
  },
  dataZoom: [
    {
      type: 'slider',
      show: true,
    },
    {
      // 没有下面这块的话，只能拖动滚动条，
      // 鼠标滚轮在区域内不能控制外部滚动条
      type: 'inside',
      // 滚轮是否触发缩放
      zoomOnMouseWheel: true,
      // 鼠标滚轮触发滚动
      moveOnMouseMove: false,
      moveOnMouseWheel: false
    }
  ],

  yAxis: {
    type: 'value',
    max: Math.max(...data) + 100,
    min: 0
  },
  legend: {
    show: true
  },
  series: [
    {
      name: '实测值',
      data: data,
      type: 'line',
      label: {
        show: true
      },
      tooltip: {
        trigger: 'item',
        formatter: '点位：{b}<br/>实测值：{c}'
      },
      markLine: {
        symbol: 'none',
        lineStyle: {
          color: '#078307'
        },
        tooltip:{
          
        },
        data: [
          {
            name: '平均线',
            type: 'average',
            lineStyle: {
              color: 'red'
            },
            label: {
              color: 'red'
            }
          },
          { name: 'LPL', yAxis: 200 },
          { name: 'LCL', yAxis: 120 },
          
        ],
        label: {
          formatter: '{b}：{c}',
          color: '#078307'
        }
      },
      color: '#084081',
      smooth: false,
      symbolSize: 10,
      symbol: 'circle'
    },
    {
      name: '异常值',
      markLine: {
        symbol: 'none',
        lineStyle: {
          color: '#078307'
        },
        tooltip:{
          
        },
        data: [
          [
            {
              lineStyle: {
                color: 'red'
              },
              label:{
                show:false
              },
              tooltip:{
                show:false
              },
              coord: ['2', 0]
            },
            {
              coord: ['2', 932]
            }
          ],
          [
            {
              lineStyle: {
                color: 'red'
              },
              label:{
                show:false
              },
              tooltip:{
                show:false
              },
              coord: ['3', 0]
            },
            {
              coord: ['3', 901]
            }
          ]
          
        ],
        label: {
          // distance: [20, 8],
          formatter: '{b}：{c}',
          color: '#078307'
        }
      },
      type: 'line',
      symbol: 'circle',
      symbolSize: 14,
      color: 'red',
      lineStyle: {
        // color:'#fff'
        // opacity: 0
      },
      smooth: true,

      markPoint: {
        tooltip: {
          formatter: '{b}'
        },
        data: [
          {
            name: '',
            coord: [1, 932],
            symbolSize: 14,
            symbol: 'circle'
          },
          {
            name: '',
            coord: [2, 901],
            symbolSize: 14,
            symbol: 'circle'
          }
        ]
      }
    },
    {
      name: '控制线',
      symbol: 'circle',
      color: '#084081',
      type: 'line',
      markLine: {
        lineStyle: {
          color: 'red',
          width:2,
          type:'solid',
        },
        silent:true,
        symbol: 'none',
        data: [
          { name: '标准上限', yAxis: 600 },
          { name: '标准下限', yAxis: 80 }
        ],
        label: {
          // distance: [20, 8],
          formatter: '{b}：{c}',
          color: '#4eb3d3'
        }
      }
    },
    {
      name: '异常点堆叠',
      type: 'line',
      symbol: 'rect',
      color: '#d9001b',
      smooth: true,

      markPoint: {
        tooltip: {
          formatter: '{b}'
        },
        data: [
          {
            name: '1个点远离中心线超过3倍标准差',
            coord: [1, 20],
            symbolSize: 10,
            itemStyle: {
              color: '#ff8f00'
            },
            symbol: 'rect'
          },
          {
            name: '连续7个点在同一侧',
            coord: [2, 240],
            symbolSize: 10,
            itemStyle: {
              color: '#1a9391'
            },
            symbol: 'rect'
          },
          {
            name: '连续8个点在同一侧',
            coord: [2, 120],
            symbolSize: 10,
            itemStyle: {
              color: '#4643bb'
            },
            symbol: 'rect'
          },
          {
            name: '连续9个点在同一侧',
            coord: [3, 360],
            symbolSize: 10,
            itemStyle: {
              color: '#610c8c'
            },
            symbol: 'rect'
          }
        ]
      }
    }
  ]
};


  // 绘制图表
    chartInstance.setOption(option);
  })

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}

import type { TabsPaneContext } from 'element-plus'

const activeName = ref('second')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

</script>

<style scoped>
/* 去掉 a 标签的默认样式 */
.btn-link {
  text-decoration: none; /* 去掉下划线 */
  color: white; /* 文字颜色 */
  background-color: #23527c; /* 背景颜色 */
  padding: 10px 20px; /* 内边距 */
  border: none; /* 去掉边框 */
  border-top-left-radius: 5px; /* 左上角圆角 */
  border-bottom-left-radius: 5px; /* 左下角圆角 */
  border-left: 5px;
  display: inline-block; /* 使 a 标签像块级元素一样显示 */
  cursor: pointer; /* 鼠标指针变为手形 */
  font-size: 16px; /* 字体大小 */
  transition: background-color 0.3s ease; /* 平滑过渡效果 */
}

/* 鼠标悬停时的样式 */
.btn-link:hover {
  background-color: #cae7c6; /* 改变背景颜色 */
}

/* 当前选中的样式 */
.btn-link.active {
  background-color: rgb(116, 116, 86); /* 改变背景颜色 */
  font-weight: bold; /* 加粗文字 */
}

.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
