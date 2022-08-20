<template>
  <el-tabs
    v-model="activeTab"
    type="card"
    closable
    @tab-click="clickTab"
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in tabsList"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "@/store/index";
import { ITab } from "@/store/type/index";

const route = useRoute();
const router = useRouter();
const store = useStore();
// 获取所有选项卡
const tabsList = computed(() => store.getters.getTabsList);
//获取当前激活选项卡，它跟当前激活的路由是一样的
const activeTab = ref();
const setActiveTab = () => {
  activeTab.value = route.path;
};
// 添加选项卡
const addTab = () => {
  const { path, meta } = route;
  const tab: ITab = {
    title: meta.title as string,
    path: path,
  };
  store.dispatch("addTabs", tab);
};
// 点击选项卡
const clickTab = (tab: any) => {
  const { props } = tab;
  // 路由跳转
  router.push({ path: props.name });
};
// 删除选项卡
const removeTab = (targetName: string) => {
  // 首页不可删除
  if (targetName === "/dashboard") return;
  // 选项卡数据列表
  const tabs = tabsList.value;
  // 激活的选项卡
  let activeName = activeTab.value;
  // 与选择删除的目标选项卡进行匹配
  if (activeName === targetName) {
    tabs.forEach((tab: ITab, index: number) => {
      if (tab.path === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.path;
        }
      }
    });
  }
  // 重新设置激活选项卡
  activeTab.value = activeName;
  // 重新设置选项卡列表
  store.commit(
    "setTabsList",
    tabs.filter((tab: ITab) => tab.path !== targetName)
  );
  // 路由跳转
  router.push({ path: activeName });
};
// 监听路由的变化
watch(
  () => route.path,
  () => {
    // 设置激活的选项卡
    setActiveTab();
    // 把当前路由添加到选项卡
    addTab();
  }
);
// 解决选项卡数据丢失问题
const beforeRefresh = () => {
  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("tabsView", JSON.stringify(tabsList.value));
  });
  let tabSession = sessionStorage.getItem("tabsView");
  if (tabSession) {
    let oldTabs = JSON.parse(tabSession);
    if (oldTabs.length > 0) {
      store.commit("setTabsList", oldTabs);
    }
  }
};
onMounted(() => {
  // 解决选项卡数据丢失问题
  beforeRefresh();
  // 设置激活的选项卡
  setActiveTab();
  // 把当前路由添加到选项卡
  addTab();
});
</script>

<style scoped lang="scss">
:deep(.el-tabs_header) {
  margin: 0px;
}
:deep(.el-tabs_item) {
  height: 26px !important;
  line-height: 26px !important;
  text-align: center !important;
  border: 1px solid #d8dce5 !important;
  margin: 0 3px !important;
  color: #495060;
  font-size: 12px !important;
  padding: 0px 10px !important;
}
:deep(.el-tabs__nav) {
  border: none !important;
}
:deep(.is-active) {
  border: 1px solid #42b983 !important;
  border-bottom: 1px solid transparent !important;
  background-color: #42b983 !important;
  color: #fff !important;
}
:deep(.el-tabs__item:hover) {
  color: #495060 !important;
}
</style>
