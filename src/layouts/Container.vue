<script setup>
import { onMounted, onUnmounted } from "vue";
</script>

<template>
  <section :class="['container', { full: isCollapsed }]">
    <slot name="default"></slot>
  </section>
</template>

<style lang="scss" scoped></style>
