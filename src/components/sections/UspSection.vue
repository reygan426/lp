<script setup lang="ts">
import ButtonSection from '../ButtonSection.vue';
import TextSection from '../TextSection.vue';
import TitleSection from '../TitleSection.vue';
import UspCard from '../UspCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ref } from 'vue';
import type { UnggulanItem } from '@/core/types/unggulan';
import Usp from "@/assets/icon/usp.png"
import Love from '@/assets/icon/love.png'
import Doc from '@/assets/icon/doc.png'
import type { Identity } from '@/core/types/identity';

const props = defineProps<{
    unggulan: UnggulanItem[];
    identity: Identity[];
}>();

const uspItems = [
    {
        title: "Jatidiri.app",
        description: "Super aplikasi psikologi yang bertujuan untuk membantu individu memahami diri mereka lebih baik. Dikembangkan oleh para Ahli Psikologi, Pendidikan, dan IT.",
        icon: Usp
    },
    {
        title: "Spesial Untuk Indonesia",
        description: "Tes divalidasi dan dinormakan khusus untuk populasi Indonesia, sehingga hasilnya lebih akurat dan relevan untuk pendidikan dan pengembangan karir.",
        icon: Love
    },
    {
        title: "Psikolog dan Konselor Berpengalaman",
        description: "Tim kami terdiri dari para profesional terlatih dan berpengalaman yang siap membantu Anda dengan penuh empati dan tanpa menghakimi.",
        icon: Doc
    },
    {
        title: "Inovasi Berkelanjutan",
        description: "Secara aktif meneliti dan mengimplementasikan teknologi dan metode terbaru untuk terus memperbarui dan meningkatkan kualitas layanan.",
        icon: Usp
    },
    {
        title: "Komunitas Berbagi",
        description: "Membentuk komunitas pengguna Jatidiri.app yang saling berbagi pengalaman, pengetahuan, dan dukungan untuk pertumbuhan bersama.",
        icon: Love
    },
    {
        title: "Fitur Personal yang Berdaya Guna",
        description: "Mengembangkan Fitur Personal yang Berdaya Guna sesuai dengan kebutuhan individu.",
        icon: Doc
    }
];

const activeIndex = ref(1);
const swiperInstance = ref<any>(null);

const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper;
};

const onSlideChange = (swiper: any) => {
    activeIndex.value = swiper.realIndex;
};

const modules = [Navigation, Pagination, Autoplay];

const breakpoints = {
    768: {
        slidesPerView: 2.5,
        spaceBetween: 24
    },
    1024: {
        slidesPerView: 2.8,
        spaceBetween: 28
    },
    1140: {
        slidesPerView: 3.2,
        spaceBetween: 32
    },
    1280: {
        slidesPerView: 3.3,
        spaceBetween: 32
    },
    1440: {
        slidesPerView: 3.5,
        spaceBetween: 32
    },
    1540: {
        slidesPerView: 4.2,
        spaceBetween: 32
    },
    1640: {
        slidesPerView: 4.5,
        spaceBetween: 32
    }
};

const handleWhatsAppClick = () => {
    const phoneNumber = props.identity[0]?.phone || '6281222181823';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;
    window.open(whatsappUrl, '_blank');
};
</script>

<template>
    <div class="w-full py-[20px] px-[20px] md:py-[40px] md:px-[0px] lg:py-[120px] lg:px-[0px] space-y-8 md:space-y-0">
        <div class="w-full md:w-3/5 xl:w-1/2 flex flex-col justify-center items-center text-center space-y-4 mx-auto">
            <TextSection class="text-primary">Kenali Diri, Kembangkan Potensi, Wujudkan Mimpi!</TextSection>
            <TitleSection :text="'Kenali Potensi Diri Lewat Jatidiri.App'"></TitleSection>
            <div
                class="flex gap-4 lg:gap-6 md:border-b-[20px] md:border-l-[20px] md:border-r-[20px] md:border-[#F0F7FD] md:bg-[#F0F7FD]">
                <a href="https://cek.jatidiri.app/login" target="_blank">
                    <ButtonSection>Check Now</ButtonSection>
                </a>
                <ButtonSection 
                    bg-color="bg-transparent" 
                    bg-hover="bg-secondary" 
                    text-color="text-primary"
                    text-hover="text-white" 
                    border-color="border-primary" 
                    arrow-color="primary" 
                    arrow-hover="white"
                    @click="handleWhatsAppClick">
                    Contact Us
                </ButtonSection>
            </div>
        </div>

        <!-- tablet & dekstop -->
        <div class="box-container hidden md:block">
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
            <div class="h-fit py-10 bg-[#E0ECFF] -mt-10 box-usp">
                <Swiper v-if="uspItems && uspItems.length" :modules="modules" :breakpoints="breakpoints"
                    :centered-slides="true" :loop="true" :autoplay="{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        waitForTransition: true
                    }" @swiper="onSwiper" @slide-change="onSlideChange" class="w-full h-full">
                    <SwiperSlide v-for="(item, index) in uspItems" :key="index">
                        <div class="transition-all duration-500 ease-in-out cursor-pointer w-full" :class="{
                            'py-10': activeIndex !== index,
                            'pt-0 md:pt-16 lg:pt-16': activeIndex === index
                        }">
                            <UspCard :title="item.title" :description="item.description" :icon="item.icon"></UspCard>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <!-- mobile -->
        <div class="w-full block md:hidden">
            <div v-for="(item, index) in uspItems" :key="index" class="sticky flex flex-col"
                :style="{ top: `${20 + (index * 2)}px` }" :class="index == 0 ? 'pt-0' : 'pt-4'">
                <div class="sticky top-4 z-50 mb-4">
                    <UspCard :title="item.title" :description="item.description" :icon="item.icon"></UspCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (min-width: 768px) {
    .box-usp {
        clip-path: polygon(25% 0%, 27% 4%, 28% 9%, 72% 9%, 73% 4%, 75% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 868px) {
    .box-usp {
        clip-path: polygon(25% 0%, 27% 4%, 28% 9%, 72% 9%, 73% 4%, 75% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 968px) {
    .box-usp {
        clip-path: polygon(25% 0%, 27% 4%, 28% 9%, 72% 9%, 73% 4%, 75% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1024px) {
    .box-usp {
        clip-path: polygon(25% 0%, 27% 4%, 28% 9%, 72% 9%, 73% 4%, 75% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1124px) {
    .box-usp {
        clip-path: polygon(27% 0%, 29% 4%, 30% 9%, 70% 9%, 71% 4%, 73% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1224px) {
    .box-usp {
        clip-path: polygon(29% 0%, 31% 4%, 32% 9%, 68% 9%, 69% 4%, 71% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1280px) {
    .box-usp {
        clip-path: polygon(31% 0%, 33% 4%, 34% 9%, 66% 9%, 67% 4%, 69% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1400px) {
    .box-usp {
        clip-path: polygon(33% 0%, 35% 4%, 36% 9%, 64% 9%, 65% 4%, 67% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1500px) {
    .box-usp {
        clip-path: polygon(35% 0%, 37% 4%, 38% 9%, 62% 9%, 63% 4%, 65% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1600px) {
    .box-usp {
        clip-path: polygon(35% 0%, 37% 4%, 38% 9%, 62% 9%, 63% 4%, 65% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1700px) {
    .box-usp {
        clip-path: polygon(35% 0%, 37% 4%, 38% 9%, 62% 9%, 63% 4%, 65% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }
}

.box-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.box-button {
    border-top-left-radius: 24px;
    border-bottom-left-radius: 16px;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 16px;
}

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
    transition: all 0.5s ease;
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