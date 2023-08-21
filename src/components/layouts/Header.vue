<template>
      <div class="header">
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :ellipsis="false" >
            <el-menu-item index="1">编译中心</el-menu-item>
            <el-sub-menu index="2">
              <template #title>编译</template>
              <el-menu-item index="2-1">任务</el-menu-item>
              <el-menu-item index="2-2">结果</el-menu-item>
              <el-menu-item index="2-3">版本流</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>CI</template>
              <el-menu-item index="3-1">版本级</el-menu-item>
              <el-menu-item index="3-2">变更级</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="4">静态检查</el-menu-item>
            <el-menu-item index="5">PKG打包</el-menu-item>
            <el-menu-item index="6">统计</el-menu-item>
            <el-menu-item index="7"><a href="." target="_blank">配置</a></el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="8">
              <el-avatar src="/img/cc.jpg"></el-avatar>
              <el-text type="info" style="margin-left:3px">退出</el-text>
            </el-menu-item>
          </el-menu>
      </div>
</template>
<script setup>
  import { ref } from 'vue'
  let activeIndex2 = ref('1')
  function handleSelect (key, keyPath) {
    console.log(key, keyPath)
  }
</script>
<style>
  .header {
    border-top: 4px solid rgb(48, 65, 86);
    border-bottom: 2px solid rgb(205, 210, 216);
  }
</style>