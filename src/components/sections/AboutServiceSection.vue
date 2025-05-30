<script setup lang="ts">
import ButtonSection from '../ButtonSection.vue';
import TextBody from '../TextBody.vue';
import TitleSection from '../TitleSection.vue';
import NumberTicker from '../ui/number-ticker/NumberTicker.vue';
import People from '@/assets/people.png'
import Org3 from '@/assets/org3.png'

defineProps({
    category: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    }
});
</script>

<template>
    <div ref="sectionRef"
        class="py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[64px] lg:px-[128px] flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-16 mb-0 md:mb-20 xl:mb-20">
        <div class="w-full md:w-1/2 h-[210px] md:h-[400px] lg:h-[600px] relative ">
            <div class="absolute inset-0 about-container">
                <img :src="Org3" alt=""
                    class="w-full h-full object-cover rounded-[8px] md:rounded-[16px] lg:rounded-[24px] about-box">
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


            <div class="w-full h-full">
                <div
                    class="absolute bottom-3 right-3 w-[200px] p-3 lg:bottom-6 lg:right-6 lg:w-[280px] lg:p-8 bg-primary/20 backdrop-blur-sm rounded-[4px] md:rounded-[8px] lg:rounded-[16px] path-box hidden md:block">
                    <div class="font-sora space-y-3">
                        <NumberTicker class="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-white"
                            :value="4320" :duration="5000" />
                        <TextBody class="text-white" weight-text="font-light">highly rated Chatbot by millions of users!
                        </TextBody>
                        <div>
                            <img :src="People" alt="Happy users">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full md:w-1/2 space-y-4 md:space-y-5 lg:space-y-6">
            <div class=" bg-primary/10 w-fit py-2 px-5 rounded-full">
                <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">{{ category }}</h6>
            </div>
            <TitleSection :text="title"></TitleSection>

            <div class="space-y-4 md:space-y-6 lg:space-y-8">
                <TextBody>
                    {{ description }}
                </TextBody>
            </div>

            <div>
                <a href="https://cek.jatidiri.app/login" target="_blank">
                    <ButtonSection>Check Now</ButtonSection>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.path-box {
    clip-path: polygon(100% 76%, 80% 100%, 0% 100%, 0% 0%, 100% 0%);
}

.about-box {
    clip-path: polygon(100% 80%, 86% 100%, 0% 100%, 0% 0%, 100% 0%);
}

@media (min-width: 320px) {
    .about-box {
        clip-path: polygon(100% 80%, 86% 100%, 0% 100%, 0% 0%, 100% 0%);
    }
}

@media (min-width: 390px) {
    .about-box {
        clip-path: polygon(100% 80%, 88% 100%, 0% 100%, 0% 0%, 100% 0%);
    }
}

@media (min-width: 560px) {
    .about-box {
        clip-path: polygon(100% 80%, 90% 100%, 0% 100%, 0% 0%, 100% 0%);
    }
}

@media (min-width: 760px) {
    .about-box {
        clip-path: polygon(100% 86%, 85% 100%, 0% 100%, 0% 0%, 100% 0%);
    }
}

@media (min-width: 824px) {
    .about-box {
        clip-path: polygon(100% 86%, 88% 100%, 0% 100%, 0% 0%, 100% 0%);
    }
}

@media (min-width: 1024px) {
    .about-box {
        clip-path: polygon(100% 86%, 80% 100%, 0% 100%, 0% 0%, 100% 0%);
    }
}

@media (min-width: 1200px) {
    .about-box {
        clip-path: polygon(100% 86%, 84% 100%, 0% 100%, 0% 0%, 100% 0%);
    }
}

@media (min-width: 1400px) {
    .about-box {
        clip-path: polygon(100% 86%, 84% 100%, 0% 100%, 0% 0%, 100% 0%);
    }
}

@media (min-width: 1500px) {
    .about-box {
        clip-path: polygon(100% 86%, 86% 100%, 0% 100%, 0% 0%, 100% 0%);
    }
}

@media (min-width: 1600px) {
    .about-box {
        clip-path: polygon(100% 86%, 88% 100%, 0% 100%, 0% 0%, 100% 0%);
    }
}
</style>