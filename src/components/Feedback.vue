<template>
  <el-divider>提示框</el-divider>
  <el-alert title="success alert" type="success" show-icon />
  <el-alert title="info alert" type="info" show-icon />
  <el-alert title="warning alert" type="warning" show-icon />
  <el-alert title="danger alert" type="error" show-icon />
  <el-divider>对话框</el-divider>
  <el-button @click="dialogVisiable=true">打开对话框</el-button>
  <el-button type="primary" @click="drawer=true">打开抽屉框</el-button>
  <el-button type="primary" @click="loading= !loading">loading</el-button>
  <el-button type="primary" @click="open">消息提示</el-button>
  <el-button type="primary" @click="openInfo">消息盒子</el-button>
  <el-button type="primary" @click="openNotify">通知</el-button>

  <el-popconfirm title="确认删除？">
    <template #reference>
      <el-button>冒泡弹出框</el-button>
    </template>
  </el-popconfirm>
  <el-table v-loading.body="loading"></el-table>
  <el-divider>提示框</el-divider>
  <el-tooltip content="上方提示！" placement="top">
    <el-button>文字提示</el-button>
  </el-tooltip>

  <!-- 对话框 -->
  <el-dialog v-model="dialogVisiable" width="30%" title="这是一个对话框">
    <span>这是主题信息！</span>
  </el-dialog>
  <!-- 抽屉框 -->
  <el-drawer v-model="drawer" title="抽屉对话框">
    <span>Hi there!</span>
  </el-drawer>


</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
  import type { Action } from 'element-plus'
  const dialogVisiable = ref(false)
  const drawer = ref(false)
  const loading = ref(false)
  const open = () => {
    ElMessage({ message: '这是一条提示！', type: "success" })
  }
  const openInfo = () => {
    ElMessageBox.alert('消息', '标题', {
      confirmButtonText: 'Ok',
      callback: (action: Action) => {
        ElMessage({ type: 'info', message: `action:${action}` })
      }
    })
  }
  const openNotify = () => {
    ElNotification({
      title: 'Info',
      message: 'Info Message',
      type: 'Info'
    })
  }

</script>
<style scoped>
  .el-alert {
    margin: 10px 0 0;
  }
</style>