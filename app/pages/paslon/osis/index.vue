<template>
  <div
    class="min-h-screen relative overflow-hidden bg-[url('~/assets/images/Background/OSIS.png')] bg-cover bg-no-repeat">
    <!-- Overlay -->
    <div
      class="absolute z-10 inset-0 bg-[url('~/assets/images/Background/ELEMEN%20EMAS.png')] bg-cover bg-center bg-no-repeat bg-fixed"></div>

    <main
      class="min-h-screen z-20 container mx-auto px-4 relative text-center text-white">
      <section
        class="flex flex-col items-center justify-around mx-auto min-h-screen">
        <div class="flex flex-col">
          <h2 class="text-xl md:text-2xl font-bold mb-10">
            KETUA & WAKIL <span class="bg-gradient-to-r from-purple-secondary to-purple-primary bg-clip-text text-transparent">OSIS</span> <br>
            SMK <span class="bg-gradient-to-r from-purple-secondary to-purple-primary bg-clip-text text-transparent">PLUS</span> PELITA NUSANTARA
          </h2>

          <div class="flex gap-10 flex-wrap justify-center items-center">
            <div class="flex flex-col items-center gap-4">
              <a href="/paslon/osis/1/visi-misi" class="w-full max-w-xs">
                <CandidateCard
                  image-src="/images/Paslon/OSIS/Paslon 1.svg"
                  calon1="Arya Fata Rasikhuna"
                  calon2="Bunga Cantika Safitrie"
                  kelas1="XI LPB 1"
                  kelas2="XI DKV 2" />
              </a>
              <a href="/paslon/osis/1/visi-misi"
                class="bg-gradient-to-r from-purple-secondary to-purple-primary px-6 py-2 rounded-full font-semibold hover:scale-105 cursor-pointer transition">
                NEXT
              </a>
            </div>

            <div class="flex flex-col items-center gap-4">
              <a href="/paslon/osis/2/visi-misi" class="w-full max-w-xs">
                <CandidateCard
                  image-src="/images/Paslon/OSIS/Paslon 2.svg"
                  calon1="Diyas Aqilaalya"
                  calon2="Satria Robby Al Zidane"
                  kelas1="XI DKV 3"
                  kelas2="XI LPB 2" />
              </a>
              <a href="/paslon/osis/2/visi-misi"
                class="bg-gradient-to-r from-purple-secondary to-purple-primary px-6 py-2 rounded-full font-semibold hover:scale-105 cursor-pointer transition">
                NEXT
              </a>
            </div>

            <div class="flex flex-col items-center gap-4">
              <a href="/paslon/osis/3/visi-misi" class="w-full max-w-xs">
                <CandidateCard
                  image-src="/images/Paslon/OSIS/Paslon 3.svg"
                  calon1="Diyas Aqilaalya"
                  calon2="Satria Robby Al Zidane"
                  kelas1="XI RPL 1"
                  kelas2="XI DKV 1" />
              </a>
              <a href="/paslon/osis/3/visi-misi"
                class="bg-gradient-to-r from-purple-secondary to-purple-primary px-6 py-2 rounded-full font-semibold hover:scale-105 cursor-pointer transition">
                NEXT
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
