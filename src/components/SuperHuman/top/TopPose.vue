<!-- 手臂姿势 -->
<script setup>
import { computed } from "vue";
import hexToRgb from "@/utils/hexToRgb";

const props = defineProps({
  variable: {
    type: String,
    default: "pose1",
  },
  color: {
    type: String,
    default: "#BC7560",
  },
});

// 图片地址
const topPoseUrl = computed(
  () =>
    `url(${
      new URL(
        `../../../assets/super-human/top/pose/${props.variable}.png`,
        import.meta.url
      ).href
    })`
);

// 颜色
const topPoseColorRgb = computed(
  () =>
    `${hexToRgb(props.color).r},${hexToRgb(props.color).g},${
      hexToRgb(props.color).b
    }`
);
</script>

<template>
  <section class="top-pose-wrapper">
    <div class="mask">
      <div class="top-pose"></div>
    </div>
  </section>
</template>

<style scoped>
.top-pose-wrapper {
  width: 713px;
  height: 422px;
}

.mask {
  display: inline-block;
  -webkit-mask-image: v-bind(topPoseUrl);
  mask-image: v-bind(topPoseUrl);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.top-pose {
  width: 713px;
  height: 422px;
  background:
    v-bind(topPoseUrl) center center/auto auto no-repeat,
    linear-gradient(
      rgba(v-bind("topPoseColorRgb"), 1),
      rgba(v-bind("topPoseColorRgb"), 1)
    ),
    linear-gradient(
      rgba(v-bind("topPoseColorRgb"), 0.2),
      rgba(v-bind("topPoseColorRgb"), 0.2)
    ),
    #fff;
  background-blend-mode: overlay, darken, normal;
}
</style>
