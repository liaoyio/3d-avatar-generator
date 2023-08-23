<!-- 衣服类型 -->
<script setup>
import { computed } from "vue";
import hexToRgb from "@/utils/hexToRgb";

const props = defineProps({
  variable: {
    type: String,
    default: "t-shirt",
  },
  color: {
    type: String,
    default: "#000000",
  },
});

// 图片地址
const topTypeUrl = computed(
  () =>
    `url(${
      new URL(
        `../../../assets/super-human/top/type/${props.variable}.png`,
        import.meta.url
      ).href
    })`
);

// 颜色
const topTypeColorRgb = computed(
  () =>
    `${hexToRgb(props.color).r},${hexToRgb(props.color).g},${
      hexToRgb(props.color).b
    }`
);
</script>

<template>
  <section class="top-type-wrapper">
    <div class="mask">
      <div class="top-type"></div>
    </div>
  </section>
</template>

<style scoped>
.top-type-wrapper {
  width: 606px;
  height: 461px;
}

.mask {
  display: inline-block;
  -webkit-mask-image: v-bind(topTypeUrl);
  mask-image: v-bind(topTypeUrl);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.top-type {
  width: 606px;
  height: 461px;
  background:
    v-bind(topTypeUrl) center center/auto auto no-repeat,
    linear-gradient(
      rgba(v-bind("topTypeColorRgb"), 0.2),
      rgba(v-bind("topTypeColorRgb"), 0.2)
    ),
    linear-gradient(
      rgba(v-bind("topTypeColorRgb"), 0.6),
      rgba(v-bind("topTypeColorRgb"), 0.6)
    ),
    linear-gradient(
      rgba(v-bind("topTypeColorRgb"), 1),
      rgba(v-bind("topTypeColorRgb"), 1)
    ),
    #fff;
  background-blend-mode: luminosity, luminosity, overlay, normal;
}
</style>
