<script setup lang="ts">
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

defineProps<{
  labels: string[]
  values: number[]
  title?: string
}>()
</script>

<template>
  <div class="max-w-md mx-auto">
    <h2 v-if="title" class="text-xl font-bold text-center mb-4">{{ title }}</h2>
    <Pie
      :data="{
        labels,
        datasets: [
          {
            label: 'Total Vote',
            data: values,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverOffset: 10
          }
        ]
      }"
      :options="{
        responsive: true,
        plugins: { legend: { position: 'bottom' } }
      }"
    />
  </div>
</template>
