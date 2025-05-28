<script lang="ts" setup>
import Contact from '@/assets/contact.png'
import Mail from '@/assets/icon/mail.png'
import Location from '@/assets/icon/location.png'
import Call from '@/assets/icon/call.png'
</script>

<template>
    <div
        class="py-[96px] px-[20px] md:py-[64px] md:px-[40px] lg:px-[160px] lg:py-[120px] grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-6 lg:gap-8">
        <div class="relative w-full h-[200px] lg:h-[200px] hover:-translate-y-2 transition duration-500">
            <div class="absolute inset-0">
                <img :src="Contact" alt="" class="w-full h-full">
            </div>

            <div class="absolute right-1/2 translate-x-1/2 -top-[20%] w-[72px] h-[72px] p-3 rounded-full bg-white flex justify-center items-center">
                <img :src="Mail" alt="" class="w-10">
            </div>

            <div
                class="w-full h-full relative z-10 flex flex-col justify-center items-center text-center gap-2 lg:gap-4 mt-4">
                <h5 class="text-[22px] md:text-[26px] lg:text-[30px] font-bold border-beam-container">Mail Us 24/7</h5>
                <p class="text-[14px] lg:text-[16px] text-[#333333]">no-reply@pbminfo.com</p>
            </div>
        </div>

        <div class="relative w-full h-[200px] hover:-translate-y-2 transition duration-500">
            <div class="absolute inset-0">
                <img :src="Contact" alt="" class="w-full h-full">
            </div>

            <div class="absolute right-1/2 translate-x-1/2 -top-[20%] w-[72px] h-[72px] p-3 rounded-full bg-white flex justify-center items-center">
                <img :src="Location" alt="" class="w-10">
            </div>

            <div
                class="w-full h-full relative z-10 flex flex-col justify-center items-center text-center gap-2 lg:gap-4 mt-4">
                <h5 class="text-[22px] md:text-[26px] lg:text-[30px] font-bold border-beam-container">Our Location</h5>
                <p class="text-[14px] lg:text-[16px] text-[#333333] w-1/2">Jalan Abdul Halim No. 128, Cimahi, Jawa Barat</p>
            </div>
        </div>

        <div class="relative w-full h-[200px] hover:-translate-y-2 transition duration-500">
            <div class="absolute inset-0">
                <img :src="Contact" alt="" class="w-full h-full">
            </div>

            <div class="absolute right-1/2 translate-x-1/2 -top-[20%] w-[72px] h-[72px] p-3 rounded-full bg-white flex justify-center items-center">
                <img :src="Call" alt="" class="w-10">
            </div>

            <div
                class="w-full h-full relative z-10 flex flex-col justify-center items-center text-center gap-2 lg:gap-4 mt-4">
                <h5 class="text-[22px] md:text-[26px] lg:text-[30px] font-bold border-beam-container">Call Us</h5>
                <p class="text-[14px] lg:text-[16px] text-[#333333]">+62 812- 2218- 1823</p>
            </div>
        </div>
    </div>
</template>