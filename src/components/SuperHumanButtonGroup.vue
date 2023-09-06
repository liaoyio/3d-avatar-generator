<script setup>
import BasicButton from "./Button/BasicButton.vue";
import useSuperHumanStore from "@/stores/superhuman";

const emit = defineEmits(["download"]);

const superhumanStore = useSuperHumanStore();

const randonHandle = () => {
  superhumanStore.random();
};

const downloadHandle = () => {
  emit("download");
};
</script>

<template>
  <section class="button-group">
    <BasicButton @click="randonHandle">
      <img src="@/assets/icon/random.svg" />
      Random</BasicButton
    >
    <BasicButton @click="downloadHandle"
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
