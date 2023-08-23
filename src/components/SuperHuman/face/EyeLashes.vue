<!-- 睫毛 -->
<script setup>
import { computed } from "vue";
import hexToRgb from "@/utils/hexToRgb";

const props = defineProps({
  style: {
    type: Object,
  },
  color: {
    type: String,
  },
});

// 图片地址
const eyeLashesUrl = computed(
  () =>
    `url(${
      new URL(
        `../../../assets/super-human/face/eye-lashes/${props.style.name}.png`,
        import.meta.url
      ).href
    })`
);

// 颜色
const eyeLashesColorRgb = computed(
  () =>
    `${hexToRgb(props.color).r},${hexToRgb(props.color).g},${
      hexToRgb(props.color).b
    }`
);
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
