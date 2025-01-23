<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@components/TheFooter.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div v-cloak>
    <TheHeader />
    <Teleport to="#main">
      <router-view v-slot="{ Component }">
        <transition :name="'fade'" mode="out-in">
          <keep-alive>
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </transition>
      </router-view>
    </Teleport>
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
</style>
