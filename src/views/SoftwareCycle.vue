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
    const cycleData = [
      ['2022-01-01',  80, 5,90,'项目1'],
      ['2022-02-01',  90,   0,100,'项目2'],
      ['2022-02-01',  100, 7,85,'项目3'],
      ['2022-03-01',  105, 10,85,'项目4'],
      ['2022-04-01',  90, 14,85,'项目5'],
      ['2022-05-01',  108, 8,86,'项目6'],
      ['2022-06-01',  110, 12,87,'项目7'],
      ['2022-07-01',  102, 6,80,'项目8'],
      ['2022-08-01',  94, 7,88,'项目9'],
      ['2022-09-01',  118, 20,88,'项目10'],
      ['2022-10-01',  120, 12,50,'项目11'],
      ['2022-11-01',  120, 12,50,'项目12'],
      ['2022-12-01',  120, 12,50,'项目13'],
    ];


    const schemaProject = [
      { name: 'date', index: 0, text: '日期' },
      { name: 'cycle', index: 1, text: '项目周期' },
      { name: 'delay', index: 2, text: '延迟天数' },
      { name: 'rate', index: 3, text: 'TR5达成率' },
      { name: 'project', index: 4, text: '项目名' },
    ];

    const itemStyle = {
      opacity: 0.8,
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: 'rgba(0,0,0,0.3)'
    };

    const option = {
      color: ['#dd4444', '#fec42c', '#80F1BE'],
    legend: {
        top: 10,
        data: ['实际项目周期', '延迟天数', 'TR5达成率'],
        textStyle: {
          fontSize: 16
        }
      },
      grid: {
        left: '10%',
        right: '15%',
        top: '18%',
        bottom: '10%'
      },
      tooltip: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        formatter: function (param: any) {
          var value = param.value;
          if(!value[1]) return ''
          // prettier-ignore
          return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
            + value[4] + '发布时间: ' + value[0] 
            + '</div>'
            + schemaProject[1].text + '：' + value[1] + '<br>'
            + schemaProject[2].text + '：' + value[2] + '<br>'
            + schemaProject[3].text + '：' + value[3] + '<br>'
        }
      },
      xAxis: {
        type: 'time',
        name: '日期',
        nameGap: 16,
        axisLabel: {
                    formatter: function (value) {
                        return echarts.format.formatTime('yyyy-MM-dd', value);
                    }
                },
        nameTextStyle: {
          fontSize: 16
        },
        // max: 31,
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        name: '项目周期',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
          fontSize: 16
        },
        splitLine: {
          show: false
        }
      },
      visualMap: [
        {
          left: 'right',
          top: '5%',
          dimension: 1,
          min: 30,
          max: 160,
          itemWidth: 30,
          itemHeight: 120,
          calculable: true,
          precision: 0.1,
          text: ['圆形大小：项目周期'],
          textGap: 30,
          inRange: {
            symbolSize: [10, 70]
          },
          outOfRange: {
            symbolSize: [10, 70],
            color: ['rgba(255,255,255,0.4)']
          },
          controller: {
            inRange: {
              color: ['#c23531']
            },
            outOfRange: {
              color: ['#eee']
            }
          }
        },
        {
          left: 'right',
          top: '40%',
          dimension: 2,
          min: 0,
          max: 20,
          itemHeight: 120,
          calculable: true,
          text: ['明暗变化：延迟天数'],
          textGap: 30,
          inRange: {
            colorLightness: [1, 0.5]
          },
          outOfRange: {
            color: ['rgba(255,255,255,0.4)']
          },
          controller: {
            inRange: {
              color: ['#c23531']
            },
            outOfRange: {
              color: ['#999']
            }
          }
        },
        {
            left: 'right',
            bottom: '5%',
            dimension: 3,
            min: 0,
            max: 100,
            itemHeight: 80,
            text: ['色彩渐变：计划达成率'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['yellow', 'red'] // 渐变颜色
            }
        },
      ],
      series: [
        {
          name: '实际项目周期',
          type: 'scatter',
          itemStyle: itemStyle,
          encode: { // 使用encode来指定数据列与坐标轴的关系
          x: 0, // 第2个元素作为X轴的值
          y: 1, // 第4个元素（索引为3）作为Y轴的值
          tooltip: [0, 1, 2, 3, 4] // 可选，用于定义tooltip中显示哪些字段
        },
          markLine: {
            symbol: 'none', // 不显示标记点
            lineStyle: {
                color: 'green', // 默认直线颜色
                width: 1 // 直线宽度
            },
            label: {
                normal: {
                    position: 'end',
                    formatter: '{b}: {c}'
                }
            },
            data: [
                { type: 'max', name: '最大值', color:'red' }, // 最大值线
                { type: 'min', name: '最小值' }, // 最小值线
                { type: 'average', name: '平均值' } // 平均线
            ]
        },
          data: cycleData
        },
        {
          name: '延迟天数',
          type: 'scatter',
          itemStyle: itemStyle,
          data: cycleData,
          encode: { // 使用encode来指定数据列与坐标轴的关系
          x: 0, // 第2个元素作为X轴的值
          y: 2, // 第4个元素（索引为3）作为Y轴的值
          tooltip: [0, 1, 2, 3, 4] // 可选，用于定义tooltip中显示哪些字段
        }
        },
        {
          name: 'TR5达成率',
          type: 'scatter',
          itemStyle: itemStyle,
          data: cycleData,
          encode: { // 使用encode来指定数据列与坐标轴的关系
          x: 0, // 第2个元素作为X轴的值
          y: 3, // 第4个元素（索引为3）作为Y轴的值
          tooltip: [0, 1, 2, 3, 4] // 可选，用于定义tooltip中显示哪些字段
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

const activeName = ref('first')

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
