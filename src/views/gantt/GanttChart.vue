<template>
  <div ref="ganttContainer"  class="gantt-container" style="height: 100vh;width: 100%;margin: 0;" ></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gantt } from 'dhtmlx-gantt';

// 引入 dhtmlxGantt 的样式
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

const ganttContainer = ref(null);
let ganttInstance = null;

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  config: {
    type: Object,
    default: () => ({})
  }
});

const initializeGantt = () => {
  if (ganttInstance) {
    ganttInstance.clearAll();
  } else {
    ganttInstance = gantt;
    ganttInstance.init(ganttContainer.value);
  }

  // 应用配置
  for (const key in props.config) {
    ganttInstance.config[key] = props.config[key];
  }
  ganttInstance.config.scale_unit = "week";

  ganttInstance.config.grid_resize = true;
  ganttInstance.config.grid_width = 300;

  // 禁用添加按钮和编辑功能
  ganttInstance.config.show_add_task_button = false;

  ganttInstance.config.readonly = true; // 禁用所有编辑功能

  ganttInstance.i18n.setLocale("cn");


  // 定制表显示的字段
  if (props.config.columns) {
    ganttInstance.config.columns = props.config.columns;
  }

  // 添加任务数据

  ganttInstance.parse(props.data, "json");

  // 渲染 gantt 图
  ganttInstance.render();

}

  onMounted(() => {
  initializeGantt();
});

</script>