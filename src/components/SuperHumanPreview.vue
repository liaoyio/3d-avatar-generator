<script setup>
import {
  SuperHumanHair,
  SuperHumanHead,
  SuperHumanFace,
} from "@/components/SuperHuman";
</script>

<template>
  <section class="preview-wrapper">
    <SuperHumanHair></SuperHumanHair>
    <SuperHumanHead></SuperHumanHead>
    <SuperHumanFace></SuperHumanFace>
  </section>
</template>

<style lang="scss" scoped>
.preview-wrapper {
  position: relative;
  width: 465px;
  height: 499px;
  .hair-warpper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .head-wrapper {
    position: absolute;
    bottom: 0;
    left: 52px;
    z-index: 1;
  }
  .face-wrapper {
    position: absolute;
    z-index: 3;
    top: 211px;
    left: 166px;
  }
}
</style>
