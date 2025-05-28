<script setup lang="ts">
import MitraSection from '@/components/sections/MitraSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { dummyPartners } from '@/dummy/partner';
import { dummyTestimonials } from '@/dummy/testimonial';
import { slides } from '@/dummy/slider';
import AboutServiceSection from '@/components/sections/AboutServiceSection.vue';
import AsesmenSection from './sections/AsesmenSection.vue';
import AlasanSection from '@/components/sections/AlasanSection.vue';
import SupportSection from './sections/SupportSection.vue';
import PriceSection from '@/components/sections/PriceSection.vue';
import HeroSection3 from '@/components/sections/HeroSection3.vue';

</script>

<template>
    <MainLayout position="fixed" :white-section-visible="false">
        <HeroSection3 :sliders="slides.slice(6,7)" :page-name="'Jatidiri Sekolah'" link-page="/jatidiri-sekolah" />
        <AboutServiceSection category="Jatidiri Sekolah" title="Menggali Potensi, Mengukur Masa Depan"
            description="Menteri Pendidikan Dasar dan Menengah, Abdul Mu'ti, berkomitmen meningkatkan pendidikan karakter dan konseling di sekolah melalui tambahan guru BK dan pelatihan khusus pada 2025. Inisiatif ini bertujuan mendukung siswa dalam mengenali minat, bakat, serta mengurangi perundungan. <br> Jatidiri.app sejalan dengan misi ini, menyediakan tes dan konseling online yang membantu sekolah menerapkan pendidikan berdiferensiasi sesuai Kurikulum Merdeka. Dengan fitur -fitur yang disesuaikan dengan kebutuhan sekolah, Jatidiri.app adalah mitra tepat untuk mendukung kebutuhan konseling, karakter siswa, dan prestasi akademik sekolah." />
        <AsesmenSection />
        <AlasanSection />
        <SupportSection />
        <MitraSection :partners="dummyPartners" />
        <TestimonialsSection :testimoni="dummyTestimonials" />
        <PriceSection />
    </MainLayout>
</template>