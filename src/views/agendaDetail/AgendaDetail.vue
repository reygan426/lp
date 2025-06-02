<script setup lang="ts">
import AgendaDetailJatiDiriHero from './Sections/AgendaDetailHero.vue'
import AgendaDetailJatiDiriContent from './Sections/AgendaDetailBody.vue'
import MainLayout from '@/layouts/MainLayout.vue';
import { usePostStore } from '@/stores/post';
import { onMounted, watch } from 'vue';
import { useAgendaStore } from '@/stores/agenda';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const route = useRoute();
const postStore = usePostStore();
const agendaStore = useAgendaStore();
const agendaStore2 = useAgendaStore();
const { currentAgenda: agenda } = storeToRefs(agendaStore);

const updateTitle = () => {
  if (agendaStore.currentAgenda?.title) {
    document.title = `${agendaStore.currentAgenda.title} - ${import.meta.env.VITE_APP_NAME}`;
  }
};

onMounted(() => {
  const slug = route.params.slug as string;
  agendaStore.fetchAgendaBySlug(slug);
  updateTitle();
  agendaStore2.fetchAgendas()
  postStore.fetchPosts()
});

watch(() => postStore.currentPost, updateTitle);
</script>

<template>
  <MainLayout :white-section-visible="true">
    <AgendaDetailJatiDiriHero :agenda="agendaStore.agendas" />
    <AgendaDetailJatiDiriContent :posts="postStore.posts.slice(0, 3)" :current-agenda="agenda"
      :agenda="agendaStore2.agendas.slice(0, 1)" />
  </MainLayout>
</template>