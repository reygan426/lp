<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePostStore } from '@/stores/post';

import MainLayout from '@/layouts/MainLayout.vue';
import BeritaDetailHero from '@/views/beritaDetail/sections/BeritaDetailHero.vue';
import BeritaDetailContent from './sections/BeritaDetailContent.vue';

const route = useRoute();
const postStore = usePostStore();
const { currentPost: post, loading, error } = storeToRefs(postStore);

const updateTitle = () => {
  if (postStore.currentPost?.title) {
    document.title = `${postStore.currentPost.title} - ${import.meta.env.VITE_APP_NAME}`;
  }
};

onMounted(() => {
  const slug = route.params.slug as string;
  postStore.fetchPostBySlug(slug);
  updateTitle();
});

watch(() => postStore.currentPost, updateTitle);
</script>

<template>
  <MainLayout :white-section-visible="true">
    <template v-if="loading">
      <BeritaDetailHero :loading="true" />
      <BodySection :loading="true" />
      <div class="bg-gray-100 py-16">
        <div class="container mx-auto px-4 text-center">
          <div class="h-8 w-1/2 mx-auto bg-gray-300 animate-pulse rounded mb-6"></div>
          <div class="h-12 w-48 mx-auto bg-gray-300 animate-pulse rounded"></div>
        </div>
      </div>
    </template>

    <div v-else-if="error" class="container mx-auto px-4 py-16 text-center">
      <div class="text-red-500">{{ error }}</div>
    </div>

    <template v-else-if="post">
      <BeritaDetailHero :post="post" />
      <BeritaDetailContent :post="post"/>
    </template>

    <div v-else class="container mx-auto px-4 py-16 text-center">
      <p>Berita tidak ditemukan.</p>
    </div>
  </MainLayout>
</template>
