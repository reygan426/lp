<script setup lang="ts">
import { RouterView } from 'vue-router'
// import { onMounted } from 'vue'
// import { usePixelStore } from '@/stores/pixel'
// import { useAnalyticStore } from '@/stores/analytic'
// import { loadGoogleAnalytics, loadMetaPixel } from '@/utils/tracking'

// const pixelStore = usePixelStore()
// const analyticStore = useAnalyticStore()

// onMounted(async () => {
//   await Promise.all([
//     pixelStore.fetchPixel(),
//     analyticStore.fetchAnalytic()
//   ])
  
//   if (analyticStore.analytic?.[0]?.ganalytics_code) {
//     loadGoogleAnalytics(analyticStore.analytic[0].ganalytics_code)
//   }
  
//   if (pixelStore.pixel?.[0]?.pixel_code) {
//     loadMetaPixel(pixelStore.pixel[0].pixel_code)
//   }
// })
</script>

<template>
  <router-view :key="$route.fullPath" />
</template>