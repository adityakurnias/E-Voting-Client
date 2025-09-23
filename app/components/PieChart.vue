
<template>
  <Pie :data="chartData" :options="chartOptions" />
</template>

  <script setup lang="ts">
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
  import { Pie } from 'vue-chartjs'

  ChartJS.register(Title, Tooltip, Legend, ArcElement)
  
  const props = defineProps<{
    labels: string[]
    data: number[]
    colors: string[]
  }>()
  
  const chartData = {
    labels: props.labels,
    datasets: [
      {
        backgroundColor: props.colors,
        data: props.data
      }
    ]
  }
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#374151',
        }
      },
      title: {
        display: false
      }
    }
  }
  </script>