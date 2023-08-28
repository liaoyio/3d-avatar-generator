<script setup>
import { computed } from "vue";
import hexToRgb from "@/utils/hexToRgb";
import useSuperHumanStore from "@/stores/superhuman";

const eyeLashes = computed(() => useSuperHumanStore().eyeLashes);

const eyeLashesUrl = computed(
  () =>
    `url(${
      new URL(
        `../../../assets/super-human/face/eye-lashes/${eyeLashes.value.style.name}.png`,
        import.meta.url
      ).href
    })`
);

const eyeLashesColorRgb = computed(() => hexToRgb(eyeLashes.value.color));
</script>

<template>
  <section class="eye-lashes-wrapper">
    <div class="mask">
      <div class="eye-lashes"></div>
    </div>
  </section>
</template>

<style scoped>
.eye-lashes-wrapper {
  width: 188px;
  height: 33px;
}

.mask {
  display: inline-block;
  -webkit-mask-image: v-bind(eyeLashesUrl);
  mask-image: v-bind(eyeLashesUrl);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.eye-lashes {
  width: 188px;
  height: 33px;
  background:
    v-bind(eyeLashesUrl) center center/auto auto no-repeat,
    linear-gradient(
      rgba(v-bind("eyeLashesColorRgb"), 1),
      rgba(v-bind("eyeLashesColorRgb"), 1)
    ),
    linear-gradient(
      rgba(v-bind("eyeLashesColorRgb"), 1),
      rgba(v-bind("eyeLashesColorRgb"), 1)
    ),
    linear-gradient(
      rgba(v-bind("eyeLashesColorRgb"), 0.3),
      rgba(v-bind("eyeLashesColorRgb"), 0.3)
    ),
    #fff;
  background-blend-mode: overlay, overlay, multiply, normal;
}
</style>
