<template>
  <div class="fixed top-0 left-0 w-full h-full overflow-hidden z-10">
    <video :src="videoSrc" autoplay muted class="w-full h-full object-cover" @ended="handleVideoEnd"></video>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useAuth } from '~/composables/Auth';

const videoSrc = ref('');
const { logoutAndRedirect } = useAuth();

const setVideoSource = () => {
  const isMobile = window.innerWidth < 768;
  videoSrc.value = isMobile ? '/video/thanks-mobile.mp4' : '/video/thanks-desktop.mp4';
};

const handleVideoEnd = () => {
  logoutAndRedirect();
};

onMounted(() => {
  setVideoSource();
  window.addEventListener('resize', setVideoSource);
});
 
onUnmounted(() => {
  window.removeEventListener('resize', setVideoSource);
});
</script>
