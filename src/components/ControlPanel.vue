<script setup lang="ts"></script>
<template>
  <div class="container">
    <h2 class="title">Фильмы</h2>
    <div class="sort">
      <label class="sort__label"
        ><input type="checkbox" class="sort__checkbox" />Отсортировать по
        названию</label
      >
      <label class="sort__label"
        ><input type="checkbox" class="sort__checkbox" />Отсортировать по
        году</label
      >
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "../styles/font.scss";
@use "../styles/layout.scss";
.container {
  padding-block-end: 16px;
  border-block-end: 1px solid #c4c4c4;
  margin-block-end: 40px;
}
.title {
  @include font.controlPanelTitle();
  margin-block-end: 16px;
}
.sort {
  @include layout.flex(row, flex-start, center, 34.5px);
  &__label {
    @include font.controlPanelLabel();
    @include layout.flex(row, flex-start, center, 10.5px);
  }
  &__checkbox {
    appearance: none;
    position: relative;
    inline-size: 15px;
    block-size: 15px;
    aspect-ratio: 1;
    background-color: transparent;
    border: 1px solid #c4c4c4;
    &::after {
      content: "";
      position: absolute;
      inline-size: 0;
      block-size: 0;
      inset-inline-start: calc(50% - 6px);
      inset-block-start: calc(50% - 4.5px);
      background: center / cover no-repeat
        url("../../public/images/checkbox.svg");
    }
    &:checked {
      background-color: #ff5252fa;
      border: none;
    }
    &:checked::after {
      inline-size: 12px;
      block-size: 9px;
    }
  }
}
</style>
