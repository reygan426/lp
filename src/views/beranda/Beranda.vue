<script setup lang="ts">
import AboutSection from '@/components/sections/AboutSection.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import MitraSection from '@/components/sections/MitraSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import UspSection from '@/components/sections/UspSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import ListBerita from '@/components/sections/ListBerita.vue';
import { dummyPartners } from '@/dummy/partner';
import { dummyTestimonials } from '@/dummy/testimonial';
import { slides } from '@/dummy/slider'; 
import ServiceSection from '@/components/sections/ServiceSection.vue';
import { usePostStore } from '@/stores/post';
import { onMounted } from 'vue';
const postStore = usePostStore();

onMounted(async () => {
  await postStore.fetchPosts()
});
</script>

<template>
    <MainLayout position="fixed" :white-section-visible="false">
        <HeroSection :sliders="slides.slice(0, 3)"/>
        <UspSection />
        <MitraSection :partners="dummyPartners"/>
        <AboutSection />
        <ServiceSection />
        <TestimonialsSection :testimoni="dummyTestimonials"/>
        <ListBerita :berita="postStore.posts"/>
    </MainLayout>
</template>