<script setup>
import { computed, ref } from "vue";
import BaseButton from "./Base/BaseButton.vue";
import variants from "@/utils/variants.js";

const checkedType = ref("hair");

const changeTypeHandle = (e) => {
  checkedType.value = e;
};

const TypeList = computed(() => Object.keys(variants));

const valueList = computed(() => variants[checkedType.value]);

const emits = defineEmits("change");

const changeHandle = (data) => {
  emits("change", data);
};
</script>

<template>
  <div class="super-human-controller">
    <div class="type-wrapper">
      <h2 class="title">类型</h2>
      <BaseButton
        v-for="(type, index) in TypeList"
        :key="index"
        :text="type"
        @click="changeTypeHandle(type)"></BaseButton>
    </div>
    <div class="value-wrapper">
      <h2 class="title">数值</h2>
      <BaseButton
        v-for="(value, index) in valueList"
        :key="index"
        :text="value"
        @click="changeHandle({ checkedType, value })"></BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
