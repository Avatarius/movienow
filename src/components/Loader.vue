<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="circle circle_black"></div>
    <div class="circle circle_red"></div>
  </div>
</template>
<style scoped lang="scss">
.container {
  inline-size: 136px;
  block-size: 136px;
  position: relative;
}

.circle {
  aspect-ratio: 1;
  position: absolute;

  &::before {
    content: "";
    position: absolute;
    inline-size: 100%;
    block-size: 50%;
    border-radius: 120px 120px 0 0;
  }

  &_black {
    inline-size: 95.78px;
    block-size: 95.78px;
    rotate: 36.9deg;
    animation: spin 1.2s linear infinite;
    inset-inline-start: 13px;
    inset-block-end: 16px;

    &::before {
      border: 3.57px solid #000;
      border-block-end: none;
    }
  }

  &_red {
    inline-size: 78.88px;
    block-size: 78.88px;
    rotate: 158.99deg;
    inset-inline-start: 7px;
    inset-block-end: 16px;
    animation: spin_reverse 1.2s linear infinite;

    &::before {
      border: 3px solid #fa2828fa;
      border-block-end: none;
    }
  }
}

@keyframes spin {
  from {
    rotate: 36.9deg;
  }

  to {
    rotate: 396.9deg;
  }
}

@keyframes spin_reverse {
  from {
    rotate: 158.99deg;
  }

  to {
    rotate: -201.01deg;
  }
}
</style>
