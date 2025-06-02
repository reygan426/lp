<script setup lang="ts">
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import AboutServiceSection from '@/components/sections/AboutServiceSection.vue';
import AsesmenSection from './sections/AsesmenSection.vue';
import AlasanSection from '@/components/sections/AlasanSection.vue';
import SupportSection from './sections/SupportSection.vue';
import PriceSection from '@/components/sections/PriceSection.vue';
import { onMounted } from 'vue';
import { useTestimoniStore } from '@/stores/testimoni';
import { useAssesmentStore } from '@/stores/assesment';
import { useUnggulanStore } from '@/stores/unggulan';
import HeroImgSection from '@/components/sections/HeroImgSection.vue';
import { useProgramStore } from '@/stores/program';
import { usePortofolioState } from '@/stores/portofolio';
// import PortoSection from './sections/PortoSection.vue';

const testimoniStore = useTestimoniStore();
const assesmentStore = useAssesmentStore();
const unggulanStore = useUnggulanStore();
const programStore = useProgramStore();
const portoStore = usePortofolioState();

onMounted(async () => {
    await testimoniStore.fetchTestimonial()
    await assesmentStore.fetchAssesment()
    await unggulanStore.fetchUnggulan()
    await programStore.fetchProgramBySlug('jatidiri-sekolah')
    await portoStore.fetchPortofolio()
});
</script>

<template>
    <MainLayout position="fixed" :white-section-visible="false">
        <HeroImgSection v-if="programStore.currentProgram?.image1" :image="programStore.currentProgram?.image1" :title="programStore.currentProgram?.title1"
            :description="programStore.currentProgram?.description1" :page-name="'Jatidiri Sekolah'"
            link-page="/program/jatidiri-sekolah" />
        <AboutServiceSection category="Jatidiri Sekolah" title="Menggali Potensi, Mengukur Masa Depan"
            description="Menteri Pendidikan Dasar dan Menengah, Abdul Mu'ti, berkomitmen meningkatkan pendidikan karakter dan konseling di sekolah melalui tambahan guru BK dan pelatihan khusus pada 2025. Inisiatif ini bertujuan mendukung siswa dalam mengenali minat, bakat, serta mengurangi perundungan. <br> Jatidiri.app sejalan dengan misi ini, menyediakan tes dan konseling online yang membantu sekolah menerapkan pendidikan berdiferensiasi sesuai Kurikulum Merdeka. Dengan fitur -fitur yang disesuaikan dengan kebutuhan sekolah, Jatidiri.app adalah mitra tepat untuk mendukung kebutuhan konseling, karakter siswa, dan prestasi akademik sekolah." />
        <AsesmenSection :assesment="assesmentStore.assesments" />
        <AlasanSection :unggulan="unggulanStore.unggulans" />
        <SupportSection />
        <!-- <PortoSection v-if="portoStore.portofolios.length" :portofolio="portoStore.portofolios" /> -->
        <TestimonialsSection :testimoni="testimoniStore.testimonials" />
        <PriceSection />
    </MainLayout>
</template>