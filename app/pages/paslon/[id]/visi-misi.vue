<template>
  <div
    :style="backgroundStyle"
    class="min-h-screen w-screen relative overflow-hidden bg-cover bg-no-repeat p-6">
    <div class="w-full h-full flex justify-center items-start gap-5">
      <div class="h-72 w-56 bg-yellow-300/20">

      </div>
      <div class="flex flex-col gap-5 items-start">
        <VisiMisiBanner />
        <div
          class="grid grid-cols-2 grid-rows-3 gap-4 w-[70vw] h-[80vh] bg-amber-50/10">
          <div class="col-start-1 bg-red-300/10">1</div>
          <div class="row-span-2 col-start-1 row-start-2 bg-green-300/10">2</div>
          <div class="row-span-3 col-start-2 bg-blue-300/10">3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const paslon = route.params.id;

const backgroundStyle = computed(() => {
  const paslonId = [1, 2, 3];
  const id = parseInt(paslon);

  if (paslonId.includes(id)) {
    return {
      backgroundImage: `url('/images/Background/VISIMISI/Paslon-${id}.png')`,
    };
  }
});
</script>
