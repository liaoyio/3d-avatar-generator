<!-- 眉毛 -->
<script setup>
import { computed } from "vue";
import hexToRgb from "@/utils/hexToRgb";

const props = defineProps({
  variable: {
    type: String,
    default: "eyebrow2",
  },
  color: {
    type: String,
    default: "#4B382E",
  },
});

// 图片地址
const eyeBrowUrl = computed(
  () =>
    `url(${
      new URL(
        `../../../assets/super-human/face/eye-brow/${props.variable}.png`,
        import.meta.url
      ).href
    })`
);

// 颜色
const eyeBrowColorRgb = computed(
  () =>
    `${hexToRgb(props.color).r},${hexToRgb(props.color).g},${
      hexToRgb(props.color).b
    }`
);
</script>

<template>
  <section class="eye-brow-wrapper">
    <div class="mask">
      <div class="eye-brow"></div>
    </div>
  </section>
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
