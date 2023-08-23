<script setup>
import { TopPose, TopType } from "@/components/SuperHuman/top";
defineProps({
  type: {
    type: String,
  },
  polo: {
    type: String,
  },
  color: {
    type: String,
  },
  skin: {
    type: String,
  },
});
</script>

<template>
  <section class="top-wrapper">
    <TopPose></TopPose>
    <TopType></TopType>
  </section>
</template>

<style scoped>
.top-wrapper {
  width: 1051px;
  height: 1105px;
  outline: 1px solid gray;
}
</style>
