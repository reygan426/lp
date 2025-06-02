<script lang="ts" setup>
import Users from '@/assets/icon/users.png'
import Asesmen from '@/assets/icon/asesmen.png'
import Psikolog from '@/assets/icon/psikolog.png'
import Konselor from '@/assets/icon/konselor.png'
import NumberTicker from '../ui/number-ticker/NumberTicker.vue'
import TextSection from '../TextSection.vue'
</script>

<template>
    <div
        class="py-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:p-[120px] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-[180px]">
        <div class="flex flex-col items-center justify-center text-center space-y-4 lg:space-y-6">
            <div class="w-[60px] h-[60px] p-[2px] md:w-[80px] md:h-[80px] md:p-[4px] lg:w-[100px] lg:h-[100px] lg:p-[10px] bg-[#E6EFF7] rounded-full">
                <div class="w-full h-full rounded-full bg-primary p-5">
                    <div class="w-full h-full flex justify-center items-center">
                        <img :src="Users" alt="" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 object-contain">
                    </div>
                </div>
            </div>
            <div class="space-y-2 lg:space-y-2">
                <NumberTicker class="text-[28px] md:text-[32px] lg:text-[36px] font-bold font-sora" :duration="5000" :value="5234" />
                <TextSection>Pengguna</TextSection>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center text-center space-y-4 lg:space-y-6">
            <div class="w-[60px] h-[60px] p-[2px] md:w-[80px] md:h-[80px] md:p-[4px] lg:w-[100px] lg:h-[100px] lg:p-[10px] bg-[#E6EFF7] rounded-full">
                <div class="w-full h-full rounded-full bg-primary p-5">
                    <div class="w-full h-full flex justify-center items-center">
                        <img :src="Asesmen" alt="" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 object-contain">
                    </div>
                </div>
            </div>
            <div class="space-y-2 lg:space-y-2">
                <NumberTicker class="text-[28px] md:text-[32px] lg:text-[36px] font-bold font-sora" :duration="5000" :value="7" />
                <TextSection>Asesmen</TextSection>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center text-center space-y-4 lg:space-y-6">
            <div class="w-[60px] h-[60px] p-[2px] md:w-[80px] md:h-[80px] md:p-[4px] lg:w-[100px] lg:h-[100px] lg:p-[10px] bg-[#E6EFF7] rounded-full">
                <div class="w-full h-full rounded-full bg-primary p-5">
                    <div class="w-full h-full flex justify-center items-center">
                        <img :src="Psikolog" alt="" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 object-contain">
                    </div>
                </div>
            </div>
            <div class="space-y-2 lg:space-y-2">
                <NumberTicker class="text-[28px] md:text-[32px] lg:text-[36px] font-bold font-sora" :duration="5000" :value="30" />
                <TextSection>Psikolog</TextSection>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center text-center space-y-4 lg:space-y-6">
            <div class="w-[60px] h-[60px] p-[2px] md:w-[80px] md:h-[80px] md:p-[4px] lg:w-[100px] lg:h-[100px] lg:p-[10px] bg-[#E6EFF7] rounded-full">
                <div class="w-full h-full rounded-full bg-primary p-5">
                    <div class="w-full h-full flex justify-center items-center">
                        <img :src="Konselor" alt="" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 object-contain">
                    </div>
                </div>
            </div>
            <div class="space-y-2 lg:space-y-2">
                <NumberTicker class="text-[28px] md:text-[32px] lg:text-[36px] font-bold font-sora" :duration="5000" :value="30" />
                <TextSection>Konselor</TextSection>
            </div>
        </div>
    </div>
</template>