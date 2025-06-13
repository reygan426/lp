<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import Image1 from '@/assets/vector/1.png'
import Image2 from '@/assets/vector/2.png'
import Image3 from '@/assets/vector/3.png'
import Image4 from '@/assets/vector/4.png'
import Image5 from '@/assets/vector/5.png'
import Image6 from '@/assets/vector/6.png'
import Image7 from '@/assets/vector/7.png'
import Image8 from '@/assets/vector/8.png'
import Arrow from "@/assets/icon/arrow.svg"
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
        title: "Jatidiri",
        description: "Test kepribadian untuk menemukan karakter, kekuatan, kelemahan, minat, potensi, serta pilihan karir kamu.",
        image: Image1,
        color: '#C3C9F8'
    },
    {
        title: "Jatidiri Kendali",
        description: "Test untuk mengukur tingkat ketergantungan kamu pada internet, serta memberikan saran untuk memperbaiki kebiasaan online",
        image: Image2,
        color: '#6B6BFA'
    },
    {
        title: "Jatidiri Sejati",
        description: "Test kepribadian untuk menemukan karakter, kekuatan, kelemahan, minat, potensi, serta pilihan karir kamu.",
        image: Image3,
        color: '#FFFFFF'
    },
    {
        title: "Jatidiri Bakat",
        description: "Test yang dirancang untuk mengidentifikasi minat kamu terhadap berbagai jenis pekerjaan dan profesi kerja sebagai panduan karier",
        image: Image4,
        color: '#6767FA'
    },
    {
        title: "Jatidiri Index Kebahagiaan",
        description: "Test yang dirancang untuk mengidentifikasi minat kamu terhadap berbagai jenis pekerjaan dan profesi kerja sebagai panduan karier",
        image: Image5,
        color: '#FFFFFF'
    },
    {
        title: "Jatidiri Coloured Progressive Matrices",
        description: "Test kepribadian untuk menemukan karakter, kekuatan, kelemahan, minat, potensi, serta pilihan karir kamu.",
        image: Image6,
        color: '#FFFFFF'
    },
    {
        title: "Jatidiri Cerdas",
        description: "Test instrumen untuk mengetahui skor IQ kamu dengan cepat dan akurat, memberikan gambaran jelas tentang kemampuan kognitifmu.",
        image: Image7,
        color: '#6464FA'
    },
    {
        title: "Jatidiri Belajar",
        description: "Test insturmen untuk mengetahui gaya belajar kamu agar guru dapat membuat metode pembeljaran yang sesuai dan efektif",
        image: Image8,
        color: '#6767FA'
    },
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
                <TextSection>Jalani tujuh tahap penilaian untuk menemukan blueprint kepribadian dan potensi Anda
                </TextSection>
            </div>
        </div>

        <!-- Dekstop -->
        <div class="lg:grid grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full hidden">
            <div class="grid grid-cols-3 gap-4 md:gap-5 lg:gap-6 col-span-2">
                <div class="w-full h-[35vh] relative rounded-[16px] bg-[#C3CAF8] overflow-hidden col-span-2 group">
                    <div><img :src="dummyData[0].image" alt="" class="w-full h-[30vh] object-contain"></div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent rounded-[16px] z-2">
                    </div>
                    <div class="absolute bottom-4 left-4 right-4 space-y-2 text-white z-3">
                        <h5 class="text-[14px] md:text-[16px] lg:text-[18px] font-bold">{{ dummyData[0].title }}</h5>
                        <p class="text-[12px] md:text-[14px] lg:text-[14px]">{{ dummyData[0].description }}</p>
                    </div>

                    <router-link to="/assesment"
                        class="absolute inset-0 z-5 group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-500">
                        <div class="w-full h-full flex justify-center items-center">
                            <div
                                class="w-fit h-fit flex justify-center items-center transition-all duration-500 group-hover:bg-white p-4 rounded-full opacity-0 group-hover:opacity-100">
                                <div class="rounded-full overflow-hidden relative">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0',
                                        'filter brightness-0 invert-[0.4]',
                                        'filter brightness-0 invert-[0.4]']">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 absolute top-0 left-0 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100',
                                        '',
                                        '']">
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class="w-full h-[35vh] relative rounded-[16px] bg-[#6C6CFA] overflow-hidden group">
                    <div><img :src="dummyData[1].image" alt="" class="w-full h-[30vh] object-contain"></div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent rounded-[16px] z-2">
                    </div>
                    <div class="absolute bottom-4 left-4 right-4 space-y-2 text-white z-3">
                        <h5 class="text-[14px] md:text-[16px] lg:text-[18px] font-bold">{{ dummyData[1].title }}</h5>
                        <p class="text-[12px] md:text-[14px] lg:text-[14px]">{{ dummyData[1].description }}</p>
                    </div>

                    <router-link to="/assesment"
                        class="absolute inset-0 z-5 group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-500">
                        <div class="w-full h-full flex justify-center items-center">
                            <div
                                class="w-fit h-fit flex justify-center items-center transition-all duration-500 group-hover:bg-white p-4 rounded-full opacity-0 group-hover:opacity-100">
                                <div class="rounded-full overflow-hidden relative">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0',
                                        'filter brightness-0 invert-[0.4]',
                                        'filter brightness-0 invert-[0.4]']">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 absolute top-0 left-0 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100',
                                        '',
                                        '']">
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class="w-full h-[35vh] relative rounded-[16px] bg-[#7D7FF9] overflow-hidden group">
                    <div><img :src="dummyData[3].image" alt="" class="w-full h-[30vh] object-contain"></div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent rounded-[16px] z-2">
                    </div>
                    <div class="absolute bottom-4 left-4 right-4 space-y-2 text-white z-3">
                        <h5 class="text-[14px] md:text-[16px] lg:text-[18px] font-bold">{{ dummyData[3].title }}</h5>
                        <p class="text-[12px] md:text-[14px] lg:text-[14px]">{{ dummyData[3].description }}</p>
                    </div>

                    <router-link to="/assesment"
                        class="absolute inset-0 z-5 group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-500">
                        <div class="w-full h-full flex justify-center items-center">
                            <div
                                class="w-fit h-fit flex justify-center items-center transition-all duration-500 group-hover:bg-white p-4 rounded-full opacity-0 group-hover:opacity-100">
                                <div class="rounded-full overflow-hidden relative">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0',
                                        'filter brightness-0 invert-[0.4]',
                                        'filter brightness-0 invert-[0.4]']">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 absolute top-0 left-0 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100',
                                        '',
                                        '']">
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class="w-full h-[35vh] relative rounded-[16px] bg-[#FFFFFF] overflow-hidden col-span-2 group">
                    <div><img :src="dummyData[4].image" alt="" class="w-full h-[30vh] object-contain"></div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent rounded-[16px] z-2">
                    </div>
                    <div class="absolute bottom-4 left-4 right-4 space-y-2 text-white z-3">
                        <h5 class="text-[14px] md:text-[16px] lg:text-[18px] font-bold">{{ dummyData[4].title }}</h5>
                        <p class="text-[12px] md:text-[14px] lg:text-[14px]">{{ dummyData[4].description }}</p>
                    </div>

                    <router-link to="/assesment"
                        class="absolute inset-0 z-5 group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-500">
                        <div class="w-full h-full flex justify-center items-center">
                            <div
                                class="w-fit h-fit flex justify-center items-center transition-all duration-500 group-hover:bg-white p-4 rounded-full opacity-0 group-hover:opacity-100">
                                <div class="rounded-full overflow-hidden relative">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0',
                                        'filter brightness-0 invert-[0.4]',
                                        'filter brightness-0 invert-[0.4]']">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 absolute top-0 left-0 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100',
                                        '',
                                        '']">
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class="w-full h-[35vh] relative rounded-[16px] bg-[#FFFFFF] overflow-hidden col-span-2 group">
                    <div><img :src="dummyData[5].image" alt="" class="w-full h-[30vh] object-contain"></div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent rounded-[16px] z-2">
                    </div>
                    <div class="absolute bottom-4 left-4 right-4 space-y-2 text-white z-3">
                        <h5 class="text-[14px] md:text-[16px] lg:text-[18px] font-bold">{{ dummyData[5].title }}</h5>
                        <p class="text-[12px] md:text-[14px] lg:text-[14px]">{{ dummyData[5].description }}</p>
                    </div>

                    <router-link to="/assesment"
                        class="absolute inset-0 z-5 group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-500">
                        <div class="w-full h-full flex justify-center items-center">
                            <div
                                class="w-fit h-fit flex justify-center items-center transition-all duration-500 group-hover:bg-white p-4 rounded-full opacity-0 group-hover:opacity-100">
                                <div class="rounded-full overflow-hidden relative">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0',
                                        'filter brightness-0 invert-[0.4]',
                                        'filter brightness-0 invert-[0.4]']">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 absolute top-0 left-0 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100',
                                        '',
                                        '']">
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>


                <div class="w-full h-[35vh] relative rounded-[16px] bg-[#7D7FF9] overflow-hidden group">
                    <div><img :src="dummyData[6].image" alt="" class="w-full h-[30vh] object-contain"></div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent rounded-[16px] z-2">
                    </div>
                    <div class="absolute bottom-4 left-4 right-4 space-y-2 text-white z-3">
                        <h5 class="text-[14px] md:text-[16px] lg:text-[18px] font-bold">{{ dummyData[6].title }}</h5>
                        <p class="text-[12px] md:text-[14px] lg:text-[14px]">{{ dummyData[6].description }}</p>
                    </div>

                    <router-link to="/assesment"
                        class="absolute inset-0 z-5 group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-500">
                        <div class="w-full h-full flex justify-center items-center">
                            <div
                                class="w-fit h-fit flex justify-center items-center transition-all duration-500 group-hover:bg-white p-4 rounded-full opacity-0 group-hover:opacity-100">
                                <div class="rounded-full overflow-hidden relative">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0',
                                        'filter brightness-0 invert-[0.4]',
                                        'filter brightness-0 invert-[0.4]']">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 absolute top-0 left-0 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100',
                                        '',
                                        '']">
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-4 md:gap-5 lg:gap-6">
                <div class="w-full h-full relative rounded-[16px] overflow-hidden group">
                    <div><img :src="dummyData[2].image" alt="" class="w-full h-[30vh] object-contain"></div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent rounded-[16px] z-2">
                    </div>
                    <div class="absolute bottom-4 left-4 right-4 space-y-2 text-white z-3">
                        <h5 class="text-[14px] md:text-[16px] lg:text-[18px] font-bold">{{ dummyData[2].title }}</h5>
                        <p class="text-[12px] md:text-[14px] lg:text-[14px]">{{ dummyData[2].description }}</p>
                    </div>

                    <router-link to="/assesment"
                        class="absolute inset-0 z-5 group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-500">
                        <div class="w-full h-full flex justify-center items-center">
                            <div
                                class="w-fit h-fit flex justify-center items-center transition-all duration-500 group-hover:bg-white p-4 rounded-full opacity-0 group-hover:opacity-100">
                                <div class="rounded-full overflow-hidden relative">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0',
                                        'filter brightness-0 invert-[0.4]',
                                        'filter brightness-0 invert-[0.4]']">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 absolute top-0 left-0 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100',
                                        '',
                                        '']">
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <div class="w-full h-full relative rounded-[16px] overflow-hidden group">
                    <div><img :src="dummyData[7].image" alt="" class="w-full h-[30vh] object-contain"></div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent rounded-[16px] z-2">
                    </div>
                    <div class="absolute bottom-4 left-4 right-4 space-y-2 text-white z-3">
                        <h5 class="text-[14px] md:text-[16px] lg:text-[18px] font-bold">{{ dummyData[7].title }}</h5>
                        <p class="text-[12px] md:text-[14px] lg:text-[14px]">{{ dummyData[7].description }}</p>
                    </div>

                    <router-link to="/assesment"
                        class="absolute inset-0 z-5 group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-500">
                        <div class="w-full h-full flex justify-center items-center">
                            <div
                                class="w-fit h-fit flex justify-center items-center transition-all duration-500 group-hover:bg-white p-4 rounded-full opacity-0 group-hover:opacity-100">
                                <div class="rounded-full overflow-hidden relative">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0',
                                        'filter brightness-0 invert-[0.4]',
                                        'filter brightness-0 invert-[0.4]']">
                                    <img :src="Arrow" alt="" :class="['w-6 h-6 absolute top-0 left-0 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100',
                                        '',
                                        '']">
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- Mobile & Tablet -->
        <div class="pb-6 lg:hidden">
            <div class="">
                <swiper class="w-full" :slides-per-view="1.2" :space-between="16" :centered-slides="false"
                    :grab-cursor="true" :watch-slides-progress="true">
                    <swiper-slide v-for="(assesment, index) in dummyData" :key="index">
                        <div class="w-full h-fit md:h-[40%] flex flex-col md:justify-between gap-4 p-2 md:p-4 relative rounded-[16px] fade-up-animate group"
                            :class="{ 'animate-on-visible': isSectionVisible }"
                            style="animation-delay: 300ms"
                            :style="{ backgroundColor: assesment.color }">
                            <div class="w-full h-[149px] relative">
                                <img :src="assesment.image" alt=""
                                    class="w-full h-full object-contain mx-auto hover:-translate-y-2 transition duration-500">
                            </div>

                            <div
                                class="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent rounded-[16px] z-2">
                            </div>

                            <div class="w-full h-fit space-y-2 relative z-3 p-2">
                                <p class="text-[14px] md:text-[14px] font-sora text-white font-bold"
                                    weight-text="font-semibold">{{ assesment.title }}
                                </p>
                                <p class="text-[12px] md:text-[14px] lg:text-[18px] text-white"><span
                                        v-html="assesment.description"></span>
                                </p>
                            </div>

                            <router-link to="/assesment"
                                class="absolute inset-0 z-5 group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-500 rounded-[16px]">
                                <div class="w-full h-full flex justify-center items-center">
                                    <div
                                        class="w-fit h-fit flex justify-center items-center transition-all duration-500 group-hover:bg-white p-4 rounded-full opacity-0 group-hover:opacity-100">
                                        <div class="rounded-full overflow-hidden relative">
                                            <img :src="Arrow" alt="" :class="['w-6 h-6 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0',
                                                'filter brightness-0 invert-[0.4]',
                                                'filter brightness-0 invert-[0.4]']">
                                            <img :src="Arrow" alt="" :class="['w-6 h-6 absolute top-0 left-0 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100',
                                                '',
                                                '']">
                                        </div>
                                    </div>
                                </div>
                            </router-link>
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