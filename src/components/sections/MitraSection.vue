<script setup lang="ts">
import TextSection from '../TextSection.vue';
import TitleSection from '../TitleSection.vue';
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import type { PartnerItem } from '@/core/types/partner';

const modules = ref([Autoplay, Pagination]);
const isMobile = ref(false);
const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/partners/${imagePath}`;
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});

const props = defineProps<{
  partners: PartnerItem[]
}>();

const titleHTML = `Lebih Dari <span class="text-primary">${props.partners.length}</span> Mitra Kerjasama`;

const groupedPartners = computed(() => {
  const partnersToShow = props.partners || [];
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
    <div
      class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
      <div class="w-full flex justify-center items-center">
        <TitleSection v-if="props.partners.length" :text="titleHTML" :html="true" :delay="60" />
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
              class="w-32 lg:w-52 lg:mb-10">
              <img :src="getImageUrl(partner?.image) || ''" :alt="partner?.name"
                class="w-full h-full object-contain" loading="lazy" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="w-full flex justify-center items-center px-[30px] md:px-[60px] lg:px-[120px] mt-6 lg:mt-0">
      <TextSection class="mb-12 md:mb-16 lg:mb-20 lg:max-w-xl text-center">
        Menyoroti kolaborasi sukses kami dengan klien-klien terkemuka dan proyek transformatif mereka.
      </TextSection>
    </div>
  </div>
</template>

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