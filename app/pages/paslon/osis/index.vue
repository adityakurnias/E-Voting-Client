<template>
  <div
    class="min-h-screen relative overflow-hidden bg-[url('~/assets/images/Background/OSIS.png')] bg-cover bg-no-repeat">
    <div
      class="absolute z-10 inset-0 bg-[url('~/assets/images/Background/ELEMEN%20EMAS.png')] bg-cover bg-center bg-no-repeat bg-fixed"></div>
    <main
      class="min-h-screen z-20 container mx-auto px-4 relative text-center text-white">
      <section
        class="flex flex-col items-center justify-around mx-auto min-h-screen">
        <div class="flex flex-col">
          <h2 class="text-2xl font-bold mb-10">
            Silahkan Klik Gambar Dibawah Ini Untuk Voting
          </h2>
          <div class="flex flex-wrap justify-center gap-8">
            <a href="/paslon/osis/1/visi-misi">
              <CandidateCard
                image-src="/images/Paslon/OSIS/Paslon 1.svg"
                calon1="Arya Fata Rasikhuna"
                calon2="Bunga Cantika Safitrie"
                kelas1="XI LPB 1"
                kelas2="XI DKV 2" />
            </a>
            <a href="/paslon/osis/2/visi-misi">
              <CandidateCard
                image-src="/images/Paslon/OSIS/Paslon 2.svg"
                calon1="Diyas Aqilaalya"
                calon2="Satria Robby Al Zidane"
                kelas1="XI DKV 3"
                kelas2="XI LPB 2" />
            </a>
            <a href="/paslon/osis/3/visi-misi">
              <CandidateCard
                image-src="/images/Paslon/OSIS/Paslon 3.svg"
                calon1="Diyas Aqilaalya"
                calon2="Satria Robby Al Zidane"
                kelas1="XI RPL 1"
                kelas2="XI DKV 1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
