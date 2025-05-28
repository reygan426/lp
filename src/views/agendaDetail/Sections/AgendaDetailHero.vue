<script setup lang="ts">
import { defineProps } from 'vue'
import TextBody from '@/components/TextBody.vue'
import TitleSection from '@/components/TitleSection.vue';
import ButtonSection from '@/components/ButtonSection.vue';
import type { AgendaItem } from '@/core/types/agenda';

defineProps<{
  agenda: AgendaItem[]
}>()

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/agendas/${imagePath}`;
};

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
</script>

<template>
  <div class="p-4 md:py-[64px] md:px-8 lg:py-8 space-y-6 md:space-y-10 lg:space-y-12 w-full h-full">
    <div class="w-full h-[50vh] rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
      <img :src="getImageUrl(agenda[0]?.image) || ''" alt="Event banner image"
        class="w-full h-full object-cover object-center rounded-[16px] md:rounded-[24px] lg:rounded-[32px]" />
    </div>

    <div class="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <div class="w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
        <TitleSection v-if="agenda[0]?.title" :text="agenda[0]?.title"></TitleSection>
        <a v-if="agenda[0]?.register_link" :href="agenda[0].register_link" target="_blank">
          <ButtonSection>Register</ButtonSection>
        </a>
        <ButtonSection v-else>Register</ButtonSection>
      </div>

      <div class="w-full space-y-4 md:space-y-6 lg:space-y-8">
        <div class="grid grid-cols-2 gap-4 md:gap-8 w-full">
          <div class="list_item flex flex-col items-start gap-1 md:gap-2">
            <h3 class="text-black text-lg md:text-xl font-bold">Tanggal</h3>
            <TextBody>{{ formatDate(agenda[0]?.start_date || '') }}</TextBody>
          </div>
          <div class="list_item flex flex-col items-start gap-1 md:gap-2">
            <h3 class="text-black text-lg md:text-xl font-bold">Lokasi</h3>
            <TextBody>{{ agenda[0]?.location }}</TextBody>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 md:gap-8 w-full">
          <div class="list_item flex flex-col items-start gap-1 md:gap-2">
            <h3 class="text-black text-lg md:text-xl font-bold">Narahubung</h3>
            <TextBody>{{ agenda[0]?.contact }}</TextBody>
          </div>
          <div class="list_item flex flex-col items-start gap-1 md:gap-2">
            <h3 class="text-black text-lg md:text-xl font-bold">Event</h3>
            <TextBody>{{ agenda[0]?.organizer }}</TextBody>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>