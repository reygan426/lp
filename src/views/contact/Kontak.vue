<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import FormSection from './sections/FormSection.vue';
import InfoSection from './sections/InfoSection.vue';
import { useSliderStore } from '@/stores/slider';
import { useIdentityStore } from '@/stores/identity';
import { onMounted } from 'vue';
import Bg4 from '@/assets/bg4.jpg'
import HeroAboutSection from '../about/sections/HeroAboutSection.vue';

const sliderStore = useSliderStore();
const identityStore = useIdentityStore();

onMounted(async () => {
  await sliderStore.fetchSlider()
  await identityStore.fetchIdentity()
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