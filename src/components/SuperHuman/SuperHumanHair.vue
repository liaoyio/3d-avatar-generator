<script setup>
import { computed } from "vue";
import hexToRgb from "@/utils/hexToRgb";

const props = defineProps({
  hairStyle: {
    type: String,
    default: "hair2",
  },
  hairColor: {
    type: String,
    default: () => "#9B5F45",
  },
});

const hairUrl = computed(
  () =>
    `url(${
      new URL(
        `../../assets/super-human/hair/${props.hairStyle}.png`,
        import.meta.url
      ).href
    })`
);

const hairStyleRGB = computed(
  () =>
    `${hexToRgb(props.hairColor).r},${hexToRgb(props.hairColor).g},${
      hexToRgb(props.hairColor).b
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
  transform: translate(45px, 44px);
}

.hair {
  width: 395px;
  height: 347px;
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
