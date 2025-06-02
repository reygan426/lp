<script setup lang="ts">
import AboutSection from '@/components/sections/AboutSection.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
// import MitraSection from '@/components/sections/MitraSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import UspSection from '@/components/sections/UspSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import ListBerita from '@/components/sections/ListBerita.vue';
import ServiceSection from '@/components/sections/ServiceSection.vue';
import { usePostStore } from '@/stores/post';
import { onMounted } from 'vue';
import { useSliderStore } from '@/stores/slider';
import { useUnggulanStore } from '@/stores/unggulan';
import { usePartnerStore } from '@/stores/partner';
import { useIdentityStore } from '@/stores/identity';
import { useProgramStore } from '@/stores/program';
import { useTestimoniStore } from '@/stores/testimoni';

const postStore = usePostStore();
const sliderStore = useSliderStore();
const unggulanStore = useUnggulanStore();
const partnerStore = usePartnerStore();
const identityStore = useIdentityStore();
const programStore = useProgramStore();
const testimoniStore = useTestimoniStore();

onMounted(async () => {
  await postStore.fetchPosts()
  await sliderStore.fetchSlider()
  await unggulanStore.fetchUnggulan()
  await partnerStore.fetchPartner()
  await identityStore.fetchIdentity()
  await programStore.fetchProgram()
  await testimoniStore.fetchTestimonial()
});
</script>

<template>
  <MainLayout position="fixed" :white-section-visible="false">
    <HeroSection v-if="sliderStore.sliders" :sliders="sliderStore.sliders.slice(0, 3)" />
    <UspSection v-if="unggulanStore.unggulans" :unggulan="unggulanStore.unggulans"/>
    <!-- <MitraSection v-if="partnerStore.partners.length" :partners="partnerStore.partners" /> -->
    <AboutSection v-if="identityStore.identity" :identity="identityStore.identity" />
    <ServiceSection v-if="programStore.programs" />
    <TestimonialsSection v-if="testimoniStore.testimonials" :testimoni="testimoniStore.testimonials" />
    <ListBerita :berita="postStore.posts" />
  </MainLayout>
</template>