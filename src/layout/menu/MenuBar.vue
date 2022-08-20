<template>
  <MenuLogo :collapse="isCollapse"></MenuLogo>
  <el-menu
    background-color="#304156"
    active-text-color="#409eff"
    text-color="#f4f4f5"
    class="el-menu-vertical-demo"
    router
    :default-active="activeIdx"
    :collapse="isCollapse"
    collapse-transition
    @open="handleOpen"
    @close="handleClose"
  >
    <MenuItem :menuList="menuList"></MenuItem>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import MenuItem from "./MenuItem.vue";
import MenuLogo from "./MenuLogo.vue";
import { RouteRecordRaw, useRoute } from "vue-router";
import { routes } from "@/router/index";
import { useStore } from "@/store/index";

const route = useRoute();
const activeIdx = computed(() => route.path);

const menuList: RouteRecordRaw[] = routes.reduce(
  (pre: RouteRecordRaw[], val: RouteRecordRaw, idx: number) => {
    if (idx === 0) {
      pre = [...(val.children as RouteRecordRaw[])];
    } else {
      pre.push(val);
    }
    return pre;
  },
  []
);

const store = useStore();
const isCollapse = computed(() => store.getters.getCollapse);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}
.el-menu {
  border-right: none;
}
:deep(.is-opened .el-menu-item) {
  background-color: #1f2d3d !important;
}

:deep(.el-menu-item:hover) {
  background-color: #001528 !important;
  color: #409eff;
}
</style>
