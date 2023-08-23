<script setup>
import {
  SuperHumanHair,
  SuperHumanHead,
  SuperHumanFace,
  SuperHumanTop,
} from "@/components/SuperHuman";
import useSuperHumanStore from "@/stores/superhuman";
</script>

<template>
  <main class="main">
    <SuperHumanHair v-bind="useSuperHumanStore().hair"></SuperHumanHair>
    <SuperHumanHead></SuperHumanHead>
    <SuperHumanFace :face="useSuperHumanStore().face"></SuperHumanFace>
    <SuperHumanTop></SuperHumanTop>
  </main>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 465px;
  height: 499px;
  outline: 1px solid green;

  .hair-warpper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    outline: 1px solid red;
  }
  .head-wrapper {
    position: absolute;
    bottom: 0;
    left: 52px;
    z-index: 1;
    outline: 1px solid red;
  }
  :deep(.face-wrapper) {
    position: absolute;
    z-index: 3;
    top: 211px;
    left: 166px;
  }
}
</style>
