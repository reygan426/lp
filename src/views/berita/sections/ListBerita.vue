<script setup lang="ts">
import TitleSection from '@/components/TitleSection.vue'
import TextSection from '@/components/TextSection.vue'
import BeritaArtikelCard from './components/BeritaArtikelCard.vue'
import type { Post } from '@/core/types/post';
import ArtikelCardMobile from './components/ArtikelCardMobile.vue';

defineProps<{
  berita: Post[];
  isLoading?: boolean;
}>();
</script>

<template>
  <div
    class="pt-[10px] pb-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:py-[60px] lg:px-[120px] space-y-6 md:space-y-12 lg:space-y-16">
    <div class="grid gap-2 lg:gap-4 text-center w-full lg:w-1/3 mx-auto">
      <TitleSection text="Berita & Artikel" />
      <TextSection>
        Scenes that unfold like a movie, with each image telling a cinematic story.
      </TextSection>

      <!-- <div id="item-scroll" class="relative overflow-x-scroll scroll-hidden mx-[10px] lg:-mx-[60px]">
        <div class="flex pb-3 gap-3 whitespace-nowrap">
          <button class="text-white bg-primary rounded-full px-4 py-2">
            Semua Fasilitas
          </button>
        </div>
      </div> -->
    </div>

    <div class="md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mx-auto hidden">
      <BeritaArtikelCard v-for="artikel in berita" :key="artikel.id" :title="artikel.title" :slug="artikel.slug" :image="artikel.image" />
    </div>

    <div class="grid grid-cols-1 gap-4 md:hidden">
      <ArtikelCardMobile v-for="artikel in berita" :key="artikel.id" :title="artikel.title" :image="artikel.image" :date="artikel.pub_date"/>
    </div>

    <!-- <div v-if="totalPages > 1" class="w-full flex justify-end mt-8">
      <div class="inline-flex items-center gap-2">
        <button :disabled="currentPage === 1" @click="prevPage"
          class="w-8 h-8 relative rounded bg-gray-400 opacity-50 disabled:cursor-not-allowed disabled:opacity-50">
          <div class="w-6 h-6 absolute left-[4px] top-[4px]">
            <div class="w-3.5 h-2 left-[15.16px] top-[6px] absolute origin-top-left rotate-90 bg-slate-300"></div>
          </div>
        </button>

        <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
          class="w-8 h-8 relative rounded outline outline-1 outline-offset-[-1px]"
          :class="currentPage === page ? 'bg-white outline-Color-FH' : 'bg-white outline-zinc-200'">
          <div class="w-6 h-5 absolute left-[4px] top-[5px] text-center text-sm font-bold"
            :class="currentPage === page ? 'text-Color-FH' : 'text-gray-800'">
            {{ page }}
          </div>
        </button>

        <button :disabled="currentPage === totalPages" @click="nextPage"
          class="w-8 h-8 relative rounded bg-white outline outline-1 outline-zinc-200 disabled:cursor-not-allowed disabled:opacity-50">
          <div class="w-6 h-6 absolute left-[4px] top-[4px]">
            <div class="w-3 h-2 left-[16.25px] top-[6px] absolute origin-top-left rotate-90 bg-slate-300"></div>
          </div>
        </button>
      </div>
    </div> -->
  </div>
</template>
