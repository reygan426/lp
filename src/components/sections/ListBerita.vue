// Dalam ListBerita.vue
<script setup lang="ts">
import type { Post } from '@/core/types/post';
import ArticleCard from '../ArticleCard.vue';
import TitleSection from '../TitleSection.vue';

defineProps<{
  berita: Post[];
}>();
</script>

<template>
    <div class="p-[20px] py-[32px] md:p-[48px] lg:p-[64px] space-y-4 md:space-y-6 lg:space-y-8">
        <div class="w-full space-y-2 lg:space-y-4">
            <div class=" bg-primary/10 w-fit py-2 px-5 rounded-full">
                <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">Our Blog</h6>
            </div>
            <TitleSection class="text-primary" :text="'Berita & Artikel Terbaru'"></TitleSection>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <ArticleCard 
              v-for="(article, index) in berita" 
              :key="index"
              :title="article.title"
              :date="article.pub_date"
              :image="article.image"
            />
        </div>
    </div>
</template>