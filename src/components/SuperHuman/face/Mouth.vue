<!-- 嘴巴 -->
<script setup>
import { computed } from "vue";

const props = defineProps({
  style: {
    type: Object,
  },
});

// Mouth URL
const mouthUrl = computed(
  () =>
    new URL(
      `../../../assets/super-human/face/mouth/${props.style.name}.png`,
      import.meta.url
    ).href
);
</script>

<template>
  <section class="mouth-wrapper">
    <img class="mouth" :src="mouthUrl" alt="mouth" />
  </section>
</template>

<style lang="scss" scoped>
.mouth-wrapper {
  width: 99px;
  height: 38px;
  .mouth {
    transform: translate(v-bind("props.style.x"), v-bind("props.style.y"));
  }
}
</style>
