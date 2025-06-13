<script lang="ts" setup>
import BeritaHeroJatiDiri from './sections/BeritaHero.vue'
import BeritaArtikelSection from './sections/ListBerita.vue'
import AgendaCardSection from './sections/AgendaCardSection.vue'
import MainLayout from '@/layouts/MainLayout.vue';
import { usePostStore } from '@/stores/post';
import { onMounted } from 'vue';
import { useAgendaStore } from '@/stores/agenda';
import { useHead } from '@vueuse/head';

const postStore = usePostStore();
const agendaStore = useAgendaStore();

onMounted(async () => {
  await postStore.fetchPosts()
  await agendaStore.fetchAgendas()
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Halaman Berita",
  "name": "Berita Jatidiri.App",
  "url": "https://jatidiri.app/berita",
  "logo": "https://cms.jatidiri.app/storage/identities/KtufuVgVqXJ9Af5YHn0tWy0OPQWUBPx5LHHuF3pc.png",
  "description": "Berita Jatidiri.App"
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
  <MainLayout :white-section-visible="true">
    <BeritaHeroJatiDiri :berita="postStore.posts" />
    <BeritaArtikelSection v-if="postStore.posts" :berita="postStore.posts" />
    <AgendaCardSection v-if="agendaStore.agendas[0]" :agenda="agendaStore.agendas.slice(0, 3)" />
  </MainLayout>
</template>
