<script setup lang="ts">
import type { SliderItem } from '@/core/types/slider';
import ButtonSection from '../ButtonSection.vue';
import TextBody from '../TextBody.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) return 'https://placehold.co/600x400';
    return `${baseUrl}/sliders/${imagePath}`;
};

const props = defineProps<{
    sliders: SliderItem[];
    pageName: string;
    linkPage: string;
}>();
</script>

<template>
    <div class="p-3 md:p-5 lg:p-8 h-[50vh] lg:h-[96vh]">
        <div class="w-full h-full relative">
            <div class="w-full h-full relative flex items-center">
                <div class="absolute inset-0 w-full h-full hero3-container overflow-hidden">
                    <img :src="getImageUrl(sliders[0]?.image)" :alt="sliders[0]?.title"
                        class="w-full h-full object-cover object-[75%_75%] md:object-center rounded-[16px] md:rounded-[24px] lg:rounded-[32px] hero3-box">

                    <svg :style="{ visibility: 'hidden', position: 'absolute' }" width="0" height="0"
                        xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                            </filter>
                        </defs>
                    </svg>
                </div>

                <div class="relative z-10 md:px-[40px] lg:px-[88px] space-y-4 lg:space-y-6 hidden md:block">
                    <!-- <div class=" bg-[#5A28FF20] w-fit py-2 px-5 rounded-full">
                        <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-white">About Us</h6>
                    </div> -->

                    <div class=" space-y-2">
                        <h1
                            class="max-w-[75%] lg:max-w-[70%] text-[22px] md:text-[34px] lg:text-[46px] font-bold text-white">
                            {{ sliders[0]?.title }}
                        </h1>
                        <div
                            class="max-w-[70%] lg:max-w-[60%] px-4 py-5 bg-white/10 backdrop-blur-sm rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
                            <TextBody class="text-white">{{ sliders[0]?.description }}</TextBody>
                        </div>
                    </div>

                    <div class="">
                        <a href="https://cek.jatidiri.app/login" target="_blank">
                            <ButtonSection>Check Now</ButtonSection>
                        </a>
                    </div>
                </div>

                <!-- Mobile -->
                <div class="absolute bottom-0 left-0 z-10 p-4 space-y-4 lg:space-y-6 md:hidden">
                    <!-- <div class=" bg-[#5A28FF20] w-fit py-2 px-5 rounded-full ">
                        <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-white">About Us</h6>
                    </div> -->

                    <div class=" space-y-2 ">
                        <h1
                            class="max-w-[75%] lg:max-w-2/3 text-[22px] md:text-[34px] lg:text-[46px] font-bold text-white">
                            {{ sliders[0]?.title }}
                        </h1>
                    </div>

                    <div class="">
                        <a href="https://cek.jatidiri.app/login" target="_blank">
                            <ButtonSection>Check Now</ButtonSection>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Custom Pagination -->
            <div
                class="absolute bottom-0 right-0 md:left-0 px-4 py-2 rounded-full bg-[#835EFF]/25 flex gap-2 items-center w-fit">
                <a href="/"
                    class="text-[8px] md:text-[12px] lg:text-[14px] cursor-pointer font-sora text-primary/50 hover:text-primary">Jatidiri.app</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="w-4 h-4">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <a :href="props.linkPage"
                    class="text-[8px] md:text-[12px] lg:text-[14px] cursor-pointer font-sora text-primary">{{
                        props.pageName }}</a>
            </div>
        </div>
    </div>
</template>

<style>
.hero3-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.hero3-box {
    clip-path: polygon(40% 100%, 40% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
}

@media (min-width: 320px) {
    .hero3-box {
        clip-path: polygon(40% 100%, 40% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 360px) {
    .hero3-box {
        clip-path: polygon(46% 100%, 46% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 440px) {
    .hero3-box {
        clip-path: polygon(52% 100%, 52% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 460px) {
    .hero3-box {
        clip-path: polygon(58% 100%, 58% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 560px) {
    .hero3-box {
        clip-path: polygon(64% 100%, 64% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 680px) {
    .hero3-box {
        clip-path: polygon(69% 100%, 69% 84%, 100% 84%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 768px) {
    .hero3-box {
        clip-path: polygon(0% 90%, 33% 90%, 33% 100%, 100% 100%, 100% 0%, 0% 0%);
    }
}

@media (min-width: 868px) {
    .hero3-box {
        clip-path: polygon(0% 90%, 32% 90%, 32% 100%, 100% 100%, 100% 0%, 0% 0%);
    }
}

@media (min-width: 968px) {
    .hero3-box {
        clip-path: polygon(0% 90%, 30% 90%, 30% 100%, 100% 100%, 100% 0%, 0% 0%);
    }
}

@media (min-width: 1024px) {
    .hero3-box {
        clip-path: polygon(0% 90%, 30% 90%, 30% 100%, 100% 100%, 100% 0%, 0% 0%);
    }
}

@media (min-width: 1124px) {
    .hero3-box {
        clip-path: polygon(0% 90%, 28% 90%, 28% 100%, 100% 100%, 100% 0%, 77% 0%, 75% 13%, 20% 13%, 18% 0%, 0% 0%);
    }
}

@media (min-width: 1224px) {
    .hero3-box {
        clip-path: polygon(0% 90%, 26% 90%, 26% 100%, 100% 100%, 100% 0%, 77% 0%, 75% 15%, 20% 15%, 18% 0%, 0% 0%);
    }
}

@media (min-width: 1280px) {
    .hero3-box {
        clip-path: polygon(0% 90%, 26% 90%, 26% 100%, 100% 100%, 100% 0%, 75% 0%, 73% 15%, 22% 15%, 20% 0%, 0% 0%);
    }
}

@media (min-width: 1400px) {
    .hero3-box {
        clip-path: polygon(0% 90%, 23% 90%, 23% 100%, 100% 100%, 100% 0%, 73% 0%, 71% 15%, 24% 15%, 22% 0%, 0% 0%);
    }
}

@media (min-width: 1500px) {
    .hero3-box {
        clip-path: polygon(0% 90%, 20% 90%, 20% 100%, 100% 100%, 100% 0%, 70% 0%, 68% 15%, 26% 15%, 24% 0%, 0% 0%);
    }
}

@media (min-width: 1600px) {
    .hero3-box {
        clip-path: polygon(0% 90%, 20% 90%, 20% 100%, 100% 100%, 100% 0%, 70% 0%, 68% 15%, 28% 15%, 26% 0%, 0% 0%);
    }
}

@media (min-width: 1700px) {
    .hero3-box {
        clip-path: polygon(0% 90%, 20% 90%, 20% 100%, 100% 100%, 100% 0%, 70% 0%, 68% 15%, 30% 15%, 28% 0%, 0% 0%);
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
</style>