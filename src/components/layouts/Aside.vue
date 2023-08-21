<template>
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
          <el-menu-item index="1-1">CI</el-menu-item>
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
</template>
<script setup>
  const props = defineProps({ 'isCollapse': Boolean })
  function handleOpen (key, keyPath) {
    console.log(key, keyPath)
  }
  function handleClose (key, keyPath) {
    console.log(key, keyPath)
  }
</script>