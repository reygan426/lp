<script lang="ts" setup>
import { computed } from 'vue'
import TextBody from '@/components/TextBody.vue'
import AgendaDetailCard from '../components/AgendaDetailCard.vue'
import type { Post } from '@/core/types/post'
import router from '@/router';
import { useRoute } from 'vue-router';
import { useAgendaStore } from '@/stores/agenda';

const route = useRoute();
const agendaStore = useAgendaStore();

const currentAgenda = computed(() => {
  return agendaStore.agendas.find(agenda => agenda.slug === route.params.slug);
});

const relatedAgendas = computed(() => {
  return agendaStore.agendas
    .filter(agenda => 
      agenda.slug !== route.params.slug && 
      agenda.agendacat === currentAgenda.value?.agendacat
    )
    .slice(0, 3); // Limit to 3 related agendas
});

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  return isNaN(date.getTime())
    ? '-'
    : date.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
}

const handleAgendaClick = (slug: string) => {
  router.push({ name: 'Agenda Detail', params: { slug } });
}

defineProps<{
  berita?: Post[]
}>();
</script>

<template>
  <div class="py-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:py-[60px] lg:px-[120px]">
    <div class="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10">
      <!-- Konten utama -->
      <div class="w-full md:w-[65%]">
        <TextBody>
          <span class="text-justify" v-html="currentAgenda?.content"></span>
        </TextBody>
      </div>

      <!-- Sidebar -->
      <div class="w-full md:w-[35%] flex flex-col gap-6 md:gap-8 lg:gap-8">
        <!-- Agenda Terkait -->
        <div v-if="relatedAgendas.length > 0" class="space-y-4 md:space-y-5 lg:space-y-6">
          <h4 class="text-lg md:text-xl lg:text-2xl font-bold">Agenda Terkait</h4>
          <div 
            v-for="agenda in relatedAgendas" 
            :key="agenda.id"
            class="space-y-4 cursor-pointer"
            @click="handleAgendaClick(agenda.slug)"
          >
            <div class="w-full h-40 md:h-[25vh] rounded-md lg:rounded-xl overflow-hidden">
              <img
                :src="agenda.image || ''"
                alt="Gambar Agenda"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p class="text-sm md:text-base lg:text-lg font-bold">{{ agenda.title }}</p>
            <p class="text-xs md:text-sm lg:text-base">
              {{ formatDate(agenda.start_date || '') }} • {{ agenda.location }}
            </p>
          </div>
        </div>

        <!-- Berita Terkait -->
        <div v-if="berita?.length" class="space-y-4 md:space-y-5 lg:space-y-6">
          <h4 class="text-lg md:text-xl lg:text-2xl font-bold">Berita Terkait</h4>
          <AgendaDetailCard :posts="berita"/>
        </div>
      </div>
    </div>
  </div>
</template>