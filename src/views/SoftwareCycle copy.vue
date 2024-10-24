<template>
  <Header></Header>
  <div style="height: 90px;position: fixed;right: 0;display: flex; flex-direction: column;justify-content: space-around;align-items: flex-end;z-index: 10000;">
    <a href="/software-cycle" class="btn-link active" >软件周期</a>
    <a href="/hardware-cycle" class="btn-link" >硬件周期</a>
  </div>
  <div style="">
    <div style="display: flex;flex-direction: column;width: 100%;height: 94vh;">
        <div style="margin-top: 10px;">
          <a-form :model="formState"  layout="inline">
            <a-form-item label="业务类型">
              <a-select ref="select" style="width: 200px" >
                <a-select-option value="主干版本">主干版本</a-select-option>
                <a-select-option value="单点需求定制">单点需求定制</a-select-option>
                <a-select-option value="战略合作" >战略合作</a-select-option>
                <a-select-option value="技术预研">技术预研</a-select-option>
                <a-select-option value="技术预研">新品研发</a-select-option>
                <a-select-option value="技术预研">特性项目</a-select-option>
                <a-select-option value="技术预研">老品改进</a-select-option>
                <a-select-option value="技术预研">重大入围</a-select-option>
                <a-select-option value="技术预研">其它</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="产品类别">
              <a-select ref="select" style="width: 200px" >
                <a-select-option value="主干版本">TAP</a-select-option>
                <a-select-option value="单点需求定制">交换机</a-select-option>
                <a-select-option value="安全产品" >安全产品</a-select-option>
                <a-select-option value="平台版本">平台版本</a-select-option>
                <a-select-option value="应用软件">应用软件</a-select-option>
                <a-select-option value="无线产品">无线产品</a-select-option>
                <a-select-option value="硬件定制">硬件定制</a-select-option>
                <a-select-option value="网卡">网卡</a-select-option>
                <a-select-option value="通信融合">通信融合</a-select-option>
                <a-select-option value="解决方案">解决方案</a-select-option>
                <a-select-option value="路由器">路由器</a-select-option>
                <a-select-option value="其它">其它</a-select-option>
              </a-select>
            </a-form-item>
          </a-form>
        </div>
  <a-tabs v-model:activeKey="activeKey" size="large" type="card" style="margin-top: 10px;">
    <a-tab-pane key="1">
      <template #tab>
        <span>
          <TableOutlined />
          数据表
        </span>
      </template>

        <a-table :columns="columns" :data-source="data" bordered :row-selection="rowSelection">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span>
                <smile-outlined />
                项目名
              </span>
            </template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a v-if="record.name === '基准指标'" style="color: red;">{{ record.name }}</a>
              <a v-else >{{ record.name }}</a>
            </template>
            <template v-if="column.key === 'age'">
              <span v-if="record.age > 1" style="color: red;">{{ record.age }}</span>
            </template>
            <template v-if="column.key === 'address'">
              <span v-if="record.address > 1" style="color: red;">{{ record.address }}</span>
            </template>
            <template v-else-if="column.key === 'is_base'">
              <span>
                <!-- <a-tag> -->
                  <span v-if="record.is_base === '是'" style="color: red;font-size: 16px;"><CheckCircleOutlined/></span>
                  <span v-else style="color: gainsboro;font-size: 16px;"><CloseCircleOutlined/></span>
                <!-- </a-tag> -->
              </span>
            </template>
            <template v-else-if="column.key === 'action'">
        <span>
          <a>标记为参考项目</a>
          <a-divider type="vertical" />
          <a>取消标记</a>
        </span>
      </template>
          </template>
        </a-table>
    </a-tab-pane>
    <a-tab-pane key="2"  force-render>
      <template #tab>
        <span>
          <PieChartOutlined />
          散点图
        </span>
      </template>
      <!-- <div ref="chartRef" style="height: 80vh;width: 100%;"></div> -->
      <div ref="chartRef" :style="{ width: '100vw', height: '80vh' }"></div>
    </a-tab-pane>
  </a-tabs>

      </div>
    </div>
  
</template>
<script lang="ts" setup>
import { h, ref,watch,onMounted,nextTick } from 'vue';
import Header from '@/components/layouts/Header.vue';


