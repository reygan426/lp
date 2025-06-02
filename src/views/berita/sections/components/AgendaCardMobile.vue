<script lang="ts" setup>
import router from '@/router';

const props = defineProps<{
    title: string
    slug: string
    date: {
        dayName: string
        day: number
        month: string
        year: number
    }
    description: string
}>();

const goToDetail = () => {
    router.push({
      name: 'Agenda Detail',
      params: { slug: props.slug }
    });
};
</script>

<template>
    <div class="w-full p-2 flex gap-4 rounded-[16px] bg-white justify-center items-center cursor-pointer" @click="goToDetail">
        <div class="w-[35%] bg-[#F3F4F4] rounded-[8px] p-4 text-center">
            <p class="text-[14px]">{{ date.dayName }}</p>
            <p class="text-[24px] font-bold font-sora">{{ date.day }}</p>
            <p class="text-[14px]">{{ date.month }} {{ date.year }}</p>
        </div>
        <div class="w-[65%] space-y-2">
            <div class="py-1 px-2 bg-primary/10 rounded-full w-fit">
                <p class="text-primary text-[10px]">Talkshow</p>
            </div>
            <h6 class="text-[12px] font-bold line-clamp-3">{{ title }}</h6>
            <div class="w-full border border-black/25"></div>
            <div class="text-[10px] text-black/80">Lihat Acara <span class="font-bold">></span></div>
        </div>
    </div>
</template>