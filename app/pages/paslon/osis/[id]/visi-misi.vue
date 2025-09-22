<template>
  <div
    :style="backgroundStyle"
    class="min-h-screen w-screen relative overflow-hidden bg-cover bg-no-repeat flex flex-col justify-between">
    <div
      class="w-full flex flex-col items-center gap-4 my-5 lg:flex-row lg:justify-center lg:items-start lg:gap-5">
      <div
        class="h-48 w-48 rounded-full shadow-lg lg:h-80 lg:w-60 lg:rounded-lg">
        <img
          :src="candidate.image"
          :alt="`Foto Paslon ${candidate.number}`"
          class="w-full h-full object-contain" />
      </div>

      <div class="flex flex-col gap-5 items-center lg:items-start lg:pt-8">
        <VisiMisiBanner :name1="candidate.name" :name2="candidate.partner" />

        <div
          class="grid grid-cols-1 gap-8 w-[90vw] lg:grid-cols-2 lg:gap-4 lg:w-[70vw]">
          <div class="bg-opacity-30 backdrop-blur-sm rounded-xl p-4">
            <h3
              class="w-fit px-2 text-lg font-bold text-white text-shadow-md bg-gradient-to-r from-purple-secondary to-purple-primary mb-2">
              Visi
            </h3>
            <p class="text-white">{{ candidate.vision }}</p>
          </div>

          <div
            class="bg-opacity-30 backdrop-blur-sm rounded-xl p-4 lg:row-span-2">
            <h3
              class="w-fit px-2 text-lg font-bold text-white text-shadow-md bg-gradient-to-r from-purple-secondary to-purple-primary mb-2">
              Misi
            </h3>
            <ol class="list-decimal list-inside space-y-1 text-white">
              <li
                class="pl-4 -indent-4"
                v-for="(mission, i) in candidate.missions"
                :key="`misi-${i}`">
                {{ mission }}
              </li>
            </ol>
          </div>

          <div
            class="relative p-4 overflow-visible border-2 border-purple-primary bg-opacity-30 backdrop-blur-sm rounded-xl lg:row-span-3 lg:col-start-2 lg:row-start-1">
            <h3
              class="absolute z-10 -top-4 left-4 w-fit px-4 text-lg font-bold text-white text-shadow-md bg-gradient-to-r from-purple-secondary to-purple-primary">
              Program Kerja
            </h3>
            <div class="overflow-y-auto text-white max-h-[400px] lg:max-h-full">
              <h4 class="font-semibold mt-4">Jangka Pendek</h4>
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
        </div>
      </div>
    </div>

    <div class="flex justify-between px-6 pb-6 lg:px-16 lg:pb-6">
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
  const router = useRouter();
  router.back();
};

const vote = () => {
  console.log(candidate.value.id);
};
</script>
