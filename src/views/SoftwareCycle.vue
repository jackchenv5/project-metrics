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
            <el-tab-pane label="数据表" name="1">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="控制图" name="2">
              <div ref="chartRef" :style="{ width: '100vw', height: '80vh' }">
              </div>
            </el-tab-pane>
            <el-tab-pane label="盒须图" name="3">
              <div ref="chartRef1" :style="{ width: '100vw', height: '80vh' }">
              </div>
            </el-tab-pane>
            <el-tab-pane label="能力图" name="4">
              <div ref="chartRef2" :style="{ width: '100vw', height: '80vh' }">
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
const chartRef1 = ref();
const chartRef2 = ref();
function calculateStats(data) {
    if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Input must be a non-empty array');
    }

    // Calculate mean (average)
    const mean = data.reduce((acc, val) => acc + val, 0) / data.length;

    // Calculate standard deviation
    const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length;
    const stdDeviation = Math.sqrt(variance);

    // Calculate upper and lower control limits (3 sigma)
    const ucl = mean + 2 * stdDeviation;
    const lcl = mean - 2 * stdDeviation;

    return {
        mean: mean,
        ucl: ucl,
        lcl: lcl
    };
}

nextTick(() => {
    let chartInstance = echarts.init(chartRef.value);
    let data = [650, 360, 450, 480, 180, 490, 560, 500,510,600,450, 480, 900, 500, 560,504,460,540,500,460,1000];
    let cData = calculateStats(data);
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
    // data: [1, 2, 3, 4, 5, 6, 7, 8,9,10]
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
      name: '实际值',
      data: data,
      type: 'line',
      label: {
        show: true
      },
      tooltip: {
        trigger: 'item',
        formatter: '点位：{b}<br/>实际值：{c}'
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
          { name: '标准上限', yAxis: cData.ucl },
          { name: '标准下限', yAxis: cData.lcl }
        ],
        label: {
          // distance: [20, 8],
          formatter: '{b}：{c}',
          color: '#4eb3d3'
        }
      }
    },
  ]
};


  // 绘制图表
    chartInstance.setOption(option);

  //chart2
  let chartInstance1 = echarts.init(chartRef1.value);
  var option1 = {
  title: [
    {
      text: '盒须图',
      left: 'center'
    },
    {
      text: '上线值: Q3 + 1.5 * IQR \n下限值: Q1 - 1.5 * IQR',
      borderColor: '#999',
      borderWidth: 1,
      textStyle: {
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20
      },
      left: '10%',
      top: '90%'
    }
  ],
  dataset: [
    {
      // prettier-ignore
      source: [
                [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
                [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
                [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
                [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
                [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
            ]
    },
    {
      transform: {
        type: 'boxplot',
        config: { itemNameFormatter: 'expr {value}' }
      }
    },
    {
      fromDatasetIndex: 1,
      fromTransformResult: 1
    }
  ],
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '15%'
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    nameGap: 30,
    splitArea: {
      show: false
    },
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    name: 'km/s minus 299,000',
    splitArea: {
      show: true
    }
  },
  series: [
    {
      name: 'boxplot',
      type: 'boxplot',
      datasetIndex: 1
    },
    {
      name: 'outlier',
      type: 'scatter',
      datasetIndex: 2
    }
  ]
};
chartInstance1.setOption(option1);

  //chart3
  let chartInstance2 = echarts.init(chartRef2.value);
  var option2 = {
  title: {
    text: '能力图'
  },
  legend: {
    data: ['项目1', '项目2']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: '项目周期', max: 6500 },
      { name: '达成率', max: 16000 },
      { name: '延迟率', max: 30000 },
      { name: 'bug率', max: 38000 },
      { name: 'bug解决率', max: 52000 },
      { name: '收益率', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: '项目1'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: '项目2'
        }
      ]
    }
  ]
};
chartInstance2.setOption(option2)
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

const activeName = ref('2')

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
