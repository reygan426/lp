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
import SeoMeta from '@/components/SeoMeta.vue';
import Logo from '@/assets/logo/logo-text.png'
import { useHead } from '@vueuse/head';

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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Jatidiri.App",
  "url": "https://jatidiri.app",
  "logo": "https://cms.jatidiri.app/storage/identities/KtufuVgVqXJ9Af5YHn0tWy0OPQWUBPx5LHHuF3pc.png",
  "description": "Platform edukasi pengembangan diri"
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
  <SeoMeta title="Beranda" description="Platform edukasi dan pengembangan diri untuk membangun jatidiri sejati"
    keywords="jatidiri, pendidikan, pengembangan diri, sekolah, corporate" :og-image="Logo" :meta-tags="[
      { property: 'og:type', content: 'website' },
      { name: 'twitter:creator', content: '@jatidiriapp' }
    ]" />

  <MainLayout position="fixed" :white-section-visible="false">
    <HeroSection v-if="sliderStore.sliders" :sliders="sliderStore.sliders.slice(0, 3)" />
    <UspSection v-if="identityStore.identity" :unggulan="unggulanStore.unggulans" :identity="identityStore.identity" />
    <!-- <MitraSection v-if="partnerStore.partners.length" :partners="partnerStore.partners" /> -->
    <AboutSection v-if="identityStore.identity" :identity="identityStore.identity" />
    <ServiceSection v-if="programStore.programs" />
    <TestimonialsSection v-if="testimoniStore.testimonials" :testimoni="testimoniStore.testimonials" />
    <ListBerita :berita="postStore.posts.slice(0, 3)" />
  </MainLayout>
</template>