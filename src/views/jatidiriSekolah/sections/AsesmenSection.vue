<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import Image1 from '@/assets/vector/puzzle.png'
import Image2 from '@/assets/vector/stand.png'
import Image3 from '@/assets/vector/camera.png'
import Image4 from '@/assets/vector/job.png'
import Image5 from '@/assets/vector/idea.png'
import Image6 from '@/assets/vector/fly.png'
import { ref, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css';
import type { AssesmentItem } from '@/core/types/assesment';

const sectionRef = ref<HTMLElement | null>(null)
const isSectionVisible = ref(false)
// const baseUrl = import.meta.env.VITE_APP_IMG_URL;

// const getImageUrl = (imagePath: string | null) => {
//     if (!imagePath) return 'https://placehold.co/600x400';
//     return `${baseUrl}/facilities/${imagePath}`;
// };

defineProps<{
    assesment: AssesmentItem[];
}>();

const dummyData = [
    {
        title: "Jatidiri Sejati",
        description: "Test kepribadian untuk menemukan karakter, kekuatan, kelemahan, minat, potensi, serta pilihan karir kamu.",
        image: Image1,
        height: "149px"
    },
    {
        title: "Jatidiri Belajar",
        description: "Test insturmen untuk mengetahui gaya belajar kamu agar guru dapat membuat metode pembeljaran yang sesuai dan efektif",
        image: Image2,
        height: "444px"
    },
    {
        title: "Jatidiri Bakat",
        description: "Test yang dirancang untuk mengidentifikasi minat kamu terhadap berbagai jenis pekerjaan dan profesi kerja sebagai panduan karier",
        image: Image3,
        height: "444px"
    },
    {
        title: "Jatidiri Index Kebahagiaan",
        description: "Test yang dirancang untuk mengidentifikasi minat kamu terhadap berbagai jenis pekerjaan dan profesi kerja sebagai panduan karier",
        image: Image4,
        height: "149px"
    },
    {
        title: "Jatidiri Cerdas",
        description: "Test instrumen untuk mengetahui skor IQ kamu dengan cepat dan akurat, memberikan gambaran jelas tentang kemampuan kognitifmu.",
        image: Image5,
        height: "149px"
    },
    {
        title: "Jatidiri Kendali",
        description: "Test untuk mengukur tingkat ketergantungan kamu pada internet, serta memberikan saran untuk memperbaiki kebiasaan online",
        image: Image6,
        height: "444px"
    }
]

let observer: IntersectionObserver | null = null

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isSectionVisible.value = true
                    observer?.unobserve(entry.target)
                }
            })
        },
        { threshold: 0.1 }
    )

    if (sectionRef.value) {
        observer.observe(sectionRef.value)
    }
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>

