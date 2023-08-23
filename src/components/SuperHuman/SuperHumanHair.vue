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

const hairUrl = computed(
  () =>
    `url(${
      new URL(
        `../../assets/super-human/hair/${props.style.name}.png`,
        import.meta.url
      ).href
    })`
);

const hairStyleRGB = computed(
  () =>
    `${hexToRgb(props.color).r},${hexToRgb(props.color).g},${
      hexToRgb(props.color).b
    }`
);
</script>

<template>
  <section class="hair-warpper">
    <div class="mask">
      <div class="hair"></div>
    </div>
  </section>
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
  transform: translate(v-bind("props.style.x"), v-bind("props.style.y"));
}

.hair {
  width: v-bind("props.style.w");
  height: v-bind("props.style.h");
  background:
    v-bind(hairUrl) center center/auto auto no-repeat,
    linear-gradient(
      rgba(v-bind("hairStyleRGB"), 1),
      rgba(v-bind("hairStyleRGB"), 1)
    ),
    linear-gradient(
      rgba(v-bind("hairStyleRGB"), 1),
      rgba(v-bind("hairStyleRGB"), 1)
    ),
    linear-gradient(
      rgba(v-bind("hairStyleRGB"), 0.3),
      rgba(v-bind("hairStyleRGB"), 0.3)
    ),
    #fff;
  background-blend-mode: overlay, overlay, multiply, normal;
}
</style>
