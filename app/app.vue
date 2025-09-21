<template>
  <div>
    <div v-if="loading" class="loading-page">
      <div class="loading-spinner"></div>
      <p class="text-white">Memuat Halaman...</p>
    </div>
    <NuxtLayout v-show="loading">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const loading = ref(true);

onMounted(() => {
  window.addEventListener("load", () => {
    loading.value = false;
  });
});
</script>

<style>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2a3944;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #007bff;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
