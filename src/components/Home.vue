<template>
  <el-container>
    <el-header class="head">
      <el-link target="_blank" type="success" href="#/">Home</el-link>
      <el-link target="_blank" type="info" href="#/layout">框架</el-link>
      <el-link target="_blank" type="success" href="#/button">按钮库</el-link>
      <el-link target="_blank" type="primary" href="#/icon">图标库</el-link>
      <el-link target="_blank" type="warning" href="#/feedback">FeedBack</el-link>
      <el-link target="_blank" type="danger" href="#/echart-pie">饼图</el-link>
      <el-link target="_blank" type="info" href="#/echart-bar">柱状图</el-link>
      <el-link target="_blank" type="primary" href="#/store">Store示例</el-link>
      <el-link target="_blank" type="danger" href="#/messages">后端通信</el-link>
    </el-header>
    <el-main class="main">
      <div class="slog">
        <h1>Django Vue3 </h1>
        <p style="font-size:16px;color:#606266">基于Vue 3 Element plus，面向最前沿的前端技术栈</p>
        <p style="font-size:12px;color:#606266"><strong>脚踏实地·砥砺前行</strong></p>
      </div>
      <div class="box">
        <div class="bg2"></div>
        <div class="bg1"></div>
        <div class="bear"></div>
      </div>
    </el-main>
  </el-container>
</template>
<style>
  .slog {
    font-size: 35px;
    line-height: 20px;
    margin-top: 100px;
  }

  .el-link {
    font-size: 18px;
    margin-right: 8px;
  }

  .head {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #dcdfe6;
    border-top: 1px solid #dcdfe6;
  }

  .main {
    padding: 40px;
    text-align: center;
  }

  .bear {
    position: absolute;
    left: 0;
    bottom: 30px;
    width: 200px;
    height: 100px;
    /*background: url(../../public/images/bear.png) no-repeat; */
    background: url(../../public/images/bear.png);
    /* z-index: 2; */
    animation: bear 600ms steps(8) infinite, move 8s forwards;
  }

  .bg1 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background: url(../../public/images/bg1.png) repeat-x;
    animation: bg 30s linear infinite;
  }

  .bg2 {
    position: absolute;
    bottom: 120px;
    left: 0;
    width: 100%;
    height: 450px;
    background: url(../../public/images/bg2.png) repeat-x;
    animation: bg 50s linear infinite;
  }

  @keyframes bear {
    from {
      background-position: 0 0;
    }

    to {
      background-position: -1600px 0;
    }
  }

  @keyframes move {
    from {
      left: 0;
      transform: translateX(-100%);
    }

    to {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @keyframes bg {
    from {
      background-position: 0 0;
    }

    to {
      background-position: -3840px 0;
    }
  }
</style>