<template>
  <div
    :style="backgroundStyle"
    class="min-h-screen relative overflow-hidden bg-cover bg-no-repeat">
    
  </div>
</template>

<script setup>
const route = useRoute();
const candidateId = route.params.id;

const backgroundStyle = computed(() => {
  const validIds = [1, 2, 3];
  const id = parseInt(candidateId);

  if (validIds.includes(id)) {
    return {
      backgroundImage: `url('/images/Background/VISIMISI/Paslon-${id}.png')`,
    };
  }
});
</script>