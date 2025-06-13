<script setup lang="ts">
import { onMounted } from 'vue';
// import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';

import MainLayout from '@/layouts/MainLayout.vue';
import AboutSection from './sections/AboutSection.vue';
import { useIdentityStore } from '@/stores/identity';
import ListAssesmentSection from './sections/ListAssesmentSection.vue';
import { useAssesmentStore } from '@/stores/assesment';
import Bg1 from '@/assets/bg11.png'
import HeroAboutSection from '../about/sections/HeroAboutSection.vue';

const assesmentStore = useAssesmentStore();
const identityStore = useIdentityStore();
// const route = useRoute();

onMounted(async () => {
    // const slug = route.params.slug as string;
    await assesmentStore.fetchAssesment();
    await identityStore.fetchIdentity();
});

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Assesment Jatidiri.App",
    "url": "https://jatidiri.app/assesment",
    "logo": "https://cms.jatidiri.app/storage/identities/KtufuVgVqXJ9Af5YHn0tWy0OPQWUBPx5LHHuF3pc.png",
    "description": "Assesment - assesment yang ada di Jatidiri.App"
};

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(structuredData)
        }
    ]
});
</script>

<template>
    <MainLayout position="fixed" :white-section-visible="false">
        <HeroAboutSection :image="Bg1" :title="'Petakan Potensi & Karakter Dengan Jatidiri Bakat'" :description="''"
            :page-name="'Assesment'" :link-page="`/assesment`" />
        <!-- <HeroImgSection :image="Bg1" :title="'Petakan Potensi & Karakter Dengan Jatidiri Bakat'" :description="''"
            :page-name="'Assesment'" :link-page="`/assesment`" /> -->
        <AboutSection :identity="identityStore.identity" />
        <ListAssesmentSection :assesments="assesmentStore.assesments" />
    </MainLayout>
</template>