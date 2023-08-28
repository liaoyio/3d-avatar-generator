<script setup>
import BasicButton from "./Button/BasicButton.vue";
</script>

<template>
  <section class="button-group">
    <BasicButton
      :click-handle="
        () => {
          console.log(1);
        }
      ">
      <img src="@/assets/icon/random.svg" />
      Random</BasicButton
    >
    <BasicButton
      :click-handle="
        () => {
          console.log(2);
        }
      "
      ><img src="@/assets/icon/download.svg" />Download</BasicButton
    >
  </section>
</template>

<style lang="scss" scoped>
.button-group {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
</style>
