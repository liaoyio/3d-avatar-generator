<script setup>
import { computed } from "vue";
import useSuperHumanStore from "@/stores/superhuman";
import hexToRgb from "@/utils/hexToRgb";

const skin = computed(() => useSuperHumanStore().skin);

const skinColorRgb = computed(() => hexToRgb(skin.value.color));
</script>

<template>
  <div class="head-wrapper">
    <div class="mask">
      <div class="head"></div>
    </div>
  </div>
</template>

<style scoped>
.head-wrapper {
  width: 351px;
  height: 366px;
}
.mask {
  -webkit-mask-image: url("@/assets/super-human/head/male.png");
  mask-image: url("@/assets/super-human/head/male.png");
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.head {
  width: 351px;
  height: 366px;
  background:
    url("@/assets/super-human/head/male-nose.png") 192px 118px / auto auto
      no-repeat,
    url("@/assets/super-human/head/male.png") center center/auto auto no-repeat,
    linear-gradient(
      rgba(v-bind("skinColorRgb"), 1),
      rgba(v-bind("skinColorRgb"), 1)
    ),
    linear-gradient(
      rgba(v-bind("skinColorRgb"), 0.2),
      rgba(v-bind("skinColorRgb"), 0.2)
    ),
    #fff;
  background-blend-mode: soft-light, overlay, darken, normal;
}
</style>
