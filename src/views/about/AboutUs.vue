<script setup lang="ts">
import AboutSection from '@/components/sections/AboutSection.vue';
import MitraSection from '@/components/sections/MitraSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import UspSection from '@/components/sections/UspSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { dummyPartners } from '@/dummy/partner';
import { dummyTestimonials } from '@/dummy/testimonial';
import { slides } from '@/dummy/slider';
import HeroSection2 from '@/components/sections/HeroSection2.vue';
import StatsSection from '@/components/sections/StatsSection.vue';
import VisiSection from '@/components/sections/VisiSection.vue';
import TeamSection from './sections/TeamSection.vue';
</script>

<template>
    <MainLayout position="fixed" :white-section-visible="false">
        <HeroSection2 :sliders="slides.slice(1, 2)" page-name="About Us" link-page="/about-us"/>
        <UspSection />
        <MitraSection :partners="dummyPartners" />
        <AboutSection />
        <StatsSection />
        <VisiSection />
        <TeamSection />
        <TestimonialsSection :testimoni="dummyTestimonials" />
    </MainLayout>
</template>