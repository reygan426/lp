<script setup lang="ts">
import Img1 from '@/assets/work/1.jpg'
import Img2 from '@/assets/work/2.jpg'
import Img3 from '@/assets/work/3.jpg'
</script>

<template>
    <div
        class="py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[60px] lg:px-[70px] flex flex-col justify-center items-center gap-6 md:gap-12 lg:gap-16">
        <div>
            <h6 class="text-[22px] md:text-[34px] lg:text-[46px] font-bold">Kegiatan Pelatihan</h6>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div class="w-full h-[30vh] md:h-[50vh] lg:h-[65vh] xl:h-[50vh] flex flex-col group relative">
                <div
                    class="relative bottom-0 z-10 w-full h-1/2 bg-white text-black rounded-t-[4px] md:rounded-t-[8px] lg:rounded-t-[16px] p-4 md:p-8 lg:p-10 space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-1/2 group-hover:translate-y-0">
                    <h6 class="font-light font-sora text-[28px] md:text-[32px] lg:text-[36px]">Workshop Interaktif</h6>
                    <p class="text-[10px] md:text-[12px] lg:text-[16px] text-black/50">Diskusi mendalam, berbagi
                        pengalaman, dan presentasi dinamis dari fasilitator ahli</p>
                </div>
                <div class="absolute bottom-0 w-full transition-all duration-500 ease-in-out h-full group-hover:h-1/2">
                    <img :src="Img1" alt=""
                        class="w-full h-full object-cover rounded-[4px] md:rounded-[8px] lg:rounded-[16px] group-hover:rounded-t-none transition-all duration-500 ease-in-out transform scale-100">
                </div>
            </div>

            <div class="w-full h-[30vh] md:h-[50vh] lg:h-[65vh] xl:h-[50vh] flex flex-col group relative">
                <div
                    class="relative bottom-0 z-10 w-full h-1/2 bg-white text-black rounded-t-[4px] md:rounded-t-[8px] lg:rounded-t-[16px] p-4 md:p-8 lg:p-10 space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-1/2 group-hover:translate-y-0">
                    <h6 class="font-light font-sora text-[28px] md:text-[32px] lg:text-[36px]">Simulasi Konseling</h6>
                    <p class="text-[10px] md:text-[12px] lg:text-[16px] text-black/50">Praktik langsung menjadi
                        konselor, konseling, dan observer dengan
                        kasus-kasus tematik</p>
                </div>
                <div class="absolute bottom-0 w-full transition-all duration-500 ease-in-out h-full group-hover:h-1/2">
                    <img :src="Img3" alt=""
                        class="w-full h-full object-cover rounded-[4px] md:rounded-[8px] lg:rounded-[16px] group-hover:rounded-t-none transition-all duration-500 ease-in-out transform scale-100">
                </div>
            </div>

            <div class="w-full h-[30vh] md:h-[50vh] lg:h-[65vh] xl:h-[50vh] flex flex-col group relative">
                <div
                    class="relative bottom-0 z-10 w-full h-1/2 bg-white text-black rounded-t-[4px] md:rounded-t-[8px] lg:rounded-t-[16px] p-4 md:p-8 lg:p-10 space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-1/2 group-hover:translate-y-0">
                    <h6 class="font-light font-sora text-[28px] md:text-[32px] lg:text-[36px]">Studi Kasus</h6>
                    <p class="text-[10px] md:text-[12px] lg:text-[16px] text-black/50">Analisis kasus nyata untuk
                        mengasah kemampuan identifikasi, intervensi, dan dokumentasi</p>
                </div>
                <div class="absolute bottom-0 w-full transition-all duration-500 ease-in-out h-full group-hover:h-1/2">
                    <img :src="Img2" alt=""
                        class="w-full h-full object-cover rounded-[4px] md:rounded-[8px] lg:rounded-[16px] group-hover:rounded-t-none transition-all duration-500 ease-in-out transform scale-100">
                </div>
            </div>
        </div>
    </div>
</template>