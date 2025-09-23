<template>
  <div class="bg-[#2a3944] min-h-screen">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout v-if="isAuthReady">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuth } from '~/composables/Auth';

const isAuthReady = ref(false);
const { initializeAuth } = useAuth();

onMounted(() => {
  initializeAuth();
  isAuthReady.value = true;
});
</script>
