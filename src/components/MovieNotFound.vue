<template>
  <p class="text">К сожалению, по вашему запросу ничего не найдено...</p>
</template>
<style scoped lang="scss">
@use '../styles/font.scss';
.text {
  @include font.notFound();
}
</style>