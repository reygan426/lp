<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import ListTeam from './sections/ListTeam.vue';
import { useSliderStore } from '@/stores/slider';
import { useTeamStore } from '@/stores/team';
import { onMounted } from 'vue';
import HeroAboutSection from '../about/sections/HeroAboutSection.vue';
import Bg3 from '@/assets/bg3.jpg'
import { useHead } from '@vueuse/head';

const sliderStore = useSliderStore();
const teamStore = useTeamStore();

onMounted(async () => {
  await sliderStore.fetchSlider()
  await teamStore.fetchTeam(1)
  await teamStore.fetchTeam(2)
  await teamStore.fetchTeam(3)
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Team Jatidiri.App",
  "url": "https://jatidiri.app/our-team",
  "logo": "https://cms.jatidiri.app/storage/identities/KtufuVgVqXJ9Af5YHn0tWy0OPQWUBPx5LHHuF3pc.png",
  "description": "Tim profesional Jatidiri.App yang berdedikasi untuk pengembangan karakter"
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
    <HeroAboutSection :image="Bg3" :title="'Psycologist & Counselor'"
      :description="'Siap mendampingi Anda memahami emosi, mengelola stres, dan tumbuh jadi versi terbaik diri.'"
      page-name="Our Team" link-page="/our-team">
    </HeroAboutSection>
    <ListTeam :team="teamStore.teams" />
  </MainLayout>
</template>