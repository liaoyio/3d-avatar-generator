<script setup>
import { computed } from "vue";
import useSuperHumanStore from "@/stores/superhuman";

const mouth = computed(() => useSuperHumanStore().mouth);

const mouthUrl = computed(
  () =>
    new URL(
      `../../../assets/super-human/face/mouth/${mouth.value.style.name}.png`,
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
    transform: translate(v-bind("mouth.style.x"), v-bind("mouth.style.y"));
  }
}
</style>
