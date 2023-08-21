<template>
  <el-container>
    <Aside v-if="isAside" :is-collapse="isCollapse" />
    <el-container>
      <div class="header">
        <el-header>
          <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :ellipsis="false">
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
        </el-header>
      </div>
      <el-main class="main">
        <el-divider>系统布局</el-divider>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-divider>侧边栏控制</el-divider>
        <el-radio-group v-model="isAside" style="margin-bottom: 20px">
          <el-radio-button :label="false">无</el-radio-button>
          <el-radio-button :label="true">有</el-radio-button>
        </el-radio-group>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
  import { ref } from 'vue'
  import Aside from './layouts/Aside.vue'
  const isCollapse = ref(true)
  const isAside = ref(true)
  let activeIndex = ref('1')
  let activeIndex2 = ref('1')
  function handleSelect (key, keyPath) {
    console.log(key, keyPath)
  }
</script>
<style>
  .aside {
    width: auto;
    background-color: #304156;
    border-right: solid 1px #dcdfe6;
    border-bottom: 5px solid rgb(205, 210, 216);
  }

  .header {
    border-top: 4px solid rgb(48, 65, 86);
    background: #545c64;
    border-bottom: 2px solid rgb(205, 210, 216);
  }

  .el-menu-vertical-demo {
    border-right: unset;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }

  .el-menu--horizontal.el-menu {
    border-bottom: unset;
  }

  .main {
    min-height: 835px;
  }

  .flex-grow {
    flex-grow: 1;
  }
</style>