<script setup lang="ts">
// import MitraSection from '@/components/sections/MitraSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import UspSection from '@/components/sections/UspSection.vue';
import ServiceSection from './sections/ServiceSection.vue';
import { useProgramStore } from '@/stores/program';
import { useSliderStore } from '@/stores/slider';
import { useUnggulanStore } from '@/stores/unggulan';
import { usePartnerStore } from '@/stores/partner';
import { useTestimoniStore } from '@/stores/testimoni';
import { onMounted } from 'vue';
import HeroAboutSection from '../about/sections/HeroAboutSection.vue';
import Bg6 from '@/assets/bg6.jpg'

const sliderStore = useSliderStore();
const unggulanStore = useUnggulanStore();
const partnerStore = usePartnerStore();
const programStore = useProgramStore();
const testimoniStore = useTestimoniStore();

onMounted(async () => {
  await sliderStore.fetchSlider()
  await unggulanStore.fetchUnggulan()
  await partnerStore.fetchPartner()
  await programStore.fetchProgram()
  await testimoniStore.fetchTestimonial()
});
</script>

<template>
  <MainLayout position="fixed" :white-section-visible="false">
    <HeroAboutSection :image="Bg6" :title="'Petakan Potensi & Karakter dengan Praktis untuk Tumbuh Bersama'"
      :description="'Temukan cara praktis untuk memetakan potensi dan karakter — baik untuk individu, keluarga, tim sekolah, maupun perusahaan.'"
      page-name="Package" link-page="/package">
    </HeroAboutSection>
    <UspSection :unggulan="unggulanStore.unggulans" />
    <!-- <MitraSection v-if="partnerStore.partners.length" :partners="partnerStore.partners" /> -->
    <ServiceSection />
    <TestimonialsSection :testimoni="testimoniStore.testimonials" />
  </MainLayout>
</template>