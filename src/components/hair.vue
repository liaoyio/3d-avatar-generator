<script setup>
const props = defineProps({
  hairStyle: {
    type: String,
    default: "hair1",
  },
  hairColor: {
    type: String,
    default: "yellow",
  },
});
</script>

<template>
  <div class="mask">
    <div class="hair"></div>
  </div>
</template>

<style lang="scss" scoped>
$hairStyle: "hair1";
.mask {
  -webkit-mask-image: url("@/assets/super-human/hair/#{$hairStyle}.png");
  mask-image: url("@/assets/super-human/hair/#{$hairStyle}.png");
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  width: 481px;
  height: 434px;
  .hair {
    height: 100%;
    background:
      url("@/assets/super-human/hair/#{$hairStyle}.png") center center/auto auto
        no-repeat,
      linear-gradient(rgba(155, 95, 69, 1), rgba(155, 95, 69, 1)),
      linear-gradient(rgba(155, 95, 69, 1), rgba(155, 95, 69, 1)),
      linear-gradient(rgba(155, 95, 69, 0.3), rgba(155, 95, 69, 0.3)),
      #fff;
    background-blend-mode: overlay, overlay, multiply, normal;
  }
}
</style>
