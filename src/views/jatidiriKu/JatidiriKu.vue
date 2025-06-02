<script setup lang="ts">
import MitraSection from '@/components/sections/MitraSection.vue';
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
  await programStore.fetchProgramBySlug('jatidiri-ku')
});
</script>

<template>
  <MainLayout position="fixed" :white-section-visible="false">
    <HeroImgSection :image="programStore.currentProgram?.image1" :title="programStore.currentProgram?.title1"
      :description="programStore.currentProgram?.description1" :page-name="'Jatidiri Ku'"
      link-page="/program/jatidiri-ku" />
    <AboutServiceSection category="JatidiriKu" title="Kenali Diri Lebih Dalam, Tumbuh Jadi Versi Terbaikmu"
      description="Perjalanan mengenal diri adalah langkah pertama menuju hidup yang lebih bermakna. Jatidiriku hadir untuk membantumu memahami potensi, minat, dan karakter pribadi melalui asesmen psikologis yang dirancang secara ilmiah dan mudah dipahami. <br> Layanan kami mendukungmu dalam mengambil keputusan yang lebih tepat, membangun rasa percaya diri, serta menghadapi tantangan hidup dengan lebih bijak. Dengan pendekatan yang personal dan empatik, Jatidiriku menjadi teman setia dalam proses pengembangan diri, karier, dan relasi yang lebih sehat." />
    <AlasanSection :unggulan="unggulanStore.unggulans" />
    <MitraSection v-if="partnerStore.partners.length" :partners="partnerStore.partners" />
    <TestimonialsSection :testimoni="testimoniStore.testimonials" />
    <PriceSection />
  </MainLayout>
</template>