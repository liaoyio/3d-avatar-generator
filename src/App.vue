<script setup>
// import SuperHumanPreview from "@/components/SuperHumanPreview.vue";
// import SuperHumanController from "@/components/SuperHumanController.vue";
import { provide } from "vue";
// import * as SuperHuman from "@/components/SuperHuman/index.js";
import useSkinStore from "./store/skin";
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

import hair from "@/components/hair.vue";

provide("skin", useSkinStore().mediumDark);
</script>

<template>
  <main class="main">
    <hair></hair>
  </main>
</template>

<style scoped></style>
