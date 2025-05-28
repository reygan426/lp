<script lang="ts" setup>
import AgendaJatiDiriHero from './sections/AgendaJatiDiriHero.vue';
import AgendaJatiDiriList from './sections/AgendaJatiDiriList.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
    <MainLayout :white-section-visible="true">
        <AgendaJatiDiriHero />
        <AgendaJatiDiriList />
    </MainLayout>
</template>
