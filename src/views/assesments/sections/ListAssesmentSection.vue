<script setup lang="ts">
import Arrow from "@/assets/icon/arrow.svg"
import ButtonSection from "@/components/ButtonSection.vue";
import TitleSection from "@/components/TitleSection.vue";
import type { AssesmentItem } from "@/core/types/assesment";
import { useBenefitState } from "@/stores/benefit";
import { onMounted, onUnmounted, ref } from "vue";

const benefitStore = useBenefitState();

// Animation states
const sectionRef = ref<HTMLElement | null>(null)
const isSectionVisible = ref(false)
const animationKey = ref(0)

let observer: IntersectionObserver | null = null

onMounted(async () => {
    await benefitStore.fetchBenefit();
    
    // Initialize Intersection Observer for animations
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isSectionVisible.value = true
                    triggerAnimation()
                    observer?.unobserve(entry.target)
                }
            })
        },
        { threshold: 0.1 }
    )

    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})

function triggerAnimation() {
    animationKey.value++
}

defineProps<{
    assesments: AssesmentItem[];
}>();

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) return 'https://placehold.co/600x400';
    return `${baseUrl}/benefits/${imagePath}`;
};
</script>

<template>
    <section ref="sectionRef"
        class="py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[60px] lg:px-[100px] flex flex-col-reverse md:flex-row md:justify-start md:items-start lg:justify-start lg:items-start gap-4 md:gap-5 lg:gap-6">
        <!-- Left Side - Assessments -->
        <div
            class="w-full md:w-1/2 lg:w-[30%] h-fit flex flex-col justify-center items-center md:sticky md:top-10 lg:top-40 animate-element"
            :class="{ 'animate-on-visible': isSectionVisible }"
            :style="{ 'animation-delay': '0ms' }">
            <h4 class="text-[16px] md:text-[24px] lg:text-[28px] font-bold">Assessments</h4>
            <div class="w-full side-container">
                <div class="w-full bg-[#E6EFF7] px-10 py-4 md:py-8 side-box -mt-2 h-full">
                    <div v-for="(item, index) in assesments" :key="index"
                        class="py-3 flex justify-between items-center group cursor-pointer animate-element"
                        :class="{ 'animate-on-visible': isSectionVisible }"
                        :style="{ 'animation-delay': `${(index + 1) * 100}ms` }">
                        <div class="flex gap-4 items-center">
                            <div
                                class="w-1 h-1 p-1 border-[4px] border-[#8E8E8E] transition-all duration-500 group-hover:border-primary rounded-full">
                            </div>
                            <h6
                                class="text-[#8E8E8E] transition-all duration-500 group-hover:text-primary group-hover:font-bold text-[14px] md:text-[16px] lg:text-[18px]">
                                {{ item.title }}</h6>
                        </div>
                        <div
                            class="flex items-center transition-all duration-500 group-hover:bg-primary p-4 rounded-full">
                            <div class="rounded-full overflow-hidden relative">
                                <img :src="Arrow" alt="" :class="['w-6 h-6 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0',
                                    'filter brightness-0 invert-[0.4]',
                                    'filter brightness-0 invert-[0.4]']">
                                <img :src="Arrow" alt="" :class="['w-6 h-6 absolute top-0 left-0 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100',
                                    'filter brightness-0 invert',
                                    'filter brightness-0 invert']">
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>
        </div>

        <!-- Right Side - Benefits -->
        <div class="w-full md:w-1/2 lg:w-[75%] space-y-4 md:space-y-6 lg:space-y-6">
            <!-- Header Section -->
            <div class="space-y-2 md:space-y-4 hidden lg:block animate-element"
                :class="{ 'animate-on-visible': isSectionVisible }"
                :style="{ 'animation-delay': '200ms' }">
                <h6 class="lg:text-[18px] text-primary">Be ready to embrace the future of artificial intelligence</h6>
                <div class="w-full flex justify-between items-end">
                    <TitleSection class="max-w-[80%] lg:max-w-[70%]" text="Manfaat Mengikuti Tes Jatidiri Bakat" />
                    <ButtonSection>Check Now</ButtonSection>
                </div>
            </div>

            <!-- Tablet & Desktop -->
            <div class="md:grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 hidden" :key="animationKey">
                <div v-for="(item, index) in benefitStore.benefits" :key="index" 
                    class="side-container animate-element"
                    :class="{ 'animate-on-visible': isSectionVisible }"
                    :style="{ 'animation-delay': `${(index + 3) * 150}ms` }">
                    <div class="w-full bg-[#CBCBFD] relative h-[30vh] md:h-[30vh] lg:h-[40vh] content-box">
                        <div class="absolute inset-0 z-2">
                            <img :src="getImageUrl(item.image)" alt="" class="w-full h-full object-contain">
                        </div>
                        <div class="absolute bottom-1/4 left-4 right-4 z-10 font-black space-y-2">
                            <h6 class="text-[12px] md:text-[14px] lg:text-[16px] font-bold">{{ item.title }}</h6>
                            <p class="text-[10px] md:text-[12px] lg:text-[14px] font-light line-clamp-4"><span v-html="item.description"></span>
                            </p>
                        </div>
                        <div
                            class="absolute w-full bottom-0 h-2/3 bg-gradient-to-t from-primary via-white/20 to-transparent backdrop-blur-sm z-3 content-box" 
                            style="mask-image: linear-gradient(to top, black, transparent); -webkit-mask-image: linear-gradient(to top, black, transparent);">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile -->
            <div class="w-full block md:hidden">
                <div v-for="(item, index) in benefitStore.benefits" :key="index" class="sticky flex flex-col"
                    :style="{ top: `${20 + (index * 2)}px` }" :class="index == 0 ? 'pt-0' : 'pt-4'">
                    <div class="sticky top-4 z-50 mb-4 side-container">
                        <div class="w-full bg-[#CBCBFD] relative h-[30vh] md:h-[30vh] lg:h-[40vh] content-box">
                            <div class="absolute inset-0 z-2">
                                <img :src="getImageUrl(item.image)" alt="" class="w-full h-full object-contain">
                            </div>
                            <div class="absolute bottom-1/4 left-4 right-4 z-10 font-black space-y-2">
                                <h6 class="text-[12px] md:text-[14px] lg:text-[16px] font-bold">{{ item.title }}</h6>
                                <p class="text-[10px] md:text-[12px] lg:text-[14px] font-light line-clamp-4"><span
                                        v-html="item.description"></span></p>
                            </div>
                            <div
                                class="absolute w-full bottom-0 h-2/3 bg-gradient-to-t from-primary via-white/20 to-transparent backdrop-blur-sm z-3"
                                style="mask-image: linear-gradient(to top, black, transparent); -webkit-mask-image: linear-gradient(to top, black, transparent);">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.side-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.side-box {
    clip-path: polygon(24% 0%, 24% 6%, 74% 6%, 74% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
}

.content-box {
    clip-path: polygon(100% 0%, 100% 20%, 90% 20%, 90% 45%, 100% 45%, 100% 85%, 70% 85%, 70% 100%, 0% 100%, 0% 0%);
}

/* Animation Styles */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-element {
  opacity: 0;
}

.animate-element.animate-on-visible {
  animation: fadeInUp 0.6s ease-out forwards;
}

@media (min-width: 320px) {
    .side-box {
        clip-path: polygon(24% 0%, 24% 6%, 74% 6%, 74% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }

    .content-box {
        clip-path: polygon(100% 0%, 100% 20%, 90% 20%, 90% 45%, 100% 45%, 100% 85%, 70% 85%, 70% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 360px) {
    .side-box {
        clip-path: polygon(24% 0%, 24% 6%, 74% 6%, 74% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }

    .content-box {
        clip-path: polygon(100% 0%, 100% 20%, 92% 20%, 92% 50%, 100% 50%, 100% 85%, 75% 85%, 75% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 440px) {
    .side-box {
        clip-path: polygon(34% 0%, 34% 6%, 64% 6%, 64% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 460px) {}

@media (min-width: 560px) {}

@media (min-width: 680px) {}

@media (min-width: 768px) {
    .side-box {
        clip-path: polygon(24% 0%, 24% 6%, 74% 6%, 74% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }

    .content-box {
        clip-path: polygon(100% 0%, 100% 20%, 90% 20%, 90% 45%, 100% 45%, 100% 85%, 70% 85%, 70% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 868px) {}

@media (min-width: 968px) {}

@media (min-width: 1024px) {
    .side-box {
        clip-path: polygon(14% 0%, 14% 6%, 84% 6%, 84% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }

    .content-box {
        clip-path: polygon(100% 0%, 100% 20%, 86% 20%, 86% 45%, 100% 45%, 100% 85%, 70% 85%, 70% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1124px) {}

@media (min-width: 1224px) {}

@media (min-width: 1280px) {}

@media (min-width: 1400px) {
    .side-box {
        clip-path: polygon(24% 0%, 24% 6%, 74% 6%, 74% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }

    .content-box {
        clip-path: polygon(100% 0%, 100% 20%, 90% 20%, 90% 45%, 100% 45%, 100% 85%, 70% 85%, 70% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1500px) {}

@media (min-width: 1600px) {}

@media (min-width: 1700px) {}
</style>