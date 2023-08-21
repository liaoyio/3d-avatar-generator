<!-- 嘴巴 -->
<script setup>
import { computed } from "vue";

const props = defineProps({
  variable: {
    type: String,
    default: "mouth1",
  },
});

// Mouth URL
const mouthUrl = computed(
  () =>
    new URL(
      `../../../assets/super-human/face/mouth/${props.variable}.png`,
      import.meta.url
    ).href
);
</script>

<template>
  <section class="mouth-wrapper">
    <img :src="mouthUrl" alt="mouth" />
  </section>
</template>

<style lang="scss" scoped>
.mouth-wrapper {
  width: 99px;
  height: 38px;
}
</style>
