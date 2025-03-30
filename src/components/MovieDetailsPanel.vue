<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
  <section class="container">
    <RouterLink :to="{ name: 'Home' }" class="link">Назад к списку</RouterLink>
  </section>
</template>
<style scoped lang="scss">
@use '../styles/font.scss';

.container {
  border-block-end: 1px solid var(--theme-gray-light, #c4c4c4);
  padding-block-end: 20px;
  margin-block-end: 40px;
}

.link {
  appearance: none;
  @include font.movieDetailsPanelLink();
  padding-inline-start: 32px;
  position: relative;


  &::before {
    content: '';
    inline-size: 11.67px;
    block-size: 19.8px;
    position: absolute;
    inset: 0;
    background: center / cover no-repeat url("../../public/images/arrow.svg");
  }
}
</style>