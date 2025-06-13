<script setup lang="ts">
import TextBody from '../TextBody.vue';
import TitleSection from '../TitleSection.vue';
import Like from '@/assets/icon/liike.png'
import Phone from '@/assets/icon/phone.png'
import Brain from '@/assets/icon/brain.png'
import Pack from '@/assets/icon/pack.png'
import Community from '@/assets/icon/comunity.png'
import { computed, onMounted, onUnmounted, ref } from 'vue';
import SpinningText from '../ui/spinning-text/SpinningText.vue';

const macWindow = ref<HTMLElement | null>(null)
const scrollProgress = ref(0)

const handleScroll = () => {
    if (!macWindow.value) return

    const elementTop = macWindow.value.getBoundingClientRect().top
    const elementBottom = macWindow.value.getBoundingClientRect().bottom
    const windowHeight = window.innerHeight
    
    const startTrigger = windowHeight * 0.4
    const endTrigger = windowHeight * 0.2
    
    if (elementTop <= startTrigger && elementBottom >= endTrigger) {
        const totalRange = startTrigger - endTrigger
        const currentPosition = Math.max(0, startTrigger - elementTop)
        let progress = Math.min(1, currentPosition / totalRange)
        
        progress = 1 - Math.pow(1 - progress, 3)
        
        scrollProgress.value = progress
    } else if (elementTop > startTrigger) {
        scrollProgress.value = 0
    } else {
        scrollProgress.value = 1
    }
}

