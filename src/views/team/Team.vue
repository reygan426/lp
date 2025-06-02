<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import ListTeam from './sections/ListTeam.vue';
import { useSliderStore } from '@/stores/slider';
import { useTeamStore } from '@/stores/team';
import { onMounted } from 'vue';
import HeroAboutSection from '../about/sections/HeroAboutSection.vue';
import Bg3 from '@/assets/bg3.jpg'

const sliderStore = useSliderStore();
const teamStore = useTeamStore();

onMounted(async () => {
  await sliderStore.fetchSlider()
  await teamStore.fetchTeam(1)
  await teamStore.fetchTeam(2)
  await teamStore.fetchTeam(3)
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