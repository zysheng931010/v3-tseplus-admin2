<template>
  <el-icon @click="changeIcon" class="fa-icon">
    <component :is="status ? Expand : Fold" />
  </el-icon>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { Fold, Expand } from "@element-plus/icons-vue";
import { useStore } from "@/store/index";

const store = useStore();
const status = computed(() => store.getters.getCollapse);
const changeIcon = () => {
  store.commit("setCollapse", !status.value);
};
</script>
<style scoped lang="scss">
.fa-icon {
  display: flex;
  align-items: center;
  font-size: 19px;
  color: #303133;
  cursor: pointer;
  margin-right: 15px;
}
</style>
