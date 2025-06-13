<script setup lang="ts">
import TitleSection from '@/components/TitleSection.vue';
import TextSection from '@/components/TextSection.vue';
import BeritaArtikelCard from './components/BeritaArtikelCard.vue';
import ArtikelCardMobile from './components/ArtikelCardMobile.vue';
import type { PostItem } from '@/core/types/post';
import { computed, onMounted, ref, watch, nextTick } from 'vue';
import { usePostStore } from '@/stores/post';

const props = defineProps<{
  berita: PostItem[];
  isLoading?: boolean;
}>();

const postStore = usePostStore();
const animatedCards = ref<number[]>([]);

const totalPages = computed(() => postStore.pagination.lastPage);
const currentPage = computed(() => postStore.pagination.currentPage);

const firstBerita = computed(() => props.berita?.[0]);

const filteredBerita = computed(() => {
  return props.berita.filter(artikel => artikel.id !== firstBerita.value?.id);
});

const animateCards = () => {
  animatedCards.value = [];
  const cards = document.querySelectorAll('.card-animate');
  
  cards.forEach((_, index) => {
    setTimeout(() => {
      animatedCards.value.push(index);
    }, index * 150);
  });
};

onMounted(() => {
  nextTick(() => {
    if (filteredBerita.value.length > 0) {
      setTimeout(() => {
        animateCards();
      }, 100);
    }
  });
});

watch(() => props.berita, (newBerita) => {
  if (newBerita.length > 0) {
    nextTick(() => {
      setTimeout(() => {
        animateCards();
      }, 100);
    });
  }
}, { immediate: true });

watch(currentPage, () => {
  setTimeout(() => {
    animateCards();
  }, 100);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    postStore.fetchPosts(currentPage.value - 1);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    postStore.fetchPosts(currentPage.value + 1);
  }
};

const goToPage = (page: number) => {
  postStore.fetchPosts(page);
};
</script>

<template>
  <div class="pt-[10px] pb-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:py-[60px] lg:px-[120px] space-y-6 md:space-y-12 lg:space-y-16">
    <div class="grid gap-2 lg:gap-4 text-center w-full lg:w-1/2 mx-auto">
      <TitleSection text="Berita & Artikel" />
      <TextSection>
        Scenes that unfold like a movie, with each image telling a cinematic story.
      </TextSection>
    </div>

    <div v-if="filteredBerita.length" class="md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mx-auto hidden">
      <div 
        v-for="(artikel, index) in filteredBerita" 
        :key="artikel.id"
        class="card-animate transform transition-all duration-500 ease-out"
        :class="animatedCards.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
      >
        <BeritaArtikelCard 
          :title="artikel.title" 
          :slug="artikel.slug"
          :image="artikel.image" 
        />
      </div>
    </div>

    <div v-if="filteredBerita.length" class="grid grid-cols-1 gap-4 md:hidden">
      <div 
        v-for="(artikel, index) in filteredBerita" 
        :key="artikel.id"
        class="card-animate transform transition-all duration-500 ease-out"
        :class="animatedCards.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
      >
        <ArtikelCardMobile 
          :title="artikel.title" 
          :slug="artikel.slug"
          :image="artikel.image" 
          :date="artikel.pub_date"
          :category="artikel.category.name" 
        />
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="w-full flex justify-end mt-8">
      <div class="inline-flex items-center gap-2">
        <button :disabled="currentPage === 1" @click="prevPage"
          class="w-8 h-8 flex items-center justify-center rounded bg-white border border-zinc-200 hover:border-Color-FH hover:bg-slate-50 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-zinc-200 disabled:hover:bg-white">
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
          class="w-8 h-8 flex items-center justify-center rounded outline outline-1 outline-offset-[-1px] transition-all duration-200 hover:scale-105"
          :class="currentPage === page ? 'bg-white outline-Color-FH text-Color-FH font-bold' : 'bg-white outline-zinc-200 text-gray-800 font-bold hover:outline-Color-FH'">
          {{ page }}
        </button>

        <button :disabled="currentPage === totalPages" @click="nextPage"
          class="w-8 h-8 flex items-center justify-center rounded bg-white border border-zinc-200 hover:border-Color-FH hover:bg-slate-50 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-zinc-200 disabled:hover:bg-white">
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
