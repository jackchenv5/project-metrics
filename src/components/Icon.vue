<template>
  <ul class="icon-list">
    <li v-for="(Icon,key) in icons" class="icon-item">
      <span class="icon-content">
        <i class="el-icon" style="font-size:30px;">
          <!-- :is 属性加载组件 Icon为组件实例 -->
          <component :is='Icon' :key="key" class="icon" />
        </i>
        <span class="icon-name">{{ key }}</span>
      </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
  import { icons } from '@element-plus/icons-vue/global'
</script>
<style>
  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border-top: 1px solid #dcdfe6;
    border-left: 1px solid #dcdfe6;
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }

  .icon-item {
    text-align: center;
    height: 90px;
    font-size: 13px;
    border-right: 1px solid #dcdfe6;
    border-bottom: 1px solid #dcdfe6;
  }

  .icon-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
  }

  .el-icon {
    height: 1em;
    width: 1em;
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;

  }
</style>