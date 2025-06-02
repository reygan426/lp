<script setup lang="ts">
import TitleSection from '@/components/TitleSection.vue';
import TextSection from '@/components/TextSection.vue';
import { computed, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import ButtonSection from '../ButtonSection.vue';
import TestimonialsSectionMobile from './TestimonialsSectionMobile.vue';
import type { TestimonialItem } from '@/core/types/testimoni';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) return 'https://placehold.co/600x400';
    return `${baseUrl}/testimonies/${imagePath}`;
};

const props = defineProps<{
    testimoni: TestimonialItem[];
}>();

const activeIndex = ref(1);
const swiperInstance = ref<any>(null);
const showVideoPopup = ref(false);
const currentVideoId = ref('');

const limitedTestimonials = computed(() => {
    return props.testimoni.slice(0, 6);
});

const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper;
};

const onSlideChange = (swiper: any) => {
    activeIndex.value = swiper.realIndex;
};

const prevSlide = () => {
    swiperInstance.value?.slidePrev();
};

const nextSlide = () => {
    swiperInstance.value?.slideNext();
};

const modules = [Navigation, Pagination, Autoplay];

const openVideoPopup = (videoId: string) => {
    currentVideoId.value = videoId;
    showVideoPopup.value = true;
};

const closeVideoPopup = () => {
    showVideoPopup.value = false;
    currentVideoId.value = '';
};
</script>

<template>
    <div class="p-[20px] md:p-[60px] lg:px-[120px]">
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

        <div class="w-full text-center flex flex-col justify-center items-center gap-4">
            <div class="w-fit py-2 px-5 bg-primary/10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
                <p class="text-primary text-sm lg:text-base">Testimonials</p>
            </div>
            <TitleSection :text="'Apa Kata Mereka'"></TitleSection>
            <TextSection class="lg:max-w-2xl">Customers trust Chainex for secure automation and smart analytics. See
                how AI enhances their blockchain experience</TextSection>
        </div>

        <div class="w-full py-[32px] md:py-[32px] hidden lg:block">
            <div class="w-full relative h-[65vh] flex flex-col justify-end">
                <div class="w-[30%] xl:w-[32%] absolute top-10 right-0 space-y-8">
                    <TextSection>
                        <span class="line-clamp-5 xl:line-clamp-6" v-html="testimoni[activeIndex]?.description"></span>
                    </TextSection>
                </div>

                <Swiper v-if="testimoni && testimoni.length" :modules="modules" :slides-per-view="3" :space-between="20"
                    :centered-slides="true" :loop="true" :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        waitForTransition: true
                    }" @swiper="onSwiper" @slide-change="onSlideChange" class="w-full h-full">
                    <SwiperSlide v-for="(item, index) in limitedTestimonials" :key="index">
                        <div class="transition-all duration-500 ease-in-out cursor-pointer w-full mb-5" :class="{
                            'h-[25vh]': activeIndex !== index,
                            'h-[65vh] pt-8': activeIndex === index
                        }">
                            <div class="w-full h-full relative bg-cover bg-center rounded-[8px] md:rounded-[16px] lg:rounded-[24px] transition-all duration-500" :style="'background-image: url(' + getImageUrl(item.image) + ');'">
                                <div v-if="activeIndex === index"
                                    class="absolute bottom-0 px-4 pb-4 pt-14 w-full flex justify-between items-center bg-gradient-to-t from-secondary/50 via-primary/50 to-transparent rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
                                    <div class="w-[80%] space-y-1">
                                        <p
                                            class="text-[10px] md:text-[12px] lg:text-[18px] text-white font-bold font-sora">
                                            {{
                                                item.name }}</p>
                                        <p class="text-[8px] md:text-[10px] lg:text-[14px] text-white">{{
                                            item.title }}</p>
                                    </div>

                                    <button v-if="item.yt_link" @click="openVideoPopup(item.yt_link)"
                                        class="w-[50px] h-[50px] lg:w-[58px] lg:h-[58px] bg-black/30 backdrop-blur-sm rounded-full hover:scale-105 transition duration-500 flex items-center justify-center border-2 border-white/30">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " viewBox="0 0 24 24"
                                            fill="#ffffff" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div class="w-full flex justify-between items-center mt-6">
                <!-- pagination -->
                <div class="flex gap-2">
                    <div v-for="(_, index) in limitedTestimonials" :key="index"
                        class="w-10 h-[5px] rounded-[8px] cursor-pointer" :class="{
                            'bg-primary': activeIndex === index,
                            'bg-gray-300': activeIndex !== index
                        }"></div>
                </div>

                <!-- navigation -->
                <div class="flex gap-4">
                    <div @click="prevSlide"
                        class="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full bg-transparent border border-primary hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary hover:text-white" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div @click="nextSlide"
                        class="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full bg-transparent border border-primary hover:bg-primary cursor-pointer flex items-center justify-center transition duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-primary hover:text-white" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <TestimonialsSectionMobile class="mt-6 lg:hidden" :testimoni="testimoni.slice(0, 5)">
        </TestimonialsSectionMobile>

        <div class="w-full flex justify-center items-center py-[32px] md:py-[32px] lg:pt-[30px] lg:pb-[30px]">
            <ButtonSection>Selengkapnya</ButtonSection>
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

.swiper {
    width: 100% !important;
    height: 100%;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    opacity: 0.8 !important;
    transition: all 0.3s ease;
}

.swiper-slide-active {
    opacity: 1 !important;
}

.swiper {
    overflow: hidden;
}

.swiper-slide {
    visibility: visible;
}

.swiper-slide-active {
    visibility: visible;
}
</style>