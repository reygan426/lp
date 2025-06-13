<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePostStore } from '@/stores/post';

import MainLayout from '@/layouts/MainLayout.vue';
import BeritaDetailHero from '@/views/beritaDetail/sections/BeritaDetailHero.vue';
import BeritaDetailContent from './sections/BeritaDetailContent.vue';
import { useAgendaStore } from '@/stores/agenda';
import { useHead } from '@vueuse/head';

const route = useRoute();
const postStore = usePostStore();
const postStore2 = usePostStore();
const agendaStore = useAgendaStore();
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
  postStore2.fetchPosts()
  agendaStore.fetchAgendas()
});

watch(() => postStore.currentPost, updateTitle);

const structuredData = {
  "@context": "https://schema.org",
  "@type": `${post.value?.category.name}`,
  "headline": `${post.value?.title}`,
  "datePublished": `${post.value?.pub_date}`,
  "author": { "@type": "Person", "name": `${post.value?.user.name}` }
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(structuredData)
    }
  ]
});
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
      <BeritaDetailContent :post="post" :posts="postStore2.posts.slice(0,3)" :agenda="agendaStore.agendas.slice(0,1)"/>
    </template>

    <div v-else class="container mx-auto px-4 py-16 text-center">
      <p>Berita tidak ditemukan.</p>
    </div>
  </MainLayout>
</template>
