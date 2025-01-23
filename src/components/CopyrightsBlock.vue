<script setup lang="ts">
import CopyrightLogo from '@icons/CopyrightLogo.vue';
</script>

<template>
  <div class="copyrights">
    <a href="https://github.com/ATaimasov" target="_blank" class="link copyrights__link">
      <CopyrightLogo class="logo copyrights__logo" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.copyrights {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
