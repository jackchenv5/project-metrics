<template>
  <Header></Header>
  <div style="height: 90px;position: fixed;right: 0;display: flex; flex-direction: column;justify-content: space-around;align-items: flex-end;z-index: 10000;">
      <a href="/software-cycle" class="btn-link" >软件周期</a>
      <a href="/hardware-cycle" class="btn-link active" >硬件周期</a>
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
            甘特图
          </span>
        </template>
          <div>
            <iframe src="/gantt/1" style="width: 100%;height: 40vh" class="custom-iframe"></iframe>
            <iframe src="/gantt/2" style="width: 100%;height: 40vh" class="custom-iframe"></iframe>
          </div>
      </a-tab-pane>
    </a-tabs>
  
        </div>
      </div>
    
  </template>
  <script lang="ts" setup>
  import GanttChart from './gantt/GanttChart.vue';
  import { h, ref,watch,onMounted,nextTick } from 'vue';
  import { CloseCircleOutlined,CheckCircleOutlined,PieChartOutlined,TableOutlined,HomeOutlined,DollarCircleOutlined,FieldTimeOutlined,ProjectOutlined,SettingOutlined,BookOutlined,PropertySafetyFilled,TeamOutlined,WhatsAppOutlined, ScheduleOutlined } from '@ant-design/icons-vue';
  import { MenuProps } from 'ant-design-vue';
  
  import type { MenuTheme } from 'ant-design-vue';
  //tabs
  const activeKey = ref('2');
  //tabs end
  import Header from '@/components/layout/Header.vue'
  
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
      title: '需求',
      key: 'need',
      dataIndex: 'need',
    },
    {
      title: '总体方案及计划',
      key: 'schedule',
      dataIndex: 'schedule',
    },
    {
      title: '设计及编码',
      key: 'code',
      dataIndex: 'code',
    },
    {
      title: '集成调试',
      key: 'debug',
      dataIndex: 'debug',
    },
    {
      title: '集成测试',
      key: 'test',
      dataIndex: 'test',
    },
    {
      title: '系统测试',
      key: 'sys_test',
      dataIndex: 'sys_test',
    },
    {
      title: '场景测试',
      key: 'scen_test',
      dataIndex: 'scen_test',
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
      need:'2020-11-20~2020-11-30',
      schedule: '2020-11-31~2020-12-15',
      code: '2020-12-16~2021-02-20',
      debug: '2020-01-16~2021-03-20',
      test: '2020-02-16~2021-04-20',
      sys_test:'2020-03-16~2021-05-20',
      scen_test:'2020-03-16~2021-06-20',
      is_base:'是'
    },
    {
      key: '1',
      id:2,
      name: '项目2',
      create_year:'2020年',
      publish_year:'2021年',
      need:'2020-11-20~2020-11-30',
      schedule: '2020-11-31~2020-12-15',
      code: '2020-12-16~2021-02-20',
      debug: '2020-01-16~2021-03-20',
      test: '2020-02-16~2021-04-20',
      sys_test:'2020-03-16~2021-05-20',
      scen_test:'2020-03-16~2021-06-20',
      is_base:'否'
    },
  ];
  // Table end
  const ganttData1 = ref({
        data: [
          { id: 1, text: "项目1", start_date: "01-04-2023", duration: 80, progress: 0.4, open: true },
          { id: 2, text: "需求", start_date: "01-04-2023", duration: 5, progress: 0.6, parent: 1 },
          { id: 3, text: "总体方案及计划", start_date: "06-04-2023", duration: 15, progress: 0.6, parent: 1 },
          { id: 4, text: "设计及编码", start_date: "21-04-2023", duration: 20, progress: 0.6, parent: 1 },
          { id: 5, text: "集成调试", start_date: "12-05-2023", duration: 10, progress: 0.6, parent: 1 },
          { id: 6, text: "集成测试", start_date: "15-05-2023", duration: 10, progress: 0.6, parent: 1 },
          { id: 7, text: "系统测试", start_date: "20-05-2023", duration: 10, progress: 0.6, parent: 1 },
          { id: 8, text: "场景测试", start_date: "25-05-2023", duration: 10, progress: 0.6, parent: 1 },
  
        ],
        links: [
          // {id: 1, source: 1, target: 2, type: "1"},
          {id: 2, source: 1, target: 2, type: "1"},
          {id: 3, source: 2, target: 3, type: "1"},
          {id: 4, source: 3, target: 4, type: "1"},
          {id: 5, source: 4, target: 5, type: "1"},
          {id: 6, source: 5, target: 6, type: "1"},
          {id: 7, source: 6, target: 7, type: "1"},
          {id: 8, source: 7, target: 8, type: "1"},
  
        ]
      })
  
    const ganttData2 = ref({
        data: [
  
          { id: 9, text: "项目2", start_date: "01-04-2023", duration: 80, progress: 0.4, open: true },
          { id: 10, text: "需求", start_date: "01-04-2023", duration: 5, progress: 0.6, parent: 9 },
          { id: 11, text: "总体方案及计划", start_date: "06-04-2023", duration: 15, progress: 0.6, parent: 9 },
          { id: 12, text: "设计及编码", start_date: "21-04-2023", duration: 20, progress: 0.6, parent: 9 },
          { id: 13, text: "集成调试", start_date: "12-05-2023", duration: 10, progress: 0.6, parent: 9 },
          { id: 14, text: "集成测试", start_date: "15-05-2023", duration: 10, progress: 0.6, parent: 9 },
          { id: 15, text: "系统测试", start_date: "20-05-2023", duration: 10, progress: 0.6, parent: 9 },
          { id: 16, text: "场景测试", start_date: "25-05-2023", duration: 10, progress: 0.6, parent: 9 },
        ],
        links: [
          {id: 10, source: 9, target: 10, type: "1"},
          {id: 11, source: 10, target: 11, type: "1"},
          {id: 12, source: 11, target: 12, type: "1"},
          {id: 13, source: 12, target: 13, type: "1"},
          {id: 14, source: 13, target: 14, type: "1"},
          {id: 15, source: 14, target: 15, type: "1"},
          {id: 16, source: 15, target: 16, type: "1"},
        ]
      })
  
  onMounted(() => {
    // 初始化 gantt 图
  
  });
  //gant end
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
  