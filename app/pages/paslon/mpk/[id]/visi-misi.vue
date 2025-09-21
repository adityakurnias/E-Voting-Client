<template>
  <div
    :style="backgroundStyle"
    class="min-h-screen w-screen relative overflow-hidden bg-cover bg-no-repeat">
    <div class="w-full h-full flex justify-center items-start gap-5 my-5">
      <div class="h-80 w-60 rounded-lg">
        <img
          :src="candidate.image"
          :alt="`Foto Paslon ${candidate.number}`"
          class="w-full h-full object-contain" />
      </div>

      <div class="flex flex-col gap-5 items-start text-white pt-8">
        <VisiMisiBanner :name1="candidate.name" :name2="candidate.partner" />

        <div class="grid grid-cols-2 gap-4 w-[70vw] h-[80vh]">
          <div class="rounded-xl p-4 overflow-y-auto">
            <h3
              class="w-fit px-2 text-lg font-bold text-white text-shadow-md bg-gradient-to-r from-purple-secondary to-purple-primary mb-2">
              Visi
            </h3>
            <p>{{ candidate.vision }}</p>
          </div>

          <div class="row-span-3 rounded-xl p-4 overflow-y-auto">
            <h3
              class="w-fit px-4 text-lg font-bold text-white text-shadow-md bg-gradient-to-r from-purple-secondary to-purple-primary mb-2">
              Program Kerja
            </h3>

            <h4 class="font-semibold mt-2">Jangka Pendek</h4>
            <ol class="list-decimal list-inside space-y-1">
              <li
                class="pl-4 -indent-4"
                v-for="(program, i) in candidate.workPrograms.shortTerm"
                :key="`sp-${i}`">
                {{ program }}
              </li>
            </ol>

            <h4 class="font-semibold mt-4">Jangka Panjang</h4>
            <ol class="list-decimal list-inside space-y-1">
              <li
                class="pl-4 -indent-4"
                v-for="(program, i) in candidate.workPrograms.longTerm"
                :key="`lp-${i}`">
                {{ program }}
              </li>
            </ol>
          </div>

          <div class="row-span-2 rounded-xl p-4 overflow-y-auto">
            <h3
              class="w-fit px-2 text-lg font-bold text-white text-shadow-md bg-gradient-to-r from-purple-secondary to-purple-primary mb-2">
              Misi
            </h3>
            <ol class="list-decimal list-inside space-y-1">
              <li
                class="pl-4 -indent-4"
                v-for="(mission, i) in candidate.missions"
                :key="`misi-${i}`">
                {{ mission }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import paslonData from "~/data/paslonmpk.json";

const route = useRoute();
const paslon = route.params.id;

const candidate = computed(() => {
  const id = parseInt(paslon);
  return paslonData.candidates.find((c) => c.id === id) || {};
});

const backgroundStyle = computed(() => {
  const id = parseInt(paslon);
  if ([1, 2].includes(id)) {
    return {
      backgroundImage: `url('/images/Background/VISIMISI/MPK/Paslon-${id}.png')`,
    };
  }
  return {};
});
</script>
