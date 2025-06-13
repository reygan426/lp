<script setup lang="ts">
import ButtonSection from '@/components/ButtonSection.vue';
import type { AgendaItem } from '@/core/types/agenda';
import type { PostItem } from '@/core/types/post';
import router from '@/router';
import ArtikelCardMobile from '@/views/berita/sections/components/ArtikelCardMobile.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;
const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/agendas/${imagePath}`;
};

const formatDate = (dateString: string | null) => {
  if (!dateString) return '11 Januari 2022';
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

// const cleanHtml = (htmlString: any) => {
//   return htmlString.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
// };

defineProps<{
  post?: PostItem,
  posts: PostItem[],
  agenda: AgendaItem[]
  loading?: boolean
}>()

const goToDetail = (slug: string) => {
  router.push({
    name: 'Agenda Detail',
    params: { slug: slug }
  });
};
</script>

<template>
  <div class="pb-[32px] pt-[0px] px-[20px] md:pb-[64px] md:px-[48px] lg:pb-[80px] lg:px-[120px]">
    <template v-if="loading">
      <!-- Body Section Skeleton -->
      <div class="container mx-auto px-4 py-12 max-w-4xl">
        <div class="flex items-center mb-8">
          <div class="h-10 w-10 bg-gray-300 animate-pulse rounded-full mr-4"></div>
          <div>
            <div class="h-4 w-32 bg-gray-300 animate-pulse rounded mb-2"></div>
            <div class="h-3 w-24 bg-gray-300 animate-pulse rounded"></div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
          <div class="h-4 w-5/6 bg-gray-300 animate-pulse rounded"></div>
          <div class="h-4 w-2/3 bg-gray-300 animate-pulse rounded"></div>
          <div class="h-4 w-full bg-gray-300 animate-pulse rounded mt-6"></div>
          <div class="h-4 w-3/4 bg-gray-300 animate-pulse rounded"></div>
        </div>

        <div class="h-64 w-full bg-gray-300 animate-pulse rounded-lg my-8"></div>

        <div class="space-y-4">
          <div class="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
          <div class="h-4 w-5/6 bg-gray-300 animate-pulse rounded"></div>
          <div class="h-4 w-2/3 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </div>
    </template>

    <template v-else-if="post">
      <div class="w-full flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-6">
        <div class="w-full md:w-[70%] space-y-4 md:space-y-8">
          <p class="text-[12px] md:text-[14px] lg:text-[16px] [&>p]:mb-4">
            <span class="w-full leading-loose max-w-none
                  [&_a]:text-blue-600 [&_a]:underline [&_a]:font-medium [&_a:hover]:text-blue-800
                  [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2
                  [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-2
                  [&_li]:my-1
                  [&_img]:max-w-full [&_img]:h-auto [&_img]:my-4 [&_img]:rounded-lg" v-html="post.description"></span>
          </p>
          <p class="text-[12px] md:text-[14px] lg:text-[16px] [&>p]:mb-4">
            <span class="w-full leading-loose max-w-none
                  [&_a]:text-blue-600 [&_a]:underline [&_a]:font-medium [&_a:hover]:text-blue-800
                  [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2
                  [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-2
                  [&_li]:my-1
                  [&_img]:max-w-full [&_img]:h-auto [&_img]:my-4 [&_img]:rounded-lg" v-html="post.content"></span>
          </p>
        </div>

        <div class="w-full md:w-[30%] space-y-4 md:space-y-6">
          <div v-if="agenda[0]" class="space-y-4 md:space-y-6">
            <h6 class="text-[16px] md:text-[22px] font-bold">Agenda Terkait</h6>
            <div class="w-full h-full space-y-4" @click="goToDetail(agenda[0]?.slug)">
              <img :src="getImageUrl(agenda[0]?.image || '')" alt=""
                class="w-full h-[20vh] rounded-[16px] object-cover">
              <div class="w-full flex justify-between items-center gap-4">
                <div>
                  <p class="text-[12px] md:text-[14px] lg:text-[16px]">{{ agenda[0]?.title }}</p>
                  <div>
                    <p class="text-[10px] md:text-[12px] lg:text-[14px]">{{ formatDate(agenda[0]?.end_date) }} •
                      <span>{{ agenda[0]?.location }}</span>
                    </p>
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
      </div>
    </template>
  </div>
</template>