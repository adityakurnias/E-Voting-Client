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
          <div class="text-2xl font-bold">{{ totalVotes }}</div>
          <div class="text-sm">Total Votes</div>
        </div>
        <div
          class="bg-gradient-to-r from-brown-secondary to-brown-primary text-[#19303E] p-4 rounded-lg text-center"
        >
          <div class="text-2xl font-bold">{{ mpkVotes }}</div>
          <div class="text-sm">MPK Votes</div>
        </div>
        <div
          class="bg-gradient-to-r from-brown-secondary to-brown-primary text-[#19303E] p-4 rounded-lg text-center"
        >
          <div class="text-2xl font-bold">{{ osisVotes }}</div>
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

      <div class="bg-gradient-to-r from-brown-primary to-brown-secondary rounded-lg p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold">Activity Logs</h3>
          <button
            @click="votingLogs"
            class="bg-gradient-to-r from-purple-secondary to-purple-primary cursor-pointer text-white font-semibold py-2 px-10 rounded-full transition-all hover:shadow-lg hover:scale-105"
          >
            Refresh
          </button>
        </div>

        <div v-if="loading" class="text-gray-500 text-center">Loading...</div>

        <div v-else class="space-y-2 max-h-64 overflow-y-auto">
          <div
            v-for="log in logs"
            :key="log.id"
            class="flex justify-between items-center p-3 bg-brown-secondary  rounded text-sm"
          >
            <span>
              {{ log.user.name }} memilih OSIS Kandidat {{ log.voted_osis }} dan
              MPK Kandidat {{ log.voted_mpk }}
            </span>
            <span class="text-gray-500">
              {{ new Date(log.created_at).toLocaleTimeString() }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  mpkData,
  osisData,
  totalVotes,
  mpkVotes,
  osisVotes,
  fetchAll,
  votingLogs,
  logs,
  loading,
  error,
} = useDashboard();

onMounted(() => {
  fetchAll();
  votingLogs();
});
</script>
