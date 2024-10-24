<template>
  <nav class="nav-title">
    <div class="navbar-header">
      <a class="navbar-brand" herf="/">
      <span style="font-family: Consolas;font-size: 24px;font-weight: bold;letter-spacing: 4px;color: #ffffff;">看板系统</span>
    </a>
    </div>
    <div>
      <ul class="nav navbar-nav">
        <li> <a class="nav-item" href="/myself">我的面板</a></li>
        <li> <a class="nav-item" href="/myself">数据指标</a></li>
        <li> <a class="nav-item" href="/myself">质量看板</a></li>
        <li> <a class="nav-item" href="/myself">预算和投入</a></li>
        <li> <a class="nav-item" href="/myself">项目跟踪</a></li>
        <li class="active"> <a class="nav-item " href="/software-cycle">项目度量</a></li>
        <li> <a class="nav-item" href="/myself">任务管理</a></li>
        <li> <a class="nav-item" href="/myself">报表大屏</a></li>
        <li> <a class="nav-item" href="/myself">管理</a></li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts" setup>
</script>

<style scoped>
.nav-title {
  height: 51px;
  background: #272727;
  border-color: #e7e7e7;
  top:0;
  border-width: 0 0 1px;
  border:1px solid transparent;
  /* position: fixed; */
  right: 0;
  left: 0;
}
.navbar-brand {
  float: left;
  height: 50px;
  padding: 15px 15px;
  /* font-size: 18px; */
  line-height: 20px;
}
.navbar-header {
  float: left;
}

a {
  cursor: pointer;
  text-decoration: none;
}

.navbar-nav {
  float: left;
  margin: 0;
}
.nav {
  padding-left: 0;
  list-style: none;
}
.nav-item {
  color:#ffffff;
}
.nav > li {
  position: relative;
  display: block;
  float: left;
}


li {
  font-size: 15px;
}
ul,li {
  list-style-type: none;
}
.navbar-nav>li>a {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  line-height: 30px;
  position: relative;
  display: block;
  line-height: 20px
}

nav ul li a:hover {
  background-color: #555;
}

nav ul li.active a {
  background-color: #555;
  color: white;
}
</style>
ss