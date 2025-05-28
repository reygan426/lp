<script setup lang="ts">
import AboutSection from '@/components/sections/AboutSection.vue';
import { slides } from '@/dummy/slider';
import VisiSection from '@/components/sections/VisiSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import FormSection from './sections/FormSection.vue';
import HeroSection2 from '@/components/sections/HeroSection2.vue';

</script>

<template>
    <MainLayout position="fixed" :white-section-visible="false">
        <HeroSection2 :sliders="slides.slice(3,4)" :page-name="'Join Us'" link-page="/join-us"/>
        <AboutSection />
        <VisiSection />
        <FormSection />
    </MainLayout>
</template>