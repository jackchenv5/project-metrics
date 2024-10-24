<template>
  <GanttChart :data="ganttData1" ></GanttChart>
</template>

<script lang="ts" setup>
import GanttChart from './gantt/GanttChart.vue';
import { ref} from 'vue';
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

</script>

