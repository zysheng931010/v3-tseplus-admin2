<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "@/store";

const store = useStore();
const count = ref(0);
const showCount = computed(() => store.getters.getCount);
const addBtn = () => {
  count.value++;
  store.commit("setCount", ++count.value);
};
</script>

<template>
  <h1>{{ showCount }}</h1>
  <h2>{{ count }}</h2>
  <button @click="addBtn">增加</button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
</template>

<style scoped></style>
