<script setup lang="ts">
import Header from "./components/Header.vue";
import CardList from "./components/CardList.vue";
import ControlPanel from "./components/ControlPanel.vue";
</script>
<template>
  <Header/>
  <main class="main">
    <ControlPanel/>
    <CardList/>
  </main>
</template>

<style scoped lang="scss">
.main {
  margin: 40px 260px 0;
}
</style>
