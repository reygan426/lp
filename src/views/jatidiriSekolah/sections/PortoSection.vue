<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import type { PortofolioItem } from '@/core/types/portofolio';
import TitleSection from '@/components/TitleSection.vue';
import TextSection from '@/components/TextSection.vue';

const modules = ref([Autoplay, Pagination]);
const isMobile = ref(false);
const baseUrl = import.meta.env.VITE_APP_IMG_URL;
const showVideoPopup = ref(false);
const currentVideoId = ref('');

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/portofolios/${imagePath}`;
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

const openVideoPopup = (videoId: string) => {
  currentVideoId.value = videoId;
  showVideoPopup.value = true;
};

const closeVideoPopup = () => {
  showVideoPopup.value = false;
  currentVideoId.value = '';
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});

const props = defineProps<{
  portofolio: PortofolioItem[]
}>();

const titleHTML = `Lebih Dari <span class="text-primary">${props.portofolio?.length}</span> Pengguna Jatidiri Sekolah`;

const groupedPartners = computed(() => {
  const partnersToShow = props.portofolio || [];
  const itemsPerGroup = isMobile.value ? 3 : 5;
  
  const totalGroups = Math.ceil(partnersToShow.length / itemsPerGroup);

  if (totalGroups <= 3) {
    const groups = [];
    for (let i = 0; i < partnersToShow.length; i += itemsPerGroup) {
      groups.push(partnersToShow.slice(i, i + itemsPerGroup));
    }
    return groups;
  }
  
  const groups = [];
  
  for (let i = 0; i < 3; i++) {
    const start = Math.floor((i / 3) * partnersToShow.length);
    const end = Math.floor(((i + 1) / 3) * partnersToShow.length);
    groups.push(partnersToShow.slice(start, end));
  }
  
  return groups;
});
</script>

<template>
  <div>
    <Transition name="fade">
      <div v-if="showVideoPopup"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
        @click="closeVideoPopup">
        <div class="relative mx-4 aspect-video w-full max-w-4xl md:mx-0" @click.stop>
          <button @click="closeVideoPopup"
            class="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            class="relative isolate z-[1] size-full overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px] border-2 border-white">
            <iframe :src="`https://www.youtube.com/embed/${currentVideoId}`"
              class="size-full rounded-[16px] md:rounded-[24px] lg:rounded-[32px]" allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
          </div>
        </div>
      </div>
    </Transition>

    <div
      class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
      <div class="w-full flex justify-center items-center">
        <TitleSection v-if="portofolio.length" :text="titleHTML" :html="true" :delay="60" />
      </div>
    </div>
    <div class="lg:pb-10">
      <swiper v-if="groupedPartners.length > 0" :modules="modules" :slides-per-view="1" :space-between="30" :speed="650"
        :loop="true" :autoplay="{
          delay: 2800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }" :pagination="{
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active'
        }">
        <swiper-slide v-for="(group, groupIndex) in groupedPartners" :key="groupIndex">
          <div :class="`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-5'} gap-4 w-full justify-items-center`">
            <div v-for="(partner, index) in group" :key="index"
              class="w-32 lg:w-52 lg:mb-10 relative group">
              <img :src="getImageUrl(partner?.image1) || ''" :alt="partner?.title"
                class="w-full h-full object-contain" loading="lazy" />
              <button v-if="partner.yt_id" @click="openVideoPopup(partner.yt_id)"
                class="absolute inset-0 m-auto w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full hover:scale-105 transition duration-500 flex items-center justify-center border-2 border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"
                  fill="#ffffff" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="w-full flex justify-center items-center px-[30px] md:px-[60px] lg:px-[120px] mt-6 lg:mt-0">
      <TextSection class="mb-12 md:mb-16 lg:mb-20 lg:max-w-xl text-center">
        Menyoroti kolaborasi sukses kami dengan klien-klien terkemuka dan proyek transformatif mereka.
      </TextSection>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<style>
/* All existing styles remain exactly the same */
.swiper-wrapper {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1) !important;
  align-items: center;
  will-change: transform;
}

.swiper-pagination {
  position: relative;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem;
}

.swiper-slide {
  transition: all 0.65s cubic-bezier(0.25, 0.1, 0.25, 1);
  transform: scale(0.98);
  opacity: 0.7;
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.swiper-slide-active {
  transform: scale(1);
  opacity: 1;
  z-index: 1;
}

.swiper-slide img {
  transition: transform 0.65s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.swiper-slide-active img {
  transform: scale(1.03);
}

.custom-bullet {
  width: 20px;
  height: 6px;
  display: inline-block;
  border-radius: 3px;
  background: #DDD;
  opacity: 1;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.custom-bullet-active {
  background: #6464FA;
  width: 40px;
  height: 6px;
}

@media (min-width: 640px) {
  .custom-bullet {
    width: 25px;
    height: 8px;
  }

  .custom-bullet-active {
    width: 50px;
    height: 8px;
  }
}

@media (min-width: 1024px) {
  .swiper-pagination {
    margin-top: 4rem;
  }

  .custom-bullet {
    width: 35px;
    height: 10px;
  }

  .custom-bullet-active {
    width: 70px;
    height: 10px;
  }
}

.swiper-container-horizontal>.swiper-pagination-bullets {
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.swiper-wrapper.no-transition {
  transition: none !important;
}
</style>