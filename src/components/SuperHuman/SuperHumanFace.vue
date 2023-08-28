<script setup>
import {
  EyeBrow,
  EyeLashes,
  EyeBall,
  Mouth,
} from "@/components/SuperHuman/face";
</script>

<template>
  <section class="face-wrapper">
    <EyeBrow></EyeBrow>
    <EyeLashes></EyeLashes>
    <EyeBall></EyeBall>
    <Mouth></Mouth>
  </section>
</template>

<style lang="scss" scoped>
.face-wrapper {
  width: 188px;
  height: 162px;
  .eye-brow-wrapper {
    position: absolute;
    top: 13px;
    left: 6px;
  }
  .eye-lashes-wrapper {
    position: absolute;
    top: 40px;
  }
  .eye-ball-wrapper {
    position: absolute;
    top: 45px;
    left: 14px;
  }
  .mouth-wrapper {
    position: absolute;
    bottom: 0;
    left: 46px;
  }
}
</style>
