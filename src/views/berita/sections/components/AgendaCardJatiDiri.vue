<script setup lang="ts">
import router from '@/router';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;
const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/agendas/${imagePath}`;
};

const props = defineProps<{
  title: string
  slug: string
  location: string
  image: string
  description: string
  date: {
    dayName: string
    day: number
    month: string
    year: number
  }
}>()

const goToDetail = () => {
    router.push({
      name: 'Agenda Detail',
      params: { slug: props.slug }
    });
};
</script>

<template>
  <div class="space-y-4 lg:space-y-6 cursor-pointer group hover:-translate-y-2 transition duration-500"
    @click="goToDetail">
    <div class="w-full h-56 md:h-64 lg:h-72 relative">
      <div class="w-full h-full rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden">
        <img :src="getImageUrl(image || 'https://placehold.co/600x400')" :alt="title || 'Gambar acara'"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </div>
      <div v-if="date"
        class="absolute top-4 right-4 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] bg-white py-3 px-6 text-center">
        <p class="text-xs lg:text-sm">{{ date.dayName }}</p>
        <p class="text-2xl lg:text-[32px] font-bold">{{ date.day }}</p>
        <p class="text-xs lg:text-sm">{{ date.month }} {{ date.year }}</p>
      </div>
    </div>

    <div class="flex flex-col gap-2 lg:gap-4">
      <div class="py-1 px-2 bg-primary/10 rounded-full w-fit">
        <p class="text-primary text-[10px] md:text-[14px]">Talkshow</p>
      </div>
      <div class="space-y-2">
        <div>
          <h3 class="text-[18px] md:text-[20px] lg:text-[24px] font-bold">
            {{ title || 'Judul Acara' }}
          </h3>
          <TextBody v-if="location">{{ location }}</TextBody>
        </div>

        <!-- <TextBody v-if="description">
          <span class="line-clamp-3" v-html="description"></span>
        </TextBody> -->
      </div>
      <TextBody class="hover:text-Color-FH transition-colors cursor-pointer">Lihat Acara ></TextBody>
    </div>
  </div>
</template>
