<template>
  <div
    :style="backgroundStyle"
    class="min-h-screen w-screen relative overflow-hidden bg-cover bg-no-repeat">
    <div class="w-full flex justify-center items-start gap-5 my-5">
      <div class="h-80 w-60 rounded-lg">
        <img
          :src="candidate.image"
          :alt="`Foto Paslon ${candidate.number}`"
          class="w-full h-full object-contain" />
      </div>
      <div class="flex flex-col gap-5 items-start text-white pt-8">
        <VisiMisiBanner :name1="candidate.name" :name2="candidate.partner" />
        <div class="grid grid-cols-2 gap-4 w-[70vw]">
          <div class="rounded-xl p-4 overflow-y-auto">
            <h3
              class="w-fit px-2 text-lg font-bold text-white text-shadow-md bg-gradient-to-r from-purple-secondary to-purple-primary mb-2">
              Visi
            </h3>
            <p>{{ candidate.vision }}</p>
          </div>
          <div
            class="row-span-3 relative p-4 overflow-visible border-2 border-purple-primary">
            <h3
              class="absolute z-50 -top-4 w-fit px-4 text-lg font-bold text-white text-shadow-md bg-gradient-to-r from-purple-secondary to-purple-primary mb-2">
              Program Kerja
            </h3>
            <div class="overflow-y-auto">
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
    <div class="flex justify-between px-16 mb-6">
      <button
        @click="goBack"
        class="cursor-pointer bg-gradient-to-r from-purple-secondary to-purple-primary text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300">
        BACK
      </button>

      <button
        @click="vote"
        class="cursor-pointer bg-gradient-to-r from-brown-secondary to-brown-primary text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300">
        VOTE
      </button>
    </div>
  </div>
</template>

<script setup>
import paslonData from "~/data/paslonosis.json";

const route = useRoute();
const paslon = route.params.id;

const candidate = computed(() => {
  const id = parseInt(paslon);
  return paslonData.candidates.find((c) => c.id === id) || {};
});

const backgroundStyle = computed(() => {
  const id = parseInt(paslon);
  if ([1, 2, 3].includes(id)) {
    return {
      backgroundImage: `url('/images/Background/VISIMISI/OSIS/Paslon-${id}.png')`,
    };
  }
  return {};
});

const goBack = () => {
  window.history.back()
};
</script>
