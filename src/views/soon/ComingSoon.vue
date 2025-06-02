<script lang="ts" setup>
import ButtonSection from '@/components/ButtonSection.vue';
import Navbar from '@/components/Navbar.vue';
import NavbarMobile from '@/components/NavbarMobile.vue';
import Dots from '@/assets/dots.png'
import { onMounted, ref } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
    setTimeout(() => {
        isLoaded.value = true;
    }, 100);
});
</script>

<template>
    <Navbar :position="'fixed'" :white-section-visible="false" />
    <div class="lg:hidden fixed bottom-0 z-[100]">
        <NavbarMobile />
    </div>
    <div class="w-full h-[100vh] relative">

        <div class="absolute top-1/4 right-1/4 w-8 h-8 md:w-12 md:h-12 animate-bounce-slow">
            <img :src="Dots" alt="" class="w-full h-full">
        </div>
        <div class="absolute top-1/4 left-10 md:left-36 animate-bounce-medium">
            <img :src="Dots" alt="" class="w-full h-full">
        </div>
        <div class="absolute bottom-1/4 left-10 w-5 h-5 animate-bounce-fast">
            <img :src="Dots" alt="" class="w-full h-full">
        </div>
        <div class="absolute bottom-[24%] left-1/2 md:left-1/4 w-3 h-3 animate-bounce-slow">
            <img :src="Dots" alt="" class="w-full h-full">
        </div>
        <div class="absolute bottom-[15%] right-10 md:right-1/3 w-6 h-6 animate-bounce-medium">
            <img :src="Dots" alt="" class="w-full h-full">
        </div>

        <div
            class="w-full h-full relative z-2 p-5 md:p-14 lg:p-[100px] xl:p-[160px] flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10">
            <div class="md:flex flex-col justify-center items-center hidden">

                <h2 class="text-[120px] font-bold leading-none transition-all duration-1000 ease-out"
                    :class="{ 'translate-y-[-50px] opacity-0': !isLoaded, 'translate-y-0 opacity-100': isLoaded }">OUR
                    NEW
                </h2>
                <div class="w-full flex items-center gap-4 md:gap-6 lg:gap-10">

                    <h2 class="text-[120px] font-bold leading-none transition-all duration-1000 ease-out delay-200"
                        :class="{ 'translate-x-[-50px] opacity-0': !isLoaded, 'translate-x-0 opacity-100': isLoaded }">
                        PACKAGE</h2>


                    <p class="max-w-[30%] text-[12px] md:text-[14px] lg:text-[18px] font-normal transition-all duration-1000 ease-out delay-300"
                        :class="{ 'translate-x-[50px] opacity-0': !isLoaded, 'translate-x-0 opacity-100': isLoaded }">
                        Subscribe to be the
                        first to know
                        about all the events and get a discount on your first order!</p>
                </div>

                <h2 class="text-[120px] font-bold leading-none transition-all duration-1000 ease-out delay-400"
                    :class="{ 'translate-y-[50px] opacity-0': !isLoaded, 'translate-y-0 opacity-100': isLoaded }">IS ON
                    THE WAY</h2>
            </div>

            <div class="w-full flex flex-col items-center md:hidden">

                <h2 class="text-[54px] font-bold leading-none w-full text-left transition-all duration-1000 ease-out"
                    :class="{ 'translate-y-[-30px] opacity-0': !isLoaded, 'translate-y-0 opacity-100': isLoaded }">OUR
                    NEW
                </h2>

                <h2 class="text-[54px] font-bold leading-none w-full text-right transition-all duration-1000 ease-out delay-100"
                    :class="{ 'translate-y-[-30px] opacity-0': !isLoaded, 'translate-y-0 opacity-100': isLoaded }">
                    PACKAGE
                </h2>
                <div class="w-full flex items-center gap-4 md:gap-6">

                    <h2 class="text-[54px] font-bold leading-none transition-all duration-1000 ease-out delay-200"
                        :class="{ 'translate-x-[-30px] opacity-0': !isLoaded, 'translate-x-0 opacity-100': isLoaded }">
                        IS
                        ON</h2>


                    <p class="max-w-[40%] text-[10px] md:text-[14px] lg:text-[18px] font-normal transition-all duration-1000 ease-out delay-300"
                        :class="{ 'translate-x-[30px] opacity-0': !isLoaded, 'translate-x-0 opacity-100': isLoaded }">
                        Subscribe to be the
                        first to know
                        about all the events and get a discount on your first order!</p>
                </div>


                <h2 class="text-[54px] font-bold leading-none w-full text-right transition-all duration-1000 ease-out delay-400"
                    :class="{ 'translate-y-[30px] opacity-0': !isLoaded, 'translate-y-0 opacity-100': isLoaded }">THE
                    WAY
                </h2>
            </div>

            <div class="w-full flex justify-center items-center gap-4 md:gap-6 lg:gap-8 transition-all duration-1000 ease-out delay-500"
                :class="{ 'translate-y-[50px] opacity-0': !isLoaded, 'translate-y-0 opacity-100': isLoaded }">
                <div class="w-full lg:w-[40%]">
                    <input type="text"
                        class="w-full py-3 px-6 bg-white rounded-full border border-black/25 text-xs md:text-sm"
                        placeholder="Plese enter your email address">
                </div>
                <div class="w-fit">
                    <ButtonSection>Subscribe</ButtonSection>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@keyframes bounce-slow {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }
}

@keyframes bounce-medium {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

@keyframes bounce-fast {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-bounce-slow {
    animation: bounce-slow 3s ease-in-out infinite;
}

.animate-bounce-medium {
    animation: bounce-medium 2s ease-in-out infinite;
}

.animate-bounce-fast {
    animation: bounce-fast 1.5s ease-in-out infinite;
}
</style>