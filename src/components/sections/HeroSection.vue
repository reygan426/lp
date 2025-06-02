<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import ButtonSection from '../ButtonSection.vue';
import TextBody from '../TextBody.vue';
import { ref, onMounted } from 'vue';
import type { SliderItem } from '@/core/types/slider';
import 'swiper/swiper-bundle.css';

interface Props {
  sliders: SliderItem[];
}

defineProps<Props>();

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/sliders/${imagePath}`;
};

const swiperInstance = ref<any>(null);
const activeSlideIndex = ref(0);
const isMobile = ref(false);

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
  activeSlideIndex.value = swiper.activeIndex;
};

const onSlideChange = (swiper: any) => {
  activeSlideIndex.value = swiper.activeIndex;
  animateContent();
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

const animateContent = () => {
  const contentElements = document.querySelectorAll('.slide-content');
  contentElements.forEach(el => {
    el.classList.remove('animate-fadeInDown', 'animate-fadeInLeft', 'animate-fadeInUp');
  });

  setTimeout(() => {
    const currentSlideElements = document.querySelectorAll(`.slide-${activeSlideIndex.value} .slide-content`);
    currentSlideElements.forEach((el, index) => {
      if (index === 0) el.classList.add('animate-fadeInDown');
      if (index === 1) el.classList.add('animate-fadeInLeft');
      if (index === 2) el.classList.add('animate-fadeInUp');
    });
  }, 100);
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);

  setTimeout(() => {
    animateContent();
  }, 500);
});
</script>

<template>
  <div class="p-3 md:p-5 lg:p-8 h-[50vh] lg:h-[96vh]">
    <swiper :modules="[Autoplay, Pagination, EffectFade]" :space-between="0" :slides-per-view="1" :effect="'fade'"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }" :pagination="{
        clickable: true,
        el: '.custom-pagination',
        type: 'bullets',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        renderBullet: function (index, className) {
          return `<div class='${className}'><div class='bullet-container'><div class='bullet-bar'></div><p class='bullet-number'>0${index + 1}.</p></div></div>`;
        }
      }" @swiper="onSwiper" @slideChange="onSlideChange" class="w-full h-full relative">
      <swiper-slide v-for="(slide, index) in sliders" :key="index" :class="`slide-${index}`">
        <div class="w-full h-full relative flex items-center">
          <div class="absolute inset-0 w-full h-full hero-container overflow-hidden">
            <svg :style="{ visibility: 'hidden', position: 'absolute' }" width="0" height="0"
              xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo" />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
            <img :src="getImageUrl(slide.image)" :alt="slide.title"
              class="w-full h-full object-cover object-[75%_75%] md:object-center rounded-[16px] md:rounded-[24px] lg:rounded-[32px] hero-box">
            <div class="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-transparent hero-box"></div>
          </div>

          <div class="relative z-10 md:px-[40px] lg:px-[88px] space-y-4 lg:space-y-6 hidden md:block">
            <div class="slide-content bg-[#5A28FF20] w-fit py-2 px-5 rounded-full opacity-0">
              <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-white">Jatidiri.App</h6>
            </div>

            <div class="slide-content space-y-2 opacity-0">
              <h1 class="max-w-[75%] lg:max-w-[70%] text-[22px] md:text-[34px] lg:text-[46px] font-bold text-white">
                {{ slide.title }}
              </h1>
              <div
                class="max-w-[70%] lg:max-w-[60%] px-4 py-5 bg-white/10 backdrop-blur-sm rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
                <TextBody class="text-white"><span v-html="slide.description"></span></TextBody>
              </div>
            </div>

            <div class="slide-content opacity-0">
              <a href="https://cek.jatidiri.app/login" target="_blank">
                <ButtonSection>Check Now</ButtonSection>
              </a>
            </div>
          </div>

          <!-- Mobile -->
          <div class="absolute bottom-0 left-0 z-10 p-4 space-y-4 lg:space-y-6 md:hidden">
            <div class="slide-content bg-[#5A28FF20] w-fit py-2 px-5 rounded-full ">
              <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-white">Jatidiri.App</h6>
            </div>

            <div class="slide-content space-y-2 ">
              <h1 class="max-w-[75%] lg:max-w-[70%] text-[22px] md:text-[34px] lg:text-[46px] font-bold text-white">
                {{ slide.title }}
              </h1>
            </div>

            <div class="slide-content">
              <a href="https://cek.jatidiri.app/login" target="_blank">
                <ButtonSection>Check Now</ButtonSection>
              </a>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Custom Pagination -->
      <div class="absolute bottom-0 z-20 flex gap-4 lg:gap-6 custom-pagination"
        :class="isMobile ? 'right-0' : 'left-0'"></div>
    </swiper>
  </div>
</template>

<style>
.hero-container {
  filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.hero-box {
  clip-path: polygon(44% 100%, 44% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
}

@media (min-width: 320px) {
  .hero-box {
    clip-path: polygon(58% 100%, 58% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 360px) {
  .hero-box {
    clip-path: polygon(64% 100%, 64% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 440px) {
  .hero-box {
    clip-path: polygon(64% 100%, 64% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 460px) {
  .hero-box {
    clip-path: polygon(70% 100%, 70% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 560px) {
  .hero-box {
    clip-path: polygon(74% 100%, 74% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 680px) {
  .hero-box {
    clip-path: polygon(78% 100%, 78% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 768px) {
  .hero-box {
    clip-path: polygon(0% 90%, 20% 90%, 20% 100%, 100% 100%, 100% 0%, 0% 0%);
  }
}

@media (min-width: 868px) {
  .hero-box {
    clip-path: polygon(0% 90%, 20% 90%, 20% 100%, 100% 100%, 100% 0%, 0% 0%);
  }
}

@media (min-width: 968px) {
  .hero-box {
    clip-path: polygon(0% 90%, 20% 90%, 20% 100%, 100% 100%, 100% 0%, 0% 0%);
  }
}

@media (min-width: 1024px) {
  .hero-box {
    clip-path: polygon(0% 90%, 20% 90%, 20% 100%, 100% 100%, 100% 0%, 0% 0%);
  }
}

@media (min-width: 1124px) {
  .hero-box {
    clip-path: polygon(0% 90%, 20% 90%, 20% 100%, 100% 100%, 100% 0%, 77% 0%, 75% 13%, 20% 13%, 18% 0%, 0% 0%);
  }
}

@media (min-width: 1224px) {
  .hero-box {
    clip-path: polygon(0% 90%, 18% 90%, 18% 100%, 100% 100%, 100% 0%, 77% 0%, 75% 15%, 20% 15%, 18% 0%, 0% 0%);
  }
}

@media (min-width: 1280px) {
  .hero-box {
    clip-path: polygon(0% 90%, 18% 90%, 18% 100%, 100% 100%, 100% 0%, 75% 0%, 73% 15%, 22% 15%, 20% 0%, 0% 0%);
  }
}

@media (min-width: 1400px) {
  .hero-box {
    clip-path: polygon(0% 90%, 17% 90%, 17% 100%, 100% 100%, 100% 0%, 73% 0%, 71% 15%, 24% 15%, 22% 0%, 0% 0%);
  }
}

@media (min-width: 1500px) {
  .hero-box {
    clip-path: polygon(0% 90%, 16% 90%, 16% 100%, 100% 100%, 100% 0%, 70% 0%, 68% 15%, 26% 15%, 24% 0%, 0% 0%);
  }
}

@media (min-width: 1600px) {
  .hero-box {
    clip-path: polygon(0% 90%, 15% 90%, 15% 100%, 100% 100%, 100% 0%, 70% 0%, 68% 15%, 28% 15%, 26% 0%, 0% 0%);
  }
}

@media (min-width: 1700px) {
  .hero-box {
    clip-path: polygon(0% 90%, 13% 90%, 13% 100%, 100% 100%, 100% 0%, 70% 0%, 68% 15%, 30% 15%, 28% 0%, 0% 0%);
  }
}

.animate-fadeInDown {
  animation: fadeInDown 0.8s ease-out forwards;
}

.animate-fadeInLeft {
  animation: fadeInLeft 0.8s ease-out 0.2s forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom Pagination Styles */
.swiper-pagination-bullet {
  width: auto !important;
  height: auto !important;
  background: transparent !important;
  opacity: 1 !important;
  margin: 0 !important;
  display: inline-block !important;
}

.swiper-pagination-bullet-active .bullet-bar {
  width: 40px;
  background: #835EFF;
}

.swiper-pagination-bullet:not(.swiper-pagination-bullet-active) .bullet-bar {
  width: 20px;
  background: #C6C6C6;
}

.bullet-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.bullet-bar {
  height: 2px;
  transition: width 0.3s ease;
}

.bullet-number {
  font-size: 10px;
  color: inherit;
}

@media (min-width: 768px) {
  .bullet-number {
    font-size: 12px;
  }

  .swiper-pagination-bullet-active .bullet-bar {
    width: 60px;
    background: #835EFF;
  }
}

@media (min-width: 1024px) {
  .bullet-number {
    font-size: 14px;
  }

  .swiper-pagination-bullet-active .bullet-bar {
    width: 90px;
    background: #835EFF;
  }
}
</style>