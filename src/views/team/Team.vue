<script setup lang="ts">
import HeroSection2 from '@/components/sections/HeroSection2.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import ListTeam from './sections/ListTeam.vue';
import { slides } from '@/dummy/slider';
</script>

<template>
    <MainLayout position="fixed" :white-section-visible="false">
        <HeroSection2 :sliders="slides.slice(2,3)" :page-name="'Our Team'" link-page="/our-team"/>
        <ListTeam />
    </MainLayout>
</template>