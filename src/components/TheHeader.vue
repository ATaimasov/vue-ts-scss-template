<script setup lang="ts">
import Copyrights from "@components/Copyrights.vue";
import Navigation from "@components/Navigation.vue";
</script>

<template>
  <Teleport to="#header">
    <Copyrights />
    <Navigation />
  </Teleport>
</template>

<style lang="scss" scoped>

</style>
