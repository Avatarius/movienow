<template>
  <header class="header">
    <h1 class="header__title">#movienow</h1>
  </header>
</template>
<style scoped lang="scss">
@use "../styles/font.scss";
.header {
  background-color: #fa2828fa;
  padding-block: 36px 16px;
  &__title {
    @include font.header();
  }
}
</style>
