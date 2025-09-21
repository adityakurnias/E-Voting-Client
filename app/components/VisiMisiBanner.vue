<template>
  <div
    class="relative inline-block bg-gradient-to-tr from-[#D9D9D9]  to-[#737373] shadow-2xl py-3 px-8"
    style="clip-path: polygon(0 0, 100% 0, 92% 100%, 0% 100%)">
    <div
      class="text-white font-bold text-md tracking-wide"
      style="text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5)">
      <p>{{ name1 }} <span class="text-purple-400 font-semibold">&</span></p>
      <p>{{ name2 }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name1: {
    type: String,
    default: "Calon Ketua ",
  },
  name2: {
    type: String,
    default: "Calon Wakil Ketua",
  },
});
</script>
