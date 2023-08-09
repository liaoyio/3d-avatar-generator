<script setup>
// import SuperHumanPreview from "@/components/SuperHumanPreview.vue";
// import SuperHumanController from "@/components/SuperHumanController.vue";
import { provide } from "vue";
import * as SuperHuman from "@/components/SuperHuman/index.js";
import useSkinStore from "./store/skin";

provide("skin", useSkinStore().mediumDark);
// import useAlpacaStore from "./store/alpaca";

// // 获取初始状态
// const alpaca = useAlpacaStore();

// // 随机状态
// const randomHandle = () => {
//   alpaca.random();
// };

// // 下载
// const changeHandle = (data) => {
//   alpaca.change(data.checkedType, data.value);
// };

// // 重置状态
</script>

<template>
  <!-- <h1 class="title">Super Human</h1>
  <div class="container">
    <SuperHumanPreview
      :alpaca="alpaca"
      @random-event="randomHandle"></SuperHumanPreview>
    <SuperHumanController @change="changeHandle"></SuperHumanController>
  </div> -->
  <SuperHuman.Head></SuperHuman.Head>
</template>

<style scoped>
.container {
  display: flex;
  gap: 3rem;
}
</style>
