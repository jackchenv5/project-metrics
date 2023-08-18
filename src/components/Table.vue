<template>
  <el-container>
    <el-aside
      style="width: auto; background-color: #304156; border-right: solid 1px #dcdfe6;    border-bottom: 2px solid rgb(116, 175, 39);">
      <el-col :span="12">
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
              <template #title>分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
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
      </el-col>
    </el-aside>
    <el-container>
      <div style="
                    border-top: 4px solid rgb(48, 65, 86);
                    background: #545c64;
                    border-bottom: 2px solid rgb(205, 210, 216);
                ">
        <el-row justify="space-between">
          <el-col :span="20">
            <el-header>
              <div class="line"></div>
              <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
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
              </el-menu>
            </el-header>
          </el-col>
          <el-col span="2">
            <div style="margin-top: 10px;">
              <el-avatar src="/img/Koala.jpg"></el-avatar>
              <div class="menu-item">
                <el-link type="info">logout</el-link>
              </div>
            </div>
          </el-col>
          <el-col span="2">
          </el-col>
        </el-row>
      </div>
      <el-main class="main">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">编译中心</a></el-breadcrumb-item>
          <el-breadcrumb-item>任务</el-breadcrumb-item>
          <el-breadcrumb-item>我的任务</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
        <el-table :data="
                        tableData.filter(
                            (data) =>
                                !search ||
                                data.name
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                        )
                    " style="width: 100%">
          <el-table-column label="产品" prop="product">
          </el-table-column>
          <el-table-column label="分支" prop="branch">
          </el-table-column>
          <el-table-column label="日期" prop="date">
          </el-table-column>
          <el-table-column label="属主" prop="name">
          </el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="small" placeholder="输入关键字搜索" />
            </template>
            <template slot-scope="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除任务</el-button>
            </template>
          </el-table-column>
        </el-table>
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
  const tableData = [
    {
      product: 'sw_bs08',
      branch: 'trunk',
      date: '2016-05-02',
      name: '陈成',
      address: '迈普通信'
    },
    {
      product: 'sw_bs04',
      branch: 'trunk',
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    },
    {
      product: 'sw_bs02',
      branch: 'trunk',
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    },
    {
      product: 'sw_bs02',
      branch: 'trunk',
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }
  ]
  const search = ref('')
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
    min-width: calc(100% - 26px);
  }

  .menu-item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: var(--el-menu-text-color);
  }
</style>