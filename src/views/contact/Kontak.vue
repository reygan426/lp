<script setup lang="ts">
import { slides } from '@/dummy/slider';
import MainLayout from '@/layouts/MainLayout.vue';
import FormSection from './sections/FormSection.vue';
import InfoSection from './sections/InfoSection.vue';
import HeroSection4 from '@/components/sections/HeroSection4.vue';

</script>

<template>
    <MainLayout position="fixed" :white-section-visible="false">
        <HeroSection4 :sliders="slides.slice(4,5)" page-name="Kontak" link-page="/contact"/>
        <InfoSection />
        <FormSection /> 
    </MainLayout>
</template>