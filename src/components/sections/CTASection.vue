<script lang="ts" setup>
import IconLogo from '@/assets/logo/logo-icon.png'
import TitleSection from '../TitleSection.vue';
import TextSection from '../TextSection.vue';
import ButtonSection from '../ButtonSection.vue';
</script>

<template>
    <div class="px-5 py-[140px] flex flex-col justify-center items-center relative overflow-hidden bg-[#F0F7FD]">
        <div class="absolute inset-0 mx-auto overflow-visible">
            <!-- globe with blue glow effect -->
            <div class="relative w-[1000px] h-[1000px] md:h-[1500px] md:w-[1500px] lg:h-[2000px] lg:w-[2000px] bg-[#F0F7FD] rounded-full left-1/2 -translate-x-1/2 top-24
                shadow-[0_0_60px_60px_rgba(100,100,250,0.1)]
                before:content-[''] before:absolute before:inset-0 before:rounded-full 
                before:shadow-[0_0_60px_40px_rgba(100,100,250,0.1)]
                after:content-[''] after:absolute after:inset-0 after:rounded-full 
                after:shadow-[0_0_80px_50px_rgba(100,100,250,0.0)]">
            </div>
        </div>
        <div
            class="w-full max-w-[80%] md:max-w-[40%] mx-auto text-center space-y-6 md:space-y-8 lg:space-y-10 relative z-10">
            <div class="w-full flex justify-center items-center">
                <img :src="IconLogo" alt="Logo Icon Jatidiri.app" class="w-16 md:w-20 lg:w-24 h-full">
            </div>
            <div class="space-y-2 lg:space-y-4">
                <TitleSection text="Kenali Dirimu Raih Masa Depan Gemilang"></TitleSection>
                <TextSection class="text-[#333333]/75 md:max-w-2/3 mx-auto">Start trading with powerful tools, real-time
                    insights, and a secure
                    platform for better profits</TextSection>
            </div>
            <div class="w-full flex justify-center items-center">
                <a href="https://cek.jatidiri.app/login" target="_blank">
                    <ButtonSection>Check Now</ButtonSection>
                </a>
            </div>
        </div>
    </div>
</template>