const dynamicWidth = computed(() => {
    const baseWidth = 90
    const maxWidth = 100
    const widthDiff = maxWidth - baseWidth
    
    return baseWidth + (widthDiff * scrollProgress.value)
})

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="md:py-[64px] md:px-[0px] lg:px-0 lg:py-[30px]">
        <div ref="macWindow" class="visi-container">
            <div class="mx-auto lg:py-[120px] lg:px-[40px] bg-white rounded-[8px] md:rounded-[16px] lg:rounded-[24px] visi-box"
                :style="{ 
                    width: `${dynamicWidth}%`,
                    transition: 'width 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }">
                <div class="w-[75vw] md:w-[80vw] py-10 md:py-16 mx-auto space-y-6 md:space-y-8 lg:space-y-12">
                    <div class="w-full h-full flex flex-col md:flex-row justify-between items-start gap-8">
                        <div class="w-fit md:w-[20%] lg:w-[16%] xl:w-[14%]">
                            <h6 class="w-full text-[14px] md:text-[16px] lg:text-[20px] font-medium">Visi Jatidiri</h6>
                        </div>
                        <div class="w-full md:w-full">
                            <TitleSection
                                :text="'Mewujudkan masyarakat Indonesia yang berdaya melalui pemahaman diri yang mendalam.'" />
                        </div>
                    </div>

                    <div
                        class="w-full flex flex-col md:flex-row gap-20 md:gap-20 lg:gap-20 md:justify-center md:items-center">
                        <div class="w-full md:w-1/2 relative h-[30vh] lg:h-[70vh]">
                            <div class="absolute inset-0">
                                <img src="https://cms.jatidiri.app/storage/identities/7RgsjisHfvEf9pJeSVEuIH9e6S4HD0mALGz6XGJS.jpg"
                                    alt=""
                                    class="w-full h-full rounded-[8px] md:rounded-[16px] lg:rounded-[24px] object-cover object-right">
                            </div>

                            <div
                                class="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 md:right-0 md:bottom-1/2 md:translate-y-1/2 md:translate-x-1/2">
                                <div class="w-full p-8 rounded-full bg-white/20 backdrop-blur-sm">
                                    <div class="w-full p-8 rounded-full backdrop-blur-sm">
                                    <SpinningText text="Misi Jatidiri - Misi Jatidiri - Misi Jatidiri -"
                                        :duration="20" />
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-1/2 grid grid-cols-1">
                            <div
                                class="w-full py-8 lg:py-12 relative border-t border-b border-black flex justify-center items-center">
                                <div class="absolute top-4 left-0">
                                    <p class="text-[10px] md:text-[12px] lg:text-[12px] font-sora text-primary">1</p>
                                </div>
                                <div class="flex gap-4 md:gap-5 lg:gap-6 justify-center items-center">
                                    <img :src="Phone" alt="" class="w-8 h-8 md:w-8 md:h-8 lg:w-12 lg:h-12">
                                    <TextBody>Mengembangkan platform yang memadukan teknologi terkini dengan pendekatan
                                        psikologi yang humanis untuk memberikan layanan yang personal dan berdampak.
                                    </TextBody>
                                </div>
                            </div>

                            <div
                                class="w-full py-8 lg:py-12 relative border-b border-black flex justify-center items-center">
                                <div class="absolute top-4 left-0">
                                    <p class="text-[10px] md:text-[12px] lg:text-[12px] font-sora text-primary">2</p>
                                </div>
                                <div class="flex gap-4 md:gap-5 lg:gap-6 justify-center items-center">
                                    <img :src="Pack" alt="" class="w-8 h-8 md:w-8 md:h-8 lg:w-12 lg:h-12">
                                    <TextBody>Membangun sistem keamanan data berstandar tinggi untuk melindungi
                                        informasi
                                        pribadi pengguna, serta mematuhi regulasi privasi nasional dan internasional.
                                    </TextBody>
                                </div>
                            </div>

                            <div
                                class="w-full py-8 lg:py-12 relative border-b border-black flex justify-center items-center">
                                <div class="absolute top-4 left-0">
                                    <p class="text-[10px] md:text-[12px] lg:text-[12px] font-sora text-primary">3</p>
                                </div>
                                <div class="flex gap-4 md:gap-5 lg:gap-6 justify-center items-center">
                                    <img :src="Community" alt="" class="w-8 h-8 md:w-8 md:h-8 lg:w-12 lg:h-12">
                                    <TextBody>Membentuk komunitas pengguna Jatidiri.app yang saling berbagi pengalaman,
                                        pengetahuan, dan dukungan untuk pertumbuhan bersama.</TextBody>
                                </div>
                            </div>

                            <div
                                class="w-full py-8 lg:py-12 relative border-b border-black flex justify-center items-center">
                                <div class="absolute top-4 left-0">
                                    <p class="text-[10px] md:text-[12px] lg:text-[12px] font-sora text-primary">4</p>
                                </div>
                                <div class="flex gap-4 md:gap-5 lg:gap-6 justify-center items-center">
                                    <img :src="Brain" alt="" class="w-8 h-8 md:w-8 md:h-8 lg:w-12 lg:h-12">
                                    <TextBody>Secara aktif meneliti dan mengimplementasikan teknologi dan metode terbaru
                                        untuk
                                        terus memperbarui dan meningkatkan kualitas layanan.</TextBody>
                                </div>
                            </div>

                            <div
                                class="w-full py-8 lg:py-12 relative border-b border-black flex justify-center items-center">
                                <div class="absolute top-4 left-0">
                                    <p class="text-[10px] md:text-[12px] lg:text-[12px] font-sora text-primary">5</p>
                                </div>
                                <div class="flex gap-4 md:gap-5 lg:gap-6 justify-center items-center">
                                    <img :src="Like" alt="" class="w-8 h-8 md:w-8 md:h-8 lg:w-12 lg:h-12">
                                    <TextBody>Mengembangkan Fitur Personal yang Berdaya Guna sesuai dengan kebutuhan
                                        individu
                                    </TextBody>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    </div>
</template>

<style scoped>
.visi-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.visi-box {
    clip-path: polygon(0% 5%, 7% 5%, 7% 0%, 96% 0%, 96% 17%, 100% 17%, 100% 92%, 92% 92%, 92% 100%, 8% 100%, 8% 97%, 0% 97%);
}
</style>