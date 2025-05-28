<script setup lang="ts">
import Arrow from "@/assets/icon/arrow.svg"

defineProps({
    borderColor: {
        type: String,
        default: 'border-transparent'
    },
    borderHover: {
        type: String,
        default: 'border-transparent'
    },
    bgColor: {
        type: String,
        default: 'bg-primary'
    },
    bgHover: {
        type: String,
        default: 'bg-secondary'
    },
    textColor: {
        type: String,
        default: 'text-white'
    },
    textHover: {
        type: String,
        default: 'text-white'
    },
    arrowColor: {
        type: String,
    },
    arrowHover: {
        type: String,
    },
    arrowColor2: {
        type: String,
    },
    arrowHover2: {
        type: String,
    }
});
</script>

<template>
    <button :class="['px-[18px] py-[10px] rounded-full text-[12px] md:text-[14px] lg:text-[18px] font-medium font-sora flex gap-4 group items-center transition duration-500 cursor-pointer w-fit border',
        borderColor || 'border-transparent',
        borderHover ? `hover:${borderHover}` : 'hover:border-transparent',
        bgColor || 'bg-primary',
        bgHover ? `hover:${bgHover}` : 'hover:bg-secondary',
        textColor || 'text-white',
        textHover ? `hover:${textHover}` : 'hover:text-white',
    ]">
        <slot></slot>
        <span>
            <div class="rounded-full overflow-hidden relative">
                <img :src="Arrow" alt="" :class="['w-4 h-4 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0',
                    arrowColor || 'filter brightness-0 invert',
                    arrowHover || 'filter brightness-0 invert']">
                <img :src="Arrow" alt="" :class="['w-4 h-4 absolute top-0 left-0 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100',
                    arrowColor2 || 'filter brightness-0 invert',
                    arrowHover2 || 'filter brightness-0 invert']">
            </div>
        </span>
    </button>
</template>