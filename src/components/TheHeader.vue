<script setup lang="ts">
import CopyrightsBlock from '@components/CopyrightsBlock.vue';
import NavigationMenu from '@components/NavigationMenu.vue';
</script>

<template>
  <Teleport to="#header">
    <CopyrightsBlock />
    <NavigationMenu />
  </Teleport>
</template>

<style lang="scss" scoped></style>
