<script setup lang="ts">
import { ref } from 'vue';
import TextSection from '../TextSection.vue';
import TitleSection from '../TitleSection.vue';
import type { UnggulanItem } from '@/core/types/unggulan';

const activeTab = ref(0);
const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
    if (!imagePath) return 'https://placehold.co/600x400';
    return `${baseUrl}/unggulans/${imagePath}`;
};

defineProps<{
    unggulan: UnggulanItem[];
}>();

const setActiveTab = (index: number) => {
    activeTab.value = index;
};
</script>

<template>
    <div
        class="py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[60px] lg:px-[120px] space-y-6 md:space-y-10 lg:space-y-16">
        <div
            class="w-full md:w-2/3 mx-auto flex flex-col justify-center items-center text-center gap-4 md:gap-5 lg:gap-6">
            <div class=" bg-primary/10 w-fit py-2 px-5 rounded-full">
                <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">Why</h6>
            </div>
            <TitleSection :text="'Alasan Harus Menggunakan Jatidiri Sekolah'"></TitleSection>
        </div>

        <div class="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8">
            <!-- Tab Dekstop-->
            <div class="w-full md:w-1/2 hidden md:block">
                <div v-for="(tab, index) in unggulan" :key="index"
                    class="py-3 md:py-6 flex gap-5 items-center cursor-pointer border-b-2 border-black/10 transition-all duration-500 ease-in-out relative overflow-hidden group"
                    @click="setActiveTab(index)">
                    <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-in-out group-hover:w-full"></div>
                    <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 ease-in-out" :class="{'w-full': activeTab === index}"></div>
                    
                    <a class="font-sora text-[22px] md:text-[34px] lg:text-[46px] font-bold transition-all duration-500 ease-in-out"
                        :class="activeTab === index ? 'text-black' : 'text-black/25 hover:text-black/50'">
                        {{ tab.title }}
                    </a>
                    <TextSection class="transition-all duration-500 ease-in-out"
                        :class="activeTab === index ? 'opacity-100 text-primary' : 'opacity-50 text-black/25'">
                        0{{ index + 1 }}
                    </TextSection>
                </div>
            </div>

            <!-- Accordion Mobile -->
            <div class="w-full md:w-1/2 md:hidden space-y-2">
                <div v-for="(tab, index) in unggulan" :key="index" class="accordion-item">
                    <div class="py-3 flex gap-5 items-center border-b-2 border-black/10 cursor-pointer transition-all duration-500 ease-in-out relative overflow-hidden group"
                        @click="setActiveTab(index)">
                        <!-- <div class="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 ease-in-out group-hover:w-full"></div> -->
                        <div class="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 ease-in-out" :class="{'w-full': activeTab === index}"></div>
                        
                        <a class="font-sora text-[18px] font-bold transition-all duration-500 ease-in-out"
                            :class="activeTab === index ? 'text-primary' : 'text-black/75 hover:text-black'">
                            {{ tab.title }}
                        </a>
                        <svg class="w-5 h-5 ml-auto transition-transform duration-300" 
                             :class="{ 'rotate-180': activeTab === index }" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                    
                    <Transition name="accordion">
                        <div v-if="activeTab === index" class="accordion-content pl-4">
                            <div class="py-4 space-y-4">
                                <img :src="getImageUrl(tab.image)" alt=""
                                    class="w-full h-[160px] object-cover object-top rounded-[8px] transform transition-transform duration-500 ease-out">
                                <div class="space-y-2">
                                    <p class="text-black font-semibold font-sora text-[18px]">
                                        {{ tab.title }}
                                    </p>
                                    <TextSection>
                                        <span class="[&_ol]:list-decimal [&_ul]:list-disc [&_li]:ml-6" v-html="tab.description"></span>
                                    </TextSection>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>

            <!-- Konten Tab (Desktop) -->
            <div class="w-full md:w-1/2 relative overflow-hidden hidden md:block">
                <Transition name="tab-content" mode="out-in" appear>
                    <div :key="activeTab" class="tab-content-wrapper space-y-4 md:space-y-5 lg:space-y-6">
                        <img :src="getImageUrl(unggulan[activeTab]?.image)" alt=""
                            class="w-full h-[160px] md:h-[280px] lg:h-[300px] object-cover object-[25%_25%] rounded-[8px] md:rounded-[16px] lg:rounded-[24px] transform transition-transform duration-500 ease-out">
                        <div class="space-y-2">
                            <p
                                class="text-black font-semibold font-sora text-[18px] md:text-[20px] lg:text-[24px] transform transition-transform duration-500 ease-out delay-100">
                                {{ unggulan[activeTab]?.title }}
                            </p>
                            <TextSection class="transform transition-transform duration-500 ease-out delay-200">
                                <span class="mt-5 [&_ol]:list-decimal [&_ul]:list-disc [&_li]:ml-6" v-html="unggulan[activeTab]?.description"></span>
                            </TextSection>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.5s ease;
  max-height: 1000px;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.tab-content-enter-active,
.tab-content-leave-active {
  transition: all 0.5s ease;
}

.tab-content-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.tab-content-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>