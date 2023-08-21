<script setup>
import {
  SuperHumanHair,
  SuperHumanHead,
  SuperHumanFace,
} from "@/components/SuperHuman";
</script>

<template>
  <main class="main">
    <SuperHumanHair></SuperHumanHair>
    <SuperHumanHead></SuperHumanHead>
    <SuperHumanFace></SuperHumanFace>
  </main>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  display: flow-root;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
