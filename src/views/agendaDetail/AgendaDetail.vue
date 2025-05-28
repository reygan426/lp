<script setup lang="ts">
import AgendaDetailJatiDiriHero from './Sections/AgendaDetailHero.vue'
import AgendaDetailJatiDiriContent from './Sections/AgendaDetailBody.vue'
import MainLayout from '@/layouts/MainLayout.vue';
import { usePostStore } from '@/stores/post';
import { onMounted } from 'vue';

const dummyAgenda = {
  title: 'Seminar Jati Diri Bangsa',
  description: 'Acara seminar tentang pentingnya jati diri dalam era digital.',
  image:
    'https://images.unsplash.com/photo-1747893540759-290a8a06a91f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
  start_date: '2025-06-15',
  location: 'Aula Timur ITB, Bandung',
  contact: '0812-3456-7890 (Budi)',
  event: 'Seminar & Diskusi Publik',
}

const postStore = usePostStore();

onMounted(async () => {
  await postStore.fetchPosts()
});
</script>

<template>
    <MainLayout :white-section-visible="true">
        <AgendaDetailJatiDiriHero :agenda="dummyAgenda" />
        <AgendaDetailJatiDiriContent :posts="postStore.posts"/>
    </MainLayout>
</template>
