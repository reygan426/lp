<script lang="ts" setup>
import BeritaHeroJatiDiri from './sections/BeritaHero.vue'
import BeritaArtikelSection from './sections/ListBerita.vue'
import AgendaCardSection from './sections/AgendaCardSection.vue'
import MainLayout from '@/layouts/MainLayout.vue';
import { usePostStore } from '@/stores/post';
import { onMounted } from 'vue';

const postStore = usePostStore();

onMounted(async () => {
  await postStore.fetchPosts()
});
</script>

<template>
  <MainLayout :white-section-visible="true">
    <BeritaHeroJatiDiri :berita="postStore.posts"/>
    <BeritaArtikelSection :berita="postStore.posts" />
    <AgendaCardSection />
  </MainLayout>
</template>
