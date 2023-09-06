<script setup>
import { onMounted, ref } from "vue";
import { domToPng } from "modern-screenshot";
import {
  SuperHumanHair,
  SuperHumanHead,
  SuperHumanFace,
} from "@/components/SuperHuman";
import SuperHumanButtonGroup from "@/components/SuperHumanButtonGroup.vue";

const preview = ref(null);

onMounted(() => {
  console.log(preview);
});

const downloadHandle = async () => {
  const dataUrl = await domToPng(preview.value);
  const link = document.createElement("a");
  link.download = "superhuman.png";
  link.href = dataUrl;
  link.click();
};
</script>

<template>
  <section class="preview-wrapper" ref="preview">
    <div class="preview-box">
      <SuperHumanHair></SuperHumanHair>
      <SuperHumanHead></SuperHumanHead>
      <SuperHumanFace></SuperHumanFace>
    </div>
  </section>
  <SuperHumanButtonGroup @download="downloadHandle"></SuperHumanButtonGroup>
</template>

<style lang="scss" scoped>
.preview-wrapper {
  padding-top: 13px;
  .preview-box {
    position: relative;
    width: 465px;
    height: 499px;
    z-index: 99;
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
}
</style>
