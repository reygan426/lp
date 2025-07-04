<script setup lang="ts">
import AboutSection from '@/components/sections/AboutSection.vue';
// import MitraSection from '@/components/sections/MitraSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import UspSection from '@/components/sections/UspSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import StatsSection from '@/components/sections/StatsSection.vue';
import VisiSection from '@/components/sections/VisiSection.vue';
import TeamSection from './sections/TeamSection.vue';
import { onMounted } from 'vue';
import { useSliderStore } from '@/stores/slider';
import { useUnggulanStore } from '@/stores/unggulan';
import { usePartnerStore } from '@/stores/partner';
import { useIdentityStore } from '@/stores/identity';
import { useTestimoniStore } from '@/stores/testimoni';
import { useTeamStore } from '@/stores/team';
import HeroAboutSection from './sections/HeroAboutSection.vue';
import Bg2 from '@/assets/bg2.jpg'
import { useHead } from '@vueuse/head';

const sliderStore = useSliderStore();
const unggulanStore = useUnggulanStore();
const partnerStore = usePartnerStore();
const identityStore = useIdentityStore();
const testimoniStore = useTestimoniStore();
const teamStore = useTeamStore();

onMounted(async () => {
  await sliderStore.fetchSlider()
  await unggulanStore.fetchUnggulan()
  await partnerStore.fetchPartner()
  await identityStore.fetchIdentity()
  await testimoniStore.fetchTestimonial()
  await teamStore.fetchTeam(1)
  await teamStore.fetchTeam(2)
  await teamStore.fetchTeam(3)
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tentang Jatidiri.App",
  "url": "https://jatidiri.app/about-us",
  "logo": "https://cms.jatidiri.app/storage/identities/KtufuVgVqXJ9Af5YHn0tWy0OPQWUBPx5LHHuF3pc.png",
  "description": "Tentang Jatidiri.App - Visi, misi, dan nilai-nilai kami dalam membangun karakter bangsa"
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
    <HeroAboutSection :image="Bg2" :title="'About Us'"
      :description="'Jatidiri.app adalah platform yang memadukan teknologi dan layanan psikologi untuk membantu individu dan institusi memahami potensi diri dan meningkatkan kualitas hidup.'"
      page-name="About Us" link-page="/about-us">
    </HeroAboutSection>
    <UspSection v-if="identityStore.identity" :unggulan="unggulanStore.unggulans" :identity="identityStore.identity"/>
    <!-- <MitraSection v-if="partnerStore.partners.length" :partners="partnerStore.partners" /> -->
    <AboutSection v-if="identityStore.identity" :identity="identityStore.identity" />
    <StatsSection />
    <VisiSection />
    <TeamSection v-if="teamStore.teams" :team="teamStore.teams" />
    <TestimonialsSection :testimoni="testimoniStore.testimonials" />
  </MainLayout>
</template>