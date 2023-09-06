<script setup>
import SuperHumanPreview from "@/components/SuperHumanPreview.vue";
import SuperHumanController from "@/components/SuperHumanController.vue";
</script>

<template>
  <header class="header">
    <h1 class="title">
      Superhuman 3D <span class="important">Character</span>
    </h1>
  </header>
  <main class="main">
    <SuperHumanPreview></SuperHumanPreview>
    <SuperHumanController></SuperHumanController>
  </main>
  <footer class="footer"></footer>
</template>

<style lang="scss" scoped>
.header {
  padding-top: 50px;
  .title {
    font-size: 56px;
    font-weight: 600;
    text-align: center;
    color: rgb(33, 37, 41);
    .important {
      color: #7761f9;
    }
  }
}
.main {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  justify-content: space-evenly;
  overflow: auto;
}

@media (max-width: 768px) {
  .header {
    padding-top: unset;
    .title {
      font-size: 38px;
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}
</style>
