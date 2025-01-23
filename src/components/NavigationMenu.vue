<script setup lang="ts"></script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <router-link to="/works" class="link">
        <li class="nav__item">Works</li>
      </router-link>
      <router-link to="/about" class="link">
        <li class="nav__item">About</li>
      </router-link>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    column-gap: rem(20px);
  }

  &__item {
    color: $color-text-primary;
    font-size: rem(20px);
    line-height: 1.3em;
  }
}
</style>
