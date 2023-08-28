<script setup>
import { computed } from "vue";
import hexToRgb from "@/utils/hexToRgb";
import useSuperHumanStore from "@/stores/superhuman";

const eyeBrow = computed(() => useSuperHumanStore().eyeBrow);

const eyeBrowUrl = computed(
  () =>
    `url(${
      new URL(
        `../../../assets/super-human/face/eye-brow/${eyeBrow.value.style.name}.png`,
        import.meta.url
      ).href
    })`
);

const eyeBrowColorRgb = computed(() => hexToRgb(eyeBrow.value.color));
</script>

<template>
  <div class="eye-brow-wrapper">
    <div class="mask">
      <div class="eye-brow"></div>
    </div>
  </div>
</template>

<style scoped>
.eye-brow-wrapper {
  width: 179px;
  height: 27px;
}

.mask {
  display: inline-block;
  -webkit-mask-image: v-bind(eyeBrowUrl);
  mask-image: v-bind(eyeBrowUrl);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.eye-brow {
  width: 179px;
  height: 27px;
  background:
    v-bind(eyeBrowUrl) center center/auto auto no-repeat,
    linear-gradient(
      rgba(v-bind("eyeBrowColorRgb"), 1),
      rgba(v-bind("eyeBrowColorRgb"), 1)
    ),
    linear-gradient(
      rgba(v-bind("eyeBrowColorRgb"), 1),
      rgba(v-bind("eyeBrowColorRgb"), 1)
    ),
    linear-gradient(
      rgba(v-bind("eyeBrowColorRgb"), 0.3),
      rgba(v-bind("eyeBrowColorRgb"), 0.3)
    ),
    #fff;
  background-blend-mode: overlay, overlay, multiply, normal;
}
</style>
