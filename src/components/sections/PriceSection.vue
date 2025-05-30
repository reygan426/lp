<script setup lang="ts">
import ButtonSection from '../ButtonSection.vue';
import TextBody from '../TextBody.vue';
import TextSection from '../TextSection.vue';
import TitleSection from '../TitleSection.vue';

</script>

<template>
    <div
        class="py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[120px] lg:px-[120px] space-y-8 md:space-y-10 lg:space-y-12 w-full h-full">
        <div
            class="w-full md:w-1/2 mx-auto flex flex-col justify-center items-center text-center gap-4 md:gap-5 lg:gap-6">
            <div class=" bg-primary/10 w-fit py-2 px-5 rounded-full">
                <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">Price</h6>
            </div>
            <TitleSection :text="'Investasi Jatidiri Sekolah'"></TitleSection>

            <div class="space-y-4 md:space-y-6 lg:space-y-8">
                <TextSection>Customers trust Chainex for secure automation and smart analytics. See how AI enhances
                    their blockchain experience
                </TextSection>
            </div>
        </div>

        <div class="w-full h-full grid grid-cols-1 md:grid-cols-3 items-end gap-4 md:gap-6 lg:gap-8">
            <div
                class="w-full h-full md:h-[85%] bg-white p-8 rounded-[8px] md:rounded-[16px] lg:rounded-[24px] space-y-8 md:space-y-10 lg:space-y-12 hover:-translate-y-2 transition duration-500">
                <div class="space-y-4 md:space-y-5 lg:space-y-6">
                    <h6 class="text-[18px] md:text-[20px] lg:text-[24px] font-medium">School Starter</h6>
                    <!-- <TextBody>Jatidiri Sekolah</TextBody> -->
                    <p class="font-medium font-sora text-[28px] md:text-[32px] lg:text-[36px] flex items-center gap-1">
                        35k <span class="text-[10px] md:text-[12px] lg:text-[16px]"> / siswa</span></p>
                </div>

                <div class="w-full flex justify-center items-center">
                    <a href="https://cek.jatidiri.app/login" target="_blank" class="w-full">
                        <ButtonSection :class="'w-full flex justify-center items-center'">Check Now</ButtonSection>
                    </a>
                </div>

                <div class="space-y-2 md:space-y-4">
                    <div class="w-full flex gap-3 items-center">
                        <div
                            class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                            <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                <path fill="currentColor"
                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </div>
                        <TextBody>Cek Gaya Belajar</TextBody>
                    </div>

                    <div class="w-full flex gap-3 items-center">
                        <div
                            class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                            <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                <path fill="currentColor"
                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </div>
                        <TextBody>Cek Kecanduan Gadget</TextBody>
                    </div>

                    <div class="w-full flex gap-3 items-center">
                        <div
                            class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                            <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                <path fill="currentColor"
                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </div>
                        <TextBody>Akun Siswa</TextBody>
                    </div>
                </div>
            </div>

            <!-- Full -->
            <div class="w-full h-full relative group">
                <div
                    class="absolute top-0 right-0 z-10 py-[10px] px-3 bg-primary rounded-full group-hover:-translate-y-2 transition duration-500">
                    <TextSection class="text-white font-sora">Best Value</TextSection>
                </div>
                <div class="w-full h-full price-container">
                    <svg :style="{ visibility: 'hidden', position: 'absolute' }" width="0" height="0"
                        xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                            </filter>
                        </defs>
                    </svg>
                    <div
                        class="w-full h-full bg-white p-4 lg:p-8 rounded-[8px] md:rounded-[16px] lg:rounded-[24px] space-y-8 md:space-y-10 lg:space-y-12 group-hover:-translate-y-2 transition duration-500 price-box">

                        <div class="space-y-4 md:space-y-5 lg:space-y-6 mt-4 md:mt-10">
                            <h6 class="text-[18px] md:text-[20px] lg:text-[24px] font-medium">School Ultimate</h6>
                            <!-- <TextBody>Create quality visual assets with quality, speed, and style consistency.
                            </TextBody> -->
                            <p
                                class="font-medium font-sora text-[28px] md:text-[32px] lg:text-[36px] flex items-center gap-1">
                                245k <span class="text-[10px] md:text-[12px] lg:text-[16px]"> / siswa</span></p>
                        </div>

                        <div class="w-full flex justify-center items-center">
                            <a href="https://cek.jatidiri.app/login" target="_blank" class="w-full">
                                <ButtonSection :class="'w-full flex justify-center items-center'">Check Now
                                </ButtonSection>
                            </a>
                        </div>

                        <div class="space-y-2 md:space-y-4">
                            <div class="w-full flex gap-3 items-center">
                                <div
                                    class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                                    <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                        <path fill="currentColor"
                                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                </div>
                                <TextBody>Tes pemetaan talent dan karakter</TextBody>
                            </div>

                            <div class="w-full flex gap-3 items-center">
                                <div
                                    class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                                    <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                        <path fill="currentColor"
                                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                </div>
                                <TextBody>Tes IQ</TextBody>
                            </div>

                            <div class="w-full flex gap-3 items-center">
                                <div
                                    class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                                    <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                        <path fill="currentColor"
                                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                </div>
                                <TextBody>Tes Gaya Belajar</TextBody>
                            </div>

                            <div class="w-full flex gap-3 items-center">
                                <div
                                    class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                                    <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                        <path fill="currentColor"
                                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                </div>
                                <TextBody>Tes kecanduan gadget</TextBody>
                            </div>

                            <div class="w-full flex gap-3 items-center">
                                <div
                                    class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                                    <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                        <path fill="currentColor"
                                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                </div>
                                <TextBody>Tes Kebahagiaan</TextBody>
                            </div>

                            <div class="w-full flex gap-3 items-center">
                                <div
                                    class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                                    <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                        <path fill="currentColor"
                                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                </div>
                                <TextBody>Akun Private per Siswa</TextBody>
                            </div>
                            
                            <div class="w-full flex gap-3 items-center">
                                <div
                                    class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                                    <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                        <path fill="currentColor"
                                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                </div>
                                <TextBody>Executive Dashboard khusus bagi BK dan Kepala Sekolah</TextBody>
                            </div>
                            
                            <div class="w-full flex gap-3 items-center">
                                <div
                                    class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                                    <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                        <path fill="currentColor"
                                            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                </div>
                                <TextBody>Akses layanan HalloPsy 10 sesi (minimal tes 200 siswa)</TextBody>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="w-full h-full md:h-[85%] bg-white p-8 rounded-[8px] md:rounded-[16px] lg:rounded-[24px] space-y-8 md:space-y-10 lg:space-y-12 hover:-translate-y-2 transition duration-500">
                <div class="space-y-4 md:space-y-5 lg:space-y-6">
                    <h6 class="text-[18px] md:text-[20px] lg:text-[24px] font-medium">School Advances</h6>
                    <!-- <TextBody>Create quality visual assets with quality, speed, and style consistency.</TextBody> -->
                    <p class="font-medium font-sora text-[28px] md:text-[32px] lg:text-[36px] flex items-center gap-1">
                        140k <span class="text-[10px] md:text-[12px] lg:text-[16px]"> / siswa</span></p>
                </div>

                <div class="w-full flex justify-center items-center">
                    <a href="https://cek.jatidiri.app/login" target="_blank" class="w-full">
                        <ButtonSection :class="'w-full flex justify-center items-center'">Check Now</ButtonSection>
                    </a>
                </div>

                <div class="space-y-2 md:space-y-4">
                    <div class="w-full flex gap-3 items-center">
                        <div
                            class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                            <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                <path fill="currentColor"
                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </div>
                        <TextBody>Tes pemetaan talent dan karakter</TextBody>
                    </div>

                    <div class="w-full flex gap-3 items-center">
                        <div
                            class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                            <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                <path fill="currentColor"
                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </div>
                        <TextBody>Tes IQ</TextBody>
                    </div>

                    <div class="w-full flex gap-3 items-center">
                        <div
                            class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                            <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                <path fill="currentColor"
                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </div>
                        <TextBody>Tes Gaya Belajar</TextBody>
                    </div>

                    <div class="w-full flex gap-3 items-center">
                        <div
                            class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                            <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                <path fill="currentColor"
                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </div>
                        <TextBody>Tes kecanduan gadget</TextBody>
                    </div>

                    <div class="w-full flex gap-3 items-center">
                        <div
                            class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                            <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                <path fill="currentColor"
                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </div>
                        <TextBody>Akun Siswa</TextBody>
                    </div>

                    <div class="w-full flex gap-3 items-center">
                        <div
                            class="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#F6F6F6] p-1 flex justify-center items-center">
                            <svg viewBox="0 0 24 24" class="w-4 h-4 text-black">
                                <path fill="currentColor"
                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                        </div>
                        <TextBody>Akses layanan HalloPsy 10 sesi (minimal tes 200 siswa)</TextBody>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.price-box {
    clip-path: polygon(78% 0%, 78% 12%, 100% 12%, 100% 100%, 0% 100%, 0% 0%);
}

