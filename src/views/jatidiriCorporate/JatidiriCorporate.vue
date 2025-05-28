<script setup lang="ts">
import MitraSection from '@/components/sections/MitraSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { dummyPartners } from '@/dummy/partner';
import { dummyTestimonials } from '@/dummy/testimonial';
import { slides } from '@/dummy/slider';
import AboutServiceSection from '@/components/sections/AboutServiceSection.vue';
import AlasanSection from '@/components/sections/AlasanSection.vue';
import PriceSection from '@/components/sections/PriceSection.vue';
import HeroSection3 from '@/components/sections/HeroSection3.vue';
</script>

<template>
    <MainLayout position="fixed" :white-section-visible="false">
        <HeroSection3 :sliders="slides.slice(7,8)" :page-name="'Jatidiri Corporate'" link-page="/jatidiri-corporate"/>
        <AboutServiceSection category="Jatidiri Corporate" title="Menyelaraskan Nilai, Meningkatkan Kinerja Organisasi" description="Dalam era bisnis yang terus berubah, Jatidiri Corporate hadir untuk membantu perusahaan memahami kekuatan budaya kerja dan karakter tim. Dengan pendekatan berbasis data dan psikometrik, kami mendukung transformasi organisasi dari dalam. <br> Layanan kami dirancang untuk mendalami potensi individu dalam tim, menyelaraskan nilai perusahaan, serta menciptakan lingkungan kerja yang kolaboratif dan sehat. Dengan fitur asesmen dan konseling yang disesuaikan untuk kebutuhan korporasi, Jatidiri Corporate menjadi mitra strategis dalam membangun budaya kerja yang kuat, meningkatkan produktivitas, dan mendorong keberlanjutan perusahaan."/>
        <AlasanSection />
        <MitraSection :partners="dummyPartners" />
        <TestimonialsSection :testimoni="dummyTestimonials" />
        <PriceSection />
    </MainLayout>
</template>