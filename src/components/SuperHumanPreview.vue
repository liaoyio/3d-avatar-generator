<script setup>
import { ref } from "vue";
import BaseButton from "./Base/BaseButton.vue";

const imgRef = ref(null);

defineProps({
  alpaca: {
    type: Object,
  },
});

const emits = defineEmits(["randomEvent"]);

const buttons = ref([
  {
    text: "Random",
    onClick: () => {
      emits("randomEvent");
    },
  },
  {
    text: "Download",
    onClick: () => {
      emits("downloadEvent");
    },
  },
]);
</script>

<template>
  <div class="super-human-preview">
    <div class="img-wrapper" ref="imgRef">
      <img
        class="img"
        :src="`/alpaca/backgrounds/${alpaca.background}.png`"
        alt="alpaca background" />
      <img
        class="img"
        :src="`/alpaca/ears/${alpaca.ears}.png`"
        alt="alpaca ears" />
      <img
        class="img"
        :src="`/alpaca/neck/${alpaca.neck}.png`"
        alt="alpaca neck" />
      <img
        class="img"
        :src="`/alpaca/hair/${alpaca.hair}.png`"
        alt="alpaca hair" />
      <img
        class="img"
        :src="`/alpaca/eyes/${alpaca.eyes}.png`"
        alt="alpaca eyes" />
      <img
        class="img"
        :src="`/alpaca/leg/${alpaca.leg}.png`"
        alt="alpaca leg" />
      <img
        v-if="alpaca.accesories"
        class="img"
        :src="`/alpaca/accessories/${alpaca.accesories}.png`"
        alt="alpaca accesories" />
      <img class="img" src="/alpaca/nose.png" alt="alpaca nose" />
      <img
        class="img"
        :src="`/alpaca/mouth/${alpaca.mouth}.png`"
        alt="alpaca mouth" />
    </div>
    <div class="button-group">
      <BaseButton
        v-for="({ text, onClick }, index) in buttons"
        :key="index"
        :text="text"
        :onClick="onClick"></BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.super-human-preview {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .img-wrapper {
    width: 300px;
    height: 300px;
    position: relative;
    .img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .button-group {
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
  }
}
</style>
