<script setup>
defineProps({
  text: {
    type: String,
  },
  onClick: {
    type: Function,
  },
  icon: {
    type: [String, Object],
  },
});
</script>

<template>
  <div class="button" @click="onClick">
    <span class="icon" v-if="icon">{{ icon }}</span>
    <span class="text">{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
.button {
  cursor: pointer;
}
</style>