<template>
    <div ref="sectionRef"
        class="py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[60px] lg:px-[120px] space-y-6 md:space-y-10 lg:space-y-16">
        <div
            class="w-full md:w-1/2 mx-auto flex flex-col justify-center items-center text-center gap-4 md:gap-5 lg:gap-6">
            <div class="bg-primary/10 w-fit py-2 px-5 rounded-full fade-up-animate"
                :class="{ 'animate-on-visible': isSectionVisible }">
                <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">Jatidiri Sekolah</h6>
            </div>
            <TitleSection :text="'Assessments Diagnostic '" :class="{ 'animate-on-visible': isSectionVisible }"
                class="fade-up-animate" style="animation-delay: 100ms"></TitleSection>

            <div class="space-y-4 md:space-y-6 lg:space-y-8 fade-up-animate"
                :class="{ 'animate-on-visible': isSectionVisible }" style="animation-delay: 200ms">
                <TextSection>Customers trust Chainex for secure automation and smart analytics. See how AI enhances
                    their blockchain experience
                </TextSection>
            </div>
        </div>

        <!-- Tablet & Dekstop -->
        <div class="w-full h-full md:h-[80vh] lg:h-full md:grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 hidden">
            <!-- div 1 -->
            <div class="w-full h-fit md:h-fit flex flex-col items-center gap-4">
                <div class="w-full h-fit md:h-[40%] bg-gradient-to-b from-[#8352E8]/75 via-[#8352E8]/50 to-[#8352E8]/25 flex flex-col md:justify-between gap-4 p-2 md:p-4 relative rounded-[4px] md:rounded-[8px] lg:rounded-[16px] fade-up-animate"
                    :class="{ 'animate-on-visible': isSectionVisible }" style="animation-delay: 300ms">
                    <div class="w-full h-[149px] relative">
                        <img :src="Image1" alt=""
                            class="w-full h-full object-contain mx-auto hover:-translate-y-2 transition duration-500">
                        <div
                            class="absolute bottom-0 w-1/2 left-1/2 -translate-x-1/2 h-[80%] bg-gradient-to-t from-[#BCA9F3] via-[#BCA9F3]/20 to-transparent">
                        </div>
                    </div>

                    <div class="w-full h-fit space-y-2">
                        <TextBody class="font-sora text-white" weight-text="font-semibold">{{ dummyData[0]?.title }}</TextBody>
                        <p class="text-[8px] md:text-[10px] lg:text-[12px] text-white"><span v-html="dummyData[0]?.description"></span></p>
                    </div>
                </div>
                <div class="w-full h-fit md:h-[60%] bg-gradient-to-b from-[#8352E8]/75 via-[#8352E8]/50 to-[#8352E8]/25 flex flex-col gap-4 p-2 md:p-4 relative rounded-[4px] md:rounded-[8px] lg:rounded-[16px] fade-up-animate"
                    :class="{ 'animate-on-visible': isSectionVisible }" style="animation-delay: 400ms">
                    <div class="w-full h-fit space-y-2">
                        <TextBody class="font-sora text-white" weight-text="font-semibold">{{ dummyData[1]?.title }}</TextBody>
                        <p class="text-[8px] md:text-[10px] lg:text-[12px] text-white"><span v-html="dummyData[1]?.description"></span></p>
                    </div>
                    <div class="w-full h-[444px]">
                        <img :src="Image2" alt=""
                            class="w-fit h-full mx-auto object-contain hover:-translate-y-2 transition duration-500">
                    </div>
                </div>
            </div>

            <!-- div 2 -->
            <div class="w-full h-fit md:h-fit flex flex-col items-center gap-4">
                <div class="w-full h-fit md:h-[60%] bg-gradient-to-b from-[#8352E8]/75 via-[#8352E8]/50 to-[#8352E8]/25 flex flex-col md:justify-between gap-4 p-2 md:p-4 relative rounded-[4px] md:rounded-[8px] lg:rounded-[16px] fade-up-animate"
                    :class="{ 'animate-on-visible': isSectionVisible }" style="animation-delay: 500ms">
                    <div class="w-full h-[444px]">
                        <img :src="Image3" alt=""
                            class="w-full h-full object-contain mx-auto hover:-translate-y-2 transition duration-500">
                    </div>

                    <div class="w-full h-fit space-y-2">
                        <TextBody class="font-sora text-white" weight-text="font-semibold">{{ dummyData[2]?.title }}</TextBody>
                        <p class="text-[8px] md:text-[10px] lg:text-[12px] text-white"><span v-html="dummyData[2]?.description"></span></p>
                    </div>
                </div>
                <div class="w-full h-fit md:h-[40%] bg-gradient-to-b from-[#8352E8]/75 via-[#8352E8]/50 to-[#8352E8]/25 flex flex-col gap-4 p-2 md:p-4 relative rounded-[4px] md:rounded-[8px] lg:rounded-[16px] fade-up-animate"
                    :class="{ 'animate-on-visible': isSectionVisible }" style="animation-delay: 600ms">
                    <div class="w-full h-fit space-y-2">
                        <TextBody class="font-sora text-white" weight-text="font-semibold">{{ dummyData[3]?.title }}
                        </TextBody>
                        <p class="text-[8px] md:text-[10px] lg:text-[12px] text-white"><span v-html="dummyData[3]?.description"></span></p>
                    </div>
                    <div class="w-full h-[149px] relative">
                        <img :src="Image4" alt=""
                            class="w-fit h-full mx-auto object-contain hover:-translate-y-2 transition duration-500">
                    </div>
                </div>
            </div>

            <!-- div 3 -->
            <div class="w-full h-fit md:h-fit flex flex-col items-center gap-4">
                <div class="w-full h-fit md:h-[40%] bg-gradient-to-b from-[#8352E8]/75 via-[#8352E8]/50 to-[#8352E8]/25 flex flex-col md:justify-between gap-4 p-2 md:p-4 relative rounded-[4px] md:rounded-[8px] lg:rounded-[16px] fade-up-animate"
                    :class="{ 'animate-on-visible': isSectionVisible }" style="animation-delay: 700ms">
                    <div class="w-full h-[149px] relative">
                        <img :src="Image5" alt=""
                            class="w-full h-full object-contain mx-auto hover:-translate-y-2 transition duration-500">
                        <div
                            class="absolute bottom-0 w-1/2 left-1/2 -translate-x-1/2 h-[40%] bg-gradient-to-t from-[#BCA9F3] via-[#BCA9F3]/20 to-transparent">
                        </div>
                    </div>

                    <div class="w-full h-fit space-y-2">
                        <TextBody class="font-sora text-white" weight-text="font-semibold">{{ dummyData[4]?.title }}</TextBody>
                        <p class="text-[8px] md:text-[10px] lg:text-[12px] text-white"><span v-html="dummyData[4]?.description"></span></p>
                    </div>
                </div>
                <div class="w-full h-fit md:h-[60%] bg-gradient-to-b from-[#8352E8]/75 via-[#8352E8]/50 to-[#8352E8]/25 flex flex-col gap-4 p-2 md:p-4 relative rounded-[4px] md:rounded-[8px] lg:rounded-[16px] fade-up-animate"
                    :class="{ 'animate-on-visible': isSectionVisible }" style="animation-delay: 800ms">
                    <div class="w-full h-fit space-y-2">
                        <TextBody class="font-sora text-white" weight-text="font-semibold">{{ dummyData[5]?.title }}</TextBody>
                        <p class="text-[8px] md:text-[10px] lg:text-[12px] text-white"><span v-html="dummyData[5]?.description"></span>
                        </p>
                    </div>
                    <div class="w-full h-[444px]">
                        <img :src="Image6" alt=""
                            class="w-fit h-full mx-auto object-contain hover:-translate-y-2 transition duration-500">
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <div class="pb-6 md:hidden">
            <div class="">
                <swiper class="w-full" :slides-per-view="1.2" :space-between="16" :centered-slides="false"
                    :grab-cursor="true" :watch-slides-progress="true">
                    <swiper-slide v-for="(assesment, index) in dummyData" :key="index">
                        <div class="w-full h-fit md:h-[40%] bg-gradient-to-b from-[#8352E8]/75 via-[#8352E8]/50 to-[#8352E8]/25 flex flex-col md:justify-between gap-4 p-2 md:p-4 relative rounded-[8px] fade-up-animate"
                            :class="{ 'animate-on-visible': isSectionVisible }" style="animation-delay: 300ms">
                            <div class="w-full h-[149px] relative">
                                <img :src="assesment.image" alt=""
                                    class="w-full h-full object-contain mx-auto hover:-translate-y-2 transition duration-500">
                            </div>

                            <div class="w-full h-fit space-y-2">
                                <TextBody class="font-sora text-white" weight-text="font-semibold">{{ assesment.title }}
                                </TextBody>
                                <p class="text-[8px] md:text-[10px] lg:text-[12px] text-white"><span v-html="assesment.description"></span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

.fade-up-animate {
    opacity: 0;
}

.fade-up-animate.animate-on-visible {
    animation: fadeInUp 0.6s ease-out forwards;
}
.swiper-slide {
    height: auto;
    visibility: visible !important;
    opacity: 1 !important;
}

.swiper-slide-prev,
.swiper-slide-next {
    opacity: 0.7;
    transform: scale(0.95);
    transition: all 0.3s ease;
}

.swiper-slide-active {
    opacity: 1;
    transform: scale(1);
}
</style>