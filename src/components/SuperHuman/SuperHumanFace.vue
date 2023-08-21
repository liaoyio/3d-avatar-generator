<script setup>
import {
  EyeBrow,
  EyeLashes,
  EyeBall,
  Mouth,
} from "@/components/SuperHuman/face";

defineProps({
  eyeBrow: {
    type: String,
  },
  eyeBell: {
    type: String,
  },
  eyeLashes: {
    type: String,
  },
  mouth: {
    type: String,
  },
  eyeBrowColor: {
    type: String,
  },
  eyeLashesColor: {
    type: String,
  },
});
</script>

<template>
  <Suspense>
    <section class="face-wrapper">
      <EyeBrow></EyeBrow>
      <EyeLashes></EyeLashes>
      <EyeBall></EyeBall>
      <Mouth></Mouth>
    </section>
  </Suspense>
</template>

<style lang="scss" scoped>
.face-wrapper {
  width: 188px;
  height: 162px;
  position: relative;
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
