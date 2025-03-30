<script setup lang="ts">
import Header from "./components/Header.vue";
</script>
<template>
  <Header />
  <main class="main">
    <RouterView v-slot="{ Component }" name="panel">
      <Transition name="opacity" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
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
  position: relative;
}
.opacity-enter-from, .opacity-leave-to {
  opacity: 0;
}
.opacity-enter-active, .opacity-leave-active {
  transition: opacity 0.25s linear;
}

</style>
