<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import ButtonSection from '../ButtonSection.vue';
import TextBody from '../TextBody.vue';
import TitleSection from '../TitleSection.vue';
import HeroVideoDialog from './HeroVideoDialog.vue';
import { Play, X } from 'lucide-vue-next';

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const isVideoOpen = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value = true;
                }
            });
        },
        {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        }
    );

    if (sectionRef.value) {
        observer.observe(sectionRef.value);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>

<template>
    <div ref="sectionRef"
        class="py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[64px] lg:px-[128px] flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-12 mb-0 md:mb-20 xl:mb-20">
        <!-- tablet & dekstop -->
        <div class="w-full h-[490px] md:w-[75%] xl:w-1/2 relative hidden md:block">
            <div :class="['absolute top-0 z-10 w-[60%] h-[460px]', { 'img-reveal-1': isVisible }]">
                <img src="https://plus.unsplash.com/premium_photo-1674418805914-9d92336a3ea0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
                    class="w-full h-full object-cover rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
            </div>
            <div
                :class="['absolute play-box top-20 right-10 z-10 w-[60%] h-full rounded-[8px] md:rounded-[16px] lg:rounded-[24px] p-4 bg-[#F0F7FD]', { 'img-reveal-2': isVisible }]">
                <div :class="['w-full h-[460px]', { 'img-reveal-2': isVisible }]">
                    <div class="relative w-full h-full">
                        <div class="group relative cursor-pointer" @click="isVideoOpen = true">
                            <img
                                src="https://images.unsplash.com/photo-1545074439-5b5078c5f149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Jatidiri"
                                class="w-full h-[460px] object-cover rounded-[8px] md:rounded-[16px] lg:rounded-[24px] shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
                            />
                            <div class="absolute z-20 inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                                <div class="flex size-28 items-center justify-center rounded-full bg-black/10 backdrop-blur-md">
                                    <div
                                        class="relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-black/30 to-black shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]"
                                    >
                                        <Play
                                            class="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                                            :style="{
                                                filter:
                                                    'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))'
                                            }"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- mobile -->
        <div class="w-full h-full md:hidden">
            <HeroVideoDialog :size="'w-full h-[40vh] rounded-[8px] md:rounded-[16px] lg:rounded-[24px]'"
                :video-src="`https://www.youtube.com/embed/CtVbj_Nd7Zs?si=CtVVJuV35gRQte-y`"
                :thumbnail-src="'https://images.unsplash.com/photo-1545074439-5b5078c5f149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
                :thumbnail-alt="`Jatidiri`" animation-style="from-center" />
        </div>

        <div class="w-full md:w-1/2 space-y-4 md:space-y-5 lg:space-y-6">
            <div class=" bg-primary/10 w-fit py-2 px-5 rounded-full">
                <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">About Us</h6>
            </div>
            <TitleSection class="text-primary" :text="'Jatidiri.App'"></TitleSection>

            <div class="space-y-4 md:space-y-6 lg:space-y-8">
                <TextBody>Jatidiri.app adalah platform revolusioner yang menggabungkan teknologi mutakhir dengan layanan
                    psikologi profesional untuk membantu individu, keluarga, institusi pendidikan, dan perusahaan
                    memahami potensi diri, meningkatkan kualitas hidup, dan membangun sumber daya manusia yang berdaya
                    saing.
                </TextBody>
                <p class="text-[14px] md:text-[18px] lg:text-[20px] font-bold font-sora pb-4 md:pb-5 lg:pb-6">Your real personality identity
                    is not an
                    option, it is the foundation for your happiness and health.</p>
            </div>

            <a href="https://cek.jatidiri.app/login" target="_blank">
                <ButtonSection>Check Now</ButtonSection>
            </a>
        </div>

        <!-- Custom Popup for Tablet & Desktop -->
        <Transition name="fade">
            <div
                v-if="isVideoOpen"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
                @click="isVideoOpen = false"
            >
                <div
                    class="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
                    @click.stop
                >
                    <button
                        class="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black"
                        @click="isVideoOpen = false"
                    >
                        <X class="size-5" />
                    </button>
                    <div class="relative isolate z-[1] size-full overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px] border-2 border-white">
                        <iframe
                            src="https://www.youtube.com/embed/CtVbj_Nd7Zs?si=CtVVJuV35gRQte-y"
                            class="size-full rounded-[16px] md:rounded-[24px] lg:rounded-[32px]"
                            allowfullscreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        />
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.play-box {
    clip-path: inset(50% 0% 50% 0%);
    transform: scale(0.8);
}

.img-reveal-1 {
    animation: revealZoomFromCenter1 1.2s ease-out forwards;
}

.img-reveal-2 {
    animation: revealZoomFromCenter2 1.2s ease-out forwards;
    animation-delay: 0.2s;
}

@keyframes revealZoomFromCenter1 {
    0% {
        clip-path: inset(50% 0% 50% 0%);
        transform: scale(0.8);
    }

    100% {
        clip-path: inset(0% 0% 0% 0%);
        transform: scale(1);
    }
}

@keyframes revealZoomFromCenter2 {
    0% {
        clip-path: inset(50% 0% 50% 0%);
        transform: scale(0.8);
    }

    100% {
        clip-path: inset(0% 0% 0% 0%);
        transform: scale(1);
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>