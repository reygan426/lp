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
        <HeroSection3 :sliders="slides.slice(8,9)" :page-name="'Jatidiri Keluarga'" link-page="/jatidiri-keluarga" />
        <AboutServiceSection category="Jatidiri Keluarga" title="Mengenal Karakter, Membangun Harmoni Keluarga"
            description="Dalam setiap keluarga, memahami keunikan tiap anggota adalah kunci membangun hubungan yang sehat dan penuh pengertian. Jatidiri Keluarga hadir untuk membantu orang tua dan anak saling mengenal lebih dalam melalui tes karakter, minat, dan kebutuhan emosional. <br> Layanan kami dirancang untuk memperkuat komunikasi keluarga, mendukung tumbuh kembang anak, serta menciptakan lingkungan rumah yang penuh empati dan keseimbangan. Dengan asesmen yang personal dan panduan praktis dari para ahli, Jatidiri Keluarga menjadi mitra tepat untuk perjalanan tumbuh bersama dalam keluarga yang harmonis." />
        <AlasanSection />
        <MitraSection :partners="dummyPartners" />
        <TestimonialsSection :testimoni="dummyTestimonials" />
        <PriceSection />
    </MainLayout>
</template>