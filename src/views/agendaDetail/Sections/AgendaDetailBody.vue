<script lang="ts" setup>
import type { PostItem } from '@/core/types/post'
import type { AgendaItem } from '@/core/types/agenda';
import router from '@/router';
import ArtikelCardMobile from '@/views/berita/sections/components/ArtikelCardMobile.vue';
import ButtonSection from '@/components/ButtonSection.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;
const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
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

defineProps<{
  posts?: PostItem[]
  currentAgenda?: AgendaItem | null
  agenda: AgendaItem[]
}>();

const goToDetail = (slug: string) => {
  router.push({
    name: 'Agenda Detail',
    params: { slug: slug }
  });
};
</script>

<template>
  <div class="py-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:py-[60px] lg:px-[120px]">
    <div class="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10">
      <!-- Konten utama -->
      <div class="w-full md:w-[65%]">
        <p class="text-[12px] md:text-[14px] lg:text-[16px]"><span class="w-full prose-base max-w-none
                [&_a]:text-blue-600 [&_a]:underline [&_a]:font-medium [&_a:hover]:text-blue-800
                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2
                [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-2
                [&_li]:my-1" v-html="currentAgenda?.content"></span></p>
      </div>

      <div class="w-full md:w-[30%] space-y-4 md:space-y-6">
        <div class="space-y-4 md:space-y-6">
          <h6 class="text-[16px] md:text-[22px] font-bold">Agenda Terkait</h6>
          <div class="w-full h-full space-y-4" @click="goToDetail(agenda[0]?.slug)">
            <img :src="getImageUrl(agenda[0]?.image || '')" alt="" class="w-full h-[20vh] rounded-[16px] object-cover">
            <div class="w-full flex justify-between items-center gap-4">
              <div>
                <p class="text-[12px] md:text-[14px] lg:text-[16px]">{{ agenda[0]?.title }}</p>
                <div>
                  <p class="text-[10px] md:text-[12px] lg:text-[14px]">{{ formatDate(agenda[0]?.end_date) }} • <span>{{
                      agenda[0]?.location }}</span></p>
                </div>
              </div>
              <a :href="agenda[0]?.register_link" class="w-fit">
                <ButtonSection>Daftar</ButtonSection>
              </a>
            </div>
          </div>
        </div>

        <div class="space-y-4 md:space-y-6">
          <h6 class="text-[16px] md:text-[22px] font-bold">Artikel & Berita Terkait</h6>
          <div class="grid grid-cols-1 gap-4 md:gap-6">
            <ArtikelCardMobile v-for="artikel in posts" :key="artikel.id" :title="artikel.title" :slug="artikel.slug"
              :image="artikel.image" :date="artikel.pub_date" />
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <!-- <div class="w-full md:w-[35%] flex flex-col gap-6 md:gap-8 lg:gap-8">
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

        <div v-if="berita?.length" class="space-y-4 md:space-y-5 lg:space-y-6">
          <h4 class="text-lg md:text-xl lg:text-2xl font-bold">Berita Terkait</h4>
          <AgendaDetailCard :posts="berita"/>
        </div>
      </div> -->
    </div>
  </div>
</template>