import * as echarts from 'echarts';

//tabs
//echarts start
const chartRef = ref();
onMounted(() => {
  // 确保 DOM 元素已渲染
  // const chartRef = ref(null);
  // let chartInstance = echarts.init(document.getElementById('main'));
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
        // {
        //     left: 'right',
        //     bottom: '5%',
        //     dimension: 3,
        //     min: 0,
        //     max: 100,
        //     itemHeight: 80,
        //     text: ['色彩渐变：计划达成率'],
        //     realtime: false,
        //     calculable: true,
        //     inRange: {
        //         color: ['yellow', 'red'] // 渐变颜色
        //     }
        // },
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

})
const activeKey = ref('1');
//tabs end


// Table start
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
const rowSelection: TableProps['rowSelection'] = {
  onChange: (selectedRowKeys: string[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const columns = [
  {
    name: 'ID',
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    name: '项目名',
    title: '项目名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '创建年份',
    dataIndex: 'create_year',
    key: 'create_year',
  },
  {
    title: '发布年份',
    dataIndex: 'publish_year',
    key: 'publish_year',
  },
  {
    title: '立项时间',
    key: 'flag_time',
    dataIndex: 'flag_time',
  },
  {
    title: '计划发布时间（TR5）',
    key: 'schedule_tr5_time',
    dataIndex: 'schedule_tr5_time',
  },
  {
    title: '实际发布时间（TR5）',
    key: 'ac_tr5_time',
    dataIndex: 'ac_tr5_time',
  },
  {
    title: '延迟天数',
    key: 'delay_time',
    dataIndex: 'delay_time',
  },
  {
    title: 'TR5达成率',
    key: 'tr5_rate',
    dataIndex: 'tr5_rate',
  },
  {
    title: '项目实际周期',
    key: 'ac_time',
    dataIndex: 'ac_time',
  },
  {
    title: '是否为参考项目',
    key: 'is_base',
    dataIndex: 'is_base',
  },
  {
    title: 'Action',
    key: 'action',
  },
];

const data = [
  {
    key: '0',
    id:1,
    name: '项目1',
    create_year:'2020年',
    publish_year:'2021年',
    flag_time:'2020-11-20',
    schedule_tr5_time: '2021-11-20',
    ac_tr5_time: '2020-12-20',
    delay_time: 30,
    tr5_rate: '90%',
    ac_time:120,
    is_base:'是'
  },
  {
    key: '1',
    id:2,
    name: '项目2',
    create_year:'2020年',
    publish_year:'2021年',
    flag_time:'2020-11-20',
    schedule_tr5_time: '2021-11-20',
    ac_tr5_time: '2020-12-20',
    delay_time: 30,
    tr5_rate: '90%',
    ac_time:130,
    is_base:'否'
  },
  {
    key: '2',
    id:3,
    name: '项目3',
    create_year:'2020年',
    publish_year:'2021年',
    flag_time:'2020-11-20',
    schedule_tr5_time: '2021-11-20',
    ac_tr5_time: '2020-12-20',
    delay_time: 30,
    tr5_rate: '90%',
    ac_time:130,
    is_base:'否'
  },
  {
    key: '3',
    id:4,
    name: '项目4',
    create_year:'2020年',
    publish_year:'2021年',
    flag_time:'2020-11-20',
    schedule_tr5_time: '2021-11-20',
    ac_tr5_time: '2020-12-20',
    delay_time: 30,
    tr5_rate: '90%',
    ac_time:130,
    is_base:'否'
  },
  {
    key: '4',
    id:5,
    name: '项目5',
    create_year:'2020年',
    publish_year:'2021年',
    flag_time:'2020-11-20',
    schedule_tr5_time: '2021-11-20',
    ac_tr5_time: '2020-12-20',
    delay_time: 30,
    tr5_rate: '90%',
    ac_time:130,
    is_base:'否'
  },
];
// Table end
// form start
import { reactive, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  name: string;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}
const formState: UnwrapRef<FormState> = reactive({
  name: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});
const onSubmit = () => {
  console.log('submit!', toRaw(formState));
};
const labelCol = { style: { width: '120px' } };
const wrapperCol = { span: 20 };

// form end

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
</style>
