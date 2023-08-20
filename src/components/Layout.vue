<template>
  <el-container>
    <el-aside class="aside">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#ffd04b">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <Avatar />
            </el-icon>
            <span>用户</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">编译</el-menu-item>
            <el-menu-item index="1-2">CI</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-3">个人CI</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>密码</template>
            <el-menu-item index="1-4-1">修改密码</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon>
            <Promotion />
          </el-icon>
          <span>详情</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <Histogram />
          </el-icon>
          <span>统计</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <Tools />
          </el-icon>
          <span>配置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
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
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
  import { ref } from 'vue'
  const isCollapse = ref(true)
  function handleOpen (key, keyPath) {
    console.log(key, keyPath)
  }
  function handleClose (key, keyPath) {
    console.log(key, keyPath)
  }
  function handleSelect (key, keyPath) {
    console.log(key, keyPath)
  }
  let activeIndex = ref('1')
  let activeIndex2 = ref('1')
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