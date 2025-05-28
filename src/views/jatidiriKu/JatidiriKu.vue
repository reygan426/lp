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
import HeroSection2 from '@/components/sections/HeroSection2.vue';
</script>

<template>
    <MainLayout position="fixed" :white-section-visible="false">
        <HeroSection2 :sliders="slides.slice(9,10)" :page-name="'JatidiriKu'" link-page="/jatidiri-ku"/>
        <AboutServiceSection category="JatidiriKu" title="Kenali Diri Lebih Dalam, Tumbuh Jadi Versi Terbaikmu" description="Perjalanan mengenal diri adalah langkah pertama menuju hidup yang lebih bermakna. Jatidiriku hadir untuk membantumu memahami potensi, minat, dan karakter pribadi melalui asesmen psikologis yang dirancang secara ilmiah dan mudah dipahami. <br> Layanan kami mendukungmu dalam mengambil keputusan yang lebih tepat, membangun rasa percaya diri, serta menghadapi tantangan hidup dengan lebih bijak. Dengan pendekatan yang personal dan empatik, Jatidiriku menjadi teman setia dalam proses pengembangan diri, karier, dan relasi yang lebih sehat."/>
        <AlasanSection />
        <MitraSection :partners="dummyPartners" />
        <TestimonialsSection :testimoni="dummyTestimonials" />
        <PriceSection />
    </MainLayout>
</template>