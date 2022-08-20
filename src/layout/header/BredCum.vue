<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="item in breadcrumbList"
      :key="item.path"
      :to="{ path: item.path }"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import { ref, Ref, watch } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
import { useRoute, RouteLocationMatched } from "vue-router";

const breadcrumbList: Ref<RouteLocationMatched[]> = ref([]);
const route = useRoute();
const getBreadcrumb = () => {
  // 获取所有meta和title
  let matched = route.matched.filter((itm) => itm.meta && itm.meta.title);
  // 判断第一个是否是首页，如果不是首页，构造一个
  const first = matched[0];
  if (first.path !== "/dashboard") {
    // 构造一个
    matched = [{ path: "/dashboard", meta: { title: "首页" } } as any].concat(
      matched
    );
  }
  // 设置面包屑数据
  breadcrumbList.value = matched;
};
getBreadcrumb();
watch(
  () => route.path,
  () => getBreadcrumb()
);
</script>
<style scoped lang="scss"></style>
