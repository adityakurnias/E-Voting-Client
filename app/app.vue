<template>
  <div class="bg-[#2a3944] min-h-screen">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator :throttle="800" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup></script>
