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
  <el-divider>使能</el-divider>
  <el-row>
    <el-button disabled plain>default</el-button>
    <el-button disabled plain type="primary">primary</el-button>
    <el-button disabled plain type="success">success</el-button>
    <el-button disabled plain type="info">info</el-button>
    <el-button disabled plain type="warning">warning</el-button>
    <el-button disabled plain type="danger">danger</el-button>
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
  <el-divider>link text</el-divider>
  <el-row>
    <el-button link plain>default</el-button>
    <el-button link plain type="primary">primary</el-button>
    <el-button link plain type="success">success</el-button>
    <el-button link plain type="info">info</el-button>
    <el-button link plain type="warning">warning</el-button>
    <el-button link plain type="danger">danger</el-button>
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
  <el-divider>图形按钮(circle)</el-divider>
  <el-row>
    <el-button :icon="Search" type="primary">Search</el-button>
    <el-button type="warning" :icon="Edit" />
    <el-button type="success" :icon="Check" />
    <el-button type="info" :icon="Message" />
    <el-button type="primary" :icon="Star" />
    <el-button type="danger" :icon="Delete" />
  </el-row>
  <el-divider>按钮组</el-divider>
  <el-row>
    <el-button-group>
      <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
      <el-button type="primary">Next Page<el-icon class="el-icon--right">
          <ArrowRight />
        </el-icon>
      </el-button>
    </el-button-group>
    <el-button-group style="margin-left:20px;">
      <el-button :icon="Search" type="primary">Search</el-button>
      <el-button type="warning" :icon="Edit" />
      <el-button type="success" :icon="Check" />
      <el-button type="info" :icon="Message" />
      <el-button type="primary" :icon="Star" />
      <el-button type="danger" :icon="Delete" />
    </el-button-group>
  </el-row>
  <el-divider>加载按钮</el-divider>
  <el-row>
    <el-button type="primary" loading>Loading</el-button>
    <el-button type="primary" loading :loading-icon="Star">Loading</el-button>
  </el-row>
  <el-divider>调整尺寸</el-divider>
  <el-row>
    <el-button type="primary" loading size="small">Loading</el-button>
    <el-button type="primary" loading>Loading</el-button>
    <el-button type="primary" loading size="large">Loading</el-button>
  </el-row>
</template>
<script lang="ts" setup>
  import { Check, Delete, Edit, Message, Search, Star, ArrowRight, ArrowLeft } from '@element-plus/icons-vue'
</script>