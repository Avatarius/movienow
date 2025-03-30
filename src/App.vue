<script setup lang="ts">
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import { computed } from "vue";
const route = useRoute();


const transitionName = computed(() => {
  const transition = route.meta.transition;
  return typeof transition === 'string' ? transition : '';
});
console.log(transitionName);


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
      <Transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style scoped lang="scss">
.main {
  margin: 40px auto 0;
  max-inline-size: 1400px;
  position: relative;
}

.opacity-enter-from,
.opacity-leave-to {
  opacity: 0;
}

.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 0.25s linear;
}

.card-list-opacity-enter-from,
.card-list-opacity-leave-to {
  opacity: 0;
}

.card-list-opacity-enter-active,
.card-list-opacity-leave-active {
  transition: opacity 0.25s linear;
}
</style>
