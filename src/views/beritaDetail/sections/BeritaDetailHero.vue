<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import type { PostItem } from '@/core/types/post';
import { computed } from 'vue';
import { useClipboard } from '@vueuse/core';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import CopyIcon from '@/assets/icon/copy.png';
import WhatsappIcon from '@/assets/icon/wa.png';
import FacebookIcon from '@/assets/icon/fb.png';
import TwitterIcon from '@/assets/icon/x.png';
import TitleMain from '@/components/TitleMain.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const { copy, isSupported: isCopySupported } = useClipboard();

const props = defineProps<{
  post?: PostItem,
  loading?: boolean
}>();

const currentUrl = computed(() => window.location.href);

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/posts/${imagePath}`;
};

const shareTo = (platform: string) => {
  if (!props.post) return;

  const title = props.post.title;
  const url = currentUrl.value;
  const text = `${title} - Baca selengkapnya di: ${url}`;

  switch (platform) {
    case 'copy':
      if (isCopySupported) {
        copy(url);
        toast.success('Link berhasil disalin!', { autoClose: 2000 });
      } else {
        toast.error('Browser tidak mendukung copy link', { autoClose: 2000 });
      }
      break;

    case 'whatsapp':
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
      break;

    case 'facebook':
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
      break;

    case 'twitter':
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
      break;

    default:
      break;
  }
};
</script>

<template>
  <div class="py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[80px] lg:px-[120px]">
    <template v-if="loading">
      <!-- Hero Section Skeleton -->
      <div class="w-full h-[60vh] bg-gray-300 animate-pulse relative">
        <div class="container mx-auto px-4 h-full flex items-end pb-16">
          <div class="max-w-3xl">
            <div class="h-8 w-3/4 bg-gray-300 animate-pulse rounded mb-4"></div>
            <div class="h-4 w-1/2 bg-gray-300 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="post">
      <div class="space-y-4 lg:space-y-6">
        <div class="text-base font-bold flex items-center gap-4">
          <div class="p-2 bg-primary/10 rounded-full">
            <p class="text-sm text-primary">{{ post.category.name }}</p>
          </div>
          <p class="text-sm">5 Menit Baca</p>
        </div>
        <TitleMain :text="post.title"/>
      </div>

      <div class="space-y-4 lg:space-y-6 mt-4 md:mt-6">
        <div class="w-full h-full lg:h-[60vh]">
          <img :src="getImageUrl(post.image)" alt="Thumbnail"
            class="w-full h-full object-cover rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
        </div>
        <div class="flex justify-between items-center font-sora">
          <div class="flex gap-4 md:gap-5 lg:gap-6">
            <div class="text-base space-y-2">
              <TextBody>Penulis</TextBody>
              <TextBody weight-text="font-bold">{{ post.user.name }}</TextBody>
            </div>
            <div class="text-base space-y-2">
              <TextBody>Tanggal Publish</TextBody>
              <TextBody weight-text="font-bold">{{ new Date(post.pub_date).toLocaleDateString('id-ID', {
                day: 'numeric', month: 'long', year:
                'numeric' }) }}</TextBody>
            </div>
          </div>
          <div class="flex gap-4">
            <button @click="shareTo('copy')"
              class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Salin tautan">
              <img :src="CopyIcon" alt="Salin tautan" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
            </button>

            <button @click="shareTo('whatsapp')"
              class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Bagikan ke WhatsApp">
              <img :src="WhatsappIcon" alt="WhatsApp" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
            </button>

            <button @click="shareTo('facebook')"
              class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Bagikan ke Facebook">
              <img :src="FacebookIcon" alt="Facebook" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
            </button>

            <button @click="shareTo('twitter')"
              class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Bagikan ke Twitter">
              <img :src="TwitterIcon" alt="Twitter" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
