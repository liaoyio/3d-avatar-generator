<!-- 眼珠 -->
<script setup>
import { computed } from "vue";

const props = defineProps({
  style: {
    type: Object,
  },
});

const eyeBallUrl = computed(
  () =>
    new URL(
      `../../../assets/super-human/face/eye-ball/${props.style.name}.png`,
      import.meta.url
    ).href
);
</script>

<template>
  <section class="eye-ball-wrapper">
    <img :src="eyeBallUrl" alt="EyeBall" />
  </section>
</template>

<style lang="scss" scoped>
.eye-ball-wrapper {
  width: 161px;
  height: 46px;
}
</style>
