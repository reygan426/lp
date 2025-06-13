<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useTeamStore } from '@/stores/team';
import { onMounted } from 'vue';
import ButtonSection from '@/components/ButtonSection.vue';

const modules = [Autoplay];

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) return 'https://placehold.co/600x400';
    return `${baseUrl}/ourteams/${imagePath}`;
};

const teamStore = useTeamStore();

onMounted(async () => {
    await teamStore.fetchTeam(1)
    await teamStore.fetchTeam(2)
    await teamStore.fetchTeam(3)
});

const breakpoints = {
    320: {
        slidesPerView: 1.2,
        spaceBetween: 16
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 16
    }
};
</script>

<template>
    <div
        class="py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[120px] lg:px-[80px] flex flex-col justify-between items-center gap-4 md:gap-12 lg:gap-16">
        <h6 class="text-[22px] md:text-[34px] lg:text-[46px] font-bold max-w-[90%] md:max-w-[60%] text-center">Dibimbing Langsung oleh
            Para
            Ahli di Bidangnya</h6>

        <div class="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-12 lg:gap-16">
            <div
                class="w-full md:w-[40%] h-full flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-left gap-6 md:gap-10 lg:gap-14 ">
                <div class="space-y-4 md:space-y-5 lg:space-y-6">
                    <p class="text-[14px] md:text-[16px] lg:text-[20px] text-black/80">Raih pemahaman mendalam <br>
                        dengan pendekatan yang terarah.</p>
                </div>

                <div class="hidden md:block">
                    <ButtonSection>Check Now</ButtonSection>
                </div>
            </div>

            <div class="w-full md:w-[60%]">
                <swiper class="w-full" :slides-per-view="3" :space-between="8" :centered-slides="false"
                    :grab-cursor="true" :watch-slides-progress="true" :loop="true" :breakpoints="breakpoints"
                    :modules="modules" :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }" :speed="800" :effect="'creative'" :creative-effect="{
                        prev: {
                            shadow: false,
                            translate: ['-20%', 0, -1],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }">
                    <swiper-slide v-for="(team, index) in teamStore.teams.filter(item => item.ot_id === 3)"
                        :key="index">
                        <div class="w-full h-[30vh] bg-cover rounded-[16px] relative swiper-slide-content"
                            :style="'background-image: url(' + getImageUrl(team.image) + ');'">
                            <div
                                class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-primary/80 to-transparent rounded-[16px] slide-gradient">
                            </div>
                            <div class="absolute bottom-0 w-full z-2 p-4 slide-text">
                                <p class="text-white font-sora text-[14px] lg:text-[16px] font-bold">{{ team.name }}
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

            <div class="md:hidden">
                <ButtonSection>Check Now</ButtonSection>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Perbaikan animasi untuk lebih smooth */
.swiper-slide:not(.swiper-slide-active) .swiper-slide-content {
    transform: scale(0.9);
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.swiper-slide:not(.swiper-slide-active) .slide-gradient,
.swiper-slide:not(.swiper-slide-active) .slide-text {
    opacity: 0;
    transition: opacity 0.5s ease-out;
}

.swiper-slide-active .swiper-slide-content {
    transform: scale(1);
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.swiper-slide-active .slide-gradient,
.swiper-slide-active .slide-text {
    opacity: 1;
    transition: opacity 0.5s ease-out 0.2s;
}

.swiper {
    width: 100% !important;
    height: 100%;
    overflow: hidden;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    opacity: 0.8 !important;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.swiper-slide-active {
    opacity: 1 !important;
}

.swiper-slide {
    visibility: visible;
}

.swiper-slide-active {
    visibility: visible;
}

.swiper-slide:hover .swiper-slide-content {
    transform: scale(0.95);
    transition: transform 0.3s ease;
}

.swiper-slide-active:hover .swiper-slide-content {
    transform: scale(1);
}
</style>