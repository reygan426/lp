<script setup lang="ts">
import ButtonSection from '@/components/ButtonSection.vue';
import TextBody from '@/components/TextBody.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Identity } from '@/core/types/identity';
import Text from '@/assets/texr.png'

const props = defineProps<{
    identity: Identity[];
}>();

const handleWhatsAppClick = () => {
    const phoneNumber = props.identity[0]?.phone || '6281222181823';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;
    window.open(whatsappUrl, '_blank');
};
</script>

<template>
    <section
        class="py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[60px] lg:px-[120px] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-12">
        <div class="w-full md:w-1/2 h-[320px] lg:h-[580px] relative">
            <div class="absolute inset-0 assesment-container">
                <img src="" alt="" class="w-full h-full object-cover assesment-box bg-red-500">
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

            <!-- <div
                class="absolute right-0 top-1/2 -translate-y-1/2 bg-[#F0F7FD] w-10 h-32 rounded-tl-[20px] rounded-bl-[20px] coba">
            </div> -->

            <div class="absolute bottom-4 left-4">
                <img :src="Text" alt="" class="w-[80%] md:w-[60%] lg:w-full">
            </div>
        </div>
        <div class="w-full md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8">
            <div class="space-y-2 lg:space-y-4">
                <TitleSection text="Tes Bakat & Karakter" class="text-primary" />
                <TextBody>Apakah Anda ingin memahami potensi dan karakter siswa secara mendalam? Tes Pemetaan Bakat dan
                    Karakter adalah alat komprehensif yang dirancang untuk memberikan gambaran lengkap tentang
                    kemampuan, minat, dan kepribadian siswa. Hasil tes ini akan membantu dalam merencanakan pendidikan
                    dan karir yang tepat, serta memahami strategi terbaik untuk mengembangkan dan mendukung mereka. 
                </TextBody>
            </div>
            <div class="flex gap-4 lg:gap-6">
                <a href="https://cek.jatidiri.app/login" target="_blank">
                    <ButtonSection>Check Now</ButtonSection>
                </a>
                <ButtonSection bg-color="bg-transparent" bg-hover="bg-secondary" text-color="text-primary"
                    text-hover="text-white" border-color="border-primary" arrow-color="primary" arrow-hover="white"
                    @click="handleWhatsAppClick">
                    Contact Us
                </ButtonSection>
            </div>
        </div>
    </section>
</template>

<style>
/* .coba::before,
.coba::after {
    content: '';
    transform: rotate(45deg);
    position: absolute;
    top: 0%;
    width: 20px;
    height: 20px;
    background: transparent;
}

.coba::after {
    right: -20px;
    border-top-left-radius: 20px;
    box-shadow: -1px -10px 0 0 green;
}

.coba::before {
    left: -20px;

    border-top-right-radius: 20px;
    box-shadow: 1px -10px 0 0 blue;
} */

.assesment-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.assesment-box {
    clip-path: polygon(90% 0%, 90% 25%, 100% 25%, 100% 100%, 45% 100%, 45% 93%, 20% 93%, 20% 100%, 0% 100%, 0% 75%, 7% 75%, 7% 50%, 0% 50%, 0% 0%);
}

@media (min-width: 320px) {
    .assesment-box {
        clip-path: polygon(90% 0%, 90% 25%, 100% 25%, 100% 100%, 45% 100%, 45% 93%, 20% 93%, 20% 100%, 0% 100%, 0% 75%, 7% 75%, 7% 50%, 0% 50%, 0% 0%);
    }
}

@media (min-width: 768px) {
    .assesment-box {
        clip-path: polygon(90% 0%, 90% 25%, 100% 25%, 100% 100%, 50% 100%, 50% 93%, 20% 93%, 20% 100%, 0% 100%, 0% 80%, 7% 80%, 7% 50%, 0% 50%, 0% 0%);
    }
}

@media (min-width: 1024px) {
    .assesment-box {
        clip-path: polygon(90% 0%, 90% 15%, 100% 15%, 100% 100%, 45% 100%, 45% 93%, 20% 93%, 20% 100%, 0% 100%, 0% 82%, 7% 82%, 7% 65%, 0% 65%, 0% 0%);
    }
}
</style>