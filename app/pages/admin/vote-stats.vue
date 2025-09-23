<template>
  <div
    class="min-h-screen bg-[url('~/assets/images/Background/KPOP.png')] bg-cover bg-no-repeat bg-fixed p-6"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">Dashboard Admin</h1>
        <p class="text-gray-300">E-Voting SMK Plus Pelita Nusantara</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div
          class="bg-gradient-to-r from-brown-secondary to-brown-primary text-[#19303E] p-4 rounded-lg text-center"
        >
          <div class="text-2xl font-bold">256</div>
          <div class="text-sm">Total Votes</div>
        </div>
        <div
          class="bg-gradient-to-r from-brown-secondary to-brown-primary text-[#19303E] p-4 rounded-lg text-center"
        >
          <div class="text-2xl font-bold">128</div>
          <div class="text-sm">MPK Votes</div>
        </div>
        <div
          class="bg-gradient-to-r from-brown-secondary to-brown-primary text-[#19303E] p-4 rounded-lg text-center"
        >
          <div class="text-2xl font-bold">128</div>
          <div class="text-sm">OSIS Votes</div>
        </div>
        <div
          class="bg-gradient-to-r from-brown-secondary to-brown-primary text-[#19303E] p-4 rounded-lg text-center"
        >
          <div class="text-2xl font-bold">85%</div>
          <div class="text-sm">Not Vote</div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div
          class="bg-gradient-to-r from-brown-secondary to-brown-primary rounded-lg p-6"
        >
          <h3 class="text-xl font-bold mb-4">Hasil MPK</h3>
          <PieChart
            :labels="mpkData.labels"
            :values="mpkData.values"
            title="Voting MPK"
            :colors="['#3B82F6', '#10B981', '#EF4444']"
          />
        </div>

        <div
          class="bg-gradient-to-r from-brown-secondary to-brown-primary rounded-lg p-6"
        >
          <h3 class="text-xl font-bold mb-4">Hasil OSIS</h3>
          <PieChart
            :labels="osisData.labels"
            :values="osisData.values"
            title="Voting OSIS"
            :colors="['#8B5CF6', '#F97316', '#EC4899']"
          />
        </div>
      </div>

      <div class="bg-white rounded-lg p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold">Activity Logs</h3>
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>

        <div class="space-y-2 max-h-64 overflow-y-auto">
          <div
            class="flex justify-between items-center p-3 bg-gray-50 rounded text-sm"
          >
            <span>Vote baru untuk MPK Kandidat 2</span>
            <span class="text-gray-500">14:30:25</span>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gray-50 rounded text-sm"
          >
            <span>Vote baru untuk OSIS Kandidat 1</span>
            <span class="text-gray-500">14:28:12</span>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gray-50 rounded text-sm"
          >
            <span>Vote baru untuk MPK Kandidat 1</span>
            <span class="text-gray-500">14:25:08</span>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gray-50 rounded text-sm"
          >
            <span>Vote baru untuk OSIS Kandidat 3</span>
            <span class="text-gray-500">14:22:33</span>
          </div>
          <div
            class="flex justify-between items-center p-3 bg-gray-50 rounded text-sm"
          >
            <span>Vote baru untuk MPK Kandidat 3</span>
            <span class="text-gray-500">14:20:15</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { mpkData, osisData, totalVotes, mpkVotes, osisVotes, fetchAll } =
  useDashboard();

onMounted(() => {
  fetchAll();
});
</script>
