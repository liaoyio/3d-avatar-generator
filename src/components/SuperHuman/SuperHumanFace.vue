<script setup>
import {
  EyeBrow,
  EyeLashes,
  EyeBall,
  Mouth,
} from "@/components/SuperHuman/face";

defineProps({
  face: {
    type: Object,
  },
});
</script>

<template>
  <Suspense>
    <section class="face-wrapper">
      <EyeBrow v-bind="face.eyeBrow"></EyeBrow>
      <EyeLashes v-bind="face.eyeLashes"></EyeLashes>
      <EyeBall v-bind="face.eyeBall"></EyeBall>
      <Mouth v-bind="face.mouth"></Mouth>
    </section>
  </Suspense>
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
