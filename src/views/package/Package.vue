<script setup lang="ts">
import { slides } from '@/dummy/slider';
import MitraSection from '@/components/sections/MitraSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { dummyPartners } from '@/dummy/partner';
import { dummyTestimonials } from '@/dummy/testimonial';
import UspSection from '@/components/sections/UspSection.vue';
import ServiceSection from './sections/ServiceSection.vue';
import HeroSection2 from '@/components/sections/HeroSection2.vue';
</script>

<template>
    <MainLayout position="fixed" :white-section-visible="false">
        <HeroSection2 :sliders="slides.slice(5,6)" :page-name="'Package'" link-page="/package"/>
        <UspSection />
        <MitraSection :partners="dummyPartners" />
        <ServiceSection />
        <TestimonialsSection :testimoni="dummyTestimonials" />
    </MainLayout>
</template>