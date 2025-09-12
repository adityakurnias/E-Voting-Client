<template>
  <div
    class="min-h-screen relative overflow-hidden bg-[url('~/assets/images/Background/MPK.png')] bg-cover bg-no-repeat">
    <div
      class="absolute inset-0 bg-[url('~/assets/images/Background/ELEMEN%20EMAS.png')] bg-cover bg-center bg-no-repeat bg-fixed">
    </div>
    <main
      class="min-h-screen container mx-auto px-4 relative z-20 text-center text-white">
      <section
        class="flex flex-col items-center justify-around mx-auto min-h-screen">
        <div class="flex flex-col">
          <h2 class="text-2xl font-bold mb-10">
            Silahkan Klik Gambar Dibawah Ini Untuk Voting
          </h2>
          <div class="flex flex-wrap justify-center gap-8">
            <CandidateCard
              image-src="/images/Paslon/MPK/Paslon 1.svg"
              calon1="Stevano Imanuel Pratama"
              calon2="Mazaya Ilmina Syareefa"
              kelas1="XI TKJ 3"
              kelas2="XI DKV 1" />
            <CandidateCard
              image-src="/images/Paslon/MPK/Paslon 2.svg"
              calon1="Diyas Aqilaalya"
              calon2="Satria Robby Al Zidane"
              kelas1="XI RPL 2"
              kelas2="XI DKV 3" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
</script>

<style></style>
