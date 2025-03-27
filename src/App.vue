<script setup lang="ts">
import Header from "./components/Header.vue";
</script>
<template>
  <Header />
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.main {
  margin: 40px 260px 0;
}
</style>
