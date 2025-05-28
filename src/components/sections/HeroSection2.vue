<script setup lang="ts">
import ButtonSection from '../ButtonSection.vue';
import TextBody from '../TextBody.vue';
import type { HeroSlider } from '@/core/types/slider';

interface Props {
    sliders: HeroSlider[];
    pageName: string;
    linkPage: string;
}

const props = defineProps<Props>();
</script>

<template>
    <div class="p-3 md:p-5 lg:p-8 h-[80vh] lg:h-[96vh]">
        <div class="w-full h-full relative">
            <div class="w-full h-full relative flex items-center">
                <div class="absolute inset-0 w-full h-full hero2-container overflow-hidden">
                    <img :src="sliders[0].image" :alt="sliders[0].title"
                        class="w-full h-full object-cover object-[75%_75%] md:object-center rounded-[16px] md:rounded-[24px] lg:rounded-[32px] hero2-box hidden md:block">

                    <img :src="sliders[0].image2" :alt="sliders[0].title"
                        class="w-full h-full object-cover object-[75%_75%] md:object-center rounded-[16px] md:rounded-[24px] lg:rounded-[32px] hero2-box md:hidden">

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

                    <div class="w-full space-y-2">
                        <h1
                            class="max-w-[75%] lg:max-w-[65%] text-[22px] md:text-[34px] lg:text-[46px] font-bold text-white">
                            {{ sliders[0].title }}
                        </h1>
                        <div
                            class="max-w-[70%] lg:max-w-[50%] px-4 py-5 bg-white/10 backdrop-blur-sm rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
                            <TextBody class="text-white">{{ sliders[0].description }}</TextBody>
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
                            {{ sliders[0].title }}
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
.hero2-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.hero2-box {
    clip-path: polygon(40% 100%, 40% 90%, 100% 90%, 100% 0%, 0% 0%, 0% 100%);
}

@media (min-width: 320px) {
    .hero2-box {
        clip-path: polygon(50% 100%, 50% 90%, 100% 90%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 360px) {
    .hero2-box {
        clip-path: polygon(56% 100%, 56% 90%, 100% 90%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 440px) {
    .hero2-box {
        clip-path: polygon(56% 100%, 56% 90%, 100% 90%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 460px) {
    .hero2-box {
        clip-path: polygon(62% 100%, 62% 90%, 100% 90%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 560px) {
    .hero2-box {
        clip-path: polygon(70% 100%, 70% 90%, 100% 90%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 680px) {
    .hero2-box {
        clip-path: polygon(75% 100%, 75% 90%, 100% 90%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 768px) {
    .hero2-box {
        clip-path: polygon(0% 90%, 30% 90%, 30% 100%, 100% 100%, 100% 0%, 0% 0%);
    }
}

@media (min-width: 868px) {
    .hero2-box {
        clip-path: polygon(0% 90%, 26% 90%, 26% 100%, 100% 100%, 100% 0%, 0% 0%);
    }
}

@media (min-width: 968px) {
    .hero2-box {
        clip-path: polygon(0% 90%, 24% 90%, 24% 100%, 100% 100%, 100% 0%, 0% 0%);
    }
}

@media (min-width: 1024px) {
    .hero2-box {
        clip-path: polygon(0% 90%, 24% 90%, 24% 100%, 100% 100%, 100% 0%, 0% 0%);
    }
}

@media (min-width: 1124px) {
    .hero2-box {
        clip-path: polygon(0% 90%, 22% 90%, 22% 100%, 100% 100%, 100% 0%, 77% 0%, 75% 13%, 20% 13%, 18% 0%, 0% 0%);
    }
}

@media (min-width: 1224px) {
    .hero2-box {
        clip-path: polygon(0% 90%, 20% 90%, 20% 100%, 100% 100%, 100% 0%, 77% 0%, 75% 15%, 20% 15%, 18% 0%, 0% 0%);
    }
}

@media (min-width: 1280px) {
    .hero2-box {
        clip-path: polygon(0% 90%, 20% 90%, 20% 100%, 100% 100%, 100% 0%, 75% 0%, 73% 15%, 22% 15%, 20% 0%, 0% 0%);
    }
}

@media (min-width: 1400px) {
    .hero2-box {
        clip-path: polygon(0% 90%, 18% 90%, 18% 100%, 100% 100%, 100% 0%, 73% 0%, 71% 15%, 24% 15%, 22% 0%, 0% 0%);
    }
}

@media (min-width: 1500px) {
    .hero2-box {
        clip-path: polygon(0% 90%, 16% 90%, 16% 100%, 100% 100%, 100% 0%, 70% 0%, 68% 15%, 26% 15%, 24% 0%, 0% 0%);
    }
}

@media (min-width: 1600px) {
    .hero2-box {
        clip-path: polygon(0% 90%, 16% 90%, 16% 100%, 100% 100%, 100% 0%, 70% 0%, 68% 15%, 28% 15%, 26% 0%, 0% 0%);
    }
}

@media (min-width: 1700px) {
    .hero2-box {
        clip-path: polygon(0% 90%, 16% 90%, 16% 100%, 100% 100%, 100% 0%, 70% 0%, 68% 15%, 30% 15%, 28% 0%, 0% 0%);
    }
}
</style>