<template>
  <div
    class="min-h-screen relative overflow-hidden bg-[url('~/assets/images/Background/MPK.png')] bg-cover bg-no-repeat">
    <div
      class="absolute inset-0 bg-[url('~/assets/images/Background/ELEMEN%20EMAS.png')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
    <main
      class="min-h-screen container mx-auto px-4 relative z-20 text-center text-white">
      <section
        class="flex flex-col items-center justify-around mx-auto min-h-screen">
        <div class="flex flex-col">
          <h2 class="text-xl md:text-2xl font-bold mb-10">
            KETUA & WAKIL
            <span
              class="bg-gradient-to-r from-purple-secondary to-purple-primary bg-clip-text text-transparent"
              >MPK</span
            >
            <br />
            SMK
            <span
              class="bg-gradient-to-r from-purple-secondary to-purple-primary bg-clip-text text-transparent"
              >PLUS</span
            >
            PELITA NUSANTARA
          </h2>

          <div class="flex gap-10 flex-wrap justify-center items-center">
            <div class="flex flex-col items-center gap-4">
              <NuxtLink to="/paslon/osis/1/visi-misi" class="w-full max-w-xs">
                <CandidateCard
                  image-src="/images/Paslon/OSIS/Paslon 1.svg"
                  calon1="Stevano Imanuel Pratama"
                  calon2="Mazaya Ilmina Syareefa"
                  kelas1="XI TKJ 3"
                  kelas2="XI DKV 1" />
              </NuxtLink>
              <NuxtLink
                to="/paslon/osis/1/visi-misi"
                class="bg-gradient-to-r from-purple-secondary to-purple-primary px-6 py-2 rounded-full font-semibold hover:scale-105 cursor-pointer transition">
                NEXT
              </NuxtLink>
            </div>

            <div class="flex flex-col items-center gap-4">
              <NuxtLink to="/paslon/osis/2/visi-misi" class="w-full max-w-xs">
                <CandidateCard
                  image-src="/images/Paslon/OSIS/Paslon 2.svg"
                  calon1="Diyas Aqilaalya"
                  calon2="Satria Robby Al Zidane"
                  kelas1="XI RPL 2"
                  kelas2="XI DKV 3" />
              </NuxtLink>
              <NuxtLink
                to="/paslon/osis/2/visi-misi"
                class="bg-gradient-to-r from-purple-secondary to-purple-primary px-6 py-2 rounded-full font-semibold hover:scale-105 cursor-pointer transition">
                NEXT
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
