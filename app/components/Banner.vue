<template>
  <div class="relative">
    <div class="bg-gradient-to-r from-[#D9D9D9] to-[#737373] px-6 py-2 transform -skew-x-12 shadow-lg">
      <div class="transform skew-x-12">
        <h2 class="text-title-primary text-md font-bold">
          {{ props.calon1 }} 
          <span class="text-brown-secondary"">
            {{ props.kelas1 }}
          </span>
        </h2>
        <h2 class="text-title-primary text-md font-bold">
          {{ props.calon2 }}
          <span class="text-brown-secondary">
            {{ props.kelas2 }}
          </span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  calon1: String,
  calon2: String,
  kelas1: String,
  kelas2: String
})
</script>