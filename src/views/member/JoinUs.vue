<script setup lang="ts">
import AboutSection from '@/components/sections/AboutSection.vue';
import VisiSection from '@/components/sections/VisiSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import FormSection from './sections/FormSection.vue';
import { useSliderStore } from '@/stores/slider';
import { useIdentityStore } from '@/stores/identity';
import { onMounted } from 'vue';
import HeroAboutSection from '../about/sections/HeroAboutSection.vue';
import { useHead } from '@vueuse/head';

const sliderStore = useSliderStore();
const identityStore = useIdentityStore();

onMounted(async () => {
  await sliderStore.fetchSlider()
  await identityStore.fetchIdentity()
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bergabung Dengan Jatidiri.App",
  "url": "https://jatidiri.app/join-us",
  "logo": "https://cms.jatidiri.app/storage/identities/KtufuVgVqXJ9Af5YHn0tWy0OPQWUBPx5LHHuF3pc.png",
  "description": "Bergabung menjadi bagian dari komunitas Jatidiri.App"
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
    <HeroAboutSection :image="'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'" :title="'Bergabung Bersama Kami'"
      :description="'Jatidiri.App membuka pintu bagi Anda yang ingin berkontribusi dalam menciptakan layanan psikologi digital yang aman, berdaya guna, dan berdampak positif bagi individu, pendidikan, dan masyarakat.'"
      page-name="Join Us" link-page="/join-us"></HeroAboutSection>
    <AboutSection v-if="identityStore.identity" :identity="identityStore.identity" />
    <VisiSection />
    <FormSection v-if="identityStore.identity" :identity="identityStore.identity" />
  </MainLayout>
</template>