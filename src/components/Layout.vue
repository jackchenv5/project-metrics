<template>
  <el-container>
    <Aside v-if="isAside" :is-collapse="isCollapse" :style="{backgroundColor:asideColor}"
      :aside-bg-color="asideColor" />
    <el-container>
      <Header />
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
        <el-divider>主题控制</el-divider>
        <el-button type="info" @click="changeTheme">切换主题</el-button>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import Aside from './layouts/Aside.vue'
  import Header from './layouts/Header.vue'
  const headerColors = ["#409eff", "#444950", "#191a23"]
  const asideColors = ["#6e90b5", "#444950", "#191a23", "##bfbf60"]
  let headerColor = ref("")
  let asideColor = ref("#444")

  let count = 0
  const isCollapse = ref(true)
  const isAside = ref(true)
  function changeTheme () {
    if (count == headerColors.length - 1) { count = 0; } else {
      count++;
    }
    asideColor = asideColors[count]
    console.log(count)
    console.log(headerColor, asideColor)
  }
</script>
<style>
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