<script setup>
import { computed } from "vue";
import useSuperHumanStore from "@/stores/superhuman";
import hexToRgb from "@/utils/hexToRgb";

const { skin } = useSuperHumanStore();

const props = defineProps({
  gender: {
    type: String,
    default: "male",
  },
});

const imageURL = computed(
  () =>
    `url(${
      new URL(
        `../../assets/super-human/head/${props.gender}.png`,
        import.meta.url
      ).href
    })`
);

const skinStyleRGB = computed(
  () => `${hexToRgb(skin).r},${hexToRgb(skin).g},${hexToRgb(skin).b}`
);
</script>

<template>
  <section class="head-wrapper">
    <div class="mask">
      <div class="head"></div>
    </div>
  </section>
</template>

<style scoped>
.head-wrapper {
  width: 351px;
  height: 366px;
}
.mask {
  -webkit-mask-image: v-bind(imageURL);
  mask-image: v-bind(imageURL);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.head {
  width: 351px;
  height: 366px;
  background:
    url("@/assets/super-human/head/male-nose.png") 192px 118px / auto auto
      no-repeat,
    v-bind(imageURL) center center/auto auto no-repeat,
    linear-gradient(
      rgba(v-bind("skinStyleRGB"), 1),
      rgba(v-bind("skinStyleRGB"), 1)
    ),
    linear-gradient(
      rgba(v-bind("skinStyleRGB"), 0.2),
      rgba(v-bind("skinStyleRGB"), 0.2)
    ),
    #fff;
  background-blend-mode: soft-light, overlay, darken, normal;
}
</style>
