<template>
  <div class="min-h-screen relative overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
      <img loading="lazy" src="~/assets/images/Background/KPOP.png" />
    </div>

    <div class="relative z-10 flex justify-between items-start p-6 px-0">
      <div
        class="flex space-x-2 rounded-r-full p-2 bg-gradient-to-r from-purple-primary to-purple-secondary">
        <img
          loading="lazy"
          src="~/assets/images/Orgs/PNBMINI.png"
          class="w-12 h-12 object-contain" />
        <img
          loading="lazy"
          src="~/assets/images/Orgs/MPKMINI.png"
          class="w-12 h-12 object-contain" />
        <img
          loading="lazy"
          src="~/assets/images/Orgs/OSISMINI.png"
          class="w-12 h-12 object-contain" />
        <img
          loading="lazy"
          src="~/assets/images/Orgs/KPUMINI.png"
          class="w-12 h-12 object-contain" />
      </div>

      <div
        class="flex space-x-2 rounded-l-full p-2 bg-gradient-to-r from-purple-secondary to-purple-primary">
        <img
          loading="lazy"
          src="~/assets/images/Divisi/MM.png"
          class="w-12 h-12 object-contain" />
        <img
          loading="lazy"
          src="~/assets/images/Divisi/RPL.png"
          class="w-12 h-12 object-contain" />
        <img
          loading="lazy"
          src="~/assets/images/Divisi/TKJ.png"
          class="w-12 h-12 object-contain" />
      </div>
    </div>

    <main class="relative z-10 flex flex-col items-center justify-center px-6">
      <div class="mb-12 text-center">
        <div
          class="bg-gradient-to-tr from-brown-secondary to-brown-primary px-6 py-2 rounded-sm shadow-2xl">
          <h1
            class="flex items-end justify-center gap-2 text-4xl md:text-5xl text-shadow-lg">
            <span class="font-extrabold text-title-primary">PENUS </span>
            <span class="text-white italic font-bold">E-voting</span>
          </h1>
        </div>
      </div>

      <div class="w-full max-w-md">
        <form @submit.prevent="handleSubmit" class="space-y-10">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-semibold text-white mb-6 tracking-wide">
              Masukan Data Diri Anda
            </h2>
          </div>

          <div class="flex flex-col justify-center gap-4">
            <div class="flex flex-col items-center justify-center">
              <label
                class="text-transparent bg-clip-text bg-gradient-to-r from-purple-secondary to-purple-primary text-xl font-bold italic tracking-wide text-center">
                NAMA
              </label>
              <input
                v-model="formData.nama"
                type="text"
                class="w-full px-4 py-2 rounded-full bg-white/95 border-2 border-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300/50 text-gray-800 placeholder-gray-400 text-lg shadow-lg transition-all duration-300"
                placeholder="Masukkan nama lengkap"
                required />
            </div>
            <div class="flex flex-col items-center justify-center">
              <label
                class="text-transparent bg-clip-text bg-gradient-to-r from-purple-secondary to-purple-primary text-xl font-bold italic tracking-wide text-center">
                NIS/NIG
              </label>
              <input
                v-model="formData.nisNig"
                type="text"
                class="w-full px-4 py-2 rounded-full bg-white/95 border-2 border-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300/50 text-gray-800 placeholder-gray-400 text-lg shadow-lg transition-all duration-300"
                placeholder="Masukkan NIS/NIG"
                required />
            </div>
          </div>

          <div class="mb-10 w-full flex justify-center">
            <button
              type="submit"
              class="bg-gradient-to-r from-purple-secondary to-purple-primary text-white font-bold py-2 px-8 rounded-full text-xl tracking-wider shadow-2xl transform hover:scale-105 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-300/50 cursor-pointer">
              MASUK
            </button>
          </div>
        </form>
      </div>
    </main>

    <div class="relative z-10 text-center pb-8">
      <p class="text-white/60 text-sm tracking-wide">
        Powered by
        <span
          class="font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-brown-secondary to-brown-primary"
          >DEVACCTO IT</span
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  path: "/login",
});

useHead({
  title: "PENUS E-Voting - Login",
});

const formData = ref({
  nama: "",
  nisNig: "",
});

const handleSubmit = async () => {
  try {
    //! Gua belom tau url nya apa, nanti ubah pas dah di host
    const data = await $fetch(`API/auth/login`, {
      method: "POST",
      body: formData.value,
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
