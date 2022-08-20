<template>
  <el-container class="layout">
    <el-aside width="auto" class="aside">
      <MenuBar></MenuBar>
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-main class="main">
        <Tabs></Tabs>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
// setup语法糖中，引入的组件可以直接使用，无需再通过components进行注册，并且无法指定当前组件的名字，它会自动以文件名为主，不用再写name属性了
import MenuBar from "@/layout/menu/MenuBar.vue";
import Header from "@/layout/header/Header.vue";
import Tabs from "./tabs/Tabs.vue";
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
  .aside {
    // background-color: rgb(48, 65, 86);
    background-color: #304156;
  }
  .header {
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
  }
  .main {
    padding-top: 0;
  }
}
</style>
