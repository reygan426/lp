<script setup lang="ts">
import TitleSection from '@/components/TitleSection.vue'
import TextSection from '@/components/TextSection.vue'
import AgendaCardJatiDiri from './components/AgendaCardJatiDiri.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css';
import type { AgendaItem } from '@/core/types/agenda'
import AgendaCardMobile from './components/AgendaCardMobile.vue'

const formatDate = (tanggal: string) => {
  const d = new Date(tanggal)
  return {
    dayName: d.toLocaleDateString('id-ID', { weekday: 'long' }),
    day: d.getDate(),
    month: d.toLocaleDateString('id-ID', { month: 'long' }),
    year: d.getFullYear(),
  }
}

defineProps<{
  agenda: AgendaItem[];
  isLoading?: boolean;
}>();
</script>
<template>
  <SectionLayout>
    <div
      class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
      <div class="text-center space-y-1">
        <TitleSection :text="'Agenda'"></TitleSection>
        <TextSection>Dapatkan informasi lebih lanjut tentang acara kami..</TextSection>
      </div>

      <div class="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full hidden">
        <AgendaCardJatiDiri v-for="(agenda) in agenda" :key="agenda.title" v-bind="agenda" :title="agenda.title" :slug="agenda.slug"
          :description="agenda.content" :location="agenda.location" :image="agenda.image" :date="formatDate(agenda.end_date)"/>
      </div>

      <!-- Mobile -->
       <div class="md:hidden">
         <swiper class="w-full" :slides-per-view="1.2" :space-between="16" :centered-slides="false" :grab-cursor="true"
           :watch-slides-progress="true">
           <swiper-slide v-for="(agenda, index) in agenda" :key="index">
             <AgendaCardMobile :title="agenda.title" :slug="agenda.slug" :date="formatDate(agenda.end_date)" :description="agenda.content" />
           </swiper-slide>
         </swiper>
       </div>
    </div>
  </SectionLayout>
</template>
