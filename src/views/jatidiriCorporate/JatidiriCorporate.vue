<script setup lang="ts">
// import MitraSection from '@/components/sections/MitraSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import AboutServiceSection from '@/components/sections/AboutServiceSection.vue';
import AlasanSection from '@/components/sections/AlasanSection.vue';
import PriceSection from '@/components/sections/PriceSection.vue';

import { onMounted } from 'vue';
import { useSliderStore } from '@/stores/slider';
import { usePartnerStore } from '@/stores/partner';
import { useTestimoniStore } from '@/stores/testimoni';
import { useAssesmentStore } from '@/stores/assesment';
import { useUnggulanStore } from '@/stores/unggulan';
import { useProgramStore } from '@/stores/program';
import HeroImgSection from '@/components/sections/HeroImgSection.vue';

const sliderStore = useSliderStore();
const partnerStore = usePartnerStore();
const testimoniStore = useTestimoniStore();
const assesmentStore = useAssesmentStore();
const unggulanStore = useUnggulanStore();
const programStore = useProgramStore();

onMounted(async () => {
  await sliderStore.fetchSlider()
  await partnerStore.fetchPartner()
  await testimoniStore.fetchTestimonial()
  await assesmentStore.fetchAssesment()
  await unggulanStore.fetchUnggulan()
  await programStore.fetchProgramBySlug('jatidiri-corporate')
});
</script>

<template>
  <MainLayout position="fixed" :white-section-visible="false">
    <HeroImgSection :image="programStore.currentProgram?.image1" :title="programStore.currentProgram?.title1"
      :description="programStore.currentProgram?.description1" :page-name="'Jatidiri Corporate'"
      link-page="/program/jatidiri-corporate" />
    <AboutServiceSection category="Jatidiri Corporate" title="Menyelaraskan Nilai, Meningkatkan Kinerja Organisasi"
      description="Dalam era bisnis yang terus berubah, Jatidiri Corporate hadir untuk membantu perusahaan memahami kekuatan budaya kerja dan karakter tim. Dengan pendekatan berbasis data dan psikometrik, kami mendukung transformasi organisasi dari dalam. <br> Layanan kami dirancang untuk mendalami potensi individu dalam tim, menyelaraskan nilai perusahaan, serta menciptakan lingkungan kerja yang kolaboratif dan sehat. Dengan fitur asesmen dan konseling yang disesuaikan untuk kebutuhan korporasi, Jatidiri Corporate menjadi mitra strategis dalam membangun budaya kerja yang kuat, meningkatkan produktivitas, dan mendorong keberlanjutan perusahaan." />
    <AlasanSection :unggulan="unggulanStore.unggulans" />
    <!-- <MitraSection v-if="partnerStore.partners.length" :partners="partnerStore.partners" /> -->
    <TestimonialsSection :testimoni="testimoniStore.testimonials" />
    <PriceSection />
  </MainLayout>
</template>