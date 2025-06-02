<script setup lang="ts">
import MitraSection from '@/components/sections/MitraSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import AboutServiceSection from '@/components/sections/AboutServiceSection.vue';
import AlasanSection from '@/components/sections/AlasanSection.vue';
import PriceSection from '@/components/sections/PriceSection.vue';
import { onMounted } from 'vue';
import { useSliderStore } from '@/stores/slider';
import { usePartnerStore } from '@/stores/partner';
import { useTestimoniStore } from '@/stores/testimoni';
import { useAssesmentStore } from '@/stores/assesment';
import { useUnggulanStore } from '@/stores/unggulan';
import { useProgramStore } from '@/stores/program';
import HeroImgSection from '@/components/sections/HeroImgSection.vue';

const sliderStore = useSliderStore();
const partnerStore = usePartnerStore();
const testimoniStore = useTestimoniStore();
const assesmentStore = useAssesmentStore();
const unggulanStore = useUnggulanStore();
const programStore = useProgramStore();

onMounted(async () => {
    await sliderStore.fetchSlider()
    await partnerStore.fetchPartner()
    await testimoniStore.fetchTestimonial()
    await assesmentStore.fetchAssesment()
    await unggulanStore.fetchUnggulan()
    await programStore.fetchProgramBySlug('jatidiri-keluarga')
});
</script>

<template>
    <MainLayout position="fixed" :white-section-visible="false">
        <HeroImgSection :image="programStore.currentProgram?.image1" :title="programStore.currentProgram?.title1"
            :description="programStore.currentProgram?.description1" :page-name="'Jatidiri Keluarga'"
            link-page="/program/jatidiri-keluarga" />
        <AboutServiceSection category="Jatidiri Keluarga" title="Mengenal Karakter, Membangun Harmoni Keluarga"
            description="Dalam setiap keluarga, memahami keunikan tiap anggota adalah kunci membangun hubungan yang sehat dan penuh pengertian. Jatidiri Keluarga hadir untuk membantu orang tua dan anak saling mengenal lebih dalam melalui tes karakter, minat, dan kebutuhan emosional. <br> Layanan kami dirancang untuk memperkuat komunikasi keluarga, mendukung tumbuh kembang anak, serta menciptakan lingkungan rumah yang penuh empati dan keseimbangan. Dengan asesmen yang personal dan panduan praktis dari para ahli, Jatidiri Keluarga menjadi mitra tepat untuk perjalanan tumbuh bersama dalam keluarga yang harmonis." />
        <AlasanSection :unggulan="unggulanStore.unggulans"/>
        <MitraSection v-if="partnerStore.partners.length" :partners="partnerStore.partners" />
        <TestimonialsSection :testimoni="testimoniStore.testimonials" />
        <PriceSection />
    </MainLayout>
</template>