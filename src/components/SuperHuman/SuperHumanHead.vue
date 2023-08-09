<script setup>
import { inject } from "vue";

defineProps({
  gender: {
    type: String,
    default: "male",
  },
});

const skin = inject("skin");
</script>

<template>
  <section class="head-wrapper">
    <div :class="['head', gender]">
      <img src="@/assets/SuperHuman/head/hair.png" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.head-wrapper {
  width: 413px;
  height: 363px;
  border: 1px solid red;
  .head {
    width: 100%;
    height: 100%;
    background: url("@/assets/SuperHuman/head/hair.png") center center/auto auto
      no-repeat #9b5f45;
    background-blend-mode: multiply;
  }
}
</style>
