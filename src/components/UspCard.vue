<script setup lang="ts">
import Arrow from "@/assets/icon/arrow.svg"
import Card from "@/assets/Card.png"
import CardMobile from "@/assets/card-mobile.png"
import CardMobile2 from '@/assets/card-mbl.png'
import TextBody from "./TextBody.vue"
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    icon: {
        type: String,
    },
});

const isMobileBreakpoint = ref(false);

const checkBreakpoint = () => {
    isMobileBreakpoint.value = window.innerWidth >= 520 && window.innerWidth < 768;
};

onMounted(() => {
    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkBreakpoint);
});
</script>

<template>
    <div
        class="h-[240px] md:h-[340px] lg:h-[360px] rounded-[8px] md:rounded-[16px] lg:rounded-[24px] p-7 lg:p-7 relative group hover:-translate-y-3 transition duration-500">
        <div class="absolute inset-0 hidden md:block">
            <img :src="Card" alt="" class="w-full h-full ">
        </div>
        <div class="absolute inset-0 md:hidden">
            <img :src="isMobileBreakpoint ? CardMobile2 : CardMobile" alt="" class="w-full h-full ">
        </div>
        <div class="space-y-2 relative z-10">
            <h6 class="text-[18px] md:text-[20px] lg:text-[24px] font-bold text-primary">{{ title }}</h6>
            <TextBody weight-text="font-light md:font-normal">{{ description }}</TextBody>
        </div>
        <div class="absolute bottom-6 left-6">
            <img :src="icon" alt="" class="w-12 h-12 lg:w-16 lg:h-16 svg-primary">
        </div>
        <div class="absolute bottom-0 right-0 md:-bottom-2 md:-right-2 lg:bottom-0 lg:right-0 bg-[#E6EFF7] border-2 border-white p-4 rounded-full overflow-hidden group">
            <img :src="Arrow" alt=""
                class="w-4 h-4 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0">
            <img :src="Arrow" alt=""
                class="w-4 h-4 absolute top-4 left-4 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100">
        </div>
    </div>
</template>