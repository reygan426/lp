<script lang="ts" setup>
import BeritaHeroJatiDiri from './sections/BeritaHero.vue'
import BeritaArtikelSection from './sections/ListBerita.vue'
import AgendaCardSection from './sections/AgendaCardSection.vue'
import MainLayout from '@/layouts/MainLayout.vue';
import { usePostStore } from '@/stores/post';
import { onMounted } from 'vue';
import { useAgendaStore } from '@/stores/agenda';

const postStore = usePostStore();
const agendaStore = useAgendaStore();

onMounted(async () => {
  await postStore.fetchPosts()
  await agendaStore.fetchAgendas()
});
</script>

<template>
  <MainLayout :white-section-visible="true">
    <BeritaHeroJatiDiri :berita="postStore.posts"/>
    <BeritaArtikelSection :berita="postStore.posts" />
    <AgendaCardSection :agenda="agendaStore.agendas.slice(0,3)"/>
  </MainLayout>
</template>
