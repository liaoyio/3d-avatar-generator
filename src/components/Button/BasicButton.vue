<script setup>
const emit = defineEmits(["click"]);
const clickHandle = () => {
  emit("click");
};
</script>

<template>
  <div class="button" @click="clickHandle()">
    <slot name="default"></slot>
  </div>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 11px 32px;
  background: #7761f9;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  font-size: 18px;
  line-height: 28px;
  color: #fff;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  &:hover {
    background: #5f47f1;
  }
}
</style>
