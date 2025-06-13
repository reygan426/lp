<script setup lang="ts">
import type { PostItem } from '@/core/types/post';
import ArticleCard from '../ArticleCard.vue';
import TitleSection from '../TitleSection.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css';

defineProps<{
    berita: PostItem[];
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

        <!-- Tablet & Dekstop -->
        <div class="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 hidden">
            <ArticleCard v-for="(article, index) in berita" :key="index" :title="article.title" :slug="article.slug" :date="article.pub_date"
                :image="article.image" />
        </div>

        <!-- Mobile -->
        <div class="pb-6 md:hidden">
            <div class="">
                <swiper class="w-full" :slides-per-view="1.2" :space-between="16" :centered-slides="false"
                    :grab-cursor="true" :watch-slides-progress="true">
                    <swiper-slide v-for="(article, index) in berita" :key="index">
                        <ArticleCard :title="article.title" :slug="article.slug"
                            :date="article.pub_date" :image="article.image" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<style scoped>
.swiper-slide {
    height: auto;
    visibility: visible !important;
    opacity: 1 !important;
}

.swiper-slide-prev,
.swiper-slide-next {
    opacity: 0.7;
    transform: scale(0.95);
    transition: all 0.3s ease;
}

.swiper-slide-active {
    opacity: 1;
    transform: scale(1);
}
</style>