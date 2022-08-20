<template>
  <div class="logo">
    <img src="@/assets/vue.svg" alt="logo图标" />
    <span v-show="!collapse" class="title">Vue3+Ts+Vite</span>
  </div>
</template>

<script setup lang="ts">
defineProps(["collapse"]);
</script>

<style scoped lang="scss">
.logo {
  background-color: #2b2f3a;
  height: 50px;
  line-height: 50px;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 15px;
  color: #fff;
  img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
  .title {
    line-height: 50px;
    font-weight: 600;
    font-size: 16px;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    vertical-align: middle;
    animation: titleAnimation 1s ease-out;
  }
  @keyframes titleAnimation {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
