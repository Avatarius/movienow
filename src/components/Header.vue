<template>
  <header class="header">
    <RouterLink :to="{ name: 'Home' }">
      <h1 class="header__title">#movienow</h1>
    </RouterLink>

  </header>
</template>
<style scoped lang="scss">
@use "../styles/font.scss";

.header {
  background-color: var(--background-header-color, #fa2828fa);
  padding-block: 36px 16px;

  &__title {
    @include font.header();
    color: var(--theme-dark, #000);
  }
}
</style>
