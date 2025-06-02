<script lang="ts" setup>
import { useAgendaStore } from '@/stores/agenda';
import MainLayout from '@/layouts/MainLayout.vue';
import { onMounted } from 'vue';
import AgendaHero from './sections/AgendaHero.vue';
import AgendaList from './sections/AgendaList.vue';

const agendaStore = useAgendaStore();

onMounted(async () => {
  await agendaStore.fetchAgendas()
});
</script>

<template>
    <MainLayout :white-section-visible="true">
        <AgendaHero
          :agenda="agendaStore.agendas"
        />
        <AgendaList />
    </MainLayout>
</template>