.price-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

@media (min-width: 320px) {
    .price-box {
        clip-path: polygon(64% 0%, 64% 12%, 100% 12%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 360px) {
    .price-box {
        clip-path: polygon(66% 0%, 66% 12%, 100% 12%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 440px) {
    .price-box {
        clip-path: polygon(74% 0%, 74% 12%, 100% 12%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 460px) {
    .price-box {
        clip-path: polygon(74% 0%, 74% 12%, 100% 12%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 560px) {
    .price-box {
        clip-path: polygon(80% 0%, 80% 12%, 100% 12%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 680px) {
    .price-box {
        clip-path: polygon(82% 0%, 82% 12%, 100% 12%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 768px) {
    .price-box {
        clip-path: polygon(78% 0%, 78% 12%, 100% 12%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 868px) {
    .price-box {
        clip-path: polygon(52% 0%, 52% 8%, 100% 8%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 968px) {
    .price-box {
        clip-path: polygon(48% 0%, 48% 12%, 100% 12%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1024px) {
    .price-box {
        clip-path: polygon(48% 0%, 48% 6%, 100% 6%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1124px) {
    .price-box {
        clip-path: polygon(48% 0%, 48% 8%, 100% 8%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1224px) {
    .price-box {
        clip-path: polygon(50% 0%, 50% 8%, 100% 8%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1280px) {
    .price-box {
        clip-path: polygon(54% 0%, 54% 10%, 100% 10%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1400px) {
    .price-box {
        clip-path: polygon(58% 0%, 58% 10%, 100% 10%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1500px) {
    .price-box {
        clip-path: polygon(58% 0%, 58% 10%, 100% 10%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1600px) {
    .price-box {
        clip-path: polygon(64% 0%, 64% 10%, 100% 10%, 100% 100%, 0% 100%, 0% 0%);
    }
}

@media (min-width: 1700px) {
    .price-box {
        clip-path: polygon(66% 0%, 66% 10%, 100% 10%, 100% 100%, 0% 100%, 0% 0%);
    }
}
</style>