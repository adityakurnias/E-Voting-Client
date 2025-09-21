<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <div class="hover:scale-105 transition-all cursor-pointer">
      <img loading="lazy" class="w-72" :src="imageSrc" alt="Foto Calon" />
    </div>
    <Banner
      :calon1="calon1"
      :calon2="calon2"
      :kelas1="kelas1"
      :kelas2="kelas2" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  calon1: String,
  calon2: String,
  kelas1: String,
  kelas2: String,
});
</script>

<style></style>
