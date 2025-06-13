<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import FormSection from './sections/FormSection.vue';
import InfoSection from './sections/InfoSection.vue';
import { useSliderStore } from '@/stores/slider';
import { useIdentityStore } from '@/stores/identity';
import { onMounted } from 'vue';
import Bg4 from '@/assets/bg4.jpg'
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
  "name": "Kontak Jatidiri.App",
  "url": "https://jatidiri.app/contact",
  "logo": "https://cms.jatidiri.app/storage/identities/KtufuVgVqXJ9Af5YHn0tWy0OPQWUBPx5LHHuF3pc.png",
  "description": "Hubungi tim Jatidiri.App untuk informasi lebih lanjut"
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
    <HeroAboutSection :image="Bg4" :title="'Hubungi Kami'"
      :description="'Hubungi kami untuk kerja sama, dukungan, atau sekadar bertanya. Kami siap menyambut Anda.'"
      page-name="Kontak" link-page="/contact">
    </HeroAboutSection>
    <InfoSection v-if="identityStore.identity" :identity="identityStore.identity" />
    <FormSection v-if="identityStore.identity" :identity="identityStore.identity" />
  </MainLayout>
</template>