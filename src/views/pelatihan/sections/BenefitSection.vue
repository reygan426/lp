<script setup lang="ts">
import ButtonSection from '@/components/ButtonSection.vue';
import TextBody from '@/components/TextBody.vue';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css';

const benefit = [
    {
        title: 'Pendekatan Proaktif & Preventif',
        description: 'Mampu mendeteksi masalah lebih dini, mencegah eskalasi, dan membangun strategi pencegahan',
        icon: ''
    },
    {
        title: 'Relevansi dengan Kebutuhan Masa Kini',
        description: 'Konseling yang lebih menyentuh persoalan aktual masyarakat modern',
        icon: ''
    },
    {
        title: 'Keterampilan Praktis & Aplikatif',
        description: 'Langsung bisa diterapkan untuk kasus-kasus nyata dalam praktik',
        icon: ''
    },
    {
        title: 'Dukungan Profesional Berkelanjutan',
        description: 'Menjadi bagian dari komunitas pembelajar, bertukar pengalaman, dan membangun jejaring',
        icon: ''
    },
]
</script>

<template>
    <div class="w-full h-full md:bg-white py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[80px] lg:px-[120px]">
        <!-- Tablet & Dekstop -->
        <div
            class="w-full bg-primary rounded-[8px] md:rounded-[16px] lg:rounded-[24px] md:px-12 lg:px-20 hidden md:flex justify-between gap-8 md:pt-[74px] lg:pt-[88px]">
            <div class="w-full md:w-[40%] h-full md:space-y-12 lg:space-y-16">
                <div class="md:space-y-4 lg:space-y-9">
                    <div class="space-y-2">
                        <TextBody class="text-white">BENEFIT</TextBody>
                        <h2 class="text-[24px] md:text-[36px] lg:text-[44px] text-white font-bold leading-snug">
                            Transformasi
                            Praktik Konseling yang Akan Anda Dapatkan?</h2>
                    </div>
                    <ButtonSection bg-color="bg-white" bg-hover="bg-secondary" text-color="text-primary"
                        text-hover="text-white" border-color="border-primary" arrow-color="primary" arrow-hover="white">
                        Know More</ButtonSection>
                </div>

                <div class="w-full h-full md:!h-[45vh]">
                    <img src="https://campuspedia.id/news/wp-content/uploads/2023/09/a7727024091392c975b62f1d8b32bc16-564x375.jpg"
                        alt="" class="w-full h-full object-cover rounded-t-[4px] md:rounded-t-[8px] lg:rounded-t-[16px]">
                </div>
            </div>

            <div class="w-full md:w-[60%] grid grid-cols-2 md:space-x-3 lg:space-x-5">
                <div class="md:space-y-3 lg:space-y-5">
                    <div
                        class="p-6 bg-white flex flex-col justify-start items-start gap-4 bg-white/80 hover:bg-white hover:scale-105 transition-all duration-500 rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
                        <h6 class="text-[20px] lg:text-[24px] font-bold">Pendekatan Proaktif & Preventif</h6>
                        <div class="p-4 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] bg-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="md:w-10 md:h-10 lg:w-14 lg:h-14" fill="none"
                                viewBox="0 0 24 24" stroke="#ffffff">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <TextBody>Mampu mendeteksi masalah lebih dini, mencegah eskalasi, dan membangun strategi
                            pencegahan</TextBody>
                    </div>
                    <div
                        class="p-6 bg-white flex flex-col justify-start items-start gap-4 bg-white/80 hover:bg-white hover:scale-105 transition-all duration-500 rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
                        <h6 class="text-[20px] lg:text-[24px] font-bold">Relevansi dengan Kebutuhan Masa Kini</h6>
                        <div class="p-4 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] bg-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="md:w-10 md:h-10 lg:w-14 lg:h-14" fill="none"
                                viewBox="0 0 24 24" stroke="#ffffff">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <TextBody>Konseling yang lebih menyentuh persoalan aktual masyarakat modern</TextBody>
                    </div>
                    <div class="h-20"></div>
                </div>

                <div class="md:space-y-3 lg:space-y-5">
                    <div class="h-20"></div>
                    <div
                        class="p-6 bg-white flex flex-col justify-start items-start gap-4 bg-white/80 hover:bg-white hover:scale-105 transition-all duration-500 rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
                        <h6 class="text-[20px] lg:text-[24px] font-bold">Keterampilan Praktis & Aplikatif</h6>
                        <div class="p-4 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] bg-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="md:w-10 md:h-10 lg:w-14 lg:h-14" fill="none"
                                viewBox="0 0 24 24" stroke="#ffffff">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <TextBody>Langsung bisa diterapkan untuk kasus-kasus nyata dalam praktik</TextBody>
                    </div>
                    <div
                        class="p-6 bg-white flex flex-col justify-start items-start gap-4 bg-white/80 hover:bg-white hover:scale-105 transition-all duration-500 rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
                        <h6 class="text-[20px] lg:text-[24px] font-bold">Dukungan Profesional Berkelanjutan</h6>
                        <div class="p-4 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] bg-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="md:w-10 md:h-10 lg:w-14 lg:h-14" fill="none"
                                viewBox="0 0 24 24" stroke="#ffffff">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <TextBody>Menjadi bagian dari komunitas pembelajar, bertukar pengalaman, dan membangun jejaring
                        </TextBody>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <div class="md:hidden space-y-12">
            <div class="w-full flex justify-between items-center">
                <h3 class="text-[24px] md:text-[48px] lg:text-[60px] leading-tight text-left max-w-[70%] font-bold">
                    Transforamsi Praktik
                    Konseling yang Akan Anda Dapatkan?</h3>
                <p class="text-[14px] md:text-[16px] lg:text-[20px] font-sora">Benefit</p>
            </div>

            <swiper class="w-full" :slides-per-view="1.2" :space-between="16" :centered-slides="false"
                :grab-cursor="true" :watch-slides-progress="true">
                <swiper-slide v-for="(benefit, index) in benefit" :key="index">
                    <div
                        class="p-6 bg-white flex flex-col justify-start items-start gap-4  rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
                        <h6 class="text-[20px] lg:text-[24px] font-bold">{{ benefit.title }}</h6>
                        <div class="p-2 md:p-4 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] bg-primary">
                            <img src="https://placehold.co/600x400" alt=""
                                class="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 object-cover">
                        </div>
                        <p class="text-[12px] md:text-[12px] lg:text-[16px]">{{ benefit.description }}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style scoped>
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