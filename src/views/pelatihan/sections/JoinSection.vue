<script setup lang="ts">
import ButtonSection from '@/components/ButtonSection.vue';

</script>

<template>
    <div class="py-[20px] px-[20px] md:py-[40px] md:px-[40px] lg:py-[120px] lg:px-[120px] w-full">
        <div class="py-6 md:py-10 px-6 md:px-10 bg-primary rounded-[12px] md:rounded-[16px] lg:rounded-[24px] w-full flex flex-col md:flex-row justify-center items-center text-center md:text-left md:justify-between gap-4 md:gap-0">
            <h2 class="text-[22px] md:text-[34px] lg:text-[40px] leading-tight font-bold text-white">Bergabung Dengan Jatidiri.App!</h2>
            <ButtonSection bg-color="bg-white" bg-hover="bg-secondary" text-color="text-primary"
                        text-hover="text-white" border-color="border-primary" arrow-color="primary" arrow-hover="white">
                        Subscribe Now</ButtonSection>
        </div>
    </div>
</template>