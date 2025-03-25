<script setup lang="ts"></script>
<template>
  <div>
    <h2>Фильмы</h2>
    <div>
      <label><input type="checkbox" class="checkbox"/>Отсортировать по названию</label>
      <label><input type="checkbox" class="checkbox"/>Отсортировать по году</label>
    </div>
  </div>
</template>
<style scoped lang="scss">
.checkbox {
  appearance: none;
  inline-size: 15px;
  block-size: 15px;
  border: 1px solid #c4c4c4;
}
</style>
