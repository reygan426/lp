<script lang="ts" setup>
import Bg from '@/assets/target.png'
import TextBody from '@/components/TextBody.vue';
</script>

<template>
    <div
        class="py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[120px] lg:px-[60px] w-full h-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 relative">
        <div class="w-full md:w-[40%] bg-cover rounded-[8px] md:rounded-[16px] lg:rounded-[24px] py-8 pl-8 pr-10 space-y-[180px] md:space-y-[240px] lg:space-y-[278px]"
            :style="'background-image: url(' + Bg + ');'">
            <div class="py-1 px-10 bg-black w-fit rounded-full text-white">
                <TextBody># How It Works</TextBody>
            </div>
            <div class="">
                <h5 class="text-[20px] md:text-[30px] lg:text-[40px] font-bold text-white">Siapa yang Harus Mengikuti Pelatihan
                    Ini?</h5>
            </div>
        </div>
        <div class="w-full md:w-[70%] space-y-6 md:space-y-12 lg:space-y-16 md:-left-10 relative">
            <div class="flex gap-6 md:gap-8 lg:gap-10 items-center">
                <div
                    class="py-[10px] px-[23px] md:py-[15px] md:px-[30px] lg:py-5 lg:px-[35px] h-fit bg-black text-white font-semibold rounded-full">
                    <h6 class="text-[18px] md:text-[28px] lg:text-[32px]">1</h6>
                </div>
                <div>
                    <h6 class="text-[18px] md:text-[28px] lg:text-[32px]">Psikolog</h6>
                    <p class="text-[14px] md:text-[18px] lg:text-[20px] text-black/25">Psikolog yang ingin memperdalam
                        teknik konseling tematik</p>
                </div>
            </div>

            <div class="flex gap-6 md:gap-8 lg:gap-10 items-center">
                <div
                    class="py-[10px] px-[23px] md:py-[15px] md:px-[30px] lg:py-5 lg:px-[35px] h-fit bg-black text-white font-semibold rounded-full">
                    <h6 class="text-[18px] md:text-[28px] lg:text-[32px]">2</h6>
                </div>
                <div>
                    <h6 class="text-[18px] md:text-[28px] lg:text-[32px]">Konselor Profesional</h6>
                    <p class="text-[14px] md:text-[18px] lg:text-[20px] text-black/25">Konselor Profesional di berbagai
                        setting (klinis, komunitas, organisasi)</p>
                </div>
            </div>

            <div class="flex gap-6 md:gap-8 lg:gap-10 items-center">
                <div
                    class="py-[10px] px-[23px] md:py-[15px] md:px-[30px] lg:py-5 lg:px-[35px] h-fit bg-black text-white font-semibold rounded-full">
                    <h6 class="text-[18px] md:text-[28px] lg:text-[32px]">3</h6>
                </div>
                <div>
                    <h6 class="text-[18px] md:text-[28px] lg:text-[32px]">Praktisi Kesehatan Mental</h6>
                    <p class="text-[14px] md:text-[18px] lg:text-[20px] text-black/25">Praktisi Kesehatan Mental yang
                        ingin menciptakan layanan yang lebih responsif terhadap kebutuhan kontemporer</p>
                </div>
            </div>
        </div>
    </div>
</template>