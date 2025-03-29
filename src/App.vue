<script setup lang="ts">
import Header from "./components/Header.vue";
</script>
<template>
  <Header />
  <main class="main">
    <RouterView v-slot="{ Component }">
      <Transition name="slide" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style scoped lang="scss">
.main {
  margin: 40px 260px 0;
}
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s linear;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

</style>
