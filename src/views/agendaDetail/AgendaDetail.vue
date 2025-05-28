<script setup lang="ts">
import AgendaDetailJatiDiriHero from './Sections/AgendaDetailHero.vue'
import AgendaDetailJatiDiriContent from './Sections/AgendaDetailBody.vue'
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
        <AgendaDetailJatiDiriHero :agenda="agendaStore.agendas" />
        <AgendaDetailJatiDiriContent :posts="postStore.posts"/>
    </MainLayout>
</template>
