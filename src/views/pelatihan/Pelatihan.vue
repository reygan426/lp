<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { useSliderStore } from '@/stores/slider';
import { onMounted } from 'vue';
import PelatihanSection from './sections/PelatihanSection.vue';
import BenefitSection from './sections/BenefitSection.vue';
import TargetSection from './sections/TargetSection.vue';
import JoinSection from './sections/JoinSection.vue';
import WorkSection from './sections/WorkSection.vue';
import AhliSection from './sections/AhliSection.vue';
import { useHead } from '@vueuse/head';

const sliderStore = useSliderStore();

onMounted(async () => {
  await sliderStore.fetchSlider()
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pelatihan Peer Konselor Jatidiri.App",
  "url": "https://jatidiri.app/pelatihan-konselor",
  "logo": "https://cms.jatidiri.app/storage/identities/KtufuVgVqXJ9Af5YHn0tWy0OPQWUBPx5LHHuF3pc.png",
  "description": "Program pelatihan konselor karakter dari Jatidiri.App"
};

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(structuredData)
    }
  ]
});
</script>

<template>
  <MainLayout position="fixed" :white-section-visible="false">
    <HeroSection v-if="sliderStore.sliders" :sliders="sliderStore.sliders.slice(0, 3)" />
    <PelatihanSection />
    <BenefitSection />
    <AhliSection />
    <WorkSection />
    <TargetSection />
    <JoinSection />
  </MainLayout>
</template>