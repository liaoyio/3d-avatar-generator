<script setup>
import { computed } from "vue";
import hexToRgb from "@/utils/hexToRgb";
import useSuperHumanStore from "@/stores/superhuman";

const hair = computed(() => useSuperHumanStore().hair);

const hairUrl = computed(
  () =>
    `url(${
      new URL(
        `../../assets/super-human/hair/${hair.value.style.name}.png`,
        import.meta.url
      ).href
    })`
);

const hairColorRgb = computed(() => hexToRgb(hair.value.color));
</script>

<template>
  <div class="hair-warpper">
    <div class="mask">
      <div class="hair"></div>
    </div>
  </div>
</template>

<style scoped>
.hair-warpper {
  width: 465px;
  height: 423px;
}

.mask {
  display: inline-block;
  -webkit-mask-image: v-bind(hairUrl);
  mask-image: v-bind(hairUrl);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  transform: translate(v-bind("hair.style.x"), v-bind("hair.style.y"));
}

.hair {
  width: v-bind("hair.style.w");
  height: v-bind("hair.style.h");
  background:
    v-bind(hairUrl) center center/auto auto no-repeat,
    linear-gradient(
      rgba(v-bind("hairColorRgb"), 1),
      rgba(v-bind("hairColorRgb"), 1)
    ),
    linear-gradient(
      rgba(v-bind("hairColorRgb"), 1),
      rgba(v-bind("hairColorRgb"), 1)
    ),
    linear-gradient(
      rgba(v-bind("hairColorRgb"), 0.3),
      rgba(v-bind("hairColorRgb"), 0.3)
    ),
    #fff;
  background-blend-mode: overlay, overlay, multiply, normal;
}
</style>
