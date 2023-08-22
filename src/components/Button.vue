<template>
  <el-divider>普通按钮</el-divider>
  <el-row>
    <el-button>default</el-button>
    <el-button type="primary">primary</el-button>
    <el-button type="success">success</el-button>
    <el-button type="info">info</el-button>
    <el-button type="warning">warning</el-button>
    <el-button type="danger">danger</el-button>
  </el-row>
  <el-divider>淡色按钮(plain)</el-divider>
  <el-row>
    <el-button plain>default</el-button>
    <el-button plain type="primary">primary</el-button>
    <el-button plain type="success">success</el-button>
    <el-button plain type="info">info</el-button>
    <el-button plain type="warning">warning</el-button>
    <el-button plain type="danger">danger</el-button>
  </el-row>
  <el-divider>圆角按钮(round)</el-divider>
  <el-row>
    <el-button round>default</el-button>
    <el-button round type="primary">primary</el-button>
    <el-button round type="success">success</el-button>
    <el-button round type="info">info</el-button>
    <el-button round type="warning">warning</el-button>
    <el-button round type="danger">danger</el-button>
  </el-row>
  <el-divider>徽章按钮(circle)</el-divider>
  <el-row type="flex" justify="start" gutter="10">
    <el-col :span="1">
      <el-badge :value="12" class="item">
        <el-button>消息</el-button>
      </el-badge>
    </el-col>
    <el-col :span="1">
      <el-badge :value="1" class="item" type="primary">
        <el-button>消息</el-button>
      </el-badge>
    </el-col>
    <el-col :span="1">
      <el-badge is-dot class="item" type="primary">
        <el-button>消息</el-button>
      </el-badge>
    </el-col>
    <el-col :span="1">
      <el-badge value="定制信息" class="item" type="primary">
        <el-button>消息</el-button>
      </el-badge>
    </el-col>
  </el-row>
  <el-divider>圆形按钮(circle)</el-divider>
  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="warning" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="primary" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
</template>
<script lang="ts" setup>
  import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'

</script>