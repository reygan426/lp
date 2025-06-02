<script lang="ts" setup>
import router from '@/router';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;
const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) return '';
    return `${baseUrl}/posts/${imagePath}`;
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

const props = defineProps({
    title: {
        type: String,
    },
        slug: {
        type: String,
    },
    date: {
        type: String,
    },
    description: {
        type: String,
    },
    author: {
        type: String,
    },
    image: {
        type: String,
    }
});

const goToDetail = () => {
    router.push({
      name: 'Berita Detail',
      params: { slug: props.slug }
    });
};
</script>

<template>
    <div class="w-full p-2 flex gap-4 rounded-[16px] bg-[#E6EFF7] cursor-pointer" @click="goToDetail">
        <div class="w-[35%]">
            <img :src="getImageUrl(image || '')" alt="" class="w-full h-full object-cover rounded-[16px]">
        </div>
        <div class="w-[65%] space-y-2">
            <div class="py-1 px-2 bg-[#F5F2FF] rounded-full w-fit">
                <p class="text-primary text-[10px] md:text-[12px]">Artikel</p>
            </div>
            <h6 class="text-[12px] md:text-[14px] font-bold line-clamp-3">{{ title }}</h6>
            <div class="w-full border border-black/25"></div>
            <div class="text-[10px] md:text-[12px] text-black/80">{{ formatDate(date || '') }} | 4 min read</div>
        </div>
    </div>
</template>