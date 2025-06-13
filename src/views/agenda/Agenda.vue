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
        <AgendaHero v-if="agendaStore.agendas[0]"
          :agenda="agendaStore.agendas"
        />
        <AgendaList v-if="agendaStore.agendas[0]"/>
        <h1 v-else="agendaStore.agendas[0]" class="text-[22px] md:text-[34px] lg:text-[46px] py-40 text-center font-bold">Tidak Ada Agenda</h1>
    </MainLayout>
</template>